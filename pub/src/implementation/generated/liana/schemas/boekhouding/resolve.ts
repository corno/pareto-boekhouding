
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as _pdev from "pareto-core-dev"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/resolve"

export const Fiscaal: t_signatures.Fiscaal = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Balans_Hoofdcategorieen = _p_cc(
            $['Balans Hoofdcategorieen'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Zijde = _p_cc(
                            $['Zijde'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Subcategorieen = _p_cc(
                            $['Subcategorieen'],
                            ($) => _p.dictionary.resolve(
                                $,
                                ($, id, $a, $c) => null
                            )
                        )
                        return {
                            'Zijde': prop_Zijde,
                            'Subcategorieen': prop_Subcategorieen,
                        }
                    }
                )
            )
        )
        
        const prop_Resultaat_Hoofdcategorieen = _p_cc(
            $['Resultaat Hoofdcategorieen'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Zijde = _p_cc(
                            $['Zijde'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Subcategorieen = _p_cc(
                            $['Subcategorieen'],
                            ($) => _p.dictionary.resolve(
                                $,
                                ($, id, $a, $c) => null
                            )
                        )
                        return {
                            'Zijde': prop_Zijde,
                            'Subcategorieen': prop_Subcategorieen,
                        }
                    }
                )
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
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Te_corrigeren_promillage = _p_cc(
                            $['Te corrigeren promillage'],
                            ($) => $
                        )
                        return {
                            'Te corrigeren promillage': prop_Te_corrigeren_promillage,
                        }
                    }
                )
            )
        )
        
        const prop_Balans = _p_cc(
            $['Balans'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Zijde = _p_cc(
                            $['Zijde'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Subcategorieen = _p_cc(
                            $['Subcategorieen'],
                            ($) => _p.dictionary.resolve(
                                $,
                                ($, id, $a, $c) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Hoofdcategorie_fiscus = _p_cc(
                                            $['Hoofdcategorie fiscus'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        
                                        const prop_Subcategorie_fiscus = _p_cc(
                                            $['Subcategorie fiscus'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        return {
                                            'Hoofdcategorie fiscus': prop_Hoofdcategorie_fiscus,
                                            'Subcategorie fiscus': prop_Subcategorie_fiscus,
                                        }
                                    }
                                )
                            )
                        )
                        return {
                            'Zijde': prop_Zijde,
                            'Subcategorieen': prop_Subcategorieen,
                        }
                    }
                )
            )
        )
        
        const prop_Resultaat = _p_cc(
            $['Resultaat'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Zijde = _p_cc(
                            $['Zijde'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Subcategorieen = _p_cc(
                            $['Subcategorieen'],
                            ($) => _p.dictionary.resolve(
                                $,
                                ($, id, $a, $c) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Hoofdcategorie_fiscus = _p_cc(
                                            $['Hoofdcategorie fiscus'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        
                                        const prop_Subcategorie_fiscus = _p_cc(
                                            $['Subcategorie fiscus'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        return {
                                            'Hoofdcategorie fiscus': prop_Hoofdcategorie_fiscus,
                                            'Subcategorie fiscus': prop_Subcategorie_fiscus,
                                        }
                                    }
                                )
                            )
                        )
                        return {
                            'Zijde': prop_Zijde,
                            'Subcategorieen': prop_Subcategorieen,
                        }
                    }
                )
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
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_BTW$mi_heffing = _p_cc(
                            $['BTW-heffing'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        return {
                            'BTW-heffing': prop_BTW$mi_heffing,
                        }
                    }
                )
            )
        )
        
        const prop_Grootboekrekeningen = _p_cc(
            $['Grootboekrekeningen'],
            ($) => _p.group.resolve(
                () => {
                    
                    const prop_Balans = _p_cc(
                        $['Balans'],
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => _p.group.resolve(
                                () => {
                                    
                                    const prop_Hoofdcategorie = _p_cc(
                                        $['Hoofdcategorie'],
                                        ($) => _p_unreachable_code_path(
                                        )
                                    )
                                    
                                    const prop_Subcategorie = _p_cc(
                                        $['Subcategorie'],
                                        ($) => _p_unreachable_code_path(
                                        )
                                    )
                                    
                                    const prop_Zijde = _p_cc(
                                        $['Zijde'],
                                        ($) => _p_unreachable_code_path(
                                        )
                                    )
                                    return {
                                        'Hoofdcategorie': prop_Hoofdcategorie,
                                        'Subcategorie': prop_Subcategorie,
                                        'Zijde': prop_Zijde,
                                    }
                                }
                            )
                        )
                    )
                    
                    const prop_Resultaat = _p_cc(
                        $['Resultaat'],
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => _p.group.resolve(
                                () => {
                                    
                                    const prop_Hoofdcategorie = _p_cc(
                                        $['Hoofdcategorie'],
                                        ($) => _p_unreachable_code_path(
                                        )
                                    )
                                    
                                    const prop_Subcategorie = _p_cc(
                                        $['Subcategorie'],
                                        ($) => _p_unreachable_code_path(
                                        )
                                    )
                                    
                                    const prop_Zijde = _p_cc(
                                        $['Zijde'],
                                        ($) => _p_unreachable_code_path(
                                        )
                                    )
                                    return {
                                        'Hoofdcategorie': prop_Hoofdcategorie,
                                        'Subcategorie': prop_Subcategorie,
                                        'Zijde': prop_Zijde,
                                    }
                                }
                            )
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
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => null
                        )
                    )
                    
                    const prop_Informeel = _p_cc(
                        $['Informeel'],
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => null
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
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Volledige_naam = _p_cc(
                            $['Volledige naam'],
                            ($) => $
                        )
                        
                        const prop_Wachtwoord = _p_cc(
                            $['Wachtwoord'],
                            ($) => $
                        )
                        return {
                            'Volledige naam': prop_Volledige_naam,
                            'Wachtwoord': prop_Wachtwoord,
                        }
                    }
                )
            )
        )
        
        const prop_Klanten = _p_cc(
            $['Klanten'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Licentieovereenkomsten = _p_cc(
                            $['Licentieovereenkomsten'],
                            ($) => _p.dictionary.resolve(
                                $,
                                ($, id, $a, $c) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Periodes = _p_cc(
                                            $['Periodes'],
                                            ($) => _p.dictionary.resolve(
                                                $,
                                                ($, id, $a, $c) => _p.group.resolve(
                                                    () => {
                                                        
                                                        const prop_Bedrag = _p_cc(
                                                            $['Bedrag'],
                                                            ($) => $
                                                        )
                                                        return {
                                                            'Bedrag': prop_Bedrag,
                                                        }
                                                    }
                                                )
                                            )
                                        )
                                        return {
                                            'Periodes': prop_Periodes,
                                        }
                                    }
                                )
                            )
                        )
                        
                        const prop_Projecten = _p_cc(
                            $['Projecten'],
                            ($) => _p.dictionary.resolve(
                                $,
                                ($, id, $a, $c) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Offertes = _p_cc(
                                            $['Offertes'],
                                            ($) => _p.dictionary.resolve(
                                                $,
                                                ($, id, $a, $c) => _p.group.resolve(
                                                    () => {
                                                        
                                                        const prop_Opbrengsten = _p_cc(
                                                            $['Opbrengsten'],
                                                            ($) => _p.dictionary.resolve(
                                                                $,
                                                                ($, id, $a, $c) => _p.group.resolve(
                                                                    () => {
                                                                        
                                                                        const prop_Type = _p_cc(
                                                                            $['Type'],
                                                                            ($) => _p_unreachable_code_path(
                                                                            )
                                                                        )
                                                                        return {
                                                                            'Type': prop_Type,
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                        )
                                                        return {
                                                            'Opbrengsten': prop_Opbrengsten,
                                                        }
                                                    }
                                                )
                                            )
                                        )
                                        return {
                                            'Offertes': prop_Offertes,
                                        }
                                    }
                                )
                            )
                        )
                        return {
                            'Licentieovereenkomsten': prop_Licentieovereenkomsten,
                            'Projecten': prop_Projecten,
                        }
                    }
                )
            )
        )
        
        const prop_Leveranciers = _p_cc(
            $['Leveranciers'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => null
            )
        )
        
        const prop_Medewerkers = _p_cc(
            $['Medewerkers'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => null
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
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Type = _p_cc(
                            $['Type'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        return {
                            'Type': prop_Type,
                        }
                    }
                )
            )
        )
        
        const prop_Resultaat = _p_cc(
            $['Resultaat'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => null
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
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => null
                        )
                    )
                    
                    const prop_BTW_periodes = _p_cc(
                        $['BTW periodes'],
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => _p.group.resolve(
                                () => {
                                    
                                    const prop_1$pe__BTW$mi_categorieen = _p_cc(
                                        $['1. BTW-categorieen'],
                                        ($) => _p.dictionary.resolve(
                                            $,
                                            ($, id, $a, $c) => null
                                        )
                                    )
                                    
                                    const prop_Documenten = _p_cc(
                                        $['Documenten'],
                                        ($) => _p.dictionary.resolve(
                                            $,
                                            ($, id, $a, $c) => _p.group.resolve(
                                                () => {
                                                    
                                                    const prop_Bestand = _p_cc(
                                                        $['Bestand'],
                                                        ($) => $
                                                    )
                                                    return {
                                                        'Bestand': prop_Bestand,
                                                    }
                                                }
                                            )
                                        )
                                    )
                                    
                                    const prop_Omschrijving = _p_cc(
                                        $['Omschrijving'],
                                        ($) => $
                                    )
                                    
                                    const prop_Status = _p_cc(
                                        $['Status'],
                                        ($) => _p_unreachable_code_path(
                                        )
                                    )
                                    return {
                                        '1. BTW-categorieen': prop_1$pe__BTW$mi_categorieen,
                                        'Documenten': prop_Documenten,
                                        'Omschrijving': prop_Omschrijving,
                                        'Status': prop_Status,
                                    }
                                }
                            )
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
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => _p.group.resolve(
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
                        )
                    )
                    
                    const prop_Bankrekeningen = _p_cc(
                        $['Bankrekeningen'],
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => _p.group.resolve(
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
                                    
                                    const prop_Mutaties = _p_cc(
                                        $['Mutaties'],
                                        ($) => _p.dictionary.resolve(
                                            $,
                                            ($, id, $a, $c) => _p.group.resolve(
                                                () => {
                                                    
                                                    const prop_Bedrag = _p_cc(
                                                        $['Bedrag'],
                                                        ($) => $
                                                    )
                                                    
                                                    const prop_Datum = _p_cc(
                                                        $['Datum'],
                                                        ($) => $
                                                    )
                                                    
                                                    const prop_Omschrijving = _p_cc(
                                                        $['Omschrijving'],
                                                        ($) => $
                                                    )
                                                    return {
                                                        'Bedrag': prop_Bedrag,
                                                        'Datum': prop_Datum,
                                                        'Omschrijving': prop_Omschrijving,
                                                    }
                                                }
                                            )
                                        )
                                    )
                                    return {
                                        'Beginsaldo': prop_Beginsaldo,
                                        'Grootboekrekening': prop_Grootboekrekening,
                                        'Nieuw': prop_Nieuw,
                                        'Mutaties': prop_Mutaties,
                                    }
                                }
                            )
                        )
                    )
                    
                    const prop_Overige_balans_items = _p_cc(
                        $['Overige balans items'],
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => Overige_balans_item(
                                $,
                                ($) => abort(
                                    $
                                ),
                                $l,
                                $p
                            )
                        )
                    )
                    
                    const prop_Verrekenposten = _p_cc(
                        $['Verrekenposten'],
                        ($) => _p.dictionary.resolve(
                            $,
                            ($, id, $a, $c) => null
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
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Afhandeling = _p_cc(
                            $['Afhandeling'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_BTW$mi_regime = _p_cc(
                            $['BTW-regime'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Brondocument = _p_cc(
                            $['Brondocument'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Datum = _p_cc(
                            $['Datum'],
                            ($) => $
                        )
                        
                        const prop_Regels = _p_cc(
                            $['Regels'],
                            ($) => _p.dictionary.resolve(
                                $,
                                ($, id, $a, $c) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Bedrag = _p_cc(
                                            $['Bedrag'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        
                                        const prop_Omschrijving = _p_cc(
                                            $['Omschrijving'],
                                            ($) => $
                                        )
                                        
                                        const prop_Type = _p_cc(
                                            $['Type'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        return {
                                            'Bedrag': prop_Bedrag,
                                            'Omschrijving': prop_Omschrijving,
                                            'Type': prop_Type,
                                        }
                                    }
                                )
                            )
                        )
                        
                        const prop_Type = _p_cc(
                            $['Type'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        return {
                            'Afhandeling': prop_Afhandeling,
                            'BTW-regime': prop_BTW$mi_regime,
                            'Brondocument': prop_Brondocument,
                            'Datum': prop_Datum,
                            'Regels': prop_Regels,
                            'Type': prop_Type,
                        }
                    }
                )
            )
        )
        
        const prop_Verkopen = _p_cc(
            $['Verkopen'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.group.resolve(
                    () => {
                        
                        const prop_Datum = _p_cc(
                            $['Datum'],
                            ($) => $
                        )
                        
                        const prop_Betalingstermijn = _p_cc(
                            $['Betalingstermijn'],
                            ($) => $
                        )
                        
                        const prop_BTW$mi_periode = _p_cc(
                            $['BTW-periode'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Brondocument = _p_cc(
                            $['Brondocument'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Debiteur = _p_cc(
                            $['Debiteur'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Contracttype = _p_cc(
                            $['Contracttype'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Afhandeling = _p_cc(
                            $['Afhandeling'],
                            ($) => _p_unreachable_code_path(
                            )
                        )
                        
                        const prop_Regels = _p_cc(
                            $['Regels'],
                            ($) => _p.dictionary.resolve(
                                $,
                                ($, id, $a, $c) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_BTW$mi_regime = _p_cc(
                                            $['BTW-regime'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        
                                        const prop_Bedrag_exclusief_BTW = _p_cc(
                                            $['Bedrag exclusief BTW'],
                                            ($) => $
                                        )
                                        
                                        const prop_Contracttype = _p_cc(
                                            $['Contracttype'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        
                                        const prop_Omschrijving = _p_cc(
                                            $['Omschrijving'],
                                            ($) => $
                                        )
                                        
                                        const prop_Type = _p_cc(
                                            $['Type'],
                                            ($) => _p_unreachable_code_path(
                                            )
                                        )
                                        return {
                                            'BTW-regime': prop_BTW$mi_regime,
                                            'Bedrag exclusief BTW': prop_Bedrag_exclusief_BTW,
                                            'Contracttype': prop_Contracttype,
                                            'Omschrijving': prop_Omschrijving,
                                            'Type': prop_Type,
                                        }
                                    }
                                )
                            )
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
                    }
                )
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
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.dictionary.resolve(
                    $,
                    ($, id, $a, $c) => _p.group.resolve(
                        () => {
                            
                            const prop_Bedrag = _p_cc(
                                $['Bedrag'],
                                ($) => $
                            )
                            
                            const prop_Afhandeling = _p_cc(
                                $['Afhandeling'],
                                ($) => _p_unreachable_code_path(
                                )
                            )
                            return {
                                'Bedrag': prop_Bedrag,
                                'Afhandeling': prop_Afhandeling,
                            }
                        }
                    )
                )
            )
        )
        
        const prop_Bankrekening_Mutatie_Verwerkingen = _p_cc(
            $['Bankrekening Mutatie Verwerkingen'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.dictionary.resolve(
                    $,
                    ($, id, $a, $c) => _p_unreachable_code_path(
                    )
                )
            )
        )
        
        const prop_Memoriaal_boekingen = _p_cc(
            $['Memoriaal boekingen'],
            ($) => _p.dictionary.resolve(
                $,
                ($, id, $a, $c) => _p.dictionary.resolve(
                    $,
                    ($, id, $a, $c) => _p.group.resolve(
                        () => {
                            
                            const prop_Bedrag = _p_cc(
                                $['Bedrag'],
                                ($) => $
                            )
                            
                            const prop_Datum = _p_cc(
                                $['Datum'],
                                ($) => $
                            )
                            
                            const prop_Grootboekrekening = _p_cc(
                                $['Grootboekrekening'],
                                ($) => _p_unreachable_code_path(
                                )
                            )
                            
                            const prop_Omschrijving = _p_cc(
                                $['Omschrijving'],
                                ($) => $
                            )
                            return {
                                'Bedrag': prop_Bedrag,
                                'Datum': prop_Datum,
                                'Grootboekrekening': prop_Grootboekrekening,
                                'Omschrijving': prop_Omschrijving,
                            }
                        }
                    )
                )
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

export const Jaren: t_signatures.Jaren = ($, abort, $l, $p) => _p.dictionary.resolve(
    $,
    ($, id, $a, $c) => _p.group.resolve(
        () => {
            
            const prop_Afgesloten = _p_cc(
                $['Afgesloten'],
                ($) => _p_unreachable_code_path(
                )
            )
            
            const prop_Startdatum_boekjaar = _p_cc(
                $['Startdatum boekjaar'],
                ($) => $
            )
            
            const prop_Grootboekrekeningen = _p_cc(
                $['Grootboekrekeningen'],
                ($) => Grootboekrekeningen(
                    $,
                    ($) => abort(
                        $
                    ),
                    null,
                    null
                )
            )
            
            const prop_Eerste_boekjaar = _p_cc(
                $['Eerste boekjaar'],
                ($) => Eerste_boekjaar(
                    $,
                    ($) => abort(
                        $
                    ),
                    {
                        'Jaren': _pdev.implement_me(
                            'selection'
                        ),
                    },
                    null
                )
            )
            
            const prop_Jaarbeheer = _p_cc(
                $['Jaarbeheer'],
                ($) => Jaarbeheer(
                    $,
                    ($) => abort(
                        $
                    ),
                    {
                        'Jaren': _pdev.implement_me(
                            'selection'
                        ),
                    },
                    {
                        'Grootboekrekeningen': _pdev.implement_me(
                            "required"
                        ),
                        'Eerste boekjaar': _pdev.implement_me(
                            "required"
                        ),
                    }
                )
            )
            
            const prop_Handelstransacties = _p_cc(
                $['Handelstransacties'],
                ($) => Handelstransacties(
                    $,
                    ($) => abort(
                        $
                    ),
                    null,
                    {
                        'Beheer': $p['Beheer'],
                        'Grootboekrekeningen': _pdev.implement_me(
                            "required"
                        ),
                        'Jaarbeheer': _pdev.implement_me(
                            "required"
                        ),
                    }
                )
            )
            
            const prop_Mutaties = _p_cc(
                $['Mutaties'],
                ($) => Mutaties(
                    $,
                    ($) => abort(
                        $
                    ),
                    {
                        'Jaren': _pdev.implement_me(
                            'selection'
                        ),
                    },
                    {
                        'Beheer': $p['Beheer'],
                        'Grootboekrekeningen': _pdev.implement_me(
                            "required"
                        ),
                        'Jaarbeheer': _pdev.implement_me(
                            "required"
                        ),
                        'Handelstransacties': _pdev.implement_me(
                            "required"
                        ),
                    }
                )
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
        }
    )
)

export const Root: t_signatures.Root = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Fiscaal = _p_cc(
            $['Fiscaal'],
            ($) => Fiscaal(
                $,
                ($) => abort(
                    $
                ),
                null,
                null
            )
        )
        
        const prop_Categorieen = _p_cc(
            $['Categorieen'],
            ($) => Grootboek_Categorieen(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'Fiscaal': _pdev.implement_me(
                        "required"
                    ),
                }
            )
        )
        
        const prop_Beheer = _p_cc(
            $['Beheer'],
            ($) => Beheer(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'Grootboek Categorieen': _pdev.implement_me(
                        "required"
                    ),
                }
            )
        )
        
        const prop_Jaren = _p_cc(
            $['Jaren'],
            ($) => Jaren(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'Beheer': _pdev.implement_me(
                        "required"
                    ),
                }
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
