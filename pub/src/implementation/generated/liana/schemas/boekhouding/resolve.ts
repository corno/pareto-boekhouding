
import * as _p from "pareto-core/dist/refiner"

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
                $['l dictionary'],
                ($, id, $a, $c): t_out.Fiscaal.Balans_Hoofdcategorieen.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_Zijde = _p_cc(
                                $['Zijde'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde => {
                                        switch ($[0]) {
                                            case 'Activa':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Activa', null]
                                                )
                                            case 'Passiva':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Passiva', null]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Subcategorieen = _p_cc(
                                $['Subcategorieen'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen.D => _p_cc(
                                        $['l entry'],
                                        ($) => null
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
        )
        
        const prop_Resultaat_Hoofdcategorieen = _p_cc(
            $['Resultaat Hoofdcategorieen'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Fiscaal.Resultaat_Hoofdcategorieen.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_Zijde = _p_cc(
                                $['Zijde'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde => {
                                        switch ($[0]) {
                                            case 'Kosten':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Kosten', null]
                                                )
                                            case 'Opbrengsten':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Opbrengsten', null]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Subcategorieen = _p_cc(
                                $['Subcategorieen'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen.D => _p_cc(
                                        $['l entry'],
                                        ($) => null
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
                $['l dictionary'],
                ($, id, $a, $c): t_out.Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
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
        )
        
        const prop_Balans = _p_cc(
            $['Balans'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Grootboek_Categorieen.Balans.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_Zijde = _p_cc(
                                $['Zijde'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Grootboek_Categorieen.Balans.D.Zijde => {
                                        switch ($[0]) {
                                            case 'Activa':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Activa', null]
                                                )
                                            case 'Passiva':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Passiva', null]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Subcategorieen = _p_cc(
                                $['Subcategorieen'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Grootboek_Categorieen.Balans.D.Subcategorieen.D => _p_cc(
                                        $['l entry'],
                                        ($) => _p.group.resolve(
                                            () => {
                                                
                                                const prop_Hoofdcategorie_fiscus = _p_cc(
                                                    $['Hoofdcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l id'],
                                                    })
                                                )
                                                
                                                const prop_Subcategorie_fiscus = _p_cc(
                                                    $['Subcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l id'],
                                                    })
                                                )
                                                return {
                                                    'Hoofdcategorie fiscus': prop_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': prop_Subcategorie_fiscus,
                                                }
                                            }
                                        )
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
        )
        
        const prop_Resultaat = _p_cc(
            $['Resultaat'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Grootboek_Categorieen.Resultaat.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_Zijde = _p_cc(
                                $['Zijde'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Grootboek_Categorieen.Resultaat.D.Zijde => {
                                        switch ($[0]) {
                                            case 'Kosten':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Kosten', null]
                                                )
                                            case 'Opbrengsten':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Opbrengsten', null]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Subcategorieen = _p_cc(
                                $['Subcategorieen'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Grootboek_Categorieen.Resultaat.D.Subcategorieen.D => _p_cc(
                                        $['l entry'],
                                        ($) => _p.group.resolve(
                                            () => {
                                                
                                                const prop_Hoofdcategorie_fiscus = _p_cc(
                                                    $['Hoofdcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l id'],
                                                    })
                                                )
                                                
                                                const prop_Subcategorie_fiscus = _p_cc(
                                                    $['Subcategorie fiscus'],
                                                    ($) => ({
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l id'],
                                                    })
                                                )
                                                return {
                                                    'Hoofdcategorie fiscus': prop_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': prop_Subcategorie_fiscus,
                                                }
                                            }
                                        )
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
                $['l dictionary'],
                ($, id, $a, $c): t_out.Beheer.BTW$mi_categorieen.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_BTW$mi_heffing = _p_cc(
                                $['BTW-heffing'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Ja', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_BTW$mi_promillage = _p_cc(
                                                                $['BTW-promillage'],
                                                                ($) => $
                                                            )
                                                            return {
                                                                'BTW-promillage': prop_BTW$mi_promillage,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            return {
                                'BTW-heffing': prop_BTW$mi_heffing,
                            }
                        }
                    )
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
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Beheer.Grootboekrekeningen.Balans.D => _p_cc(
                                $['l entry'],
                                ($) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Hoofdcategorie = _p_cc(
                                            $['Hoofdcategorie'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l id'],
                                            })
                                        )
                                        
                                        const prop_Subcategorie = _p_cc(
                                            $['Subcategorie'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l id'],
                                            })
                                        )
                                        
                                        const prop_Zijde = _p_cc(
                                            $['Zijde'],
                                            ($) => _p.decide.state(
                                                $['l state'],
                                                ($): t_out.Beheer.Grootboekrekeningen.Balans.D.Zijde => {
                                                    switch ($[0]) {
                                                        case 'Activa':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Activa', null]
                                                            )
                                                        case 'Passiva':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Passiva', null]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
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
                    )
                    
                    const prop_Resultaat = _p_cc(
                        $['Resultaat'],
                        ($) => _p.dictionary.resolve(
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Beheer.Grootboekrekeningen.Resultaat.D => _p_cc(
                                $['l entry'],
                                ($) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Hoofdcategorie = _p_cc(
                                            $['Hoofdcategorie'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l id'],
                                            })
                                        )
                                        
                                        const prop_Subcategorie = _p_cc(
                                            $['Subcategorie'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l id'],
                                            })
                                        )
                                        
                                        const prop_Zijde = _p_cc(
                                            $['Zijde'],
                                            ($) => _p.decide.state(
                                                $['l state'],
                                                ($): t_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde => {
                                                    switch ($[0]) {
                                                        case 'Kosten':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Kosten', _p.group.resolve(
                                                                    () => {
                                                                        
                                                                        const prop_Correctie_op_vennootschapsbelasting = _p_cc(
                                                                            $['Correctie op vennootschapsbelasting'],
                                                                            ($) => _p.decide.state(
                                                                                $['l state'],
                                                                                ($): t_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                                    switch ($[0]) {
                                                                                        case 'Ja':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['Ja', _p.group.resolve(
                                                                                                    () => {
                                                                                                        
                                                                                                        const prop_Correctietype = _p_cc(
                                                                                                            $['Correctietype'],
                                                                                                            ($) => ({
                                                                                                                'l entry': _pdev.implement_me(
                                                                                                                    "IM: FIXME ACYCLIC ENTRY"
                                                                                                                ),
                                                                                                                'l id': $['l id'],
                                                                                                            })
                                                                                                        )
                                                                                                        return {
                                                                                                            'Correctietype': prop_Correctietype,
                                                                                                        }
                                                                                                    }
                                                                                                )]
                                                                                            )
                                                                                        case 'Nee':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['Nee', null]
                                                                                            )
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )
                                                                        )
                                                                        return {
                                                                            'Correctie op vennootschapsbelasting': prop_Correctie_op_vennootschapsbelasting,
                                                                        }
                                                                    }
                                                                )]
                                                            )
                                                        case 'Opbrengsten':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Opbrengsten', null]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
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
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Beheer.Rekeningen.Bank.D => _p_cc(
                                $['l entry'],
                                ($) => null
                            )
                        )
                    )
                    
                    const prop_Informeel = _p_cc(
                        $['Informeel'],
                        ($) => _p.dictionary.resolve(
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Beheer.Rekeningen.Informeel.D => _p_cc(
                                $['l entry'],
                                ($) => null
                            )
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
                $['l dictionary'],
                ($, id, $a, $c): t_out.Beheer.Gebruikers.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
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
        )
        
        const prop_Klanten = _p_cc(
            $['Klanten'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Beheer.Klanten.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_Licentieovereenkomsten = _p_cc(
                                $['Licentieovereenkomsten'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Beheer.Klanten.D.Licentieovereenkomsten.D => _p_cc(
                                        $['l entry'],
                                        ($) => _p.group.resolve(
                                            () => {
                                                
                                                const prop_Periodes = _p_cc(
                                                    $['Periodes'],
                                                    ($) => _p.dictionary.resolve(
                                                        $['l dictionary'],
                                                        ($, id, $a, $c): t_out.Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D => _p_cc(
                                                            $['l entry'],
                                                            ($) => _p.group.resolve(
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
                                                )
                                                return {
                                                    'Periodes': prop_Periodes,
                                                }
                                            }
                                        )
                                    )
                                )
                            )
                            
                            const prop_Projecten = _p_cc(
                                $['Projecten'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Beheer.Klanten.D.Projecten.D => _p_cc(
                                        $['l entry'],
                                        ($) => _p.group.resolve(
                                            () => {
                                                
                                                const prop_Offertes = _p_cc(
                                                    $['Offertes'],
                                                    ($) => _p.dictionary.resolve(
                                                        $['l dictionary'],
                                                        ($, id, $a, $c): t_out.Beheer.Klanten.D.Projecten.D.Offertes.D => _p_cc(
                                                            $['l entry'],
                                                            ($) => _p.group.resolve(
                                                                () => {
                                                                    
                                                                    const prop_Opbrengsten = _p_cc(
                                                                        $['Opbrengsten'],
                                                                        ($) => _p.dictionary.resolve(
                                                                            $['l dictionary'],
                                                                            ($, id, $a, $c): t_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D => _p_cc(
                                                                                $['l entry'],
                                                                                ($) => _p.group.resolve(
                                                                                    () => {
                                                                                        
                                                                                        const prop_Type = _p_cc(
                                                                                            $['Type'],
                                                                                            ($) => _p.decide.state(
                                                                                                $['l state'],
                                                                                                ($): t_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'Project':
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['Project', _p.group.resolve(
                                                                                                                    () => {
                                                                                                                        
                                                                                                                        const prop_Bedrag = _p_cc(
                                                                                                                            $['Bedrag'],
                                                                                                                            ($) => $
                                                                                                                        )
                                                                                                                        
                                                                                                                        const prop_Betaaldatum = _p_cc(
                                                                                                                            $['Betaaldatum'],
                                                                                                                            ($) => $
                                                                                                                        )
                                                                                                                        return {
                                                                                                                            'Bedrag': prop_Bedrag,
                                                                                                                            'Betaaldatum': prop_Betaaldatum,
                                                                                                                        }
                                                                                                                    }
                                                                                                                )]
                                                                                                            )
                                                                                                        default:
                                                                                                            return _p.au(
                                                                                                                $[0]
                                                                                                            )
                                                                                                    }
                                                                                                }
                                                                                            )
                                                                                        )
                                                                                        return {
                                                                                            'Type': prop_Type,
                                                                                        }
                                                                                    }
                                                                                )
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
                                                )
                                                return {
                                                    'Offertes': prop_Offertes,
                                                }
                                            }
                                        )
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
        )
        
        const prop_Leveranciers = _p_cc(
            $['Leveranciers'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Beheer.Leveranciers.D => _p_cc(
                    $['l entry'],
                    ($) => null
                )
            )
        )
        
        const prop_Medewerkers = _p_cc(
            $['Medewerkers'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Beheer.Medewerkers.D => _p_cc(
                    $['l entry'],
                    ($) => null
                )
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
                $['l dictionary'],
                ($, id, $a, $c): t_out.Grootboekrekeningen.Balans.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_Type = _p_cc(
                                $['Type'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Grootboekrekeningen.Balans.D.Type => {
                                        switch ($[0]) {
                                            case 'Bankrekening':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Bankrekening', null]
                                                )
                                            case 'Overig':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Overig', null]
                                                )
                                            case 'Informele rekening':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Informele rekening', null]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            return {
                                'Type': prop_Type,
                            }
                        }
                    )
                )
            )
        )
        
        const prop_Resultaat = _p_cc(
            $['Resultaat'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Grootboekrekeningen.Resultaat.D => _p_cc(
                    $['l entry'],
                    ($) => null
                )
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
                        ($) => ({
                            'l entry': _pdev.implement_me(
                                "IM: FIXME ACYCLIC ENTRY"
                            ),
                            'l id': $['l id'],
                        })
                    )
                    
                    const prop_Salarisrondes = _p_cc(
                        $['Salarisrondes'],
                        ($) => _p.dictionary.resolve(
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Jaarbeheer.Resultaat.Salarisrondes.D => _p_cc(
                                $['l entry'],
                                ($) => null
                            )
                        )
                    )
                    
                    const prop_BTW_periodes = _p_cc(
                        $['BTW periodes'],
                        ($) => _p.dictionary.resolve(
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Jaarbeheer.Resultaat.BTW_periodes.D => _p_cc(
                                $['l entry'],
                                ($) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_1$pe__BTW$mi_categorieen = _p_cc(
                                            $['1. BTW-categorieen'],
                                            ($) => _p.dictionary.resolve(
                                                $['l dictionary'],
                                                ($, id, $a, $c): t_out.Jaarbeheer.Resultaat.BTW_periodes.D._11$pe__BTW$mi_categorieen.D => _p_cc(
                                                    $['l entry'],
                                                    ($) => null
                                                )
                                            )
                                        )
                                        
                                        const prop_Documenten = _p_cc(
                                            $['Documenten'],
                                            ($) => _p.dictionary.resolve(
                                                $['l dictionary'],
                                                ($, id, $a, $c): t_out.Jaarbeheer.Resultaat.BTW_periodes.D.Documenten.D => _p_cc(
                                                    $['l entry'],
                                                    ($) => _p.group.resolve(
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
                                        )
                                        
                                        const prop_Omschrijving = _p_cc(
                                            $['Omschrijving'],
                                            ($) => $
                                        )
                                        
                                        const prop_Status = _p_cc(
                                            $['Status'],
                                            ($) => _p.decide.state(
                                                $['l state'],
                                                ($): t_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status => {
                                                    switch ($[0]) {
                                                        case 'Aangegeven':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Aangegeven', _p.group.resolve(
                                                                    () => {
                                                                        
                                                                        const prop_Afronding = _p_cc(
                                                                            $['Afronding'],
                                                                            ($) => $
                                                                        )
                                                                        
                                                                        const prop_Bedrag = _p_cc(
                                                                            $['Bedrag'],
                                                                            ($) => $
                                                                        )
                                                                        
                                                                        const prop_Datum = _p_cc(
                                                                            $['Datum'],
                                                                            ($) => $
                                                                        )
                                                                        return {
                                                                            'Afronding': prop_Afronding,
                                                                            'Bedrag': prop_Bedrag,
                                                                            'Datum': prop_Datum,
                                                                        }
                                                                    }
                                                                )]
                                                            )
                                                        case 'Openstaand':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Openstaand', null]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
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
                        ($) => ({
                            'l entry': _pdev.implement_me(
                                "IM: FIXME ACYCLIC ENTRY"
                            ),
                            'l id': $['l id'],
                        })
                    )
                    
                    const prop_Grootboekrekening_voor_resultaat_dit_jaar = _p_cc(
                        $['Grootboekrekening voor resultaat dit jaar'],
                        ($) => ({
                            'l entry': _pdev.implement_me(
                                "IM: FIXME ACYCLIC ENTRY"
                            ),
                            'l id': $['l id'],
                        })
                    )
                    
                    const prop_Grootboekrekening_voor_winstreserve = _p_cc(
                        $['Grootboekrekening voor winstreserve'],
                        ($) => ({
                            'l entry': _pdev.implement_me(
                                "IM: FIXME ACYCLIC ENTRY"
                            ),
                            'l id': $['l id'],
                        })
                    )
                    
                    const prop_Grootboekrekening_voor_Inkoop_saldo = _p_cc(
                        $['Grootboekrekening voor Inkoop saldo'],
                        ($) => ({
                            'l entry': _pdev.implement_me(
                                "IM: FIXME ACYCLIC ENTRY"
                            ),
                            'l id': $['l id'],
                        })
                    )
                    
                    const prop_Grootboekrekening_voor_Verkoop_saldo = _p_cc(
                        $['Grootboekrekening voor Verkoop saldo'],
                        ($) => ({
                            'l entry': _pdev.implement_me(
                                "IM: FIXME ACYCLIC ENTRY"
                            ),
                            'l id': $['l id'],
                        })
                    )
                    
                    const prop_Informele_rekeningen = _p_cc(
                        $['Informele rekeningen'],
                        ($) => _p.dictionary.resolve(
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Jaarbeheer.Balans.Informele_rekeningen.D => _p_cc(
                                $['l entry'],
                                ($) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Beginsaldo = _p_cc(
                                            $['Beginsaldo'],
                                            ($) => $
                                        )
                                        
                                        const prop_Grootboekrekening = _p_cc(
                                            $['Grootboekrekening'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l id'],
                                            })
                                        )
                                        
                                        const prop_Nieuw = _p_cc(
                                            $['Nieuw'],
                                            ($) => _p.decide.state(
                                                $['l state'],
                                                ($): t_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw => {
                                                    switch ($[0]) {
                                                        case 'Ja':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Ja', null]
                                                            )
                                                        case 'Nee':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Nee', _p.group.resolve(
                                                                    () => {
                                                                        
                                                                        const prop_Rekening = _p_cc(
                                                                            $['Rekening'],
                                                                            ($) => Verwijzing_naar_Informele_rekening(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $
                                                                                ),
                                                                                null,
                                                                                {
                                                                                    'Jaarbeheer': _pdev.implement_me(
                                                                                        "IM: required"
                                                                                    ),
                                                                                }
                                                                            )
                                                                        )
                                                                        return {
                                                                            'Rekening': prop_Rekening,
                                                                        }
                                                                    }
                                                                )]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
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
                    )
                    
                    const prop_Bankrekeningen = _p_cc(
                        $['Bankrekeningen'],
                        ($) => _p.dictionary.resolve(
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Jaarbeheer.Balans.Bankrekeningen.D => _p_cc(
                                $['l entry'],
                                ($) => _p.group.resolve(
                                    () => {
                                        
                                        const prop_Beginsaldo = _p_cc(
                                            $['Beginsaldo'],
                                            ($) => $
                                        )
                                        
                                        const prop_Grootboekrekening = _p_cc(
                                            $['Grootboekrekening'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l id'],
                                            })
                                        )
                                        
                                        const prop_Nieuw = _p_cc(
                                            $['Nieuw'],
                                            ($) => _p.decide.state(
                                                $['l state'],
                                                ($): t_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw => {
                                                    switch ($[0]) {
                                                        case 'Ja':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Ja', null]
                                                            )
                                                        case 'Nee':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Nee', _p.group.resolve(
                                                                    () => {
                                                                        
                                                                        const prop_Rekening = _p_cc(
                                                                            $['Rekening'],
                                                                            ($) => Verwijzing_naar_Bankrekening(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $
                                                                                ),
                                                                                null,
                                                                                {
                                                                                    'Jaarbeheer': _pdev.implement_me(
                                                                                        "IM: required"
                                                                                    ),
                                                                                }
                                                                            )
                                                                        )
                                                                        return {
                                                                            'Rekening': prop_Rekening,
                                                                        }
                                                                    }
                                                                )]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )
                                        )
                                        
                                        const prop_Mutaties = _p_cc(
                                            $['Mutaties'],
                                            ($) => _p.dictionary.resolve(
                                                $['l dictionary'],
                                                ($, id, $a, $c): t_out.Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D => _p_cc(
                                                    $['l entry'],
                                                    ($) => _p.group.resolve(
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
                    )
                    
                    const prop_Overige_balans_items = _p_cc(
                        $['Overige balans items'],
                        ($) => _p.dictionary.resolve(
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Jaarbeheer.Balans.Overige_balans_items.D => _p_cc(
                                $['l entry'],
                                ($) => Overige_balans_item(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    $p
                                )
                            )
                        )
                    )
                    
                    const prop_Verrekenposten = _p_cc(
                        $['Verrekenposten'],
                        ($) => _p.dictionary.resolve(
                            $['l dictionary'],
                            ($, id, $a, $c): t_out.Jaarbeheer.Balans.Verrekenposten.D => _p_cc(
                                $['l entry'],
                                ($) => null
                            )
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
            ($) => ({
                'l entry': _pdev.implement_me(
                    "IM: FIXME ACYCLIC ENTRY"
                ),
                'l id': $['l id'],
            })
        )
        
        const prop_Nieuw = _p_cc(
            $['Nieuw'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Overige_balans_item.Nieuw => {
                    switch ($[0]) {
                        case 'Ja':
                            return _p.ss(
                                $,
                                ($) => ['Ja', null]
                            )
                        case 'Nee':
                            return _p.ss(
                                $,
                                ($) => ['Nee', _p.group.resolve(
                                    () => {
                                        
                                        const prop_Balans_item = _p_cc(
                                            $['Balans item'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l id'],
                                            })
                                        )
                                        return {
                                            'Balans item': prop_Balans_item,
                                        }
                                    }
                                )]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        return {
            'Beginsaldo': prop_Beginsaldo,
            'Grootboekrekening': prop_Grootboekrekening,
            'Nieuw': prop_Nieuw,
        }
    }
)

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($, abort, $l, $p) => ({
    'l entry': _pdev.implement_me(
        "IM: FIXME ACYCLIC ENTRY"
    ),
    'l id': $['l id'],
})

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($, abort, $l, $p) => ({
    'l entry': _pdev.implement_me(
        "IM: FIXME ACYCLIC ENTRY"
    ),
    'l id': $['l id'],
})

export const Handelstransacties: t_signatures.Handelstransacties = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_Inkopen = _p_cc(
            $['Inkopen'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Handelstransacties.Inkopen.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_Afhandeling = _p_cc(
                                $['Afhandeling'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Handelstransacties.Inkopen.D.Afhandeling => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Mutaties', null]
                                                )
                                            case 'Rekening courant':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Rekening courant', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Rekening_courant = _p_cc(
                                                                $['Rekening courant'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            return {
                                                                'Rekening courant': prop_Rekening_courant,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_BTW$mi_regime = _p_cc(
                                $['BTW-regime'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Handelstransacties.Inkopen.D.BTW$mi_regime => {
                                        switch ($[0]) {
                                            case 'Binnenland: heffing verlegd':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Binnenland: heffing verlegd', null]
                                                )
                                            case 'Geen BTW van toepassing':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Geen BTW van toepassing', null]
                                                )
                                            case 'Import van buiten de EU':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Import van buiten de EU', null]
                                                )
                                            case 'Intracommunautair':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Intracommunautair', null]
                                                )
                                            case 'Standaard':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Standaard', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_BTW$mi_periode = _p_cc(
                                                                $['BTW-periode'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            return {
                                                                'BTW-periode': prop_BTW$mi_periode,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Brondocument = _p_cc(
                                $['Brondocument'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Handelstransacties.Inkopen.D.Brondocument => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Toegevoegd', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Document = _p_cc(
                                                                $['Document'],
                                                                ($) => $
                                                            )
                                                            return {
                                                                'Document': prop_Document,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'Niet van toepassing':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Niet van toepassing', null]
                                                )
                                            case 'Ontbreekt':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Ontbreekt', null]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Datum = _p_cc(
                                $['Datum'],
                                ($) => $
                            )
                            
                            const prop_Regels = _p_cc(
                                $['Regels'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Handelstransacties.Inkopen.D.Regels.D => _p_cc(
                                        $['l entry'],
                                        ($) => _p.group.resolve(
                                            () => {
                                                
                                                const prop_Bedrag = _p_cc(
                                                    $['Bedrag'],
                                                    ($) => _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag => {
                                                            switch ($[0]) {
                                                                case 'Bekend':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Bekend', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_BTW$mi_bedrag = _p_cc(
                                                                                    $['BTW-bedrag'],
                                                                                    ($) => $
                                                                                )
                                                                                
                                                                                const prop_Bedrag_inclusief_geheven_BTW = _p_cc(
                                                                                    $['Bedrag inclusief geheven BTW'],
                                                                                    ($) => $
                                                                                )
                                                                                return {
                                                                                    'BTW-bedrag': prop_BTW$mi_bedrag,
                                                                                    'Bedrag inclusief geheven BTW': prop_Bedrag_inclusief_geheven_BTW,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                                
                                                const prop_Omschrijving = _p_cc(
                                                    $['Omschrijving'],
                                                    ($) => $
                                                )
                                                
                                                const prop_Type = _p_cc(
                                                    $['Type'],
                                                    ($) => _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Handelstransacties.Inkopen.D.Regels.D.Type => {
                                                            switch ($[0]) {
                                                                case 'Balans':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Balans', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_Balans_item = _p_cc(
                                                                                    $['Balans item'],
                                                                                    ($) => ({
                                                                                        'l entry': _pdev.implement_me(
                                                                                            "IM: FIXME ACYCLIC ENTRY"
                                                                                        ),
                                                                                        'l id': $['l id'],
                                                                                    })
                                                                                )
                                                                                return {
                                                                                    'Balans item': prop_Balans_item,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                case 'Kosten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Kosten', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_Grootboekrekening = _p_cc(
                                                                                    $['Grootboekrekening'],
                                                                                    ($) => ({
                                                                                        'l entry': _pdev.implement_me(
                                                                                            "IM: FIXME ACYCLIC ENTRY"
                                                                                        ),
                                                                                        'l id': $['l id'],
                                                                                    })
                                                                                )
                                                                                return {
                                                                                    'Grootboekrekening': prop_Grootboekrekening,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
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
                            )
                            
                            const prop_Type = _p_cc(
                                $['Type'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Handelstransacties.Inkopen.D.Type => {
                                        switch ($[0]) {
                                            case 'Bonnetje':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Bonnetje', null]
                                                )
                                            case 'Inkoop (met crediteur)':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Inkoop (met crediteur)', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Crediteur = _p_cc(
                                                                $['Crediteur'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            
                                                            const prop_Factuurnummer = _p_cc(
                                                                $['Factuurnummer'],
                                                                ($) => $
                                                            )
                                                            return {
                                                                'Crediteur': prop_Crediteur,
                                                                'Factuurnummer': prop_Factuurnummer,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'Loonheffing':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Loonheffing', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Ronde = _p_cc(
                                                                $['Ronde'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            return {
                                                                'Ronde': prop_Ronde,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'Salaris':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Salaris', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Ronde = _p_cc(
                                                                $['Ronde'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            
                                                            const prop_Medewerker = _p_cc(
                                                                $['Medewerker'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            return {
                                                                'Ronde': prop_Ronde,
                                                                'Medewerker': prop_Medewerker,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
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
        )
        
        const prop_Verkopen = _p_cc(
            $['Verkopen'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Handelstransacties.Verkopen.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
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
                                ($) => ({
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l id'],
                                })
                            )
                            
                            const prop_Brondocument = _p_cc(
                                $['Brondocument'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Handelstransacties.Verkopen.D.Brondocument => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Toegevoegd', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Document = _p_cc(
                                                                $['Document'],
                                                                ($) => $
                                                            )
                                                            return {
                                                                'Document': prop_Document,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Debiteur = _p_cc(
                                $['Debiteur'],
                                ($) => ({
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l id'],
                                })
                            )
                            
                            const prop_Contracttype = _p_cc(
                                $['Contracttype'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Handelstransacties.Verkopen.D.Contracttype => {
                                        switch ($[0]) {
                                            case 'Project':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Project', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Project = _p_cc(
                                                                $['Project'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            
                                                            const prop_Offerte = _p_cc(
                                                                $['Offerte'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            return {
                                                                'Project': prop_Project,
                                                                'Offerte': prop_Offerte,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'Licentieovereenkomst':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Licentieovereenkomst', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Overeenkomst = _p_cc(
                                                                $['Overeenkomst'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            return {
                                                                'Overeenkomst': prop_Overeenkomst,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Afhandeling = _p_cc(
                                $['Afhandeling'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Handelstransacties.Verkopen.D.Afhandeling => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Mutaties', null]
                                                )
                                            case 'Rekening courant':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Rekening courant', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_Rekening_courant = _p_cc(
                                                                $['Rekening courant'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l id'],
                                                                })
                                                            )
                                                            return {
                                                                'Rekening courant': prop_Rekening_courant,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_Regels = _p_cc(
                                $['Regels'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Handelstransacties.Verkopen.D.Regels.D => _p_cc(
                                        $['l entry'],
                                        ($) => _p.group.resolve(
                                            () => {
                                                
                                                const prop_BTW$mi_regime = _p_cc(
                                                    $['BTW-regime'],
                                                    ($) => _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                            switch ($[0]) {
                                                                case 'Intracommunautair':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Intracommunautair', null]
                                                                    )
                                                                case 'Standaard':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Standaard', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_BTW$mi_categorie = _p_cc(
                                                                                    $['BTW-categorie'],
                                                                                    ($) => ({
                                                                                        'l entry': _pdev.implement_me(
                                                                                            "IM: FIXME ACYCLIC ENTRY"
                                                                                        ),
                                                                                        'l id': $['l id'],
                                                                                    })
                                                                                )
                                                                                return {
                                                                                    'BTW-categorie': prop_BTW$mi_categorie,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                case 'Binnenland: heffing verlegd':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Binnenland: heffing verlegd', null]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                                
                                                const prop_Bedrag_exclusief_BTW = _p_cc(
                                                    $['Bedrag exclusief BTW'],
                                                    ($) => $
                                                )
                                                
                                                const prop_Contracttype = _p_cc(
                                                    $['Contracttype'],
                                                    ($) => _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype => {
                                                            switch ($[0]) {
                                                                case 'Project':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Project', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_Opbrengst = _p_cc(
                                                                                    $['Opbrengst'],
                                                                                    ($) => ({
                                                                                        'l entry': _pdev.implement_me(
                                                                                            "IM: FIXME ACYCLIC ENTRY"
                                                                                        ),
                                                                                        'l id': $['l id'],
                                                                                    })
                                                                                )
                                                                                return {
                                                                                    'Opbrengst': prop_Opbrengst,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                case 'Los':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Los', null]
                                                                    )
                                                                case 'Licentieovereenkomst':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Licentieovereenkomst', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_Periode = _p_cc(
                                                                                    $['Periode'],
                                                                                    ($) => ({
                                                                                        'l entry': _pdev.implement_me(
                                                                                            "IM: FIXME ACYCLIC ENTRY"
                                                                                        ),
                                                                                        'l id': $['l id'],
                                                                                    })
                                                                                )
                                                                                return {
                                                                                    'Periode': prop_Periode,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    )
                                                )
                                                
                                                const prop_Omschrijving = _p_cc(
                                                    $['Omschrijving'],
                                                    ($) => $
                                                )
                                                
                                                const prop_Type = _p_cc(
                                                    $['Type'],
                                                    ($) => _p.decide.state(
                                                        $['l state'],
                                                        ($): t_out.Handelstransacties.Verkopen.D.Regels.D.Type => {
                                                            switch ($[0]) {
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Opbrengsten', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_Grootboekrekening = _p_cc(
                                                                                    $['Grootboekrekening'],
                                                                                    ($) => ({
                                                                                        'l entry': _pdev.implement_me(
                                                                                            "IM: FIXME ACYCLIC ENTRY"
                                                                                        ),
                                                                                        'l id': $['l id'],
                                                                                    })
                                                                                )
                                                                                return {
                                                                                    'Grootboekrekening': prop_Grootboekrekening,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                case 'Balans':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Balans', _p.group.resolve(
                                                                            () => {
                                                                                
                                                                                const prop_Balans_item = _p_cc(
                                                                                    $['Balans item'],
                                                                                    ($) => ({
                                                                                        'l entry': _pdev.implement_me(
                                                                                            "IM: FIXME ACYCLIC ENTRY"
                                                                                        ),
                                                                                        'l id': $['l id'],
                                                                                    })
                                                                                )
                                                                                return {
                                                                                    'Balans item': prop_Balans_item,
                                                                                }
                                                                            }
                                                                        )]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
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
            ($) => _p.optional.map(
                $,
                ($) => ({
                    'l entry': _pdev.implement_me(
                        "IM: FIXME ACYCLIC ENTRY"
                    ),
                    'l id': $['l id'],
                })
            )
        )
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Balans_Resultaat_Mutatie.type_ => {
                    switch ($[0]) {
                        case 'Inkoop':
                            return _p.ss(
                                $,
                                ($) => ['Inkoop', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l id'],
                                }]
                            )
                        case 'Verkoop':
                            return _p.ss(
                                $,
                                ($) => ['Verkoop', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l id'],
                                }]
                            )
                        case 'BTW-periode':
                            return _p.ss(
                                $,
                                ($) => ['BTW-periode', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l id'],
                                }]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
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
                $['l dictionary'],
                ($, id, $a, $c): t_out.Mutaties.Verrekenpost_mutaties.D => _p_cc(
                    $['l entry'],
                    ($) => _p.dictionary.resolve(
                        $['l dictionary'],
                        ($, id, $a, $c): t_out.Mutaties.Verrekenpost_mutaties.D.D => _p_cc(
                            $['l entry'],
                            ($) => _p.group.resolve(
                                () => {
                                    
                                    const prop_Bedrag = _p_cc(
                                        $['Bedrag'],
                                        ($) => $
                                    )
                                    
                                    const prop_Afhandeling = _p_cc(
                                        $['Afhandeling'],
                                        ($) => _p.decide.state(
                                            $['l state'],
                                            ($): t_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling => {
                                                switch ($[0]) {
                                                    case 'Resultaat':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Resultaat', Balans_Resultaat_Mutatie(
                                                                $,
                                                                ($) => abort(
                                                                    $
                                                                ),
                                                                $l,
                                                                $p
                                                            )]
                                                        )
                                                    case 'Balans':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Balans', _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.Balans => {
                                                                    switch ($[0]) {
                                                                        case 'Informele rekening':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Informele rekening', _p.group.resolve(
                                                                                    () => {
                                                                                        
                                                                                        const prop_Informele_rekening = _p_cc(
                                                                                            $['Informele rekening'],
                                                                                            ($) => ({
                                                                                                'l entry': _pdev.implement_me(
                                                                                                    "IM: FIXME ACYCLIC ENTRY"
                                                                                                ),
                                                                                                'l id': $['l id'],
                                                                                            })
                                                                                        )
                                                                                        return {
                                                                                            'Informele rekening': prop_Informele_rekening,
                                                                                        }
                                                                                    }
                                                                                )]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
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
            )
        )
        
        const prop_Bankrekening_Mutatie_Verwerkingen = _p_cc(
            $['Bankrekening Mutatie Verwerkingen'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D => _p_cc(
                    $['l entry'],
                    ($) => _p.dictionary.resolve(
                        $['l dictionary'],
                        ($, id, $a, $c): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D => _p_cc(
                            $['l entry'],
                            ($) => _p.decide.state(
                                $['l state'],
                                ($): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D => {
                                    switch ($[0]) {
                                        case 'Resultaat':
                                            return _p.ss(
                                                $,
                                                ($) => ['Resultaat', Balans_Resultaat_Mutatie(
                                                    $,
                                                    ($) => abort(
                                                        $
                                                    ),
                                                    $l,
                                                    $p
                                                )]
                                            )
                                        case 'Balans':
                                            return _p.ss(
                                                $,
                                                ($) => ['Balans', _p.decide.state(
                                                    $['l state'],
                                                    ($): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.Balans => {
                                                        switch ($[0]) {
                                                            case 'Verrekenpost':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['Verrekenpost', _p.group.resolve(
                                                                        () => {
                                                                            
                                                                            const prop_Verrekenpost = _p_cc(
                                                                                $['Verrekenpost'],
                                                                                ($) => ({
                                                                                    'l entry': _pdev.implement_me(
                                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                                    ),
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            )
                                                                            return {
                                                                                'Verrekenpost': prop_Verrekenpost,
                                                                            }
                                                                        }
                                                                    )]
                                                                )
                                                            case 'Informele rekening':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['Informele rekening', _p.group.resolve(
                                                                        () => {
                                                                            
                                                                            const prop_Informele_rekening = _p_cc(
                                                                                $['Informele rekening'],
                                                                                ($) => ({
                                                                                    'l entry': _pdev.implement_me(
                                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                                    ),
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            )
                                                                            return {
                                                                                'Informele rekening': prop_Informele_rekening,
                                                                            }
                                                                        }
                                                                    )]
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )
                        )
                    )
                )
            )
        )
        
        const prop_Memoriaal_boekingen = _p_cc(
            $['Memoriaal boekingen'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Mutaties.Memoriaal_boekingen.D => _p_cc(
                    $['l entry'],
                    ($) => _p.dictionary.resolve(
                        $['l dictionary'],
                        ($, id, $a, $c): t_out.Mutaties.Memoriaal_boekingen.D.D => _p_cc(
                            $['l entry'],
                            ($) => _p.group.resolve(
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
                                        ($) => ({
                                            'l entry': _pdev.implement_me(
                                                "IM: FIXME ACYCLIC ENTRY"
                                            ),
                                            'l id': $['l id'],
                                        })
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
            )
        )
        return {
            'Verrekenpost mutaties': prop_Verrekenpost_mutaties,
            'Bankrekening Mutatie Verwerkingen': prop_Bankrekening_Mutatie_Verwerkingen,
            'Memoriaal boekingen': prop_Memoriaal_boekingen,
        }
    }
)

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Eerste_boekjaar => {
        switch ($[0]) {
            case 'Ja':
                return _p.ss(
                    $,
                    ($) => ['Ja', null]
                )
            case 'Nee':
                return _p.ss(
                    $,
                    ($) => ['Nee', _p.group.resolve(
                        () => {
                            
                            const prop_Vorig_boekjaar = _p_cc(
                                $['Vorig boekjaar'],
                                ($) => ({
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l id'],
                                })
                            )
                            return {
                                'Vorig boekjaar': prop_Vorig_boekjaar,
                            }
                        }
                    )]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Jaren: t_signatures.Jaren = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Jaren.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_Afgesloten = _p_cc(
                    $['Afgesloten'],
                    ($) => _p.decide.state(
                        $['l state'],
                        ($): t_out.Jaren.D.Afgesloten => {
                            switch ($[0]) {
                                case 'Ja':
                                    return _p.ss(
                                        $,
                                        ($) => ['Ja', null]
                                    )
                                case 'Nee':
                                    return _p.ss(
                                        $,
                                        ($) => ['Nee', null]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
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
                                "IM: selection"
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
                                "IM: selection"
                            ),
                        },
                        {
                            'Grootboekrekeningen': _pdev.implement_me(
                                "IM: required"
                            ),
                            'Eerste boekjaar': _pdev.implement_me(
                                "IM: required"
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
                                "IM: required"
                            ),
                            'Jaarbeheer': _pdev.implement_me(
                                "IM: required"
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
                                "IM: selection"
                            ),
                        },
                        {
                            'Beheer': $p['Beheer'],
                            'Grootboekrekeningen': _pdev.implement_me(
                                "IM: required"
                            ),
                            'Jaarbeheer': _pdev.implement_me(
                                "IM: required"
                            ),
                            'Handelstransacties': _pdev.implement_me(
                                "IM: required"
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
                        "IM: required"
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
                        "IM: required"
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
                        "IM: required"
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
