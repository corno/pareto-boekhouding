
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"
export const Fiscaal: t_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _p_cc(
        $['Balans Hoofdcategorieen'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Zijde': _p_cc(
                            $['Zijde'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Fiscaal.Balans_Hoofdcategorieen.dictionary.D.entry.Zijde.state => {
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
                                ),
                            })
                        ),
                        'Subcategorieen': _p_cc(
                            $['Subcategorieen'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(
                                    ($,id) => ({
                                        'entry': null,
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Resultaat Hoofdcategorieen': _p_cc(
        $['Resultaat Hoofdcategorieen'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Zijde': _p_cc(
                            $['Zijde'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Fiscaal.Resultaat_Hoofdcategorieen.dictionary.D.entry.Zijde.state => {
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
                                ),
                            })
                        ),
                        'Subcategorieen': _p_cc(
                            $['Subcategorieen'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(
                                    ($,id) => ({
                                        'entry': null,
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
})
export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ({
    'Correctietypes vennootschapsbelasting': _p_cc(
        $['Correctietypes vennootschapsbelasting'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Te corrigeren promillage': _p_cc(
                            $['Te corrigeren promillage'], 
                            ($) => $
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Balans': _p_cc(
        $['Balans'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Zijde': _p_cc(
                            $['Zijde'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Grootboek_Categorieen.Balans.dictionary.D.entry.Zijde.state => {
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
                                ),
                            })
                        ),
                        'Subcategorieen': _p_cc(
                            $['Subcategorieen'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(
                                    ($,id) => ({
                                        'entry': ({
                                            'Hoofdcategorie fiscus': _p_cc(
                                                $['Hoofdcategorie fiscus'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'id': $['id'],
                                                })
                                            ),
                                            'Subcategorie fiscus': _p_cc(
                                                $['Subcategorie fiscus'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'id': $['id'],
                                                })
                                            ),
                                        }),
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Resultaat': _p_cc(
        $['Resultaat'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Zijde': _p_cc(
                            $['Zijde'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Grootboek_Categorieen.Resultaat.dictionary.D.entry.Zijde.state => {
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
                                ),
                            })
                        ),
                        'Subcategorieen': _p_cc(
                            $['Subcategorieen'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(
                                    ($,id) => ({
                                        'entry': ({
                                            'Hoofdcategorie fiscus': _p_cc(
                                                $['Hoofdcategorie fiscus'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'id': $['id'],
                                                })
                                            ),
                                            'Subcategorie fiscus': _p_cc(
                                                $['Subcategorie fiscus'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'id': $['id'],
                                                })
                                            ),
                                        }),
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
})
export const Beheer: t_signatures.Beheer = ($) => ({
    'BTW-categorieen': _p_cc(
        $['BTW-categorieen'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'BTW-heffing': _p_cc(
                            $['BTW-heffing'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Beheer.BTW$mi_categorieen.dictionary.D.entry.BTW$mi_heffing.state => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Ja', ({
                                                        'BTW-promillage': _p_cc(
                                                            $['BTW-promillage'], 
                                                            ($) => $
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Grootboekrekeningen': _p_cc(
        $['Grootboekrekeningen'], 
        ($) => ({
            'Balans': _p_cc(
                $['Balans'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': ({
                                'Hoofdcategorie': _p_cc(
                                    $['Hoofdcategorie'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })
                                ),
                                'Subcategorie': _p_cc(
                                    $['Subcategorie'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })
                                ),
                                'Zijde': _p_cc(
                                    $['Zijde'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'state': _p.decide.state(
                                            $, 
                                            ($): t_out.Beheer.Grootboekrekeningen.Balans.dictionary.D.entry.Zijde.state => {
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
                                        ),
                                    })
                                ),
                            }),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
            'Resultaat': _p_cc(
                $['Resultaat'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': ({
                                'Hoofdcategorie': _p_cc(
                                    $['Hoofdcategorie'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })
                                ),
                                'Subcategorie': _p_cc(
                                    $['Subcategorie'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })
                                ),
                                'Zijde': _p_cc(
                                    $['Zijde'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'state': _p.decide.state(
                                            $, 
                                            ($): t_out.Beheer.Grootboekrekeningen.Resultaat.dictionary.D.entry.Zijde.state => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ['Kosten', ({
                                                                'Correctie op vennootschapsbelasting': _p_cc(
                                                                    $['Correctie op vennootschapsbelasting'], 
                                                                    ($) => ({
                                                                        'location': ({
                                                                            'file': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        }),
                                                                        'state': _p.decide.state(
                                                                            $, 
                                                                            ($): t_out.Beheer.Grootboekrekeningen.Resultaat.dictionary.D.entry.Zijde.state.Kosten.Correctie_op_vennootschapsbelasting.state => {
                                                                                switch ($[0]) {
                                                                                    case 'Ja':
                                                                                        return _p.ss(
                                                                                            $, 
                                                                                            ($) => ['Ja', ({
                                                                                                'Correctietype': _p_cc(
                                                                                                    $['Correctietype'], 
                                                                                                    ($) => ({
                                                                                                        'location': ({
                                                                                                            'file': "implement me",
                                                                                                            'line': 42,
                                                                                                            'column': 42,
                                                                                                        }),
                                                                                                        'id': $['id'],
                                                                                                    })
                                                                                                ),
                                                                                            })]
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
                                                                        ),
                                                                    })
                                                                ),
                                                            })]
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
                                        ),
                                    })
                                ),
                            }),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
        })
    ),
    'Rekeningen': _p_cc(
        $['Rekeningen'], 
        ($) => ({
            'Bank': _p_cc(
                $['Bank'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': null,
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
            'Informeel': _p_cc(
                $['Informeel'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': null,
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
        })
    ),
    'Gebruikers': _p_cc(
        $['Gebruikers'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Volledige naam': _p_cc(
                            $['Volledige naam'], 
                            ($) => $
                        ),
                        'Wachtwoord': _p_cc(
                            $['Wachtwoord'], 
                            ($) => $
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Klanten': _p_cc(
        $['Klanten'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Licentieovereenkomsten': _p_cc(
                            $['Licentieovereenkomsten'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(
                                    ($,id) => ({
                                        'entry': ({
                                            'Periodes': _p_cc(
                                                $['Periodes'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'dictionary': $.__d_map(
                                                        ($,id) => ({
                                                            'entry': ({
                                                                'Bedrag': _p_cc(
                                                                    $['Bedrag'], 
                                                                    ($) => $
                                                                ),
                                                            }),
                                                            'location': ({
                                                                'file': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            }),
                                                        })
                                                    ),
                                                })
                                            ),
                                        }),
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })
                                ),
                            })
                        ),
                        'Projecten': _p_cc(
                            $['Projecten'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(
                                    ($,id) => ({
                                        'entry': ({
                                            'Offertes': _p_cc(
                                                $['Offertes'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'dictionary': $.__d_map(
                                                        ($,id) => ({
                                                            'entry': ({
                                                                'Opbrengsten': _p_cc(
                                                                    $['Opbrengsten'], 
                                                                    ($) => ({
                                                                        'location': ({
                                                                            'file': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        }),
                                                                        'dictionary': $.__d_map(
                                                                            ($,id) => ({
                                                                                'entry': ({
                                                                                    'Type': _p_cc(
                                                                                        $['Type'], 
                                                                                        ($) => ({
                                                                                            'location': ({
                                                                                                'file': "implement me",
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            }),
                                                                                            'state': _p.decide.state(
                                                                                                $, 
                                                                                                ($): t_out.Beheer.Klanten.dictionary.D.entry.Projecten.dictionary.D.entry.Offertes.dictionary.D.entry.Opbrengsten.dictionary.D.entry.Type.state => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'Project':
                                                                                                            return _p.ss(
                                                                                                                $, 
                                                                                                                ($) => ['Project', ({
                                                                                                                    'Bedrag': _p_cc(
                                                                                                                        $['Bedrag'], 
                                                                                                                        ($) => $
                                                                                                                    ),
                                                                                                                    'Betaaldatum': _p_cc(
                                                                                                                        $['Betaaldatum'], 
                                                                                                                        ($) => $
                                                                                                                    ),
                                                                                                                })]
                                                                                                            )
                                                                                                        default:
                                                                                                            return _p.au(
                                                                                                                $[0]
                                                                                                            )
                                                                                                    }
                                                                                                }
                                                                                            ),
                                                                                        })
                                                                                    ),
                                                                                }),
                                                                                'location': ({
                                                                                    'file': "implement me",
                                                                                    'line': 42,
                                                                                    'column': 42,
                                                                                }),
                                                                            })
                                                                        ),
                                                                    })
                                                                ),
                                                            }),
                                                            'location': ({
                                                                'file': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            }),
                                                        })
                                                    ),
                                                })
                                            ),
                                        }),
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Leveranciers': _p_cc(
        $['Leveranciers'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': null,
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Medewerkers': _p_cc(
        $['Medewerkers'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': null,
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
})
export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ({
    'Balans': _p_cc(
        $['Balans'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Type': _p_cc(
                            $['Type'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Grootboekrekeningen.Balans.dictionary.D.entry.Type.state => {
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
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Resultaat': _p_cc(
        $['Resultaat'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': null,
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
})
export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => ({
    'Resultaat': _p_cc(
        $['Resultaat'], 
        ($) => ({
            'Grootboekrekening voor BTW afrondingen': _p_cc(
                $['Grootboekrekening voor BTW afrondingen'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'id': $['id'],
                })
            ),
            'Salarisrondes': _p_cc(
                $['Salarisrondes'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': null,
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
            'BTW periodes': _p_cc(
                $['BTW periodes'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': ({
                                '1. BTW-categorieen': _p_cc(
                                    $['1. BTW-categorieen'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'dictionary': $.__d_map(
                                            ($,id) => ({
                                                'entry': null,
                                                'location': ({
                                                    'file': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                }),
                                            })
                                        ),
                                    })
                                ),
                                'Documenten': _p_cc(
                                    $['Documenten'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'dictionary': $.__d_map(
                                            ($,id) => ({
                                                'entry': ({
                                                    'Bestand': _p_cc(
                                                        $['Bestand'], 
                                                        ($) => $
                                                    ),
                                                }),
                                                'location': ({
                                                    'file': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                }),
                                            })
                                        ),
                                    })
                                ),
                                'Omschrijving': _p_cc(
                                    $['Omschrijving'], 
                                    ($) => $
                                ),
                                'Status': _p_cc(
                                    $['Status'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'state': _p.decide.state(
                                            $, 
                                            ($): t_out.Jaarbeheer.Resultaat.BTW_periodes.dictionary.D.entry.Status.state => {
                                                switch ($[0]) {
                                                    case 'Aangegeven':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ['Aangegeven', ({
                                                                'Afronding': _p_cc(
                                                                    $['Afronding'], 
                                                                    ($) => $
                                                                ),
                                                                'Bedrag': _p_cc(
                                                                    $['Bedrag'], 
                                                                    ($) => $
                                                                ),
                                                                'Datum': _p_cc(
                                                                    $['Datum'], 
                                                                    ($) => $
                                                                ),
                                                            })]
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
                                        ),
                                    })
                                ),
                            }),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
        })
    ),
    'Balans': _p_cc(
        $['Balans'], 
        ($) => ({
            'Grootboekrekening voor nog aan te geven BTW': _p_cc(
                $['Grootboekrekening voor nog aan te geven BTW'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'id': $['id'],
                })
            ),
            'Grootboekrekening voor resultaat dit jaar': _p_cc(
                $['Grootboekrekening voor resultaat dit jaar'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'id': $['id'],
                })
            ),
            'Grootboekrekening voor winstreserve': _p_cc(
                $['Grootboekrekening voor winstreserve'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'id': $['id'],
                })
            ),
            'Grootboekrekening voor Inkoop saldo': _p_cc(
                $['Grootboekrekening voor Inkoop saldo'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'id': $['id'],
                })
            ),
            'Grootboekrekening voor Verkoop saldo': _p_cc(
                $['Grootboekrekening voor Verkoop saldo'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'id': $['id'],
                })
            ),
            'Beginsaldo nog aan te geven BTW': _p_cc(
                $['Beginsaldo nog aan te geven BTW'], 
                ($) => $
            ),
            'Beginsaldo winstreserve': _p_cc(
                $['Beginsaldo winstreserve'], 
                ($) => $
            ),
            'Informele rekeningen': _p_cc(
                $['Informele rekeningen'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': ({
                                'Beginsaldo': _p_cc(
                                    $['Beginsaldo'], 
                                    ($) => $
                                ),
                                'Grootboekrekening': _p_cc(
                                    $['Grootboekrekening'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })
                                ),
                                'Nieuw': _p_cc(
                                    $['Nieuw'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'state': _p.decide.state(
                                            $, 
                                            ($): t_out.Jaarbeheer.Balans.Informele_rekeningen.dictionary.D.entry.Nieuw.state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ['Ja', null]
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ['Nee', ({
                                                                'Rekening': _p_cc(
                                                                    $['Rekening'], 
                                                                    ($) => Verwijzing_naar_Informele_rekening(
                                                                        $
                                                                    )
                                                                ),
                                                            })]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        ),
                                    })
                                ),
                            }),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
            'Bankrekeningen': _p_cc(
                $['Bankrekeningen'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': ({
                                'Beginsaldo': _p_cc(
                                    $['Beginsaldo'], 
                                    ($) => $
                                ),
                                'Grootboekrekening': _p_cc(
                                    $['Grootboekrekening'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })
                                ),
                                'Nieuw': _p_cc(
                                    $['Nieuw'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'state': _p.decide.state(
                                            $, 
                                            ($): t_out.Jaarbeheer.Balans.Bankrekeningen.dictionary.D.entry.Nieuw.state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ['Ja', null]
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ['Nee', ({
                                                                'Rekening': _p_cc(
                                                                    $['Rekening'], 
                                                                    ($) => Verwijzing_naar_Bankrekening(
                                                                        $
                                                                    )
                                                                ),
                                                            })]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        ),
                                    })
                                ),
                                'Mutaties': _p_cc(
                                    $['Mutaties'], 
                                    ($) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'dictionary': $.__d_map(
                                            ($,id) => ({
                                                'entry': ({
                                                    'Bedrag': _p_cc(
                                                        $['Bedrag'], 
                                                        ($) => $
                                                    ),
                                                    'Datum': _p_cc(
                                                        $['Datum'], 
                                                        ($) => $
                                                    ),
                                                    'Omschrijving': _p_cc(
                                                        $['Omschrijving'], 
                                                        ($) => $
                                                    ),
                                                }),
                                                'location': ({
                                                    'file': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                }),
                                            })
                                        ),
                                    })
                                ),
                            }),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
            'Overige balans items': _p_cc(
                $['Overige balans items'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': Overige_balans_item(
                                $
                            ),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
            'Verrekenposten': _p_cc(
                $['Verrekenposten'], 
                ($) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(
                        ($,id) => ({
                            'entry': null,
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })
                    ),
                })
            ),
        })
    ),
})
export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _p_cc(
        $['Beginsaldo'], 
        ($) => $
    ),
    'Grootboekrekening': _p_cc(
        $['Grootboekrekening'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'id': $['id'],
        })
    ),
    'Nieuw': _p_cc(
        $['Nieuw'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'state': _p.decide.state(
                $, 
                ($): t_out.Overige_balans_item.Nieuw.state => {
                    switch ($[0]) {
                        case 'Ja':
                            return _p.ss(
                                $, 
                                ($) => ['Ja', null]
                            )
                        case 'Nee':
                            return _p.ss(
                                $, 
                                ($) => ['Nee', ({
                                    'Balans item': _p_cc(
                                        $['Balans item'], 
                                        ($) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })
                                    ),
                                })]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            ),
        })
    ),
})
export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'id': $['id'],
})
export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'id': $['id'],
})
export const Handelstransacties: t_signatures.Handelstransacties = ($) => ({
    'Inkopen': _p_cc(
        $['Inkopen'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Afhandeling': _p_cc(
                            $['Afhandeling'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Afhandeling.state => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Mutaties', null]
                                                )
                                            case 'Rekening courant':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Rekening courant', ({
                                                        'Rekening courant': _p_cc(
                                                            $['Rekening courant'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                ),
                            })
                        ),
                        'BTW-regime': _p_cc(
                            $['BTW-regime'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Handelstransacties.Inkopen.dictionary.D.entry.BTW$mi_regime.state => {
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
                                                    ($) => ['Standaard', ({
                                                        'BTW-periode': _p_cc(
                                                            $['BTW-periode'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                ),
                            })
                        ),
                        'Brondocument': _p_cc(
                            $['Brondocument'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Brondocument.state => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Toegevoegd', ({
                                                        'Document': _p_cc(
                                                            $['Document'], 
                                                            ($) => $
                                                        ),
                                                    })]
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
                                ),
                            })
                        ),
                        'Datum': _p_cc(
                            $['Datum'], 
                            ($) => $
                        ),
                        'Regels': _p_cc(
                            $['Regels'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(
                                    ($,id) => ({
                                        'entry': ({
                                            'Bedrag': _p_cc(
                                                $['Bedrag'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state(
                                                        $, 
                                                        ($): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Regels.dictionary.D.entry.Bedrag.state => {
                                                            switch ($[0]) {
                                                                case 'Bekend':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Bekend', ({
                                                                            'BTW-bedrag': _p_cc(
                                                                                $['BTW-bedrag'], 
                                                                                ($) => $
                                                                            ),
                                                                            'Bedrag inclusief geheven BTW': _p_cc(
                                                                                $['Bedrag inclusief geheven BTW'], 
                                                                                ($) => $
                                                                            ),
                                                                        })]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    ),
                                                })
                                            ),
                                            'Omschrijving': _p_cc(
                                                $['Omschrijving'], 
                                                ($) => $
                                            ),
                                            'Type': _p_cc(
                                                $['Type'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state(
                                                        $, 
                                                        ($): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Regels.dictionary.D.entry.Type.state => {
                                                            switch ($[0]) {
                                                                case 'Balans':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Balans', ({
                                                                            'Balans item': _p_cc(
                                                                                $['Balans item'], 
                                                                                ($) => ({
                                                                                    'location': ({
                                                                                        'file': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    }),
                                                                                    'id': $['id'],
                                                                                })
                                                                            ),
                                                                        })]
                                                                    )
                                                                case 'Kosten':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Kosten', ({
                                                                            'Grootboekrekening': _p_cc(
                                                                                $['Grootboekrekening'], 
                                                                                ($) => ({
                                                                                    'location': ({
                                                                                        'file': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    }),
                                                                                    'id': $['id'],
                                                                                })
                                                                            ),
                                                                        })]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    ),
                                                })
                                            ),
                                        }),
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })
                                ),
                            })
                        ),
                        'Type': _p_cc(
                            $['Type'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Handelstransacties.Inkopen.dictionary.D.entry.Type.state => {
                                        switch ($[0]) {
                                            case 'Bonnetje':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Bonnetje', null]
                                                )
                                            case 'Inkoop (met crediteur)':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Inkoop (met crediteur)', ({
                                                        'Crediteur': _p_cc(
                                                            $['Crediteur'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                        'Factuurnummer': _p_cc(
                                                            $['Factuurnummer'], 
                                                            ($) => $
                                                        ),
                                                    })]
                                                )
                                            case 'Loonheffing':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Loonheffing', ({
                                                        'Ronde': _p_cc(
                                                            $['Ronde'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                    })]
                                                )
                                            case 'Salaris':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Salaris', ({
                                                        'Ronde': _p_cc(
                                                            $['Ronde'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                        'Medewerker': _p_cc(
                                                            $['Medewerker'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Verkopen': _p_cc(
        $['Verkopen'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'Afhandeling': _p_cc(
                            $['Afhandeling'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Afhandeling.state => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Mutaties', null]
                                                )
                                            case 'Rekening courant':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Rekening courant', ({
                                                        'Rekening courant': _p_cc(
                                                            $['Rekening courant'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                ),
                            })
                        ),
                        'Betalingstermijn': _p_cc(
                            $['Betalingstermijn'], 
                            ($) => $
                        ),
                        'BTW-periode': _p_cc(
                            $['BTW-periode'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'id': $['id'],
                            })
                        ),
                        'Brondocument': _p_cc(
                            $['Brondocument'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Brondocument.state => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Toegevoegd', ({
                                                        'Document': _p_cc(
                                                            $['Document'], 
                                                            ($) => $
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                ),
                            })
                        ),
                        'Debiteur': _p_cc(
                            $['Debiteur'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'id': $['id'],
                            })
                        ),
                        'Contracttype': _p_cc(
                            $['Contracttype'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'state': _p.decide.state(
                                    $, 
                                    ($): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Contracttype.state => {
                                        switch ($[0]) {
                                            case 'Project':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Project', ({
                                                        'Project': _p_cc(
                                                            $['Project'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                        'Offerte': _p_cc(
                                                            $['Offerte'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                    })]
                                                )
                                            case 'Licentieovereenkomst':
                                                return _p.ss(
                                                    $, 
                                                    ($) => ['Licentieovereenkomst', ({
                                                        'Overeenkomst': _p_cc(
                                                            $['Overeenkomst'], 
                                                            ($) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'id': $['id'],
                                                            })
                                                        ),
                                                    })]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                ),
                            })
                        ),
                        'Datum': _p_cc(
                            $['Datum'], 
                            ($) => $
                        ),
                        'Regels': _p_cc(
                            $['Regels'], 
                            ($) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'dictionary': $.__d_map(
                                    ($,id) => ({
                                        'entry': ({
                                            'BTW-regime': _p_cc(
                                                $['BTW-regime'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state(
                                                        $, 
                                                        ($): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.BTW$mi_regime.state => {
                                                            switch ($[0]) {
                                                                case 'Intracommunautair':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Intracommunautair', null]
                                                                    )
                                                                case 'Standaard':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Standaard', ({
                                                                            'BTW-categorie': _p_cc(
                                                                                $['BTW-categorie'], 
                                                                                ($) => ({
                                                                                    'location': ({
                                                                                        'file': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    }),
                                                                                    'id': $['id'],
                                                                                })
                                                                            ),
                                                                        })]
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
                                                    ),
                                                })
                                            ),
                                            'Bedrag exclusief BTW': _p_cc(
                                                $['Bedrag exclusief BTW'], 
                                                ($) => $
                                            ),
                                            'Contracttype': _p_cc(
                                                $['Contracttype'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state(
                                                        $, 
                                                        ($): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.Contracttype.state => {
                                                            switch ($[0]) {
                                                                case 'Project':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Project', ({
                                                                            'Opbrengst': _p_cc(
                                                                                $['Opbrengst'], 
                                                                                ($) => ({
                                                                                    'location': ({
                                                                                        'file': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    }),
                                                                                    'id': $['id'],
                                                                                })
                                                                            ),
                                                                        })]
                                                                    )
                                                                case 'Los':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Los', null]
                                                                    )
                                                                case 'Licentieovereenkomst':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Licentieovereenkomst', ({
                                                                            'Periode': _p_cc(
                                                                                $['Periode'], 
                                                                                ($) => ({
                                                                                    'location': ({
                                                                                        'file': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    }),
                                                                                    'id': $['id'],
                                                                                })
                                                                            ),
                                                                        })]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    ),
                                                })
                                            ),
                                            'Omschrijving': _p_cc(
                                                $['Omschrijving'], 
                                                ($) => $
                                            ),
                                            'Type': _p_cc(
                                                $['Type'], 
                                                ($) => ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state(
                                                        $, 
                                                        ($): t_out.Handelstransacties.Verkopen.dictionary.D.entry.Regels.dictionary.D.entry.Type.state => {
                                                            switch ($[0]) {
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Opbrengsten', ({
                                                                            'Grootboekrekening': _p_cc(
                                                                                $['Grootboekrekening'], 
                                                                                ($) => ({
                                                                                    'location': ({
                                                                                        'file': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    }),
                                                                                    'id': $['id'],
                                                                                })
                                                                            ),
                                                                        })]
                                                                    )
                                                                case 'Balans':
                                                                    return _p.ss(
                                                                        $, 
                                                                        ($) => ['Balans', ({
                                                                            'Balans item': _p_cc(
                                                                                $['Balans item'], 
                                                                                ($) => ({
                                                                                    'location': ({
                                                                                        'file': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    }),
                                                                                    'id': $['id'],
                                                                                })
                                                                            ),
                                                                        })]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    ),
                                                })
                                            ),
                                        }),
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })
                                ),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
})
export const Mutaties: t_signatures.Mutaties = ($) => ({
    'Verrekenpost mutaties': _p_cc(
        $['Verrekenpost mutaties'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'dictionary': $.__d_map(
                            ($,id) => ({
                                'entry': ({
                                    'Bedrag': _p_cc(
                                        $['Bedrag'], 
                                        ($) => $
                                    ),
                                    'Afhandeling': _p_cc(
                                        $['Afhandeling'], 
                                        ($) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'state': _p.decide.state(
                                                $, 
                                                ($): t_out.Mutaties.Verrekenpost_mutaties.dictionary.D.entry.dictionary.D.entry.Afhandeling.state => {
                                                    switch ($[0]) {
                                                        case 'Resultaat':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ['Resultaat', Balans_Resultaat_Mutatie(
                                                                    $
                                                                )]
                                                            )
                                                        case 'Balans':
                                                            return _p.ss(
                                                                $, 
                                                                ($) => ['Balans', ({
                                                                    'location': ({
                                                                        'file': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    }),
                                                                    'state': _p.decide.state(
                                                                        $, 
                                                                        ($): t_out.Mutaties.Verrekenpost_mutaties.dictionary.D.entry.dictionary.D.entry.Afhandeling.state.Balans.state => {
                                                                            switch ($[0]) {
                                                                                case 'Informele rekening':
                                                                                    return _p.ss(
                                                                                        $, 
                                                                                        ($) => ['Informele rekening', ({
                                                                                            'Informele rekening': _p_cc(
                                                                                                $['Informele rekening'], 
                                                                                                ($) => ({
                                                                                                    'location': ({
                                                                                                        'file': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    }),
                                                                                                    'id': $['id'],
                                                                                                })
                                                                                            ),
                                                                                        })]
                                                                                    )
                                                                                default:
                                                                                    return _p.au(
                                                                                        $[0]
                                                                                    )
                                                                            }
                                                                        }
                                                                    ),
                                                                })]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            ),
                                        })
                                    ),
                                }),
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Bankrekening Mutatie Verwerkingen': _p_cc(
        $['Bankrekening Mutatie Verwerkingen'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'dictionary': $.__d_map(
                            ($,id) => ({
                                'entry': ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state(
                                        $, 
                                        ($): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.dictionary.D.entry.dictionary.D.entry.state => {
                                            switch ($[0]) {
                                                case 'Resultaat':
                                                    return _p.ss(
                                                        $, 
                                                        ($) => ['Resultaat', Balans_Resultaat_Mutatie(
                                                            $
                                                        )]
                                                    )
                                                case 'Balans':
                                                    return _p.ss(
                                                        $, 
                                                        ($) => ['Balans', ({
                                                            'location': ({
                                                                'file': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            }),
                                                            'state': _p.decide.state(
                                                                $, 
                                                                ($): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.dictionary.D.entry.dictionary.D.entry.state.Balans.state => {
                                                                    switch ($[0]) {
                                                                        case 'Informele rekening':
                                                                            return _p.ss(
                                                                                $, 
                                                                                ($) => ['Informele rekening', ({
                                                                                    'Informele rekening': _p_cc(
                                                                                        $['Informele rekening'], 
                                                                                        ($) => ({
                                                                                            'location': ({
                                                                                                'file': "implement me",
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            }),
                                                                                            'id': $['id'],
                                                                                        })
                                                                                    ),
                                                                                })]
                                                                            )
                                                                        case 'Verrekenpost':
                                                                            return _p.ss(
                                                                                $, 
                                                                                ($) => ['Verrekenpost', ({
                                                                                    'Verrekenpost': _p_cc(
                                                                                        $['Verrekenpost'], 
                                                                                        ($) => ({
                                                                                            'location': ({
                                                                                                'file': "implement me",
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            }),
                                                                                            'id': $['id'],
                                                                                        })
                                                                                    ),
                                                                                })]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            ),
                                                        })]
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    ),
                                }),
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
    'Memoriaal boekingen': _p_cc(
        $['Memoriaal boekingen'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($,id) => ({
                    'entry': ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'dictionary': $.__d_map(
                            ($,id) => ({
                                'entry': ({
                                    'Bedrag': _p_cc(
                                        $['Bedrag'], 
                                        ($) => $
                                    ),
                                    'Datum': _p_cc(
                                        $['Datum'], 
                                        ($) => $
                                    ),
                                    'Omschrijving': _p_cc(
                                        $['Omschrijving'], 
                                        ($) => $
                                    ),
                                    'Grootboekrekening': _p_cc(
                                        $['Grootboekrekening'], 
                                        ($) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })
                                    ),
                                }),
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                            })
                        ),
                    }),
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
})
export const Jaren: t_signatures.Jaren = ($) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(
        ($,id) => ({
            'entry': ({
                'Afgesloten': _p_cc(
                    $['Afgesloten'], 
                    ($) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state(
                            $, 
                            ($): t_out.Jaren.dictionary.D.entry.Afgesloten.state => {
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
                        ),
                    })
                ),
                'Startdatum boekjaar': _p_cc(
                    $['Startdatum boekjaar'], 
                    ($) => $
                ),
                'Grootboekrekeningen': _p_cc(
                    $['Grootboekrekeningen'], 
                    ($) => Grootboekrekeningen(
                        $
                    )
                ),
                'Eerste boekjaar': _p_cc(
                    $['Eerste boekjaar'], 
                    ($) => Eerste_boekjaar(
                        $
                    )
                ),
                'Jaarbeheer': _p_cc(
                    $['Jaarbeheer'], 
                    ($) => Jaarbeheer(
                        $
                    )
                ),
                'Handelstransacties': _p_cc(
                    $['Handelstransacties'], 
                    ($) => Handelstransacties(
                        $
                    )
                ),
                'Mutaties': _p_cc(
                    $['Mutaties'], 
                    ($) => Mutaties(
                        $
                    )
                ),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })
    ),
})
export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($) => ({
    'Jaar': _p_cc(
        $['Jaar'], 
        ($) => $.__o_map(
            ($) => ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'id': $['id'],
            })
        )
    ),
    'type': _p_cc(
        $['type'], 
        ($) => ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'state': _p.decide.state(
                $, 
                ($): t_out.Balans_Resultaat_Mutatie.type_.state => {
                    switch ($[0]) {
                        case 'Inkoop':
                            return _p.ss(
                                $, 
                                ($) => ['Inkoop', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'id': $['id'],
                                })]
                            )
                        case 'Verkoop':
                            return _p.ss(
                                $, 
                                ($) => ['Verkoop', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'id': $['id'],
                                })]
                            )
                        case 'BTW-periode':
                            return _p.ss(
                                $, 
                                ($) => ['BTW-periode', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'id': $['id'],
                                })]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            ),
        })
    ),
})
export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state(
        $, 
        ($): t_out.Eerste_boekjaar.state => {
            switch ($[0]) {
                case 'Ja':
                    return _p.ss(
                        $, 
                        ($) => ['Ja', null]
                    )
                case 'Nee':
                    return _p.ss(
                        $, 
                        ($) => ['Nee', ({
                            'Vorig boekjaar': _p_cc(
                                $['Vorig boekjaar'], 
                                ($) => ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'id': $['id'],
                                })
                            ),
                        })]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})
export const Root: t_signatures.Root = ($) => ({
    'Fiscaal': _p_cc(
        $['Fiscaal'], 
        ($) => Fiscaal(
            $
        )
    ),
    'Categorieen': _p_cc(
        $['Categorieen'], 
        ($) => Grootboek_Categorieen(
            $
        )
    ),
    'Beheer': _p_cc(
        $['Beheer'], 
        ($) => Beheer(
            $
        )
    ),
    'Jaren': _p_cc(
        $['Jaren'], 
        ($) => Jaren(
            $
        )
    ),
})
