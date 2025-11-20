import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/resolve"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/boekhouding/data_types/source"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding/data_types/resolve"


export const r_Fiscaal: _i_signatures._T_Fiscaal = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Balans_Hoofdcategorieen: _i_out._T_Fiscaal.Balans_Hoofdcategorieen = _pa.cc($['Balans Hoofdcategorieen'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Zijde: _i_out._T_Fiscaal.Balans_Hoofdcategorieen.D.Zijde = _pa.cc($['Zijde'], ($) => _pa.cc($['state group'], ($): _i_out._T_Fiscaal.Balans_Hoofdcategorieen.D.Zijde => {
                                switch ($[0]) {
                                    case 'Activa': return _pa.ss($, ($) => ['Activa', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Passiva': return _pa.ss($, ($) => ['Passiva', _pa.block(() => {
                                        return null
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Subcategorieen: _i_out._T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen = _pa.cc($['Subcategorieen'], ($) => _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => null)
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            }))
                            return ({
                                'Zijde': p_Zijde,
                                'Subcategorieen': p_Subcategorieen,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Resultaat_Hoofdcategorieen: _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen = _pa.cc($['Resultaat Hoofdcategorieen'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Zijde: _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde = _pa.cc($['Zijde'], ($) => _pa.cc($['state group'], ($): _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde => {
                                switch ($[0]) {
                                    case 'Kosten': return _pa.ss($, ($) => ['Kosten', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Opbrengsten': return _pa.ss($, ($) => ['Opbrengsten', _pa.block(() => {
                                        return null
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Subcategorieen: _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen = _pa.cc($['Subcategorieen'], ($) => _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => null)
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            }))
                            return ({
                                'Zijde': p_Zijde,
                                'Subcategorieen': p_Subcategorieen,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'Balans Hoofdcategorieen': p_Balans_Hoofdcategorieen,
            'Resultaat Hoofdcategorieen': p_Resultaat_Hoofdcategorieen,
        })
    })
})
export const r_Grootboek_Categorieen: _i_signatures._T_Grootboek_Categorieen = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Correctietypes_vennootschapsbelasting: _i_out._T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting = _pa.cc($['Correctietypes vennootschapsbelasting'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Te_corrigeren_promillage: _i_out._T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D.Te_corrigeren_promillage = _pa.cc($['Te corrigeren promillage'], ($) => $)
                            return ({
                                'Te corrigeren promillage': p_Te_corrigeren_promillage,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Balans: _i_out._T_Grootboek_Categorieen.Balans = _pa.cc($['Balans'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Zijde: _i_out._T_Grootboek_Categorieen.Balans.D.Zijde = _pa.cc($['Zijde'], ($) => _pa.cc($['state group'], ($): _i_out._T_Grootboek_Categorieen.Balans.D.Zijde => {
                                switch ($[0]) {
                                    case 'Activa': return _pa.ss($, ($) => ['Activa', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Passiva': return _pa.ss($, ($) => ['Passiva', _pa.block(() => {
                                        return null
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Subcategorieen: _i_out._T_Grootboek_Categorieen.Balans.D.Subcategorieen = _pa.cc($['Subcategorieen'], ($) => _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                                const p_Hoofdcategorie_fiscus: _i_out._T_Grootboek_Categorieen.Balans.D.Subcategorieen.D.Hoofdcategorie_fiscus = _pa.cc($['Hoofdcategorie fiscus'], ($) => _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(
                                                        params['values']['Fiscaal']['Balans Hoofdcategorieen'],
                                                        null
                                                    ),
                                                    {
                                                        'reference': $,
                                                        'location 2 string': l2s,
                                                    }
                                                ))
                                                const p_Subcategorie_fiscus: _i_out._T_Grootboek_Categorieen.Balans.D.Subcategorieen.D.Subcategorie_fiscus = _pa.cc($['Subcategorie fiscus'], ($) => _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(
                                                        p_Hoofdcategorie_fiscus['entry']['Subcategorieen'],
                                                        null
                                                    ),
                                                    {
                                                        'reference': $,
                                                        'location 2 string': l2s,
                                                    }
                                                ))
                                                return ({
                                                    'Hoofdcategorie fiscus': p_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': p_Subcategorie_fiscus,
                                                })
                                            }))
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            }))
                            return ({
                                'Zijde': p_Zijde,
                                'Subcategorieen': p_Subcategorieen,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Resultaat: _i_out._T_Grootboek_Categorieen.Resultaat = _pa.cc($['Resultaat'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Zijde: _i_out._T_Grootboek_Categorieen.Resultaat.D.Zijde = _pa.cc($['Zijde'], ($) => _pa.cc($['state group'], ($): _i_out._T_Grootboek_Categorieen.Resultaat.D.Zijde => {
                                switch ($[0]) {
                                    case 'Kosten': return _pa.ss($, ($) => ['Kosten', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Opbrengsten': return _pa.ss($, ($) => ['Opbrengsten', _pa.block(() => {
                                        return null
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Subcategorieen: _i_out._T_Grootboek_Categorieen.Resultaat.D.Subcategorieen = _pa.cc($['Subcategorieen'], ($) => _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                                const p_Hoofdcategorie_fiscus: _i_out._T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D.Hoofdcategorie_fiscus = _pa.cc($['Hoofdcategorie fiscus'], ($) => _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(
                                                        params['values']['Fiscaal']['Resultaat Hoofdcategorieen'],
                                                        null
                                                    ),
                                                    {
                                                        'reference': $,
                                                        'location 2 string': l2s,
                                                    }
                                                ))
                                                const p_Subcategorie_fiscus: _i_out._T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D.Subcategorie_fiscus = _pa.cc($['Subcategorie fiscus'], ($) => _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(
                                                        p_Hoofdcategorie_fiscus['entry']['Subcategorieen'],
                                                        null
                                                    ),
                                                    {
                                                        'reference': $,
                                                        'location 2 string': l2s,
                                                    }
                                                ))
                                                return ({
                                                    'Hoofdcategorie fiscus': p_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': p_Subcategorie_fiscus,
                                                })
                                            }))
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            }))
                            return ({
                                'Zijde': p_Zijde,
                                'Subcategorieen': p_Subcategorieen,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'Correctietypes vennootschapsbelasting': p_Correctietypes_vennootschapsbelasting,
            'Balans': p_Balans,
            'Resultaat': p_Resultaat,
        })
    })
})
export const r_Beheer: _i_signatures._T_Beheer = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_BTW$mi_categorieen: _i_out._T_Beheer.BTW$mi_categorieen = _pa.cc($['BTW-categorieen'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_BTW$mi_heffing: _i_out._T_Beheer.BTW$mi_categorieen.D.BTW$mi_heffing = _pa.cc($['BTW-heffing'], ($) => _pa.cc($['state group'], ($): _i_out._T_Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                switch ($[0]) {
                                    case 'Ja': return _pa.ss($, ($) => ['Ja', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_BTW$mi_promillage: _i_out._T_Beheer.BTW$mi_categorieen.D.BTW$mi_heffing.SG.Ja.BTW$mi_promillage = _pa.cc($['BTW-promillage'], ($) => $)
                                            return ({
                                                'BTW-promillage': p_BTW$mi_promillage,
                                            })
                                        })
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            return ({
                                'BTW-heffing': p_BTW$mi_heffing,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Grootboekrekeningen: _i_out._T_Beheer.Grootboekrekeningen = _pa.cc($['Grootboekrekeningen'], ($) => _pa.block(() => {
            const p_Balans: _i_out._T_Beheer.Grootboekrekeningen.Balans = _pa.cc($['Balans'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                const p_Hoofdcategorie: _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Hoofdcategorie = _pa.cc($['Hoofdcategorie'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['Grootboek Categorieen']['Balans'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_Subcategorie: _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Subcategorie = _pa.cc($['Subcategorie'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        p_Hoofdcategorie['entry']['Subcategorieen'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_Zijde: _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Zijde = _pa.cc($['Zijde'], ($) => _pa.cc($['state group'], ($): _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Zijde => {
                                    switch ($[0]) {
                                        case 'Activa': return _pa.ss($, ($) => ['Activa', _pa.block(() => {
                                            return null
                                        })])
                                        case 'Passiva': return _pa.ss($, ($) => ['Passiva', _pa.block(() => {
                                            return null
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                }))
                                return ({
                                    'Hoofdcategorie': p_Hoofdcategorie,
                                    'Subcategorie': p_Subcategorie,
                                    'Zijde': p_Zijde,
                                })
                            }))
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            const p_Resultaat: _i_out._T_Beheer.Grootboekrekeningen.Resultaat = _pa.cc($['Resultaat'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                const p_Hoofdcategorie: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Hoofdcategorie = _pa.cc($['Hoofdcategorie'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['Grootboek Categorieen']['Resultaat'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_Subcategorie: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Subcategorie = _pa.cc($['Subcategorie'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        p_Hoofdcategorie['entry']['Subcategorieen'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_Zijde: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde = _pa.cc($['Zijde'], ($) => _pa.cc($['state group'], ($): _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde => {
                                    switch ($[0]) {
                                        case 'Kosten': return _pa.ss($, ($) => ['Kosten', _pa.block(() => {
                                            return _pa.block(() => {
                                                const p_Correctie_op_vennootschapsbelasting: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting = _pa.cc($['Correctie op vennootschapsbelasting'], ($) => _pa.cc($['state group'], ($): _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting => {
                                                    switch ($[0]) {
                                                        case 'Ja': return _pa.ss($, ($) => ['Ja', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_Correctietype: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting.SG.Ja.Correctietype = _pa.cc($['Correctietype'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Grootboek Categorieen']['Correctietypes vennootschapsbelasting'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'reference': $,
                                                                        'location 2 string': l2s,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Correctietype': p_Correctietype,
                                                                })
                                                            })
                                                        })])
                                                        case 'Nee': return _pa.ss($, ($) => ['Nee', _pa.block(() => {
                                                            return null
                                                        })])
                                                        default: return _pa.au($[0])
                                                    }
                                                }))
                                                return ({
                                                    'Correctie op vennootschapsbelasting': p_Correctie_op_vennootschapsbelasting,
                                                })
                                            })
                                        })])
                                        case 'Opbrengsten': return _pa.ss($, ($) => ['Opbrengsten', _pa.block(() => {
                                            return null
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                }))
                                return ({
                                    'Hoofdcategorie': p_Hoofdcategorie,
                                    'Subcategorie': p_Subcategorie,
                                    'Zijde': p_Zijde,
                                })
                            }))
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            return ({
                'Balans': p_Balans,
                'Resultaat': p_Resultaat,
            })
        }))
        const p_Rekeningen: _i_out._T_Beheer.Rekeningen = _pa.cc($['Rekeningen'], ($) => _pa.block(() => {
            const p_Bank: _i_out._T_Beheer.Rekeningen.Bank = _pa.cc($['Bank'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => null)
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            const p_Informeel: _i_out._T_Beheer.Rekeningen.Informeel = _pa.cc($['Informeel'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => null)
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            return ({
                'Bank': p_Bank,
                'Informeel': p_Informeel,
            })
        }))
        const p_Gebruikers: _i_out._T_Beheer.Gebruikers = _pa.cc($['Gebruikers'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Volledige_naam: _i_out._T_Beheer.Gebruikers.D.Volledige_naam = _pa.cc($['Volledige naam'], ($) => $)
                            const p_Wachtwoord: _i_out._T_Beheer.Gebruikers.D.Wachtwoord = _pa.cc($['Wachtwoord'], ($) => $)
                            return ({
                                'Volledige naam': p_Volledige_naam,
                                'Wachtwoord': p_Wachtwoord,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Klanten: _i_out._T_Beheer.Klanten = _pa.cc($['Klanten'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Licentieovereenkomsten: _i_out._T_Beheer.Klanten.D.Licentieovereenkomsten = _pa.cc($['Licentieovereenkomsten'], ($) => _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                                const p_Periodes: _i_out._T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes = _pa.cc($['Periodes'], ($) => _pa.block(() => {
                                                    return _i_generic.resolve_dictionary(
                                                        $,
                                                        {
                                                            'map': ($, $p) => _pa.block(() => {
                                                                return _pa.cc($['value'], ($) => _pa.block(() => {
                                                                    const p_Bedrag: _i_out._T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D.Bedrag = _pa.cc($['Bedrag'], ($) => $)
                                                                    return ({
                                                                        'Bedrag': p_Bedrag,
                                                                    })
                                                                }))
                                                            }),
                                                            'location 2 string': l2s,
                                                        }
                                                    )
                                                }))
                                                return ({
                                                    'Periodes': p_Periodes,
                                                })
                                            }))
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            }))
                            const p_Projecten: _i_out._T_Beheer.Klanten.D.Projecten = _pa.cc($['Projecten'], ($) => _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                                const p_Offertes: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes = _pa.cc($['Offertes'], ($) => _pa.block(() => {
                                                    return _i_generic.resolve_dictionary(
                                                        $,
                                                        {
                                                            'map': ($, $p) => _pa.block(() => {
                                                                return _pa.cc($['value'], ($) => _pa.block(() => {
                                                                    const p_Opbrengsten: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten = _pa.cc($['Opbrengsten'], ($) => _pa.block(() => {
                                                                        return _i_generic.resolve_dictionary(
                                                                            $,
                                                                            {
                                                                                'map': ($, $p) => _pa.block(() => {
                                                                                    return _pa.cc($['value'], ($) => _pa.block(() => {
                                                                                        const p_Type: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type = _pa.cc($['Type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                                            switch ($[0]) {
                                                                                                case 'Project': return _pa.ss($, ($) => ['Project', _pa.block(() => {
                                                                                                    return _pa.block(() => {
                                                                                                        const p_Bedrag: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type.SG.Project.Bedrag = _pa.cc($['Bedrag'], ($) => $)
                                                                                                        const p_Betaaldatum: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type.SG.Project.Betaaldatum = _pa.cc($['Betaaldatum'], ($) => $)
                                                                                                        return ({
                                                                                                            'Bedrag': p_Bedrag,
                                                                                                            'Betaaldatum': p_Betaaldatum,
                                                                                                        })
                                                                                                    })
                                                                                                })])
                                                                                                default: return _pa.au($[0])
                                                                                            }
                                                                                        }))
                                                                                        return ({
                                                                                            'Type': p_Type,
                                                                                        })
                                                                                    }))
                                                                                }),
                                                                                'location 2 string': l2s,
                                                                            }
                                                                        )
                                                                    }))
                                                                    return ({
                                                                        'Opbrengsten': p_Opbrengsten,
                                                                    })
                                                                }))
                                                            }),
                                                            'location 2 string': l2s,
                                                        }
                                                    )
                                                }))
                                                return ({
                                                    'Offertes': p_Offertes,
                                                })
                                            }))
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            }))
                            return ({
                                'Licentieovereenkomsten': p_Licentieovereenkomsten,
                                'Projecten': p_Projecten,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Leveranciers: _i_out._T_Beheer.Leveranciers = _pa.cc($['Leveranciers'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => null)
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Medewerkers: _i_out._T_Beheer.Medewerkers = _pa.cc($['Medewerkers'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => null)
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'BTW-categorieen': p_BTW$mi_categorieen,
            'Grootboekrekeningen': p_Grootboekrekeningen,
            'Rekeningen': p_Rekeningen,
            'Gebruikers': p_Gebruikers,
            'Klanten': p_Klanten,
            'Leveranciers': p_Leveranciers,
            'Medewerkers': p_Medewerkers,
        })
    })
})
export const r_Grootboekrekeningen: _i_signatures._T_Grootboekrekeningen = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Balans: _i_out._T_Grootboekrekeningen.Balans = _pa.cc($['Balans'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Type: _i_out._T_Grootboekrekeningen.Balans.D.Type = _pa.cc($['Type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Grootboekrekeningen.Balans.D.Type => {
                                switch ($[0]) {
                                    case 'Bankrekening': return _pa.ss($, ($) => ['Bankrekening', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Overig': return _pa.ss($, ($) => ['Overig', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Informele rekening': return _pa.ss($, ($) => ['Informele rekening', _pa.block(() => {
                                        return null
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            return ({
                                'Type': p_Type,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Resultaat: _i_out._T_Grootboekrekeningen.Resultaat = _pa.cc($['Resultaat'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => null)
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'Balans': p_Balans,
            'Resultaat': p_Resultaat,
        })
    })
})
export const r_Jaarbeheer: _i_signatures._T_Jaarbeheer = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Resultaat: _i_out._T_Jaarbeheer.Resultaat = _pa.cc($['Resultaat'], ($) => _pa.block(() => {
            const p_Grootboekrekening_voor_BTW_afrondingen: _i_out._T_Jaarbeheer.Resultaat.Grootboekrekening_voor_BTW_afrondingen = _pa.cc($['Grootboekrekening voor BTW afrondingen'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Resultaat'],
                    null
                ),
                {
                    'reference': $,
                    'location 2 string': l2s,
                }
            ))
            const p_Salarisrondes: _i_out._T_Jaarbeheer.Resultaat.Salarisrondes = _pa.cc($['Salarisrondes'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => null)
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            const p_BTW_periodes: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes = _pa.cc($['BTW periodes'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                const p_1$pe__BTW$mi_categorieen: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D._11$pe__BTW$mi_categorieen = _pa.cc($['1. BTW-categorieen'], ($) => _pa.block(() => {
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'map': ($, $p) => _pa.block(() => {
                                                return _pa.cc($['value'], ($) => null)
                                            }),
                                            'location 2 string': l2s,
                                        }
                                    )
                                }))
                                const p_Documenten: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Documenten = _pa.cc($['Documenten'], ($) => _pa.block(() => {
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'map': ($, $p) => _pa.block(() => {
                                                return _pa.cc($['value'], ($) => _pa.block(() => {
                                                    const p_Bestand: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Documenten.D.Bestand = _pa.cc($['Bestand'], ($) => $)
                                                    return ({
                                                        'Bestand': p_Bestand,
                                                    })
                                                }))
                                            }),
                                            'location 2 string': l2s,
                                        }
                                    )
                                }))
                                const p_Omschrijving: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Omschrijving = _pa.cc($['Omschrijving'], ($) => $)
                                const p_Status: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status = _pa.cc($['Status'], ($) => _pa.cc($['state group'], ($): _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status => {
                                    switch ($[0]) {
                                        case 'Aangegeven': return _pa.ss($, ($) => ['Aangegeven', _pa.block(() => {
                                            return _pa.block(() => {
                                                const p_Afronding: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status.SG.Aangegeven.Afronding = _pa.cc($['Afronding'], ($) => $)
                                                const p_Bedrag: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status.SG.Aangegeven.Bedrag = _pa.cc($['Bedrag'], ($) => $)
                                                const p_Datum: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status.SG.Aangegeven.Datum = _pa.cc($['Datum'], ($) => $)
                                                return ({
                                                    'Afronding': p_Afronding,
                                                    'Bedrag': p_Bedrag,
                                                    'Datum': p_Datum,
                                                })
                                            })
                                        })])
                                        case 'Openstaand': return _pa.ss($, ($) => ['Openstaand', _pa.block(() => {
                                            return null
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                }))
                                return ({
                                    '1. BTW-categorieen': p_1$pe__BTW$mi_categorieen,
                                    'Documenten': p_Documenten,
                                    'Omschrijving': p_Omschrijving,
                                    'Status': p_Status,
                                })
                            }))
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            return ({
                'Grootboekrekening voor BTW afrondingen': p_Grootboekrekening_voor_BTW_afrondingen,
                'Salarisrondes': p_Salarisrondes,
                'BTW periodes': p_BTW_periodes,
            })
        }))
        const p_Balans: _i_out._T_Jaarbeheer.Balans = _pa.cc($['Balans'], ($) => _pa.block(() => {
            const p_Beginsaldo_nog_aan_te_geven_BTW: _i_out._T_Jaarbeheer.Balans.Beginsaldo_nog_aan_te_geven_BTW = _pa.cc($['Beginsaldo nog aan te geven BTW'], ($) => $)
            const p_Beginsaldo_winstreserve: _i_out._T_Jaarbeheer.Balans.Beginsaldo_winstreserve = _pa.cc($['Beginsaldo winstreserve'], ($) => $)
            const p_Grootboekrekening_voor_nog_aan_te_geven_BTW: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_nog_aan_te_geven_BTW = _pa.cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'reference': $,
                    'location 2 string': l2s,
                }
            ))
            const p_Grootboekrekening_voor_resultaat_dit_jaar: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_resultaat_dit_jaar = _pa.cc($['Grootboekrekening voor resultaat dit jaar'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'reference': $,
                    'location 2 string': l2s,
                }
            ))
            const p_Grootboekrekening_voor_winstreserve: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_winstreserve = _pa.cc($['Grootboekrekening voor winstreserve'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'reference': $,
                    'location 2 string': l2s,
                }
            ))
            const p_Grootboekrekening_voor_Inkoop_saldo: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_Inkoop_saldo = _pa.cc($['Grootboekrekening voor Inkoop saldo'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'reference': $,
                    'location 2 string': l2s,
                }
            ))
            const p_Grootboekrekening_voor_Verkoop_saldo: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_Verkoop_saldo = _pa.cc($['Grootboekrekening voor Verkoop saldo'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'reference': $,
                    'location 2 string': l2s,
                }
            ))
            const p_Informele_rekeningen: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen = _pa.cc($['Informele rekeningen'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                const p_Beginsaldo: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Beginsaldo = _pa.cc($['Beginsaldo'], ($) => $)
                                const p_Grootboekrekening: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Grootboekrekening = _pa.cc($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['Grootboekrekeningen']['Balans'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_Nieuw: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw = _pa.cc($['Nieuw'], ($) => _pa.cc($['state group'], ($): _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw => {
                                    switch ($[0]) {
                                        case 'Ja': return _pa.ss($, ($) => ['Ja', _pa.block(() => {
                                            return null
                                        })])
                                        case 'Nee': return _pa.ss($, ($) => ['Nee', _pa.block(() => {
                                            const c_Niet_Nieuw = _pd.implement_me()
                                            return _pa.block(() => {
                                                const p_Rekening: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw.SG.Nee.Rekening = _pa.cc($['Rekening'], ($) => r_Verwijzing_naar_Informele_rekening(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'values': ({
                                                                'Jaarbeheer': c_Niet_Nieuw['Vorig boekjaar']['entry']['Jaarbeheer'],
                                                            }),
                                                            'lookups': null,
                                                        }),
                                                    }
                                                ))
                                                return ({
                                                    'Rekening': p_Rekening,
                                                })
                                            })
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                }))
                                return ({
                                    'Beginsaldo': p_Beginsaldo,
                                    'Grootboekrekening': p_Grootboekrekening,
                                    'Nieuw': p_Nieuw,
                                })
                            }))
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            const p_Bankrekeningen: _i_out._T_Jaarbeheer.Balans.Bankrekeningen = _pa.cc($['Bankrekeningen'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                const p_Beginsaldo: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Beginsaldo = _pa.cc($['Beginsaldo'], ($) => $)
                                const p_Grootboekrekening: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Grootboekrekening = _pa.cc($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['Grootboekrekeningen']['Balans'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                ))
                                const p_Nieuw: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Nieuw = _pa.cc($['Nieuw'], ($) => _pa.cc($['state group'], ($): _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Nieuw => {
                                    switch ($[0]) {
                                        case 'Ja': return _pa.ss($, ($) => ['Ja', _pa.block(() => {
                                            return null
                                        })])
                                        case 'Nee': return _pa.ss($, ($) => ['Nee', _pa.block(() => {
                                            const c_Niet_Nieuw = _pd.implement_me()
                                            return _pa.block(() => {
                                                const p_Rekening: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Nieuw.SG.Nee.Rekening = _pa.cc($['Rekening'], ($) => r_Verwijzing_naar_Bankrekening(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'values': ({
                                                                'Jaarbeheer': c_Niet_Nieuw['Vorig boekjaar']['entry']['Jaarbeheer'],
                                                            }),
                                                            'lookups': null,
                                                        }),
                                                    }
                                                ))
                                                return ({
                                                    'Rekening': p_Rekening,
                                                })
                                            })
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                }))
                                const p_Mutaties: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Mutaties = _pa.cc($['Mutaties'], ($) => _pa.block(() => {
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'map': ($, $p) => _pa.block(() => {
                                                return _pa.cc($['value'], ($) => _pa.block(() => {
                                                    const p_Bedrag: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D.Bedrag = _pa.cc($['Bedrag'], ($) => $)
                                                    const p_Datum: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D.Datum = _pa.cc($['Datum'], ($) => $)
                                                    const p_Omschrijving: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D.Omschrijving = _pa.cc($['Omschrijving'], ($) => $)
                                                    return ({
                                                        'Bedrag': p_Bedrag,
                                                        'Datum': p_Datum,
                                                        'Omschrijving': p_Omschrijving,
                                                    })
                                                }))
                                            }),
                                            'location 2 string': l2s,
                                        }
                                    )
                                }))
                                return ({
                                    'Beginsaldo': p_Beginsaldo,
                                    'Grootboekrekening': p_Grootboekrekening,
                                    'Nieuw': p_Nieuw,
                                    'Mutaties': p_Mutaties,
                                })
                            }))
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            const p_Overige_balans_items: _i_out._T_Jaarbeheer.Balans.Overige_balans_items = _pa.cc($['Overige balans items'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => r_Overige_balans_item(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': params['values'],
                                        'lookups': params['lookups'],
                                    }),
                                }
                            ))
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            const p_Verrekenposten: _i_out._T_Jaarbeheer.Balans.Verrekenposten = _pa.cc($['Verrekenposten'], ($) => _pa.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _pa.block(() => {
                            return _pa.cc($['value'], ($) => null)
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            return ({
                'Beginsaldo nog aan te geven BTW': p_Beginsaldo_nog_aan_te_geven_BTW,
                'Beginsaldo winstreserve': p_Beginsaldo_winstreserve,
                'Grootboekrekening voor nog aan te geven BTW': p_Grootboekrekening_voor_nog_aan_te_geven_BTW,
                'Grootboekrekening voor resultaat dit jaar': p_Grootboekrekening_voor_resultaat_dit_jaar,
                'Grootboekrekening voor winstreserve': p_Grootboekrekening_voor_winstreserve,
                'Grootboekrekening voor Inkoop saldo': p_Grootboekrekening_voor_Inkoop_saldo,
                'Grootboekrekening voor Verkoop saldo': p_Grootboekrekening_voor_Verkoop_saldo,
                'Informele rekeningen': p_Informele_rekeningen,
                'Bankrekeningen': p_Bankrekeningen,
                'Overige balans items': p_Overige_balans_items,
                'Verrekenposten': p_Verrekenposten,
            })
        }))
        return ({
            'Resultaat': p_Resultaat,
            'Balans': p_Balans,
        })
    })
})
export const r_Overige_balans_item: _i_signatures._T_Overige_balans_item = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Beginsaldo: _i_out._T_Overige_balans_item.Beginsaldo = _pa.cc($['Beginsaldo'], ($) => $)
        const p_Grootboekrekening: _i_out._T_Overige_balans_item.Grootboekrekening = _pa.cc($['Grootboekrekening'], ($) => _i_generic.get_entry(
            _i_generic.dictionary_to_lookup(
                params['values']['Grootboekrekeningen']['Balans'],
                null
            ),
            {
                'reference': $,
                'location 2 string': l2s,
            }
        ))
        const p_Nieuw: _i_out._T_Overige_balans_item.Nieuw = _pa.cc($['Nieuw'], ($) => _pa.cc($['state group'], ($): _i_out._T_Overige_balans_item.Nieuw => {
            switch ($[0]) {
                case 'Ja': return _pa.ss($, ($) => ['Ja', _pa.block(() => {
                    return null
                })])
                case 'Nee': return _pa.ss($, ($) => ['Nee', _pa.block(() => {
                    const c_Volgend_boekjaar = _pd.implement_me()
                    return _pa.block(() => {
                        const p_Balans_item: _i_out._T_Overige_balans_item.Nieuw.SG.Nee.Balans_item = _pa.cc($['Balans item'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                c_Volgend_boekjaar['Vorig boekjaar']['entry']['Jaarbeheer']['Balans']['Overige balans items'],
                                null
                            ),
                            {
                                'reference': $,
                                'location 2 string': l2s,
                            }
                        ))
                        return ({
                            'Balans item': p_Balans_item,
                        })
                    })
                })])
                default: return _pa.au($[0])
            }
        }))
        return ({
            'Beginsaldo': p_Beginsaldo,
            'Grootboekrekening': p_Grootboekrekening,
            'Nieuw': p_Nieuw,
        })
    })
})
export const r_Verwijzing_naar_Informele_rekening: _i_signatures._T_Verwijzing_naar_Informele_rekening = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.get_entry(
        _i_generic.dictionary_to_lookup(
            params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
            null
        ),
        {
            'reference': $,
            'location 2 string': l2s,
        }
    )
})
export const r_Verwijzing_naar_Bankrekening: _i_signatures._T_Verwijzing_naar_Bankrekening = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.get_entry(
        _i_generic.dictionary_to_lookup(
            params['values']['Jaarbeheer']['Balans']['Bankrekeningen'],
            null
        ),
        {
            'reference': $,
            'location 2 string': l2s,
        }
    )
})
export const r_Handelstransacties: _i_signatures._T_Handelstransacties = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Inkopen: _i_out._T_Handelstransacties.Inkopen = _pa.cc($['Inkopen'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Afhandeling: _i_out._T_Handelstransacties.Inkopen.D.Afhandeling = _pa.cc($['Afhandeling'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Afhandeling => {
                                switch ($[0]) {
                                    case 'Mutaties': return _pa.ss($, ($) => ['Mutaties', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Rekening courant': return _pa.ss($, ($) => ['Rekening courant', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Rekening_courant: _i_out._T_Handelstransacties.Inkopen.D.Afhandeling.SG.Rekening_courant.Rekening_courant = _pa.cc($['Rekening courant'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            return ({
                                                'Rekening courant': p_Rekening_courant,
                                            })
                                        })
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_BTW$mi_regime: _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime = _pa.cc($['BTW-regime'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime => {
                                switch ($[0]) {
                                    case 'Binnenland: heffing verlegd': return _pa.ss($, ($) => ['Binnenland: heffing verlegd', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Geen BTW van toepassing': return _pa.ss($, ($) => ['Geen BTW van toepassing', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Import van buiten de EU': return _pa.ss($, ($) => ['Import van buiten de EU', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Intracommunautair': return _pa.ss($, ($) => ['Intracommunautair', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Standaard': return _pa.ss($, ($) => ['Standaard', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_BTW$mi_periode: _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime.SG.Standaard.BTW$mi_periode = _pa.cc($['BTW-periode'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Resultaat']['BTW periodes'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            return ({
                                                'BTW-periode': p_BTW$mi_periode,
                                            })
                                        })
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Brondocument: _i_out._T_Handelstransacties.Inkopen.D.Brondocument = _pa.cc($['Brondocument'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Brondocument => {
                                switch ($[0]) {
                                    case 'Toegevoegd': return _pa.ss($, ($) => ['Toegevoegd', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Document: _i_out._T_Handelstransacties.Inkopen.D.Brondocument.SG.Toegevoegd.Document = _pa.cc($['Document'], ($) => $)
                                            return ({
                                                'Document': p_Document,
                                            })
                                        })
                                    })])
                                    case 'Niet van toepassing': return _pa.ss($, ($) => ['Niet van toepassing', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Ontbreekt': return _pa.ss($, ($) => ['Ontbreekt', _pa.block(() => {
                                        return null
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Datum: _i_out._T_Handelstransacties.Inkopen.D.Datum = _pa.cc($['Datum'], ($) => $)
                            const p_Regels: _i_out._T_Handelstransacties.Inkopen.D.Regels = _pa.cc($['Regels'], ($) => _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                                const p_Bedrag: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag = _pa.cc($['Bedrag'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag => {
                                                    switch ($[0]) {
                                                        case 'Bekend': return _pa.ss($, ($) => ['Bekend', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_BTW$mi_bedrag: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag.SG.Bekend.BTW$mi_bedrag = _pa.cc($['BTW-bedrag'], ($) => $)
                                                                const p_Bedrag_inclusief_geheven_BTW: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag.SG.Bekend.Bedrag_inclusief_geheven_BTW = _pa.cc($['Bedrag inclusief geheven BTW'], ($) => $)
                                                                return ({
                                                                    'BTW-bedrag': p_BTW$mi_bedrag,
                                                                    'Bedrag inclusief geheven BTW': p_Bedrag_inclusief_geheven_BTW,
                                                                })
                                                            })
                                                        })])
                                                        default: return _pa.au($[0])
                                                    }
                                                }))
                                                const p_Omschrijving: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Omschrijving = _pa.cc($['Omschrijving'], ($) => $)
                                                const p_Type: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type = _pa.cc($['Type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type => {
                                                    switch ($[0]) {
                                                        case 'Balans': return _pa.ss($, ($) => ['Balans', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_Balans_item: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type.SG.Balans.Balans_item = _pa.cc($['Balans item'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Jaarbeheer']['Balans']['Overige balans items'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'reference': $,
                                                                        'location 2 string': l2s,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Balans item': p_Balans_item,
                                                                })
                                                            })
                                                        })])
                                                        case 'Kosten': return _pa.ss($, ($) => ['Kosten', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_Grootboekrekening: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type.SG.Kosten.Grootboekrekening = _pa.cc($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Grootboekrekeningen']['Resultaat'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'reference': $,
                                                                        'location 2 string': l2s,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Grootboekrekening': p_Grootboekrekening,
                                                                })
                                                            })
                                                        })])
                                                        default: return _pa.au($[0])
                                                    }
                                                }))
                                                return ({
                                                    'Bedrag': p_Bedrag,
                                                    'Omschrijving': p_Omschrijving,
                                                    'Type': p_Type,
                                                })
                                            }))
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            }))
                            const p_Type: _i_out._T_Handelstransacties.Inkopen.D.Type = _pa.cc($['Type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Type => {
                                switch ($[0]) {
                                    case 'Bonnetje': return _pa.ss($, ($) => ['Bonnetje', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Inkoop (met crediteur)': return _pa.ss($, ($) => ['Inkoop (met crediteur)', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Crediteur: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Inkoop_$po_met_crediteur$pc_.Crediteur = _pa.cc($['Crediteur'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Beheer']['Leveranciers'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            const p_Factuurnummer: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Inkoop_$po_met_crediteur$pc_.Factuurnummer = _pa.cc($['Factuurnummer'], ($) => $)
                                            return ({
                                                'Crediteur': p_Crediteur,
                                                'Factuurnummer': p_Factuurnummer,
                                            })
                                        })
                                    })])
                                    case 'Loonheffing': return _pa.ss($, ($) => ['Loonheffing', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Ronde: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Loonheffing.Ronde = _pa.cc($['Ronde'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Resultaat']['Salarisrondes'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            return ({
                                                'Ronde': p_Ronde,
                                            })
                                        })
                                    })])
                                    case 'Salaris': return _pa.ss($, ($) => ['Salaris', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Ronde: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Salaris.Ronde = _pa.cc($['Ronde'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Resultaat']['Salarisrondes'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            const p_Medewerker: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Salaris.Medewerker = _pa.cc($['Medewerker'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Beheer']['Medewerkers'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            return ({
                                                'Ronde': p_Ronde,
                                                'Medewerker': p_Medewerker,
                                            })
                                        })
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            return ({
                                'Afhandeling': p_Afhandeling,
                                'BTW-regime': p_BTW$mi_regime,
                                'Brondocument': p_Brondocument,
                                'Datum': p_Datum,
                                'Regels': p_Regels,
                                'Type': p_Type,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Verkopen: _i_out._T_Handelstransacties.Verkopen = _pa.cc($['Verkopen'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_Datum: _i_out._T_Handelstransacties.Verkopen.D.Datum = _pa.cc($['Datum'], ($) => $)
                            const p_Betalingstermijn: _i_out._T_Handelstransacties.Verkopen.D.Betalingstermijn = _pa.cc($['Betalingstermijn'], ($) => $)
                            const p_BTW$mi_periode: _i_out._T_Handelstransacties.Verkopen.D.BTW$mi_periode = _pa.cc($['BTW-periode'], ($) => _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    params['values']['Jaarbeheer']['Resultaat']['BTW periodes'],
                                    null
                                ),
                                {
                                    'reference': $,
                                    'location 2 string': l2s,
                                }
                            ))
                            const p_Brondocument: _i_out._T_Handelstransacties.Verkopen.D.Brondocument = _pa.cc($['Brondocument'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Brondocument => {
                                switch ($[0]) {
                                    case 'Toegevoegd': return _pa.ss($, ($) => ['Toegevoegd', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Document: _i_out._T_Handelstransacties.Verkopen.D.Brondocument.SG.Toegevoegd.Document = _pa.cc($['Document'], ($) => $)
                                            return ({
                                                'Document': p_Document,
                                            })
                                        })
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Debiteur: _i_out._T_Handelstransacties.Verkopen.D.Debiteur = _pa.cc($['Debiteur'], ($) => _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    params['values']['Beheer']['Klanten'],
                                    null
                                ),
                                {
                                    'reference': $,
                                    'location 2 string': l2s,
                                }
                            ))
                            const p_Contracttype: _i_out._T_Handelstransacties.Verkopen.D.Contracttype = _pa.cc($['Contracttype'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Contracttype => {
                                switch ($[0]) {
                                    case 'Project': return _pa.ss($, ($) => ['Project', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Project: _i_out._T_Handelstransacties.Verkopen.D.Contracttype.SG.Project.Project = _pa.cc($['Project'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    p_Debiteur['entry']['Projecten'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            const p_Offerte: _i_out._T_Handelstransacties.Verkopen.D.Contracttype.SG.Project.Offerte = _pa.cc($['Offerte'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    p_Project['entry']['Offertes'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            return ({
                                                'Project': p_Project,
                                                'Offerte': p_Offerte,
                                            })
                                        })
                                    })])
                                    case 'Licentieovereenkomst': return _pa.ss($, ($) => ['Licentieovereenkomst', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Overeenkomst: _i_out._T_Handelstransacties.Verkopen.D.Contracttype.SG.Licentieovereenkomst.Overeenkomst = _pa.cc($['Overeenkomst'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    p_Debiteur['entry']['Licentieovereenkomsten'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            return ({
                                                'Overeenkomst': p_Overeenkomst,
                                            })
                                        })
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Afhandeling: _i_out._T_Handelstransacties.Verkopen.D.Afhandeling = _pa.cc($['Afhandeling'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Afhandeling => {
                                switch ($[0]) {
                                    case 'Mutaties': return _pa.ss($, ($) => ['Mutaties', _pa.block(() => {
                                        return null
                                    })])
                                    case 'Rekening courant': return _pa.ss($, ($) => ['Rekening courant', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_Rekening_courant: _i_out._T_Handelstransacties.Verkopen.D.Afhandeling.SG.Rekening_courant.Rekening_courant = _pa.cc($['Rekening courant'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            return ({
                                                'Rekening courant': p_Rekening_courant,
                                            })
                                        })
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            const p_Regels: _i_out._T_Handelstransacties.Verkopen.D.Regels = _pa.cc($['Regels'], ($) => _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => _pa.block(() => {
                                                const p_BTW$mi_regime: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime = _pa.cc($['BTW-regime'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                    switch ($[0]) {
                                                        case 'Intracommunautair': return _pa.ss($, ($) => ['Intracommunautair', _pa.block(() => {
                                                            return null
                                                        })])
                                                        case 'Standaard': return _pa.ss($, ($) => ['Standaard', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_BTW$mi_categorie: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime.SG.Standaard.BTW$mi_categorie = _pa.cc($['BTW-categorie'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Beheer']['BTW-categorieen'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'reference': $,
                                                                        'location 2 string': l2s,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'BTW-categorie': p_BTW$mi_categorie,
                                                                })
                                                            })
                                                        })])
                                                        case 'Binnenland: heffing verlegd': return _pa.ss($, ($) => ['Binnenland: heffing verlegd', _pa.block(() => {
                                                            return null
                                                        })])
                                                        default: return _pa.au($[0])
                                                    }
                                                }))
                                                const p_Bedrag_exclusief_BTW: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Bedrag_exclusief_BTW = _pa.cc($['Bedrag exclusief BTW'], ($) => $)
                                                const p_Contracttype: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype = _pa.cc($['Contracttype'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype => {
                                                    switch ($[0]) {
                                                        case 'Project': return _pa.ss($, ($) => ['Project', _pa.block(() => {
                                                            const c_Definitie = _pd.implement_me()
                                                            return _pa.block(() => {
                                                                const p_Opbrengst: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype.SG.Project.Opbrengst = _pa.cc($['Opbrengst'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        c_Definitie['Offerte']['entry']['Opbrengsten'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'reference': $,
                                                                        'location 2 string': l2s,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Opbrengst': p_Opbrengst,
                                                                })
                                                            })
                                                        })])
                                                        case 'Los': return _pa.ss($, ($) => ['Los', _pa.block(() => {
                                                            return null
                                                        })])
                                                        case 'Licentieovereenkomst': return _pa.ss($, ($) => ['Licentieovereenkomst', _pa.block(() => {
                                                            const c_Definitie = _pd.implement_me()
                                                            return _pa.block(() => {
                                                                const p_Periode: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype.SG.Licentieovereenkomst.Periode = _pa.cc($['Periode'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        c_Definitie['Overeenkomst']['entry']['Periodes'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'reference': $,
                                                                        'location 2 string': l2s,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Periode': p_Periode,
                                                                })
                                                            })
                                                        })])
                                                        default: return _pa.au($[0])
                                                    }
                                                }))
                                                const p_Omschrijving: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Omschrijving = _pa.cc($['Omschrijving'], ($) => $)
                                                const p_Type: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type = _pa.cc($['Type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type => {
                                                    switch ($[0]) {
                                                        case 'Opbrengsten': return _pa.ss($, ($) => ['Opbrengsten', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_Grootboekrekening: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type.SG.Opbrengsten.Grootboekrekening = _pa.cc($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Grootboekrekeningen']['Resultaat'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'reference': $,
                                                                        'location 2 string': l2s,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Grootboekrekening': p_Grootboekrekening,
                                                                })
                                                            })
                                                        })])
                                                        case 'Balans': return _pa.ss($, ($) => ['Balans', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_Balans_item: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type.SG.Balans.Balans_item = _pa.cc($['Balans item'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Jaarbeheer']['Balans']['Overige balans items'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'reference': $,
                                                                        'location 2 string': l2s,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Balans item': p_Balans_item,
                                                                })
                                                            })
                                                        })])
                                                        default: return _pa.au($[0])
                                                    }
                                                }))
                                                return ({
                                                    'BTW-regime': p_BTW$mi_regime,
                                                    'Bedrag exclusief BTW': p_Bedrag_exclusief_BTW,
                                                    'Contracttype': p_Contracttype,
                                                    'Omschrijving': p_Omschrijving,
                                                    'Type': p_Type,
                                                })
                                            }))
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            }))
                            return ({
                                'Datum': p_Datum,
                                'Betalingstermijn': p_Betalingstermijn,
                                'BTW-periode': p_BTW$mi_periode,
                                'Brondocument': p_Brondocument,
                                'Debiteur': p_Debiteur,
                                'Contracttype': p_Contracttype,
                                'Afhandeling': p_Afhandeling,
                                'Regels': p_Regels,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'Inkopen': p_Inkopen,
            'Verkopen': p_Verkopen,
        })
    })
})
export const r_Balans_Resultaat_Mutatie: _i_signatures._T_Balans_Resultaat_Mutatie = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Jaar: _i_out._T_Balans_Resultaat_Mutatie.Jaar = _pa.cc($['Jaar'], ($) => $.map(($) => _pa.block(() => {
            return _i_generic.get_entry(
                params['lookups']['Jaren'],
                {
                    'reference': $,
                    'location 2 string': l2s,
                }
            )
        })))
        const p_type: _i_out._T_Balans_Resultaat_Mutatie._type = _pa.cc($['type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Balans_Resultaat_Mutatie._type => {
            switch ($[0]) {
                case 'Inkoop': return _pa.ss($, ($) => ['Inkoop', _pa.block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            params['values']['Handelstransacties']['Inkopen'],
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'Verkoop': return _pa.ss($, ($) => ['Verkoop', _pa.block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            params['values']['Handelstransacties']['Verkopen'],
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                case 'BTW-periode': return _pa.ss($, ($) => ['BTW-periode', _pa.block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            params['values']['Jaarbeheer']['Resultaat']['BTW periodes'],
                            null
                        ),
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    )
                })])
                default: return _pa.au($[0])
            }
        }))
        return ({
            'Jaar': p_Jaar,
            'type': p_type,
        })
    })
})
export const r_Mutaties: _i_signatures._T_Mutaties = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Verrekenpost_mutaties: _i_out._T_Mutaties.Verrekenpost_mutaties = _pa.cc($['Verrekenpost mutaties'], ($) => _pa.block(() => {
            const benchmark = params['values']['Jaarbeheer']['Balans']['Verrekenposten']
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        const linked_entry = _pd.implement_me()
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            return _i_generic.resolve_dictionary(
                                $,
                                {
                                    'map': ($, $p) => _pa.block(() => {
                                        return _pa.cc($['value'], ($) => _pa.block(() => {
                                            const p_Bedrag: _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Bedrag = _pa.cc($['Bedrag'], ($) => $)
                                            const p_Afhandeling: _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling = _pa.cc($['Afhandeling'], ($) => _pa.cc($['state group'], ($): _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling => {
                                                switch ($[0]) {
                                                    case 'Resultaat': return _pa.ss($, ($) => ['Resultaat', _pa.block(() => {
                                                        return r_Balans_Resultaat_Mutatie(
                                                            $,
                                                            {
                                                                'location 2 string': l2s,
                                                                'parameters': ({
                                                                    'values': params['values'],
                                                                    'lookups': params['lookups'],
                                                                }),
                                                            }
                                                        )
                                                    })])
                                                    case 'Balans': return _pa.ss($, ($) => ['Balans', _pa.block(() => {
                                                        return _pa.cc($['state group'], ($): _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.SG.Balans => {
                                                            switch ($[0]) {
                                                                case 'Informele rekening': return _pa.ss($, ($) => ['Informele rekening', _pa.block(() => {
                                                                    return _pa.block(() => {
                                                                        const p_Informele_rekening: _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.SG.Balans.SG.Informele_rekening.Informele_rekening = _pa.cc($['Informele rekening'], ($) => _i_generic.get_entry(
                                                                            _i_generic.dictionary_to_lookup(
                                                                                params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
                                                                                null
                                                                            ),
                                                                            {
                                                                                'reference': $,
                                                                                'location 2 string': l2s,
                                                                            }
                                                                        ))
                                                                        return ({
                                                                            'Informele rekening': p_Informele_rekening,
                                                                        })
                                                                    })
                                                                })])
                                                                default: return _pa.au($[0])
                                                            }
                                                        })
                                                    })])
                                                    default: return _pa.au($[0])
                                                }
                                            }))
                                            return ({
                                                'Bedrag': p_Bedrag,
                                                'Afhandeling': p_Afhandeling,
                                            })
                                        }))
                                    }),
                                    'location 2 string': l2s,
                                }
                            )
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Bankrekening_Mutatie_Verwerkingen: _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen = _pa.cc($['Bankrekening Mutatie Verwerkingen'], ($) => _pa.block(() => {
            const benchmark = params['values']['Jaarbeheer']['Balans']['Bankrekeningen']
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        const linked_entry = _pd.implement_me()
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            return _i_generic.resolve_dictionary(
                                $,
                                {
                                    'map': ($, $p) => _pa.block(() => {
                                        return _pa.cc($['value'], ($) => _pa.cc($['state group'], ($): _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D => {
                                            switch ($[0]) {
                                                case 'Resultaat': return _pa.ss($, ($) => ['Resultaat', _pa.block(() => {
                                                    return r_Balans_Resultaat_Mutatie(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'values': params['values'],
                                                                'lookups': params['lookups'],
                                                            }),
                                                        }
                                                    )
                                                })])
                                                case 'Balans': return _pa.ss($, ($) => ['Balans', _pa.block(() => {
                                                    return _pa.cc($['state group'], ($): _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG.Balans => {
                                                        switch ($[0]) {
                                                            case 'Verrekenpost': return _pa.ss($, ($) => ['Verrekenpost', _pa.block(() => {
                                                                return _pa.block(() => {
                                                                    const p_Verrekenpost: _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG.Balans.SG.Verrekenpost.Verrekenpost = _pa.cc($['Verrekenpost'], ($) => _i_generic.get_entry(
                                                                        _i_generic.dictionary_to_lookup(
                                                                            params['values']['Jaarbeheer']['Balans']['Verrekenposten'],
                                                                            null
                                                                        ),
                                                                        {
                                                                            'reference': $,
                                                                            'location 2 string': l2s,
                                                                        }
                                                                    ))
                                                                    return ({
                                                                        'Verrekenpost': p_Verrekenpost,
                                                                    })
                                                                })
                                                            })])
                                                            case 'Informele rekening': return _pa.ss($, ($) => ['Informele rekening', _pa.block(() => {
                                                                return _pa.block(() => {
                                                                    const p_Informele_rekening: _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG.Balans.SG.Informele_rekening.Informele_rekening = _pa.cc($['Informele rekening'], ($) => _i_generic.get_entry(
                                                                        _i_generic.dictionary_to_lookup(
                                                                            params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
                                                                            null
                                                                        ),
                                                                        {
                                                                            'reference': $,
                                                                            'location 2 string': l2s,
                                                                        }
                                                                    ))
                                                                    return ({
                                                                        'Informele rekening': p_Informele_rekening,
                                                                    })
                                                                })
                                                            })])
                                                            default: return _pa.au($[0])
                                                        }
                                                    })
                                                })])
                                                default: return _pa.au($[0])
                                            }
                                        }))
                                    }),
                                    'location 2 string': l2s,
                                }
                            )
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_Memoriaal_boekingen: _i_out._T_Mutaties.Memoriaal_boekingen = _pa.cc($['Memoriaal boekingen'], ($) => _pa.block(() => {
            const benchmark = params['values']['Jaarbeheer']['Balans']['Overige balans items']
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _pa.block(() => {
                        const linked_entry = _pd.implement_me()
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            return _i_generic.resolve_dictionary(
                                $,
                                {
                                    'map': ($, $p) => _pa.block(() => {
                                        return _pa.cc($['value'], ($) => _pa.block(() => {
                                            const p_Bedrag: _i_out._T_Mutaties.Memoriaal_boekingen.D.D.Bedrag = _pa.cc($['Bedrag'], ($) => $)
                                            const p_Datum: _i_out._T_Mutaties.Memoriaal_boekingen.D.D.Datum = _pa.cc($['Datum'], ($) => $)
                                            const p_Grootboekrekening: _i_out._T_Mutaties.Memoriaal_boekingen.D.D.Grootboekrekening = _pa.cc($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Grootboekrekeningen']['Balans'],
                                                    null
                                                ),
                                                {
                                                    'reference': $,
                                                    'location 2 string': l2s,
                                                }
                                            ))
                                            const p_Omschrijving: _i_out._T_Mutaties.Memoriaal_boekingen.D.D.Omschrijving = _pa.cc($['Omschrijving'], ($) => $)
                                            return ({
                                                'Bedrag': p_Bedrag,
                                                'Datum': p_Datum,
                                                'Grootboekrekening': p_Grootboekrekening,
                                                'Omschrijving': p_Omschrijving,
                                            })
                                        }))
                                    }),
                                    'location 2 string': l2s,
                                }
                            )
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'Verrekenpost mutaties': p_Verrekenpost_mutaties,
            'Bankrekening Mutatie Verwerkingen': p_Bankrekening_Mutatie_Verwerkingen,
            'Memoriaal boekingen': p_Memoriaal_boekingen,
        })
    })
})
export const r_Eerste_boekjaar: _i_signatures._T_Eerste_boekjaar = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.cc($['state group'], ($): _i_out._T_Eerste_boekjaar => {
        switch ($[0]) {
            case 'Ja': return _pa.ss($, ($) => ['Ja', _pa.block(() => {
                return null
            })])
            case 'Nee': return _pa.ss($, ($) => ['Nee', _pa.block(() => {
                return _pa.block(() => {
                    const p_Vorig_boekjaar: _i_out._T_Eerste_boekjaar.SG.Nee.Vorig_boekjaar = _pa.cc($['Vorig boekjaar'], ($) => _i_generic.get_entry(
                        params['lookups']['Jaren'],
                        {
                            'reference': $,
                            'location 2 string': l2s,
                        }
                    ))
                    return ({
                        'Vorig boekjaar': p_Vorig_boekjaar,
                    })
                })
            })])
            default: return _pa.au($[0])
        }
    })
})
export const r_Jaren: _i_signatures._T_Jaren = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => _pa.block(() => {
                        const p_Afgesloten: _i_out._T_Jaren.D.Afgesloten = _pa.cc($['Afgesloten'], ($) => _pa.cc($['state group'], ($): _i_out._T_Jaren.D.Afgesloten => {
                            switch ($[0]) {
                                case 'Ja': return _pa.ss($, ($) => ['Ja', _pa.block(() => {
                                    return null
                                })])
                                case 'Nee': return _pa.ss($, ($) => ['Nee', _pa.block(() => {
                                    return null
                                })])
                                default: return _pa.au($[0])
                            }
                        }))
                        const p_Startdatum_boekjaar: _i_out._T_Jaren.D.Startdatum_boekjaar = _pa.cc($['Startdatum boekjaar'], ($) => $)
                        const p_Grootboekrekeningen: _i_out._T_Jaren.D.Grootboekrekeningen = _pa.cc($['Grootboekrekeningen'], ($) => r_Grootboekrekeningen(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                        const p_Eerste_boekjaar: _i_out._T_Jaren.D.Eerste_boekjaar = _pa.cc($['Eerste boekjaar'], ($) => r_Eerste_boekjaar(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': ({
                                        'Jaren': $p['not circular dependent siblings'],
                                    }),
                                }),
                            }
                        ))
                        const p_Jaarbeheer: _i_out._T_Jaren.D.Jaarbeheer = _pa.cc($['Jaarbeheer'], ($) => r_Jaarbeheer(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'Grootboekrekeningen': p_Grootboekrekeningen,
                                        'Eerste boekjaar': p_Eerste_boekjaar,
                                    }),
                                    'lookups': ({
                                        'Jaren': $p['not circular dependent siblings'],
                                    }),
                                }),
                            }
                        ))
                        const p_Handelstransacties: _i_out._T_Jaren.D.Handelstransacties = _pa.cc($['Handelstransacties'], ($) => r_Handelstransacties(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'Beheer': params['values']['Beheer'],
                                        'Grootboekrekeningen': p_Grootboekrekeningen,
                                        'Jaarbeheer': p_Jaarbeheer,
                                    }),
                                    'lookups': null,
                                }),
                            }
                        ))
                        const p_Mutaties: _i_out._T_Jaren.D.Mutaties = _pa.cc($['Mutaties'], ($) => r_Mutaties(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'Beheer': params['values']['Beheer'],
                                        'Grootboekrekeningen': p_Grootboekrekeningen,
                                        'Jaarbeheer': p_Jaarbeheer,
                                        'Handelstransacties': p_Handelstransacties,
                                    }),
                                    'lookups': ({
                                        'Jaren': $p['not circular dependent siblings'],
                                    }),
                                }),
                            }
                        ))
                        return ({
                            'Afgesloten': p_Afgesloten,
                            'Startdatum boekjaar': p_Startdatum_boekjaar,
                            'Grootboekrekeningen': p_Grootboekrekeningen,
                            'Eerste boekjaar': p_Eerste_boekjaar,
                            'Jaarbeheer': p_Jaarbeheer,
                            'Handelstransacties': p_Handelstransacties,
                            'Mutaties': p_Mutaties,
                        })
                    }))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Root: _i_signatures._T_Root = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_Fiscaal: _i_out._T_Root.Fiscaal = _pa.cc($['Fiscaal'], ($) => r_Fiscaal(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': null,
                }),
            }
        ))
        const p_Categorieen: _i_out._T_Root.Categorieen = _pa.cc($['Categorieen'], ($) => r_Grootboek_Categorieen(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'Fiscaal': p_Fiscaal,
                    }),
                    'lookups': null,
                }),
            }
        ))
        const p_Beheer: _i_out._T_Root.Beheer = _pa.cc($['Beheer'], ($) => r_Beheer(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'Grootboek Categorieen': p_Categorieen,
                    }),
                    'lookups': null,
                }),
            }
        ))
        const p_Jaren: _i_out._T_Root.Jaren = _pa.cc($['Jaren'], ($) => r_Jaren(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': ({
                        'Beheer': p_Beheer,
                    }),
                    'lookups': null,
                }),
            }
        ))
        return ({
            'Fiscaal': p_Fiscaal,
            'Categorieen': p_Categorieen,
            'Beheer': p_Beheer,
            'Jaren': p_Jaren,
        })
    })
})
