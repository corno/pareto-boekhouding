import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from 'pareto-core-refiner/dist/resolve'
import * as _i_out from "../../../../../interface/generated/pareto/schemas/boekhouding/data_types/source"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding/data_types/resolve"


export const Balans_Resultaat_Mutatie: _i_signatures._T_Balans_Resultaat_Mutatie =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Jaar: _i_out._T_Balans_Resultaat_Mutatie.Jaar = _p.sg($['Jaar'], ($) => $.map(($) => _p.block(() => {
            return _i_generic.get_entry(
                params['lookups']['Jaren'],
                {
                    'location 2 string': l2s,
                    'reference': $,
                }
            )
        })))

        const temp_jaar_beheer = p_Jaar.transform(
            ($) => $.entry.Jaarbeheer,
            () => params.values.Jaarbeheer
        )
        const temp_handelstransacties = p_Jaar.transform(
            ($) => $.entry.Handelstransacties,
            () => params.values.Handelstransacties
        )
        const p_type: _i_out._T_Balans_Resultaat_Mutatie._type = _p.sg($['type'], ($) => _p.sg($['state group'], ($): _i_out._T_Balans_Resultaat_Mutatie._type => {
            switch ($[0]) {
                case 'BTW-periode': return _p.ss($, ($) => ['BTW-periode', _p.block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            temp_jaar_beheer['Resultaat']['BTW periodes'],
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                case 'Inkoop': return _p.ss($, ($) => ['Inkoop', _p.block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            temp_handelstransacties['Inkopen'],
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                case 'Verkoop': return _p.ss($, ($) => ['Verkoop', _p.block(() => {
                    return _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            temp_handelstransacties['Verkopen'],
                            null
                        ),
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    )
                })])
                default: return _p.au($[0])
            }
        }))
        return ({
            'Jaar': p_Jaar,
            'type': p_type,
        })
    })
})
export const Beheer: _i_signatures._T_Beheer =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_BTW$mi_categorieen: _i_out._T_Beheer.BTW$mi_categorieen = _p.sg($['BTW-categorieen'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_BTW$mi_heffing: _i_out._T_Beheer.BTW$mi_categorieen.D.BTW$mi_heffing = _p.sg($['BTW-heffing'], ($) => _p.sg($['state group'], ($): _i_out._T_Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                switch ($[0]) {
                                    case 'Ja': return _p.ss($, ($) => ['Ja', _p.block(() => {
                                        return _p.block(() => {
                                            const p_BTW$mi_promillage: _i_out._T_Beheer.BTW$mi_categorieen.D.BTW$mi_heffing.SG.Ja.BTW$mi_promillage = _p.sg($['BTW-promillage'], ($) => $)
                                            return ({
                                                'BTW-promillage': p_BTW$mi_promillage,
                                            })
                                        })
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            return ({
                                'BTW-heffing': p_BTW$mi_heffing,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_Grootboekrekeningen: _i_out._T_Beheer.Grootboekrekeningen = _p.sg($['Grootboekrekeningen'], ($) => _p.block(() => {
            const p_Balans: _i_out._T_Beheer.Grootboekrekeningen.Balans = _p.sg($['Balans'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => _p.block(() => {
                                const p_Hoofdcategorie: _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Hoofdcategorie = _p.sg($['Hoofdcategorie'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['Grootboek Categorieen']['Balans'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_Subcategorie: _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Subcategorie = _p.sg($['Subcategorie'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        p_Hoofdcategorie['entry']['Subcategorieen'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_Zijde: _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Zijde = _p.sg($['Zijde'], ($) => _p.sg($['state group'], ($): _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Zijde => {
                                    switch ($[0]) {
                                        case 'Activa': return _p.ss($, ($) => ['Activa', _p.block(() => {
                                            return null
                                        })])
                                        case 'Passiva': return _p.ss($, ($) => ['Passiva', _p.block(() => {
                                            return null
                                        })])
                                        default: return _p.au($[0])
                                    }
                                }))
                                return ({
                                    'Hoofdcategorie': p_Hoofdcategorie,
                                    'Subcategorie': p_Subcategorie,
                                    'Zijde': p_Zijde,
                                })
                            }))
                        }),
                    }
                )
            }))
            const p_Resultaat: _i_out._T_Beheer.Grootboekrekeningen.Resultaat = _p.sg($['Resultaat'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => _p.block(() => {
                                const p_Hoofdcategorie: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Hoofdcategorie = _p.sg($['Hoofdcategorie'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['Grootboek Categorieen']['Resultaat'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_Subcategorie: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Subcategorie = _p.sg($['Subcategorie'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        p_Hoofdcategorie['entry']['Subcategorieen'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_Zijde: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde = _p.sg($['Zijde'], ($) => _p.sg($['state group'], ($): _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde => {
                                    switch ($[0]) {
                                        case 'Kosten': return _p.ss($, ($) => ['Kosten', _p.block(() => {
                                            return _p.block(() => {
                                                const p_Correctie_op_vennootschapsbelasting: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting = _p.sg($['Correctie op vennootschapsbelasting'], ($) => _p.sg($['state group'], ($): _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting => {
                                                    switch ($[0]) {
                                                        case 'Ja': return _p.ss($, ($) => ['Ja', _p.block(() => {
                                                            return _p.block(() => {
                                                                const p_Correctietype: _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting.SG.Ja.Correctietype = _p.sg($['Correctietype'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Grootboek Categorieen']['Correctietypes vennootschapsbelasting'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'reference': $,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Correctietype': p_Correctietype,
                                                                })
                                                            })
                                                        })])
                                                        case 'Nee': return _p.ss($, ($) => ['Nee', _p.block(() => {
                                                            return null
                                                        })])
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                return ({
                                                    'Correctie op vennootschapsbelasting': p_Correctie_op_vennootschapsbelasting,
                                                })
                                            })
                                        })])
                                        case 'Opbrengsten': return _p.ss($, ($) => ['Opbrengsten', _p.block(() => {
                                            return null
                                        })])
                                        default: return _p.au($[0])
                                    }
                                }))
                                return ({
                                    'Hoofdcategorie': p_Hoofdcategorie,
                                    'Subcategorie': p_Subcategorie,
                                    'Zijde': p_Zijde,
                                })
                            }))
                        }),
                    }
                )
            }))
            return ({
                'Balans': p_Balans,
                'Resultaat': p_Resultaat,
            })
        }))
        const p_Rekeningen: _i_out._T_Beheer.Rekeningen = _p.sg($['Rekeningen'], ($) => _p.block(() => {
            const p_Bank: _i_out._T_Beheer.Rekeningen.Bank = _p.sg($['Bank'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => null)
                        }),
                    }
                )
            }))
            const p_Informeel: _i_out._T_Beheer.Rekeningen.Informeel = _p.sg($['Informeel'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => null)
                        }),
                    }
                )
            }))
            return ({
                'Bank': p_Bank,
                'Informeel': p_Informeel,
            })
        }))
        const p_Gebruikers: _i_out._T_Beheer.Gebruikers = _p.sg($['Gebruikers'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Volledige_naam: _i_out._T_Beheer.Gebruikers.D.Volledige_naam = _p.sg($['Volledige naam'], ($) => $)
                            const p_Wachtwoord: _i_out._T_Beheer.Gebruikers.D.Wachtwoord = _p.sg($['Wachtwoord'], ($) => $)
                            return ({
                                'Volledige naam': p_Volledige_naam,
                                'Wachtwoord': p_Wachtwoord,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_Klanten: _i_out._T_Beheer.Klanten = _p.sg($['Klanten'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Licentieovereenkomsten: _i_out._T_Beheer.Klanten.D.Licentieovereenkomsten = _p.sg($['Licentieovereenkomsten'], ($) => _p.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _p.block(() => {
                                            return _p.sg($['value'], ($) => _p.block(() => {
                                                const p_Periodes: _i_out._T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes = _p.sg($['Periodes'], ($) => _p.block(() => {
                                                    return _i_generic.resolve_dictionary(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'map': ($, $p) => _p.block(() => {
                                                                return _p.sg($['value'], ($) => _p.block(() => {
                                                                    const p_Bedrag: _i_out._T_Beheer.Klanten.D.Licentieovereenkomsten.D.Periodes.D.Bedrag = _p.sg($['Bedrag'], ($) => $)
                                                                    return ({
                                                                        'Bedrag': p_Bedrag,
                                                                    })
                                                                }))
                                                            }),
                                                        }
                                                    )
                                                }))
                                                return ({
                                                    'Periodes': p_Periodes,
                                                })
                                            }))
                                        }),
                                    }
                                )
                            }))
                            const p_Projecten: _i_out._T_Beheer.Klanten.D.Projecten = _p.sg($['Projecten'], ($) => _p.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _p.block(() => {
                                            return _p.sg($['value'], ($) => _p.block(() => {
                                                const p_Offertes: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes = _p.sg($['Offertes'], ($) => _p.block(() => {
                                                    return _i_generic.resolve_dictionary(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'map': ($, $p) => _p.block(() => {
                                                                return _p.sg($['value'], ($) => _p.block(() => {
                                                                    const p_Opbrengsten: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten = _p.sg($['Opbrengsten'], ($) => _p.block(() => {
                                                                        return _i_generic.resolve_dictionary(
                                                                            $,
                                                                            {
                                                                                'location 2 string': l2s,
                                                                                'map': ($, $p) => _p.block(() => {
                                                                                    return _p.sg($['value'], ($) => _p.block(() => {
                                                                                        const p_Type: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type = _p.sg($['Type'], ($) => _p.sg($['state group'], ($): _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                                            switch ($[0]) {
                                                                                                case 'Project': return _p.ss($, ($) => ['Project', _p.block(() => {
                                                                                                    return _p.block(() => {
                                                                                                        const p_Bedrag: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type.SG.Project.Bedrag = _p.sg($['Bedrag'], ($) => $)
                                                                                                        const p_Betaaldatum: _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type.SG.Project.Betaaldatum = _p.sg($['Betaaldatum'], ($) => $)
                                                                                                        return ({
                                                                                                            'Bedrag': p_Bedrag,
                                                                                                            'Betaaldatum': p_Betaaldatum,
                                                                                                        })
                                                                                                    })
                                                                                                })])
                                                                                                default: return _p.au($[0])
                                                                                            }
                                                                                        }))
                                                                                        return ({
                                                                                            'Type': p_Type,
                                                                                        })
                                                                                    }))
                                                                                }),
                                                                            }
                                                                        )
                                                                    }))
                                                                    return ({
                                                                        'Opbrengsten': p_Opbrengsten,
                                                                    })
                                                                }))
                                                            }),
                                                        }
                                                    )
                                                }))
                                                return ({
                                                    'Offertes': p_Offertes,
                                                })
                                            }))
                                        }),
                                    }
                                )
                            }))
                            return ({
                                'Licentieovereenkomsten': p_Licentieovereenkomsten,
                                'Projecten': p_Projecten,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_Leveranciers: _i_out._T_Beheer.Leveranciers = _p.sg($['Leveranciers'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => null)
                    }),
                }
            )
        }))
        const p_Medewerkers: _i_out._T_Beheer.Medewerkers = _p.sg($['Medewerkers'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => null)
                    }),
                }
            )
        }))
        return ({
            'BTW-categorieen': p_BTW$mi_categorieen,
            'Gebruikers': p_Gebruikers,
            'Grootboekrekeningen': p_Grootboekrekeningen,
            'Klanten': p_Klanten,
            'Leveranciers': p_Leveranciers,
            'Medewerkers': p_Medewerkers,
            'Rekeningen': p_Rekeningen,
        })
    })
})
export const Eerste_boekjaar: _i_signatures._T_Eerste_boekjaar =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.sg($['state group'], ($): _i_out._T_Eerste_boekjaar => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => ['Ja', _p.block(() => {
                return null
            })])
            case 'Nee': return _p.ss($, ($) => ['Nee', _p.block(() => {
                return _p.block(() => {
                    const p_Vorig_boekjaar: _i_out._T_Eerste_boekjaar.SG.Nee.Vorig_boekjaar = _p.sg($['Vorig boekjaar'], ($) => _i_generic.get_entry(
                        params['lookups']['Jaren'],
                        {
                            'location 2 string': l2s,
                            'reference': $,
                        }
                    ))
                    return ({
                        'Vorig boekjaar': p_Vorig_boekjaar,
                    })
                })
            })])
            default: return _p.au($[0])
        }
    })
})
export const Fiscaal: _i_signatures._T_Fiscaal =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Balans_Hoofdcategorieen: _i_out._T_Fiscaal.Balans_Hoofdcategorieen = _p.sg($['Balans Hoofdcategorieen'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Zijde: _i_out._T_Fiscaal.Balans_Hoofdcategorieen.D.Zijde = _p.sg($['Zijde'], ($) => _p.sg($['state group'], ($): _i_out._T_Fiscaal.Balans_Hoofdcategorieen.D.Zijde => {
                                switch ($[0]) {
                                    case 'Activa': return _p.ss($, ($) => ['Activa', _p.block(() => {
                                        return null
                                    })])
                                    case 'Passiva': return _p.ss($, ($) => ['Passiva', _p.block(() => {
                                        return null
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_Subcategorieen: _i_out._T_Fiscaal.Balans_Hoofdcategorieen.D.Subcategorieen = _p.sg($['Subcategorieen'], ($) => _p.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _p.block(() => {
                                            return _p.sg($['value'], ($) => null)
                                        }),
                                    }
                                )
                            }))
                            return ({
                                'Subcategorieen': p_Subcategorieen,
                                'Zijde': p_Zijde,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_Resultaat_Hoofdcategorieen: _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen = _p.sg($['Resultaat Hoofdcategorieen'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Zijde: _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde = _p.sg($['Zijde'], ($) => _p.sg($['state group'], ($): _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde => {
                                switch ($[0]) {
                                    case 'Kosten': return _p.ss($, ($) => ['Kosten', _p.block(() => {
                                        return null
                                    })])
                                    case 'Opbrengsten': return _p.ss($, ($) => ['Opbrengsten', _p.block(() => {
                                        return null
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_Subcategorieen: _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen.D.Subcategorieen = _p.sg($['Subcategorieen'], ($) => _p.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _p.block(() => {
                                            return _p.sg($['value'], ($) => null)
                                        }),
                                    }
                                )
                            }))
                            return ({
                                'Subcategorieen': p_Subcategorieen,
                                'Zijde': p_Zijde,
                            })
                        }))
                    }),
                }
            )
        }))
        return ({
            'Balans Hoofdcategorieen': p_Balans_Hoofdcategorieen,
            'Resultaat Hoofdcategorieen': p_Resultaat_Hoofdcategorieen,
        })
    })
})
export const Grootboek_Categorieen: _i_signatures._T_Grootboek_Categorieen =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Correctietypes_vennootschapsbelasting: _i_out._T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting = _p.sg($['Correctietypes vennootschapsbelasting'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Te_corrigeren_promillage: _i_out._T_Grootboek_Categorieen.Correctietypes_vennootschapsbelasting.D.Te_corrigeren_promillage = _p.sg($['Te corrigeren promillage'], ($) => $)
                            return ({
                                'Te corrigeren promillage': p_Te_corrigeren_promillage,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_Balans: _i_out._T_Grootboek_Categorieen.Balans = _p.sg($['Balans'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Zijde: _i_out._T_Grootboek_Categorieen.Balans.D.Zijde = _p.sg($['Zijde'], ($) => _p.sg($['state group'], ($): _i_out._T_Grootboek_Categorieen.Balans.D.Zijde => {
                                switch ($[0]) {
                                    case 'Activa': return _p.ss($, ($) => ['Activa', _p.block(() => {
                                        return null
                                    })])
                                    case 'Passiva': return _p.ss($, ($) => ['Passiva', _p.block(() => {
                                        return null
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_Subcategorieen: _i_out._T_Grootboek_Categorieen.Balans.D.Subcategorieen = _p.sg($['Subcategorieen'], ($) => _p.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _p.block(() => {
                                            return _p.sg($['value'], ($) => _p.block(() => {
                                                const p_Hoofdcategorie_fiscus: _i_out._T_Grootboek_Categorieen.Balans.D.Subcategorieen.D.Hoofdcategorie_fiscus = _p.sg($['Hoofdcategorie fiscus'], ($) => _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(
                                                        params['values']['Fiscaal']['Balans Hoofdcategorieen'],
                                                        null
                                                    ),
                                                    {
                                                        'location 2 string': l2s,
                                                        'reference': $,
                                                    }
                                                ))
                                                const p_Subcategorie_fiscus: _i_out._T_Grootboek_Categorieen.Balans.D.Subcategorieen.D.Subcategorie_fiscus = _p.sg($['Subcategorie fiscus'], ($) => _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(
                                                        p_Hoofdcategorie_fiscus['entry']['Subcategorieen'],
                                                        null
                                                    ),
                                                    {
                                                        'location 2 string': l2s,
                                                        'reference': $,
                                                    }
                                                ))
                                                return ({
                                                    'Hoofdcategorie fiscus': p_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': p_Subcategorie_fiscus,
                                                })
                                            }))
                                        }),
                                    }
                                )
                            }))
                            return ({
                                'Subcategorieen': p_Subcategorieen,
                                'Zijde': p_Zijde,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_Resultaat: _i_out._T_Grootboek_Categorieen.Resultaat = _p.sg($['Resultaat'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Zijde: _i_out._T_Grootboek_Categorieen.Resultaat.D.Zijde = _p.sg($['Zijde'], ($) => _p.sg($['state group'], ($): _i_out._T_Grootboek_Categorieen.Resultaat.D.Zijde => {
                                switch ($[0]) {
                                    case 'Kosten': return _p.ss($, ($) => ['Kosten', _p.block(() => {
                                        return null
                                    })])
                                    case 'Opbrengsten': return _p.ss($, ($) => ['Opbrengsten', _p.block(() => {
                                        return null
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_Subcategorieen: _i_out._T_Grootboek_Categorieen.Resultaat.D.Subcategorieen = _p.sg($['Subcategorieen'], ($) => _p.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _p.block(() => {
                                            return _p.sg($['value'], ($) => _p.block(() => {
                                                const p_Hoofdcategorie_fiscus: _i_out._T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D.Hoofdcategorie_fiscus = _p.sg($['Hoofdcategorie fiscus'], ($) => _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(
                                                        params['values']['Fiscaal']['Resultaat Hoofdcategorieen'],
                                                        null
                                                    ),
                                                    {
                                                        'location 2 string': l2s,
                                                        'reference': $,
                                                    }
                                                ))
                                                const p_Subcategorie_fiscus: _i_out._T_Grootboek_Categorieen.Resultaat.D.Subcategorieen.D.Subcategorie_fiscus = _p.sg($['Subcategorie fiscus'], ($) => _i_generic.get_entry(
                                                    _i_generic.dictionary_to_lookup(
                                                        p_Hoofdcategorie_fiscus['entry']['Subcategorieen'],
                                                        null
                                                    ),
                                                    {
                                                        'location 2 string': l2s,
                                                        'reference': $,
                                                    }
                                                ))
                                                return ({
                                                    'Hoofdcategorie fiscus': p_Hoofdcategorie_fiscus,
                                                    'Subcategorie fiscus': p_Subcategorie_fiscus,
                                                })
                                            }))
                                        }),
                                    }
                                )
                            }))
                            return ({
                                'Subcategorieen': p_Subcategorieen,
                                'Zijde': p_Zijde,
                            })
                        }))
                    }),
                }
            )
        }))
        return ({
            'Balans': p_Balans,
            'Correctietypes vennootschapsbelasting': p_Correctietypes_vennootschapsbelasting,
            'Resultaat': p_Resultaat,
        })
    })
})
export const Grootboekrekeningen: _i_signatures._T_Grootboekrekeningen =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Balans: _i_out._T_Grootboekrekeningen.Balans = _p.sg($['Balans'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Type: _i_out._T_Grootboekrekeningen.Balans.D.Type = _p.sg($['Type'], ($) => _p.sg($['state group'], ($): _i_out._T_Grootboekrekeningen.Balans.D.Type => {
                                switch ($[0]) {
                                    case 'Bankrekening': return _p.ss($, ($) => ['Bankrekening', _p.block(() => {
                                        return null
                                    })])
                                    case 'Informele rekening': return _p.ss($, ($) => ['Informele rekening', _p.block(() => {
                                        return null
                                    })])
                                    case 'Overig': return _p.ss($, ($) => ['Overig', _p.block(() => {
                                        return null
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            return ({
                                'Type': p_Type,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_Resultaat: _i_out._T_Grootboekrekeningen.Resultaat = _p.sg($['Resultaat'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => null)
                    }),
                }
            )
        }))
        return ({
            'Balans': p_Balans,
            'Resultaat': p_Resultaat,
        })
    })
})
export const Handelstransacties: _i_signatures._T_Handelstransacties =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Inkopen: _i_out._T_Handelstransacties.Inkopen = _p.sg($['Inkopen'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Afhandeling: _i_out._T_Handelstransacties.Inkopen.D.Afhandeling = _p.sg($['Afhandeling'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Afhandeling => {
                                switch ($[0]) {
                                    case 'Mutaties': return _p.ss($, ($) => ['Mutaties', _p.block(() => {
                                        return null
                                    })])
                                    case 'Rekening courant': return _p.ss($, ($) => ['Rekening courant', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Rekening_courant: _i_out._T_Handelstransacties.Inkopen.D.Afhandeling.SG.Rekening_courant.Rekening_courant = _p.sg($['Rekening courant'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            return ({
                                                'Rekening courant': p_Rekening_courant,
                                            })
                                        })
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_BTW$mi_regime: _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime = _p.sg($['BTW-regime'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime => {
                                switch ($[0]) {
                                    case 'Binnenland: heffing verlegd': return _p.ss($, ($) => ['Binnenland: heffing verlegd', _p.block(() => {
                                        return null
                                    })])
                                    case 'Geen BTW van toepassing': return _p.ss($, ($) => ['Geen BTW van toepassing', _p.block(() => {
                                        return null
                                    })])
                                    case 'Import van buiten de EU': return _p.ss($, ($) => ['Import van buiten de EU', _p.block(() => {
                                        return null
                                    })])
                                    case 'Intracommunautair': return _p.ss($, ($) => ['Intracommunautair', _p.block(() => {
                                        return null
                                    })])
                                    case 'Standaard': return _p.ss($, ($) => ['Standaard', _p.block(() => {
                                        return _p.block(() => {
                                            const p_BTW$mi_periode: _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime.SG.Standaard.BTW$mi_periode = _p.sg($['BTW-periode'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Resultaat']['BTW periodes'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            return ({
                                                'BTW-periode': p_BTW$mi_periode,
                                            })
                                        })
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_Brondocument: _i_out._T_Handelstransacties.Inkopen.D.Brondocument = _p.sg($['Brondocument'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Brondocument => {
                                switch ($[0]) {
                                    case 'Niet van toepassing': return _p.ss($, ($) => ['Niet van toepassing', _p.block(() => {
                                        return null
                                    })])
                                    case 'Ontbreekt': return _p.ss($, ($) => ['Ontbreekt', _p.block(() => {
                                        return null
                                    })])
                                    case 'Toegevoegd': return _p.ss($, ($) => ['Toegevoegd', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Document: _i_out._T_Handelstransacties.Inkopen.D.Brondocument.SG.Toegevoegd.Document = _p.sg($['Document'], ($) => $)
                                            return ({
                                                'Document': p_Document,
                                            })
                                        })
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_Datum: _i_out._T_Handelstransacties.Inkopen.D.Datum = _p.sg($['Datum'], ($) => $)
                            const p_Regels: _i_out._T_Handelstransacties.Inkopen.D.Regels = _p.sg($['Regels'], ($) => _p.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _p.block(() => {
                                            return _p.sg($['value'], ($) => _p.block(() => {
                                                const p_Bedrag: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag = _p.sg($['Bedrag'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag => {
                                                    switch ($[0]) {
                                                        case 'Bekend': return _p.ss($, ($) => ['Bekend', _p.block(() => {
                                                            return _p.block(() => {
                                                                const p_BTW$mi_bedrag: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag.SG.Bekend.BTW$mi_bedrag = _p.sg($['BTW-bedrag'], ($) => $)
                                                                const p_Bedrag_inclusief_geheven_BTW: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag.SG.Bekend.Bedrag_inclusief_geheven_BTW = _p.sg($['Bedrag inclusief geheven BTW'], ($) => $)
                                                                return ({
                                                                    'BTW-bedrag': p_BTW$mi_bedrag,
                                                                    'Bedrag inclusief geheven BTW': p_Bedrag_inclusief_geheven_BTW,
                                                                })
                                                            })
                                                        })])
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                const p_Omschrijving: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Omschrijving = _p.sg($['Omschrijving'], ($) => $)
                                                const p_Type: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type = _p.sg($['Type'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type => {
                                                    switch ($[0]) {
                                                        case 'Balans': return _p.ss($, ($) => ['Balans', _p.block(() => {
                                                            return _p.block(() => {
                                                                const p_Balans_item: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type.SG.Balans.Balans_item = _p.sg($['Balans item'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Jaarbeheer']['Balans']['Overige balans items'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'reference': $,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Balans item': p_Balans_item,
                                                                })
                                                            })
                                                        })])
                                                        case 'Kosten': return _p.ss($, ($) => ['Kosten', _p.block(() => {
                                                            return _p.block(() => {
                                                                const p_Grootboekrekening: _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type.SG.Kosten.Grootboekrekening = _p.sg($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Grootboekrekeningen']['Resultaat'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'reference': $,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Grootboekrekening': p_Grootboekrekening,
                                                                })
                                                            })
                                                        })])
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                return ({
                                                    'Bedrag': p_Bedrag,
                                                    'Omschrijving': p_Omschrijving,
                                                    'Type': p_Type,
                                                })
                                            }))
                                        }),
                                    }
                                )
                            }))
                            const p_Type: _i_out._T_Handelstransacties.Inkopen.D.Type = _p.sg($['Type'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Inkopen.D.Type => {
                                switch ($[0]) {
                                    case 'Bonnetje': return _p.ss($, ($) => ['Bonnetje', _p.block(() => {
                                        return null
                                    })])
                                    case 'Inkoop (met crediteur)': return _p.ss($, ($) => ['Inkoop (met crediteur)', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Crediteur: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Inkoop_$po_met_crediteur$pc_.Crediteur = _p.sg($['Crediteur'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Beheer']['Leveranciers'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            const p_Factuurnummer: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Inkoop_$po_met_crediteur$pc_.Factuurnummer = _p.sg($['Factuurnummer'], ($) => $)
                                            return ({
                                                'Crediteur': p_Crediteur,
                                                'Factuurnummer': p_Factuurnummer,
                                            })
                                        })
                                    })])
                                    case 'Loonheffing': return _p.ss($, ($) => ['Loonheffing', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Ronde: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Loonheffing.Ronde = _p.sg($['Ronde'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Resultaat']['Salarisrondes'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            return ({
                                                'Ronde': p_Ronde,
                                            })
                                        })
                                    })])
                                    case 'Salaris': return _p.ss($, ($) => ['Salaris', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Ronde: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Salaris.Ronde = _p.sg($['Ronde'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Resultaat']['Salarisrondes'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            const p_Medewerker: _i_out._T_Handelstransacties.Inkopen.D.Type.SG.Salaris.Medewerker = _p.sg($['Medewerker'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Beheer']['Medewerkers'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            return ({
                                                'Medewerker': p_Medewerker,
                                                'Ronde': p_Ronde,
                                            })
                                        })
                                    })])
                                    default: return _p.au($[0])
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
                }
            )
        }))
        const p_Verkopen: _i_out._T_Handelstransacties.Verkopen = _p.sg($['Verkopen'], ($) => _p.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            const p_Datum: _i_out._T_Handelstransacties.Verkopen.D.Datum = _p.sg($['Datum'], ($) => $)
                            const p_Betalingstermijn: _i_out._T_Handelstransacties.Verkopen.D.Betalingstermijn = _p.sg($['Betalingstermijn'], ($) => $)
                            const p_BTW$mi_periode: _i_out._T_Handelstransacties.Verkopen.D.BTW$mi_periode = _p.sg($['BTW-periode'], ($) => _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    params['values']['Jaarbeheer']['Resultaat']['BTW periodes'],
                                    null
                                ),
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            ))
                            const p_Brondocument: _i_out._T_Handelstransacties.Verkopen.D.Brondocument = _p.sg($['Brondocument'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Brondocument => {
                                switch ($[0]) {
                                    case 'Toegevoegd': return _p.ss($, ($) => ['Toegevoegd', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Document: _i_out._T_Handelstransacties.Verkopen.D.Brondocument.SG.Toegevoegd.Document = _p.sg($['Document'], ($) => $)
                                            return ({
                                                'Document': p_Document,
                                            })
                                        })
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_Debiteur: _i_out._T_Handelstransacties.Verkopen.D.Debiteur = _p.sg($['Debiteur'], ($) => _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    params['values']['Beheer']['Klanten'],
                                    null
                                ),
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            ))
                            const p_Contracttype: _i_out._T_Handelstransacties.Verkopen.D.Contracttype = _p.sg($['Contracttype'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Contracttype => {
                                switch ($[0]) {
                                    case 'Licentieovereenkomst': return _p.ss($, ($) => ['Licentieovereenkomst', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Overeenkomst: _i_out._T_Handelstransacties.Verkopen.D.Contracttype.SG.Licentieovereenkomst.Overeenkomst = _p.sg($['Overeenkomst'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    p_Debiteur['entry']['Licentieovereenkomsten'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            return ({
                                                'Overeenkomst': p_Overeenkomst,
                                            })
                                        })
                                    })])
                                    case 'Project': return _p.ss($, ($) => ['Project', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Project: _i_out._T_Handelstransacties.Verkopen.D.Contracttype.SG.Project.Project = _p.sg($['Project'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    p_Debiteur['entry']['Projecten'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            const p_Offerte: _i_out._T_Handelstransacties.Verkopen.D.Contracttype.SG.Project.Offerte = _p.sg($['Offerte'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    p_Project['entry']['Offertes'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            return ({
                                                'Offerte': p_Offerte,
                                                'Project': p_Project,
                                            })
                                        })
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_parent_contract_type = p_Contracttype
                            const p_Afhandeling: _i_out._T_Handelstransacties.Verkopen.D.Afhandeling = _p.sg($['Afhandeling'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Afhandeling => {
                                switch ($[0]) {
                                    case 'Mutaties': return _p.ss($, ($) => ['Mutaties', _p.block(() => {
                                        return null
                                    })])
                                    case 'Rekening courant': return _p.ss($, ($) => ['Rekening courant', _p.block(() => {
                                        return _p.block(() => {
                                            const p_Rekening_courant: _i_out._T_Handelstransacties.Verkopen.D.Afhandeling.SG.Rekening_courant.Rekening_courant = _p.sg($['Rekening courant'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            return ({
                                                'Rekening courant': p_Rekening_courant,
                                            })
                                        })
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            const p_Regels: _i_out._T_Handelstransacties.Verkopen.D.Regels = _p.sg($['Regels'], ($) => _p.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _p.block(() => {
                                            return _p.sg($['value'], ($) => _p.block(() => {
                                                const p_BTW$mi_regime: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime = _p.sg($['BTW-regime'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                    switch ($[0]) {
                                                        case 'Binnenland: heffing verlegd': return _p.ss($, ($) => ['Binnenland: heffing verlegd', _p.block(() => {
                                                            return null
                                                        })])
                                                        case 'Intracommunautair': return _p.ss($, ($) => ['Intracommunautair', _p.block(() => {
                                                            return null
                                                        })])
                                                        case 'Standaard': return _p.ss($, ($) => ['Standaard', _p.block(() => {
                                                            return _p.block(() => {
                                                                const p_BTW$mi_categorie: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime.SG.Standaard.BTW$mi_categorie = _p.sg($['BTW-categorie'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Beheer']['BTW-categorieen'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'reference': $,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'BTW-categorie': p_BTW$mi_categorie,
                                                                })
                                                            })
                                                        })])
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                const p_Bedrag_exclusief_BTW: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Bedrag_exclusief_BTW = _p.sg($['Bedrag exclusief BTW'], ($) => $)
                                                const p_Contracttype: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype = _p.sg($['Contracttype'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype => {
                                                    switch ($[0]) {
                                                        case 'Licentieovereenkomst': return _p.ss($, ($) => ['Licentieovereenkomst', _p.block(() => {
                                                            const c_Definitie = p_parent_contract_type[0] === 'Licentieovereenkomst' ? p_parent_contract_type[1] : _pdev.implement_me("xx")
                                                            return _p.block(() => {
                                                                const p_Periode: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype.SG.Licentieovereenkomst.Periode = _p.sg($['Periode'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        c_Definitie['Overeenkomst']['entry']['Periodes'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'reference': $,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Periode': p_Periode,
                                                                })
                                                            })
                                                        })])
                                                        case 'Los': return _p.ss($, ($) => ['Los', _p.block(() => {
                                                            return null
                                                        })])
                                                        case 'Project': return _p.ss($, ($) => ['Project', _p.block(() => {
                                                            const c_Definitie = p_parent_contract_type[0] === 'Project' ? p_parent_contract_type[1] : _pdev.implement_me("xx")
                                                            return _p.block(() => {
                                                                const p_Opbrengst: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype.SG.Project.Opbrengst = _p.sg($['Opbrengst'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        c_Definitie['Offerte']['entry']['Opbrengsten'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'reference': $,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Opbrengst': p_Opbrengst,
                                                                })
                                                            })
                                                        })])
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                const p_Omschrijving: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Omschrijving = _p.sg($['Omschrijving'], ($) => $)
                                                const p_Type: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type = _p.sg($['Type'], ($) => _p.sg($['state group'], ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type => {
                                                    switch ($[0]) {
                                                        case 'Balans': return _p.ss($, ($) => ['Balans', _p.block(() => {
                                                            return _p.block(() => {
                                                                const p_Balans_item: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type.SG.Balans.Balans_item = _p.sg($['Balans item'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Jaarbeheer']['Balans']['Overige balans items'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'reference': $,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Balans item': p_Balans_item,
                                                                })
                                                            })
                                                        })])
                                                        case 'Opbrengsten': return _p.ss($, ($) => ['Opbrengsten', _p.block(() => {
                                                            return _p.block(() => {
                                                                const p_Grootboekrekening: _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type.SG.Opbrengsten.Grootboekrekening = _p.sg($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                                                    _i_generic.dictionary_to_lookup(
                                                                        params['values']['Grootboekrekeningen']['Resultaat'],
                                                                        null
                                                                    ),
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'reference': $,
                                                                    }
                                                                ))
                                                                return ({
                                                                    'Grootboekrekening': p_Grootboekrekening,
                                                                })
                                                            })
                                                        })])
                                                        default: return _p.au($[0])
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
                                    }
                                )
                            }))
                            return ({
                                'Afhandeling': p_Afhandeling,
                                'BTW-periode': p_BTW$mi_periode,
                                'Betalingstermijn': p_Betalingstermijn,
                                'Brondocument': p_Brondocument,
                                'Contracttype': p_Contracttype,
                                'Datum': p_Datum,
                                'Debiteur': p_Debiteur,
                                'Regels': p_Regels,
                            })
                        }))
                    }),
                }
            )
        }))
        return ({
            'Inkopen': p_Inkopen,
            'Verkopen': p_Verkopen,
        })
    })
})
export const Jaarbeheer: _i_signatures._T_Jaarbeheer =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Resultaat: _i_out._T_Jaarbeheer.Resultaat = _p.sg($['Resultaat'], ($) => _p.block(() => {
            const p_Grootboekrekening_voor_BTW_afrondingen: _i_out._T_Jaarbeheer.Resultaat.Grootboekrekening_voor_BTW_afrondingen = _p.sg($['Grootboekrekening voor BTW afrondingen'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Resultaat'],
                    null
                ),
                {
                    'location 2 string': l2s,
                    'reference': $,
                }
            ))
            const p_Salarisrondes: _i_out._T_Jaarbeheer.Resultaat.Salarisrondes = _p.sg($['Salarisrondes'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => null)
                        }),
                    }
                )
            }))
            const p_BTW_periodes: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes = _p.sg($['BTW periodes'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => _p.block(() => {
                                const p_1$pe__BTW$mi_categorieen: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D._11$pe__BTW$mi_categorieen = _p.sg($['1. BTW-categorieen'], ($) => _p.block(() => {
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'map': ($, $p) => _p.block(() => {
                                                return _p.sg($['value'], ($) => null)
                                            }),
                                        }
                                    )
                                }))
                                const p_Documenten: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Documenten = _p.sg($['Documenten'], ($) => _p.block(() => {
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'map': ($, $p) => _p.block(() => {
                                                return _p.sg($['value'], ($) => _p.block(() => {
                                                    const p_Bestand: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Documenten.D.Bestand = _p.sg($['Bestand'], ($) => $)
                                                    return ({
                                                        'Bestand': p_Bestand,
                                                    })
                                                }))
                                            }),
                                        }
                                    )
                                }))
                                const p_Omschrijving: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Omschrijving = _p.sg($['Omschrijving'], ($) => $)
                                const p_Status: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status = _p.sg($['Status'], ($) => _p.sg($['state group'], ($): _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status => {
                                    switch ($[0]) {
                                        case 'Aangegeven': return _p.ss($, ($) => ['Aangegeven', _p.block(() => {
                                            return _p.block(() => {
                                                const p_Afronding: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status.SG.Aangegeven.Afronding = _p.sg($['Afronding'], ($) => $)
                                                const p_Bedrag: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status.SG.Aangegeven.Bedrag = _p.sg($['Bedrag'], ($) => $)
                                                const p_Datum: _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status.SG.Aangegeven.Datum = _p.sg($['Datum'], ($) => $)
                                                return ({
                                                    'Afronding': p_Afronding,
                                                    'Bedrag': p_Bedrag,
                                                    'Datum': p_Datum,
                                                })
                                            })
                                        })])
                                        case 'Openstaand': return _p.ss($, ($) => ['Openstaand', _p.block(() => {
                                            return null
                                        })])
                                        default: return _p.au($[0])
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
                    }
                )
            }))
            return ({
                'BTW periodes': p_BTW_periodes,
                'Grootboekrekening voor BTW afrondingen': p_Grootboekrekening_voor_BTW_afrondingen,
                'Salarisrondes': p_Salarisrondes,
            })
        }))
        const p_Balans: _i_out._T_Jaarbeheer.Balans = _p.sg($['Balans'], ($) => _p.block(() => {
            const p_Beginsaldo_nog_aan_te_geven_BTW: _i_out._T_Jaarbeheer.Balans.Beginsaldo_nog_aan_te_geven_BTW = _p.sg($['Beginsaldo nog aan te geven BTW'], ($) => $)
            const p_Beginsaldo_winstreserve: _i_out._T_Jaarbeheer.Balans.Beginsaldo_winstreserve = _p.sg($['Beginsaldo winstreserve'], ($) => $)
            const p_Grootboekrekening_voor_nog_aan_te_geven_BTW: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_nog_aan_te_geven_BTW = _p.sg($['Grootboekrekening voor nog aan te geven BTW'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'location 2 string': l2s,
                    'reference': $,
                }
            ))
            const p_Grootboekrekening_voor_resultaat_dit_jaar: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_resultaat_dit_jaar = _p.sg($['Grootboekrekening voor resultaat dit jaar'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'location 2 string': l2s,
                    'reference': $,
                }
            ))
            const p_Grootboekrekening_voor_winstreserve: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_winstreserve = _p.sg($['Grootboekrekening voor winstreserve'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'location 2 string': l2s,
                    'reference': $,
                }
            ))
            const p_Grootboekrekening_voor_Inkoop_saldo: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_Inkoop_saldo = _p.sg($['Grootboekrekening voor Inkoop saldo'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'location 2 string': l2s,
                    'reference': $,
                }
            ))
            const p_Grootboekrekening_voor_Verkoop_saldo: _i_out._T_Jaarbeheer.Balans.Grootboekrekening_voor_Verkoop_saldo = _p.sg($['Grootboekrekening voor Verkoop saldo'], ($) => _i_generic.get_entry(
                _i_generic.dictionary_to_lookup(
                    params['values']['Grootboekrekeningen']['Balans'],
                    null
                ),
                {
                    'location 2 string': l2s,
                    'reference': $,
                }
            ))
            const p_Informele_rekeningen: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen = _p.sg($['Informele rekeningen'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => _p.block(() => {
                                const p_Beginsaldo: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Beginsaldo = _p.sg($['Beginsaldo'], ($) => $)
                                const p_Grootboekrekening: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Grootboekrekening = _p.sg($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['Grootboekrekeningen']['Balans'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_Nieuw: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw = _p.sg($['Nieuw'], ($) => _p.sg($['state group'], ($): _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw => {
                                    switch ($[0]) {
                                        case 'Ja': return _p.ss($, ($) => ['Ja', _p.block(() => {
                                            return null
                                        })])
                                        case 'Nee': return _p.ss($, ($) => ['Nee', _p.block(() => {
                                            const c_Niet_Nieuw = params.values['Eerste boekjaar'][0] === 'Nee' ? params.values['Eerste boekjaar'][1] : _pdev.implement_me("xx")
                                            return _p.block(() => {
                                                const p_Rekening: _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw.SG.Nee.Rekening = _p.sg($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'lookups': null,
                                                            'values': ({
                                                                'Jaarbeheer': c_Niet_Nieuw['Vorig boekjaar']['entry']['Jaarbeheer'],
                                                            }),
                                                        }),
                                                    }
                                                ))
                                                return ({
                                                    'Rekening': p_Rekening,
                                                })
                                            })
                                        })])
                                        default: return _p.au($[0])
                                    }
                                }))
                                return ({
                                    'Beginsaldo': p_Beginsaldo,
                                    'Grootboekrekening': p_Grootboekrekening,
                                    'Nieuw': p_Nieuw,
                                })
                            }))
                        }),
                    }
                )
            }))
            const p_Bankrekeningen: _i_out._T_Jaarbeheer.Balans.Bankrekeningen = _p.sg($['Bankrekeningen'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => _p.block(() => {
                                const p_Beginsaldo: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Beginsaldo = _p.sg($['Beginsaldo'], ($) => $)
                                const p_Grootboekrekening: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Grootboekrekening = _p.sg($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        params['values']['Grootboekrekeningen']['Balans'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_Nieuw: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Nieuw = _p.sg($['Nieuw'], ($) => _p.sg($['state group'], ($): _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Nieuw => {
                                    switch ($[0]) {
                                        case 'Ja': return _p.ss($, ($) => ['Ja', _p.block(() => {
                                            return null
                                        })])
                                        case 'Nee': return _p.ss($, ($) => ['Nee', _p.block(() => {
                                            const c_Niet_Nieuw = params.values['Eerste boekjaar'][0] === 'Nee' ? params.values['Eerste boekjaar'][1] : _pdev.implement_me("xx")
                                            return _p.block(() => {
                                                const p_Rekening: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Nieuw.SG.Nee.Rekening = _p.sg($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'lookups': null,
                                                            'values': ({
                                                                'Jaarbeheer': c_Niet_Nieuw['Vorig boekjaar']['entry']['Jaarbeheer'],
                                                            }),
                                                        }),
                                                    }
                                                ))
                                                return ({
                                                    'Rekening': p_Rekening,
                                                })
                                            })
                                        })])
                                        default: return _p.au($[0])
                                    }
                                }))
                                const p_Mutaties: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Mutaties = _p.sg($['Mutaties'], ($) => _p.block(() => {
                                    return _i_generic.resolve_dictionary(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'map': ($, $p) => _p.block(() => {
                                                return _p.sg($['value'], ($) => _p.block(() => {
                                                    const p_Bedrag: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D.Bedrag = _p.sg($['Bedrag'], ($) => $)
                                                    const p_Datum: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D.Datum = _p.sg($['Datum'], ($) => $)
                                                    const p_Omschrijving: _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Mutaties.D.Omschrijving = _p.sg($['Omschrijving'], ($) => $)
                                                    return ({
                                                        'Bedrag': p_Bedrag,
                                                        'Datum': p_Datum,
                                                        'Omschrijving': p_Omschrijving,
                                                    })
                                                }))
                                            }),
                                        }
                                    )
                                }))
                                return ({
                                    'Beginsaldo': p_Beginsaldo,
                                    'Grootboekrekening': p_Grootboekrekening,
                                    'Mutaties': p_Mutaties,
                                    'Nieuw': p_Nieuw,
                                })
                            }))
                        }),
                    }
                )
            }))
            const p_Overige_balans_items: _i_out._T_Jaarbeheer.Balans.Overige_balans_items = _p.sg($['Overige balans items'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => Overige_balans_item(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': params['lookups'],
                                        'values': params['values'],
                                    }),
                                }
                            ))
                        }),
                    }
                )
            }))
            const p_Verrekenposten: _i_out._T_Jaarbeheer.Balans.Verrekenposten = _p.sg($['Verrekenposten'], ($) => _p.block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'map': ($, $p) => _p.block(() => {
                            return _p.sg($['value'], ($) => null)
                        }),
                    }
                )
            }))
            return ({
                'Bankrekeningen': p_Bankrekeningen,
                'Beginsaldo nog aan te geven BTW': p_Beginsaldo_nog_aan_te_geven_BTW,
                'Beginsaldo winstreserve': p_Beginsaldo_winstreserve,
                'Grootboekrekening voor Inkoop saldo': p_Grootboekrekening_voor_Inkoop_saldo,
                'Grootboekrekening voor Verkoop saldo': p_Grootboekrekening_voor_Verkoop_saldo,
                'Grootboekrekening voor nog aan te geven BTW': p_Grootboekrekening_voor_nog_aan_te_geven_BTW,
                'Grootboekrekening voor resultaat dit jaar': p_Grootboekrekening_voor_resultaat_dit_jaar,
                'Grootboekrekening voor winstreserve': p_Grootboekrekening_voor_winstreserve,
                'Informele rekeningen': p_Informele_rekeningen,
                'Overige balans items': p_Overige_balans_items,
                'Verrekenposten': p_Verrekenposten,
            })
        }))
        return ({
            'Balans': p_Balans,
            'Resultaat': p_Resultaat,
        })
    })
})
export const Jaren: _i_signatures._T_Jaren =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _p.block(() => {
                    return _p.sg($['value'], ($) => _p.block(() => {
                        const p_Afgesloten: _i_out._T_Jaren.D.Afgesloten = _p.sg($['Afgesloten'], ($) => _p.sg($['state group'], ($): _i_out._T_Jaren.D.Afgesloten => {
                            switch ($[0]) {
                                case 'Ja': return _p.ss($, ($) => ['Ja', _p.block(() => {
                                    return null
                                })])
                                case 'Nee': return _p.ss($, ($) => ['Nee', _p.block(() => {
                                    return null
                                })])
                                default: return _p.au($[0])
                            }
                        }))
                        const p_Startdatum_boekjaar: _i_out._T_Jaren.D.Startdatum_boekjaar = _p.sg($['Startdatum boekjaar'], ($) => $)
                        const p_Grootboekrekeningen: _i_out._T_Jaren.D.Grootboekrekeningen = _p.sg($['Grootboekrekeningen'], ($) => Grootboekrekeningen(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                        const p_Eerste_boekjaar: _i_out._T_Jaren.D.Eerste_boekjaar = _p.sg($['Eerste boekjaar'], ($) => Eerste_boekjaar(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': ({
                                        'Jaren': $p['not circular dependent siblings'],
                                    }),
                                    'values': null,
                                }),
                            }
                        ))
                        const p_Jaarbeheer: _i_out._T_Jaren.D.Jaarbeheer = _p.sg($['Jaarbeheer'], ($) => Jaarbeheer(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': ({
                                        'Jaren': $p['not circular dependent siblings'],
                                    }),
                                    'values': ({
                                        'Eerste boekjaar': p_Eerste_boekjaar,
                                        'Grootboekrekeningen': p_Grootboekrekeningen,
                                    }),
                                }),
                            }
                        ))
                        const p_Handelstransacties: _i_out._T_Jaren.D.Handelstransacties = _p.sg($['Handelstransacties'], ($) => Handelstransacties(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': ({
                                        'Beheer': params['values']['Beheer'],
                                        'Grootboekrekeningen': p_Grootboekrekeningen,
                                        'Jaarbeheer': p_Jaarbeheer,
                                    }),
                                }),
                            }
                        ))
                        const p_Mutaties: _i_out._T_Jaren.D.Mutaties = _p.sg($['Mutaties'], ($) => Mutaties(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': ({
                                        'Jaren': $p['not circular dependent siblings'],
                                    }),
                                    'values': ({
                                        'Beheer': params['values']['Beheer'],
                                        'Grootboekrekeningen': p_Grootboekrekeningen,
                                        'Handelstransacties': p_Handelstransacties,
                                        'Jaarbeheer': p_Jaarbeheer,
                                    }),
                                }),
                            }
                        ))
                        return ({
                            'Afgesloten': p_Afgesloten,
                            'Eerste boekjaar': p_Eerste_boekjaar,
                            'Grootboekrekeningen': p_Grootboekrekeningen,
                            'Handelstransacties': p_Handelstransacties,
                            'Jaarbeheer': p_Jaarbeheer,
                            'Mutaties': p_Mutaties,
                            'Startdatum boekjaar': p_Startdatum_boekjaar,
                        })
                    }))
                }),
            }
        )
    })
})
export const Mutaties: _i_signatures._T_Mutaties =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Verrekenpost_mutaties: _i_out._T_Mutaties.Verrekenpost_mutaties = _p.sg($['Verrekenpost mutaties'], ($) => _p.block(() => {
            const benchmark = params['values']['Jaarbeheer']['Balans']['Verrekenposten']
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            return _i_generic.resolve_dictionary(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'map': ($, $p) => _p.block(() => {
                                        return _p.sg($['value'], ($) => _p.block(() => {
                                            const p_Bedrag: _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Bedrag = _p.sg($['Bedrag'], ($) => $)
                                            const p_Afhandeling: _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling = _p.sg($['Afhandeling'], ($) => _p.sg($['state group'], ($): _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling => {
                                                switch ($[0]) {
                                                    case 'Balans': return _p.ss($, ($) => ['Balans', _p.block(() => {
                                                        return _p.sg($['state group'], ($): _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.SG.Balans => {
                                                            switch ($[0]) {
                                                                case 'Informele rekening': return _p.ss($, ($) => ['Informele rekening', _p.block(() => {
                                                                    return _p.block(() => {
                                                                        const p_Informele_rekening: _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.SG.Balans.SG.Informele_rekening.Informele_rekening = _p.sg($['Informele rekening'], ($) => _i_generic.get_entry(
                                                                            _i_generic.dictionary_to_lookup(
                                                                                params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
                                                                                null
                                                                            ),
                                                                            {
                                                                                'location 2 string': l2s,
                                                                                'reference': $,
                                                                            }
                                                                        ))
                                                                        return ({
                                                                            'Informele rekening': p_Informele_rekening,
                                                                        })
                                                                    })
                                                                })])
                                                                default: return _p.au($[0])
                                                            }
                                                        })
                                                    })])
                                                    case 'Resultaat': return _p.ss($, ($) => ['Resultaat', _p.block(() => {
                                                        return Balans_Resultaat_Mutatie(
                                                            $,
                                                            {
                                                                'location 2 string': l2s,
                                                                'parameters': ({
                                                                    'lookups': params['lookups'],
                                                                    'values': params['values'],
                                                                }),
                                                            }
                                                        )
                                                    })])
                                                    default: return _p.au($[0])
                                                }
                                            }))
                                            return ({
                                                'Afhandeling': p_Afhandeling,
                                                'Bedrag': p_Bedrag,
                                            })
                                        }))
                                    }),
                                }
                            )
                        }))
                    }),
                }
            )
        }))
        const p_Bankrekening_Mutatie_Verwerkingen: _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen = _p.sg($['Bankrekening Mutatie Verwerkingen'], ($) => _p.block(() => {
            const benchmark = params['values']['Jaarbeheer']['Balans']['Bankrekeningen']
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            return _i_generic.resolve_dictionary(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'map': ($, $p) => _p.block(() => {
                                        return _p.sg($['value'], ($) => _p.sg($['state group'], ($): _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D => {
                                            switch ($[0]) {
                                                case 'Balans': return _p.ss($, ($) => ['Balans', _p.block(() => {
                                                    return _p.sg($['state group'], ($): _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG.Balans => {
                                                        switch ($[0]) {
                                                            case 'Informele rekening': return _p.ss($, ($) => ['Informele rekening', _p.block(() => {
                                                                return _p.block(() => {
                                                                    const p_Informele_rekening: _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG.Balans.SG.Informele_rekening.Informele_rekening = _p.sg($['Informele rekening'], ($) => _i_generic.get_entry(
                                                                        _i_generic.dictionary_to_lookup(
                                                                            params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
                                                                            null
                                                                        ),
                                                                        {
                                                                            'location 2 string': l2s,
                                                                            'reference': $,
                                                                        }
                                                                    ))
                                                                    return ({
                                                                        'Informele rekening': p_Informele_rekening,
                                                                    })
                                                                })
                                                            })])
                                                            case 'Verrekenpost': return _p.ss($, ($) => ['Verrekenpost', _p.block(() => {
                                                                return _p.block(() => {
                                                                    const p_Verrekenpost: _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG.Balans.SG.Verrekenpost.Verrekenpost = _p.sg($['Verrekenpost'], ($) => _i_generic.get_entry(
                                                                        _i_generic.dictionary_to_lookup(
                                                                            params['values']['Jaarbeheer']['Balans']['Verrekenposten'],
                                                                            null
                                                                        ),
                                                                        {
                                                                            'location 2 string': l2s,
                                                                            'reference': $,
                                                                        }
                                                                    ))
                                                                    return ({
                                                                        'Verrekenpost': p_Verrekenpost,
                                                                    })
                                                                })
                                                            })])
                                                            default: return _p.au($[0])
                                                        }
                                                    })
                                                })])
                                                case 'Resultaat': return _p.ss($, ($) => ['Resultaat', _p.block(() => {
                                                    return Balans_Resultaat_Mutatie(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'lookups': params['lookups'],
                                                                'values': params['values'],
                                                            }),
                                                        }
                                                    )
                                                })])
                                                default: return _p.au($[0])
                                            }
                                        }))
                                    }),
                                }
                            )
                        }))
                    }),
                }
            )
        }))
        const p_Memoriaal_boekingen: _i_out._T_Mutaties.Memoriaal_boekingen = _p.sg($['Memoriaal boekingen'], ($) => _p.block(() => {
            const benchmark = params['values']['Jaarbeheer']['Balans']['Overige balans items']
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _p.block(() => {
                        return _p.sg($['value'], ($) => _p.block(() => {
                            return _i_generic.resolve_dictionary(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'map': ($, $p) => _p.block(() => {
                                        return _p.sg($['value'], ($) => _p.block(() => {
                                            const p_Bedrag: _i_out._T_Mutaties.Memoriaal_boekingen.D.D.Bedrag = _p.sg($['Bedrag'], ($) => $)
                                            const p_Datum: _i_out._T_Mutaties.Memoriaal_boekingen.D.D.Datum = _p.sg($['Datum'], ($) => $)
                                            const p_Grootboekrekening: _i_out._T_Mutaties.Memoriaal_boekingen.D.D.Grootboekrekening = _p.sg($['Grootboekrekening'], ($) => _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(
                                                    params['values']['Grootboekrekeningen']['Resultaat'],
                                                    null
                                                ),
                                                {
                                                    'location 2 string': l2s,
                                                    'reference': $,
                                                }
                                            ))
                                            const p_Omschrijving: _i_out._T_Mutaties.Memoriaal_boekingen.D.D.Omschrijving = _p.sg($['Omschrijving'], ($) => $)
                                            return ({
                                                'Bedrag': p_Bedrag,
                                                'Datum': p_Datum,
                                                'Grootboekrekening': p_Grootboekrekening,
                                                'Omschrijving': p_Omschrijving,
                                            })
                                        }))
                                    }),
                                }
                            )
                        }))
                    }),
                }
            )
        }))
        return ({
            'Bankrekening Mutatie Verwerkingen': p_Bankrekening_Mutatie_Verwerkingen,
            'Memoriaal boekingen': p_Memoriaal_boekingen,
            'Verrekenpost mutaties': p_Verrekenpost_mutaties,
        })
    })
})
export const Overige_balans_item: _i_signatures._T_Overige_balans_item =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Beginsaldo: _i_out._T_Overige_balans_item.Beginsaldo = _p.sg($['Beginsaldo'], ($) => $)
        const p_Grootboekrekening: _i_out._T_Overige_balans_item.Grootboekrekening = _p.sg($['Grootboekrekening'], ($) => _i_generic.get_entry(
            _i_generic.dictionary_to_lookup(
                params['values']['Grootboekrekeningen']['Balans'],
                null
            ),
            {
                'location 2 string': l2s,
                'reference': $,
            }
        ))
        const p_Nieuw: _i_out._T_Overige_balans_item.Nieuw = _p.sg($['Nieuw'], ($) => _p.sg($['state group'], ($): _i_out._T_Overige_balans_item.Nieuw => {
            switch ($[0]) {
                case 'Ja': return _p.ss($, ($) => ['Ja', _p.block(() => {
                    return null
                })])
                case 'Nee': return _p.ss($, ($) => ['Nee', _p.block(() => {
                    const c_Volgend_boekjaar = params.values['Eerste boekjaar'][0] === 'Nee' ? params.values['Eerste boekjaar'][1] : _pdev.implement_me("xx")
                    return _p.block(() => {
                        const p_Balans_item: _i_out._T_Overige_balans_item.Nieuw.SG.Nee.Balans_item = _p.sg($['Balans item'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                c_Volgend_boekjaar['Vorig boekjaar']['entry']['Jaarbeheer']['Balans']['Overige balans items'],
                                null
                            ),
                            {
                                'location 2 string': l2s,
                                'reference': $,
                            }
                        ))
                        return ({
                            'Balans item': p_Balans_item,
                        })
                    })
                })])
                default: return _p.au($[0])
            }
        }))
        return ({
            'Beginsaldo': p_Beginsaldo,
            'Grootboekrekening': p_Grootboekrekening,
            'Nieuw': p_Nieuw,
        })
    })
})
export const Root: _i_signatures._T_Root =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.block(() => {
        const p_Fiscaal: _i_out._T_Root.Fiscaal = _p.sg($['Fiscaal'], ($) => Fiscaal(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        const p_Categorieen: _i_out._T_Root.Categorieen = _p.sg($['Categorieen'], ($) => Grootboek_Categorieen(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': ({
                        'Fiscaal': p_Fiscaal,
                    }),
                }),
            }
        ))
        const p_Beheer: _i_out._T_Root.Beheer = _p.sg($['Beheer'], ($) => Beheer(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': ({
                        'Grootboek Categorieen': p_Categorieen,
                    }),
                }),
            }
        ))
        const p_Jaren: _i_out._T_Root.Jaren = _p.sg($['Jaren'], ($) => Jaren(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': ({
                        'Beheer': p_Beheer,
                    }),
                }),
            }
        ))
        return ({
            'Beheer': p_Beheer,
            'Categorieen': p_Categorieen,
            'Fiscaal': p_Fiscaal,
            'Jaren': p_Jaren,
        })
    })
})
export const Verwijzing_naar_Bankrekening: _i_signatures._T_Verwijzing_naar_Bankrekening =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.get_entry(
        _i_generic.dictionary_to_lookup(
            params['values']['Jaarbeheer']['Balans']['Bankrekeningen'],
            null
        ),
        {
            'location 2 string': l2s,
            'reference': $,
        }
    )
})
export const Verwijzing_naar_Informele_rekening: _i_signatures._T_Verwijzing_naar_Informele_rekening =  ($, $p) => _p.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _i_generic.get_entry(
        _i_generic.dictionary_to_lookup(
            params['values']['Jaarbeheer']['Balans']['Informele rekeningen'],
            null
        ),
        {
            'location 2 string': l2s,
            'reference': $,
        }
    )
})
