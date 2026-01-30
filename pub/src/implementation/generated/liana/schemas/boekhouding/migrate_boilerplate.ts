
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"

export const Fiscaal: t_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _p_cc(
        $['Balans Hoofdcategorieen'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Zijde': _p_cc(
                            $['Zijde'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Fiscaal.Balans_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde.l_state => {
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l dictionary': $.__d_map(
                                    ($, id) => ({
                                        'l entry': null,
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    })
                                ),
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Resultaat Hoofdcategorieen': _p_cc(
        $['Resultaat Hoofdcategorieen'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Zijde': _p_cc(
                            $['Zijde'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde.l_state => {
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l dictionary': $.__d_map(
                                    ($, id) => ({
                                        'l entry': null,
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    })
                                ),
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ({
    'Correctietypes vennootschapsbelasting': _p_cc(
        $['Correctietypes vennootschapsbelasting'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Te corrigeren promillage': _p_cc(
                            $['Te corrigeren promillage'],
                            ($) => $
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Balans': _p_cc(
        $['Balans'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Zijde': _p_cc(
                            $['Zijde'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde.l_state => {
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l dictionary': $.__d_map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Hoofdcategorie fiscus': _p_cc(
                                                $['Hoofdcategorie fiscus'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l id': $['l id'],
                                                })
                                            ),
                                            'Subcategorie fiscus': _p_cc(
                                                $['Subcategorie fiscus'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l id': $['l id'],
                                                })
                                            ),
                                        },
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    })
                                ),
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Resultaat': _p_cc(
        $['Resultaat'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Zijde': _p_cc(
                            $['Zijde'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state => {
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l dictionary': $.__d_map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Hoofdcategorie fiscus': _p_cc(
                                                $['Hoofdcategorie fiscus'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l id': $['l id'],
                                                })
                                            ),
                                            'Subcategorie fiscus': _p_cc(
                                                $['Subcategorie fiscus'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l id': $['l id'],
                                                })
                                            ),
                                        },
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    })
                                ),
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Beheer: t_signatures.Beheer = ($) => ({
    'BTW-categorieen': _p_cc(
        $['BTW-categorieen'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'BTW-heffing': _p_cc(
                            $['BTW-heffing'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing.l_state => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Ja', {
                                                        'BTW-promillage': _p_cc(
                                                            $['BTW-promillage'],
                                                            ($) => $
                                                        ),
                                                    }]
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
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
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
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': {
                                'Hoofdcategorie': _p_cc(
                                    $['Hoofdcategorie'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l id': $['l id'],
                                    })
                                ),
                                'Subcategorie': _p_cc(
                                    $['Subcategorie'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l id': $['l id'],
                                    })
                                ),
                                'Zijde': _p_cc(
                                    $['Zijde'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l state': _p.decide.state(
                                            $,
                                            ($): t_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde.l_state => {
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
                            },
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        })
                    ),
                })
            ),
            'Resultaat': _p_cc(
                $['Resultaat'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': {
                                'Hoofdcategorie': _p_cc(
                                    $['Hoofdcategorie'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l id': $['l id'],
                                    })
                                ),
                                'Subcategorie': _p_cc(
                                    $['Subcategorie'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l id': $['l id'],
                                    })
                                ),
                                'Zijde': _p_cc(
                                    $['Zijde'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l state': _p.decide.state(
                                            $,
                                            ($): t_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Kosten', {
                                                                'Correctie op vennootschapsbelasting': _p_cc(
                                                                    $['Correctie op vennootschapsbelasting'],
                                                                    ($) => ({
                                                                        'l location': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                        'l state': _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting.l_state => {
                                                                                switch ($[0]) {
                                                                                    case 'Ja':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['Ja', {
                                                                                                'Correctietype': _p_cc(
                                                                                                    $['Correctietype'],
                                                                                                    ($) => ({
                                                                                                        'l location': {
                                                                                                            'document resource identifier': "implement me",
                                                                                                            'line': 42,
                                                                                                            'column': 42,
                                                                                                        },
                                                                                                        'l id': $['l id'],
                                                                                                    })
                                                                                                ),
                                                                                            }]
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
                                                            }]
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
                            },
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
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
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': null,
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        })
                    ),
                })
            ),
            'Informeel': _p_cc(
                $['Informeel'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': null,
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        })
                    ),
                })
            ),
        })
    ),
    'Gebruikers': _p_cc(
        $['Gebruikers'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Volledige naam': _p_cc(
                            $['Volledige naam'],
                            ($) => $
                        ),
                        'Wachtwoord': _p_cc(
                            $['Wachtwoord'],
                            ($) => $
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Klanten': _p_cc(
        $['Klanten'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Licentieovereenkomsten': _p_cc(
                            $['Licentieovereenkomsten'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l dictionary': $.__d_map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Periodes': _p_cc(
                                                $['Periodes'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l dictionary': $.__d_map(
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'Bedrag': _p_cc(
                                                                    $['Bedrag'],
                                                                    ($) => $
                                                                ),
                                                            },
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        })
                                                    ),
                                                })
                                            ),
                                        },
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    })
                                ),
                            })
                        ),
                        'Projecten': _p_cc(
                            $['Projecten'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l dictionary': $.__d_map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Offertes': _p_cc(
                                                $['Offertes'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l dictionary': $.__d_map(
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'Opbrengsten': _p_cc(
                                                                    $['Opbrengsten'],
                                                                    ($) => ({
                                                                        'l location': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                        'l dictionary': $.__d_map(
                                                                            ($, id) => ({
                                                                                'l entry': {
                                                                                    'Type': _p_cc(
                                                                                        $['Type'],
                                                                                        ($) => ({
                                                                                            'l location': {
                                                                                                'document resource identifier': "implement me",
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                            'l state': _p.decide.state(
                                                                                                $,
                                                                                                ($): t_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type.l_state => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'Project':
                                                                                                            return _p.ss(
                                                                                                                $,
                                                                                                                ($) => ['Project', {
                                                                                                                    'Bedrag': _p_cc(
                                                                                                                        $['Bedrag'],
                                                                                                                        ($) => $
                                                                                                                    ),
                                                                                                                    'Betaaldatum': _p_cc(
                                                                                                                        $['Betaaldatum'],
                                                                                                                        ($) => $
                                                                                                                    ),
                                                                                                                }]
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
                                                                                },
                                                                                'l location': {
                                                                                    'document resource identifier': "implement me",
                                                                                    'line': 42,
                                                                                    'column': 42,
                                                                                },
                                                                            })
                                                                        ),
                                                                    })
                                                                ),
                                                            },
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        })
                                                    ),
                                                })
                                            ),
                                        },
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    })
                                ),
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Leveranciers': _p_cc(
        $['Leveranciers'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': null,
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Medewerkers': _p_cc(
        $['Medewerkers'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': null,
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ({
    'Balans': _p_cc(
        $['Balans'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Type': _p_cc(
                            $['Type'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Type.l_state => {
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
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Resultaat': _p_cc(
        $['Resultaat'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': null,
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
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
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l id': $['l id'],
                })
            ),
            'Salarisrondes': _p_cc(
                $['Salarisrondes'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': null,
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        })
                    ),
                })
            ),
            'BTW periodes': _p_cc(
                $['BTW periodes'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': {
                                '1. BTW-categorieen': _p_cc(
                                    $['1. BTW-categorieen'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l dictionary': $.__d_map(
                                            ($, id) => ({
                                                'l entry': null,
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            })
                                        ),
                                    })
                                ),
                                'Documenten': _p_cc(
                                    $['Documenten'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l dictionary': $.__d_map(
                                            ($, id) => ({
                                                'l entry': {
                                                    'Bestand': _p_cc(
                                                        $['Bestand'],
                                                        ($) => $
                                                    ),
                                                },
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
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
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l state': _p.decide.state(
                                            $,
                                            ($): t_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status.l_state => {
                                                switch ($[0]) {
                                                    case 'Aangegeven':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Aangegeven', {
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
                                                            }]
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
                            },
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
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
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l id': $['l id'],
                })
            ),
            'Grootboekrekening voor resultaat dit jaar': _p_cc(
                $['Grootboekrekening voor resultaat dit jaar'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l id': $['l id'],
                })
            ),
            'Grootboekrekening voor winstreserve': _p_cc(
                $['Grootboekrekening voor winstreserve'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l id': $['l id'],
                })
            ),
            'Grootboekrekening voor Inkoop saldo': _p_cc(
                $['Grootboekrekening voor Inkoop saldo'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l id': $['l id'],
                })
            ),
            'Grootboekrekening voor Verkoop saldo': _p_cc(
                $['Grootboekrekening voor Verkoop saldo'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l id': $['l id'],
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
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': {
                                'Beginsaldo': _p_cc(
                                    $['Beginsaldo'],
                                    ($) => $
                                ),
                                'Grootboekrekening': _p_cc(
                                    $['Grootboekrekening'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l id': $['l id'],
                                    })
                                ),
                                'Nieuw': _p_cc(
                                    $['Nieuw'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l state': _p.decide.state(
                                            $,
                                            ($): t_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw.l_state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Ja', null]
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Nee', {
                                                                'Rekening': _p_cc(
                                                                    $['Rekening'],
                                                                    ($) => Verwijzing_naar_Informele_rekening(
                                                                        $
                                                                    )
                                                                ),
                                                            }]
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
                            },
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        })
                    ),
                })
            ),
            'Bankrekeningen': _p_cc(
                $['Bankrekeningen'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': {
                                'Beginsaldo': _p_cc(
                                    $['Beginsaldo'],
                                    ($) => $
                                ),
                                'Grootboekrekening': _p_cc(
                                    $['Grootboekrekening'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l id': $['l id'],
                                    })
                                ),
                                'Nieuw': _p_cc(
                                    $['Nieuw'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l state': _p.decide.state(
                                            $,
                                            ($): t_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw.l_state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Ja', null]
                                                        )
                                                    case 'Nee':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Nee', {
                                                                'Rekening': _p_cc(
                                                                    $['Rekening'],
                                                                    ($) => Verwijzing_naar_Bankrekening(
                                                                        $
                                                                    )
                                                                ),
                                                            }]
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
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l dictionary': $.__d_map(
                                            ($, id) => ({
                                                'l entry': {
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
                                                },
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            })
                                        ),
                                    })
                                ),
                            },
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        })
                    ),
                })
            ),
            'Overige balans items': _p_cc(
                $['Overige balans items'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': Overige_balans_item(
                                $
                            ),
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        })
                    ),
                })
            ),
            'Verrekenposten': _p_cc(
                $['Verrekenposten'],
                ($) => ({
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                    'l dictionary': $.__d_map(
                        ($, id) => ({
                            'l entry': null,
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
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
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l id': $['l id'],
        })
    ),
    'Nieuw': _p_cc(
        $['Nieuw'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Overige_balans_item.Nieuw.l_state => {
                    switch ($[0]) {
                        case 'Ja':
                            return _p.ss(
                                $,
                                ($) => ['Ja', null]
                            )
                        case 'Nee':
                            return _p.ss(
                                $,
                                ($) => ['Nee', {
                                    'Balans item': _p_cc(
                                        $['Balans item'],
                                        ($) => ({
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                            'l id': $['l id'],
                                        })
                                    ),
                                }]
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
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l id': $['l id'],
})

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l id': $['l id'],
})

export const Handelstransacties: t_signatures.Handelstransacties = ($) => ({
    'Inkopen': _p_cc(
        $['Inkopen'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Afhandeling': _p_cc(
                            $['Afhandeling'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling.l_state => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Mutaties', null]
                                                )
                                            case 'Rekening courant':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Rekening courant', {
                                                        'Rekening courant': _p_cc(
                                                            $['Rekening courant'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                    }]
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.BTW$mi_regime.l_state => {
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
                                                    ($) => ['Standaard', {
                                                        'BTW-periode': _p_cc(
                                                            $['BTW-periode'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                    }]
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument.l_state => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Toegevoegd', {
                                                        'Document': _p_cc(
                                                            $['Document'],
                                                            ($) => $
                                                        ),
                                                    }]
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l dictionary': $.__d_map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Bedrag': _p_cc(
                                                $['Bedrag'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag.l_state => {
                                                            switch ($[0]) {
                                                                case 'Bekend':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Bekend', {
                                                                            'BTW-bedrag': _p_cc(
                                                                                $['BTW-bedrag'],
                                                                                ($) => $
                                                                            ),
                                                                            'Bedrag inclusief geheven BTW': _p_cc(
                                                                                $['Bedrag inclusief geheven BTW'],
                                                                                ($) => $
                                                                            ),
                                                                        }]
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
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type.l_state => {
                                                            switch ($[0]) {
                                                                case 'Balans':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Balans', {
                                                                            'Balans item': _p_cc(
                                                                                $['Balans item'],
                                                                                ($) => ({
                                                                                    'l location': {
                                                                                        'document resource identifier': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'Kosten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Kosten', {
                                                                            'Grootboekrekening': _p_cc(
                                                                                $['Grootboekrekening'],
                                                                                ($) => ({
                                                                                    'l location': {
                                                                                        'document resource identifier': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            ),
                                                                        }]
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
                                        },
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    })
                                ),
                            })
                        ),
                        'Type': _p_cc(
                            $['Type'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type.l_state => {
                                        switch ($[0]) {
                                            case 'Bonnetje':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Bonnetje', null]
                                                )
                                            case 'Inkoop (met crediteur)':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Inkoop (met crediteur)', {
                                                        'Crediteur': _p_cc(
                                                            $['Crediteur'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                        'Factuurnummer': _p_cc(
                                                            $['Factuurnummer'],
                                                            ($) => $
                                                        ),
                                                    }]
                                                )
                                            case 'Loonheffing':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Loonheffing', {
                                                        'Ronde': _p_cc(
                                                            $['Ronde'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                    }]
                                                )
                                            case 'Salaris':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Salaris', {
                                                        'Ronde': _p_cc(
                                                            $['Ronde'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                        'Medewerker': _p_cc(
                                                            $['Medewerker'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                    }]
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
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Verkopen': _p_cc(
        $['Verkopen'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'Afhandeling': _p_cc(
                            $['Afhandeling'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling.l_state => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Mutaties', null]
                                                )
                                            case 'Rekening courant':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Rekening courant', {
                                                        'Rekening courant': _p_cc(
                                                            $['Rekening courant'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                    }]
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l id': $['l id'],
                            })
                        ),
                        'Brondocument': _p_cc(
                            $['Brondocument'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument.l_state => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Toegevoegd', {
                                                        'Document': _p_cc(
                                                            $['Document'],
                                                            ($) => $
                                                        ),
                                                    }]
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l id': $['l id'],
                            })
                        ),
                        'Contracttype': _p_cc(
                            $['Contracttype'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype.l_state => {
                                        switch ($[0]) {
                                            case 'Project':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Project', {
                                                        'Project': _p_cc(
                                                            $['Project'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                        'Offerte': _p_cc(
                                                            $['Offerte'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                    }]
                                                )
                                            case 'Licentieovereenkomst':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Licentieovereenkomst', {
                                                        'Overeenkomst': _p_cc(
                                                            $['Overeenkomst'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l id': $['l id'],
                                                            })
                                                        ),
                                                    }]
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
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l dictionary': $.__d_map(
                                    ($, id) => ({
                                        'l entry': {
                                            'BTW-regime': _p_cc(
                                                $['BTW-regime'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime.l_state => {
                                                            switch ($[0]) {
                                                                case 'Intracommunautair':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Intracommunautair', null]
                                                                    )
                                                                case 'Standaard':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Standaard', {
                                                                            'BTW-categorie': _p_cc(
                                                                                $['BTW-categorie'],
                                                                                ($) => ({
                                                                                    'l location': {
                                                                                        'document resource identifier': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            ),
                                                                        }]
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
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype.l_state => {
                                                            switch ($[0]) {
                                                                case 'Project':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Project', {
                                                                            'Opbrengst': _p_cc(
                                                                                $['Opbrengst'],
                                                                                ($) => ({
                                                                                    'l location': {
                                                                                        'document resource identifier': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'Los':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Los', null]
                                                                    )
                                                                case 'Licentieovereenkomst':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Licentieovereenkomst', {
                                                                            'Periode': _p_cc(
                                                                                $['Periode'],
                                                                                ($) => ({
                                                                                    'l location': {
                                                                                        'document resource identifier': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            ),
                                                                        }]
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
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type.l_state => {
                                                            switch ($[0]) {
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Opbrengsten', {
                                                                            'Grootboekrekening': _p_cc(
                                                                                $['Grootboekrekening'],
                                                                                ($) => ({
                                                                                    'l location': {
                                                                                        'document resource identifier': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'Balans':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Balans', {
                                                                            'Balans item': _p_cc(
                                                                                $['Balans item'],
                                                                                ($) => ({
                                                                                    'l location': {
                                                                                        'document resource identifier': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                    'l id': $['l id'],
                                                                                })
                                                                            ),
                                                                        }]
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
                                        },
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    })
                                ),
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Mutaties: t_signatures.Mutaties = ($) => ({
    'Verrekenpost mutaties': _p_cc(
        $['Verrekenpost mutaties'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l dictionary': $.__d_map(
                            ($, id) => ({
                                'l entry': {
                                    'Bedrag': _p_cc(
                                        $['Bedrag'],
                                        ($) => $
                                    ),
                                    'Afhandeling': _p_cc(
                                        $['Afhandeling'],
                                        ($) => ({
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                            'l state': _p.decide.state(
                                                $,
                                                ($): t_out.Mutaties.Verrekenpost_mutaties.l_dictionary.D.l_entry.l_dictionary.D.l_entry.Afhandeling.l_state => {
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
                                                                ($) => ['Balans', {
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l state': _p.decide.state(
                                                                        $,
                                                                        ($): t_out.Mutaties.Verrekenpost_mutaties.l_dictionary.D.l_entry.l_dictionary.D.l_entry.Afhandeling.l_state.Balans.l_state => {
                                                                            switch ($[0]) {
                                                                                case 'Informele rekening':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['Informele rekening', {
                                                                                            'Informele rekening': _p_cc(
                                                                                                $['Informele rekening'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l id': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        }]
                                                                                    )
                                                                                default:
                                                                                    return _p.au(
                                                                                        $[0]
                                                                                    )
                                                                            }
                                                                        }
                                                                    ),
                                                                }]
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
                                },
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Bankrekening Mutatie Verwerkingen': _p_cc(
        $['Bankrekening Mutatie Verwerkingen'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l dictionary': $.__d_map(
                            ($, id) => ({
                                'l entry': {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry.l_state => {
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
                                                        ($) => ['Balans', {
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l state': _p.decide.state(
                                                                $,
                                                                ($): t_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.l_dictionary.D.l_entry.l_dictionary.D.l_entry.l_state.Balans.l_state => {
                                                                    switch ($[0]) {
                                                                        case 'Informele rekening':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Informele rekening', {
                                                                                    'Informele rekening': _p_cc(
                                                                                        $['Informele rekening'],
                                                                                        ($) => ({
                                                                                            'l location': {
                                                                                                'document resource identifier': "implement me",
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                            'l id': $['l id'],
                                                                                        })
                                                                                    ),
                                                                                }]
                                                                            )
                                                                        case 'Verrekenpost':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['Verrekenpost', {
                                                                                    'Verrekenpost': _p_cc(
                                                                                        $['Verrekenpost'],
                                                                                        ($) => ({
                                                                                            'l location': {
                                                                                                'document resource identifier': "implement me",
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                            'l id': $['l id'],
                                                                                        })
                                                                                    ),
                                                                                }]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            ),
                                                        }]
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    ),
                                },
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'Memoriaal boekingen': _p_cc(
        $['Memoriaal boekingen'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': $.__d_map(
                ($, id) => ({
                    'l entry': {
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l dictionary': $.__d_map(
                            ($, id) => ({
                                'l entry': {
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
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                            'l id': $['l id'],
                                        })
                                    ),
                                },
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                            })
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Jaren: t_signatures.Jaren = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': $.__d_map(
        ($, id) => ({
            'l entry': {
                'Afgesloten': _p_cc(
                    $['Afgesloten'],
                    ($) => ({
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l state': _p.decide.state(
                            $,
                            ($): t_out.Jaren.l_dictionary.D.l_entry.Afgesloten.l_state => {
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
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($) => ({
    'Jaar': _p_cc(
        $['Jaar'],
        ($) => $.__o_map(
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l id': $['l id'],
            })
        )
    ),
    'type': _p_cc(
        $['type'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Balans_Resultaat_Mutatie.type_.l_state => {
                    switch ($[0]) {
                        case 'Inkoop':
                            return _p.ss(
                                $,
                                ($) => ['Inkoop', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l id': $['l id'],
                                }]
                            )
                        case 'Verkoop':
                            return _p.ss(
                                $,
                                ($) => ['Verkoop', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l id': $['l id'],
                                }]
                            )
                        case 'BTW-periode':
                            return _p.ss(
                                $,
                                ($) => ['BTW-periode', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l id': $['l id'],
                                }]
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
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Eerste_boekjaar.l_state => {
            switch ($[0]) {
                case 'Ja':
                    return _p.ss(
                        $,
                        ($) => ['Ja', null]
                    )
                case 'Nee':
                    return _p.ss(
                        $,
                        ($) => ['Nee', {
                            'Vorig boekjaar': _p_cc(
                                $['Vorig boekjaar'],
                                ($) => ({
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l id': $['l id'],
                                })
                            ),
                        }]
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
