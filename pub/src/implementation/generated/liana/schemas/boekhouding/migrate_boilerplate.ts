
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/boekhouding/data/unresolved"

export const Fiscaal: t_signatures.Fiscaal = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Balans Hoofdcategorieen': _p_cc(
            $['Balans Hoofdcategorieen'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Zijde': _p_cc(
                                    $['Zijde'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Fiscaal.l_value.Balans_Hoofdcategorieen.l_value.D.l_entry.l_value.Zijde.l_value => {
                                                switch ($[0]) {
                                                    case 'Activa':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Activa', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Passiva':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Passiva', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
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
                                'Subcategorieen': _p_cc(
                                    $['Subcategorieen'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': null,
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Zijde': _p_cc(
                                    $['Zijde'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Fiscaal.l_value.Resultaat_Hoofdcategorieen.l_value.D.l_entry.l_value.Zijde.l_value => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Kosten', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Opbrengsten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Opbrengsten', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
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
                                'Subcategorieen': _p_cc(
                                    $['Subcategorieen'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': null,
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
})

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Correctietypes vennootschapsbelasting': _p_cc(
            $['Correctietypes vennootschapsbelasting'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Te corrigeren promillage': _p_cc(
                                    $['Te corrigeren promillage'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': $,
                                    })
                                ),
                            },
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Zijde': _p_cc(
                                    $['Zijde'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Grootboek_Categorieen.l_value.Balans.l_value.D.l_entry.l_value.Zijde.l_value => {
                                                switch ($[0]) {
                                                    case 'Activa':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Activa', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Passiva':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Passiva', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
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
                                'Subcategorieen': _p_cc(
                                    $['Subcategorieen'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': {
                                                        'Hoofdcategorie fiscus': _p_cc(
                                                            $['Hoofdcategorie fiscus'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': $['l id'],
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
                                                                'l value': $['l id'],
                                                            })
                                                        ),
                                                    },
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Zijde': _p_cc(
                                    $['Zijde'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Grootboek_Categorieen.l_value.Resultaat.l_value.D.l_entry.l_value.Zijde.l_value => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Kosten', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Opbrengsten':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Opbrengsten', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
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
                                'Subcategorieen': _p_cc(
                                    $['Subcategorieen'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': {
                                                        'Hoofdcategorie fiscus': _p_cc(
                                                            $['Hoofdcategorie fiscus'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': $['l id'],
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
                                                                'l value': $['l id'],
                                                            })
                                                        ),
                                                    },
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
})

export const Beheer: t_signatures.Beheer = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'BTW-categorieen': _p_cc(
            $['BTW-categorieen'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'BTW-heffing': _p_cc(
                                    $['BTW-heffing'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Beheer.l_value.BTW$mi_categorieen.l_value.D.l_entry.l_value.BTW$mi_heffing.l_value => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Ja', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'BTW-promillage': _p_cc(
                                                                        $['BTW-promillage'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $,
                                                                        })
                                                                    ),
                                                                },
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
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': {
                    'Balans': _p_cc(
                        $['Balans'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': {
                                            'Hoofdcategorie': _p_cc(
                                                $['Hoofdcategorie'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $['l id'],
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
                                                    'l value': $['l id'],
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
                                                    'l value': _p.decide.state(
                                                        $,
                                                        ($): t_out.Beheer.l_value.Grootboekrekeningen.l_value.Balans.l_value.D.l_entry.l_value.Zijde.l_value => {
                                                            switch ($[0]) {
                                                                case 'Activa':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Activa', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': null,
                                                                        }]
                                                                    )
                                                                case 'Passiva':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Passiva', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': null,
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
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': {
                                            'Hoofdcategorie': _p_cc(
                                                $['Hoofdcategorie'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $['l id'],
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
                                                    'l value': $['l id'],
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
                                                    'l value': _p.decide.state(
                                                        $,
                                                        ($): t_out.Beheer.l_value.Grootboekrekeningen.l_value.Resultaat.l_value.D.l_entry.l_value.Zijde.l_value => {
                                                            switch ($[0]) {
                                                                case 'Kosten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Kosten', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': {
                                                                                'Correctie op vennootschapsbelasting': _p_cc(
                                                                                    $['Correctie op vennootschapsbelasting'],
                                                                                    ($) => ({
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': _p.decide.state(
                                                                                            $,
                                                                                            ($): t_out.Beheer.l_value.Grootboekrekeningen.l_value.Resultaat.l_value.D.l_entry.l_value.Zijde.l_value.Kosten.l_value.Correctie_op_vennootschapsbelasting.l_value => {
                                                                                                switch ($[0]) {
                                                                                                    case 'Ja':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['Ja', {
                                                                                                                'l location': {
                                                                                                                    'document resource identifier': "implement me",
                                                                                                                    'line': 42,
                                                                                                                    'column': 42,
                                                                                                                },
                                                                                                                'l value': {
                                                                                                                    'Correctietype': _p_cc(
                                                                                                                        $['Correctietype'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': {
                                                                                                                                'document resource identifier': "implement me",
                                                                                                                                'line': 42,
                                                                                                                                'column': 42,
                                                                                                                            },
                                                                                                                            'l value': $['l id'],
                                                                                                                        })
                                                                                                                    ),
                                                                                                                },
                                                                                                            }]
                                                                                                        )
                                                                                                    case 'Nee':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['Nee', {
                                                                                                                'l location': {
                                                                                                                    'document resource identifier': "implement me",
                                                                                                                    'line': 42,
                                                                                                                    'column': 42,
                                                                                                                },
                                                                                                                'l value': null,
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
                                                                        }]
                                                                    )
                                                                case 'Opbrengsten':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Opbrengsten', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': null,
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
            })
        ),
        'Rekeningen': _p_cc(
            $['Rekeningen'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': {
                    'Bank': _p_cc(
                        $['Bank'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': null,
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
                    'Informeel': _p_cc(
                        $['Informeel'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': null,
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Volledige naam': _p_cc(
                                    $['Volledige naam'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': $,
                                    })
                                ),
                                'Wachtwoord': _p_cc(
                                    $['Wachtwoord'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': $,
                                    })
                                ),
                            },
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Licentieovereenkomsten': _p_cc(
                                    $['Licentieovereenkomsten'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': {
                                                        'Periodes': _p_cc(
                                                            $['Periodes'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': _p.dictionary.map(
                                                                    $,
                                                                    ($, id) => ({
                                                                        'l entry': {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': {
                                                                                'Bedrag': _p_cc(
                                                                                    $['Bedrag'],
                                                                                    ($) => ({
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': $,
                                                                                    })
                                                                                ),
                                                                            },
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
                                        'l value': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': {
                                                        'Offertes': _p_cc(
                                                            $['Offertes'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': _p.dictionary.map(
                                                                    $,
                                                                    ($, id) => ({
                                                                        'l entry': {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': {
                                                                                'Opbrengsten': _p_cc(
                                                                                    $['Opbrengsten'],
                                                                                    ($) => ({
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': _p.dictionary.map(
                                                                                            $,
                                                                                            ($, id) => ({
                                                                                                'l entry': {
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': {
                                                                                                        'Type': _p_cc(
                                                                                                            $['Type'],
                                                                                                            ($) => ({
                                                                                                                'l location': {
                                                                                                                    'document resource identifier': "implement me",
                                                                                                                    'line': 42,
                                                                                                                    'column': 42,
                                                                                                                },
                                                                                                                'l value': _p.decide.state(
                                                                                                                    $,
                                                                                                                    ($): t_out.Beheer.l_value.Klanten.l_value.D.l_entry.l_value.Projecten.l_value.D.l_entry.l_value.Offertes.l_value.D.l_entry.l_value.Opbrengsten.l_value.D.l_entry.l_value.Type.l_value => {
                                                                                                                        switch ($[0]) {
                                                                                                                            case 'Project':
                                                                                                                                return _p.ss(
                                                                                                                                    $,
                                                                                                                                    ($) => ['Project', {
                                                                                                                                        'l location': {
                                                                                                                                            'document resource identifier': "implement me",
                                                                                                                                            'line': 42,
                                                                                                                                            'column': 42,
                                                                                                                                        },
                                                                                                                                        'l value': {
                                                                                                                                            'Bedrag': _p_cc(
                                                                                                                                                $['Bedrag'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': {
                                                                                                                                                        'document resource identifier': "implement me",
                                                                                                                                                        'line': 42,
                                                                                                                                                        'column': 42,
                                                                                                                                                    },
                                                                                                                                                    'l value': $,
                                                                                                                                                })
                                                                                                                                            ),
                                                                                                                                            'Betaaldatum': _p_cc(
                                                                                                                                                $['Betaaldatum'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': {
                                                                                                                                                        'document resource identifier': "implement me",
                                                                                                                                                        'line': 42,
                                                                                                                                                        'column': 42,
                                                                                                                                                    },
                                                                                                                                                    'l value': $,
                                                                                                                                                })
                                                                                                                                            ),
                                                                                                                                        },
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': null,
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
        'Medewerkers': _p_cc(
            $['Medewerkers'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': null,
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
})

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Balans': _p_cc(
            $['Balans'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Type': _p_cc(
                                    $['Type'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Grootboekrekeningen.l_value.Balans.l_value.D.l_entry.l_value.Type.l_value => {
                                                switch ($[0]) {
                                                    case 'Bankrekening':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Bankrekening', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Overig':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Overig', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Informele rekening':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Informele rekening', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': null,
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
})

export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Resultaat': _p_cc(
            $['Resultaat'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': {
                    'Grootboekrekening voor BTW afrondingen': _p_cc(
                        $['Grootboekrekening voor BTW afrondingen'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': $['l id'],
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
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': null,
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
                    'BTW periodes': _p_cc(
                        $['BTW periodes'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': {
                                            '1. BTW-categorieen': _p_cc(
                                                $['1. BTW-categorieen'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': _p.dictionary.map(
                                                        $,
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
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
                                            'Documenten': _p_cc(
                                                $['Documenten'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': _p.dictionary.map(
                                                        $,
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Bestand': _p_cc(
                                                                        $['Bestand'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $,
                                                                        })
                                                                    ),
                                                                },
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
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $,
                                                })
                                            ),
                                            'Status': _p_cc(
                                                $['Status'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': _p.decide.state(
                                                        $,
                                                        ($): t_out.Jaarbeheer.l_value.Resultaat.l_value.BTW_periodes.l_value.D.l_entry.l_value.Status.l_value => {
                                                            switch ($[0]) {
                                                                case 'Aangegeven':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Aangegeven', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': {
                                                                                'Afronding': _p_cc(
                                                                                    $['Afronding'],
                                                                                    ($) => ({
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': $,
                                                                                    })
                                                                                ),
                                                                                'Bedrag': _p_cc(
                                                                                    $['Bedrag'],
                                                                                    ($) => ({
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': $,
                                                                                    })
                                                                                ),
                                                                                'Datum': _p_cc(
                                                                                    $['Datum'],
                                                                                    ($) => ({
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': $,
                                                                                    })
                                                                                ),
                                                                            },
                                                                        }]
                                                                    )
                                                                case 'Openstaand':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Openstaand', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': null,
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
                'l value': {
                    'Grootboekrekening voor nog aan te geven BTW': _p_cc(
                        $['Grootboekrekening voor nog aan te geven BTW'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': $['l id'],
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
                            'l value': $['l id'],
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
                            'l value': $['l id'],
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
                            'l value': $['l id'],
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
                            'l value': $['l id'],
                        })
                    ),
                    'Beginsaldo nog aan te geven BTW': _p_cc(
                        $['Beginsaldo nog aan te geven BTW'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': $,
                        })
                    ),
                    'Beginsaldo winstreserve': _p_cc(
                        $['Beginsaldo winstreserve'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': $,
                        })
                    ),
                    'Informele rekeningen': _p_cc(
                        $['Informele rekeningen'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': {
                                            'Beginsaldo': _p_cc(
                                                $['Beginsaldo'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $,
                                                })
                                            ),
                                            'Grootboekrekening': _p_cc(
                                                $['Grootboekrekening'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $['l id'],
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
                                                    'l value': _p.decide.state(
                                                        $,
                                                        ($): t_out.Jaarbeheer.l_value.Balans.l_value.Informele_rekeningen.l_value.D.l_entry.l_value.Nieuw.l_value => {
                                                            switch ($[0]) {
                                                                case 'Ja':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Ja', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': null,
                                                                        }]
                                                                    )
                                                                case 'Nee':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Nee', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': {
                                                                                'Rekening': _p_cc(
                                                                                    $['Rekening'],
                                                                                    ($) => ({
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': Verwijzing_naar_Informele_rekening(
                                                                                            $
                                                                                        ),
                                                                                    })
                                                                                ),
                                                                            },
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
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': {
                                            'Beginsaldo': _p_cc(
                                                $['Beginsaldo'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $,
                                                })
                                            ),
                                            'Grootboekrekening': _p_cc(
                                                $['Grootboekrekening'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $['l id'],
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
                                                    'l value': _p.decide.state(
                                                        $,
                                                        ($): t_out.Jaarbeheer.l_value.Balans.l_value.Bankrekeningen.l_value.D.l_entry.l_value.Nieuw.l_value => {
                                                            switch ($[0]) {
                                                                case 'Ja':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Ja', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': null,
                                                                        }]
                                                                    )
                                                                case 'Nee':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Nee', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': {
                                                                                'Rekening': _p_cc(
                                                                                    $['Rekening'],
                                                                                    ($) => ({
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': Verwijzing_naar_Bankrekening(
                                                                                            $
                                                                                        ),
                                                                                    })
                                                                                ),
                                                                            },
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
                                                    'l value': _p.dictionary.map(
                                                        $,
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Bedrag': _p_cc(
                                                                        $['Bedrag'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $,
                                                                        })
                                                                    ),
                                                                    'Datum': _p_cc(
                                                                        $['Datum'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $,
                                                                        })
                                                                    ),
                                                                    'Omschrijving': _p_cc(
                                                                        $['Omschrijving'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $,
                                                                        })
                                                                    ),
                                                                },
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
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': Overige_balans_item(
                                            $
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
                    'Verrekenposten': _p_cc(
                        $['Verrekenposten'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': null,
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
            })
        ),
    },
})

export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Beginsaldo': _p_cc(
            $['Beginsaldo'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': $,
            })
        ),
        'Grootboekrekening': _p_cc(
            $['Grootboekrekening'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': $['l id'],
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
                'l value': _p.decide.state(
                    $,
                    ($): t_out.Overige_balans_item.l_value.Nieuw.l_value => {
                        switch ($[0]) {
                            case 'Ja':
                                return _p.ss(
                                    $,
                                    ($) => ['Ja', {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': null,
                                    }]
                                )
                            case 'Nee':
                                return _p.ss(
                                    $,
                                    ($) => ['Nee', {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': {
                                            'Balans item': _p_cc(
                                                $['Balans item'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $['l id'],
                                                })
                                            ),
                                        },
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
})

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': $['l id'],
})

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': $['l id'],
})

export const Handelstransacties: t_signatures.Handelstransacties = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Inkopen': _p_cc(
            $['Inkopen'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Afhandeling': _p_cc(
                                    $['Afhandeling'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Handelstransacties.l_value.Inkopen.l_value.D.l_entry.l_value.Afhandeling.l_value => {
                                                switch ($[0]) {
                                                    case 'Mutaties':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Mutaties', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Rekening courant':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Rekening courant', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Rekening courant': _p_cc(
                                                                        $['Rekening courant'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $['l id'],
                                                                        })
                                                                    ),
                                                                },
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
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Handelstransacties.l_value.Inkopen.l_value.D.l_entry.l_value.BTW$mi_regime.l_value => {
                                                switch ($[0]) {
                                                    case 'Binnenland: heffing verlegd':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Binnenland: heffing verlegd', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Geen BTW van toepassing':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Geen BTW van toepassing', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Import van buiten de EU':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Import van buiten de EU', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Intracommunautair':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Intracommunautair', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Standaard':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Standaard', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'BTW-periode': _p_cc(
                                                                        $['BTW-periode'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $['l id'],
                                                                        })
                                                                    ),
                                                                },
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
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Handelstransacties.l_value.Inkopen.l_value.D.l_entry.l_value.Brondocument.l_value => {
                                                switch ($[0]) {
                                                    case 'Toegevoegd':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Toegevoegd', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Document': _p_cc(
                                                                        $['Document'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $,
                                                                        })
                                                                    ),
                                                                },
                                                            }]
                                                        )
                                                    case 'Niet van toepassing':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Niet van toepassing', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Ontbreekt':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Ontbreekt', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
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
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': $,
                                    })
                                ),
                                'Regels': _p_cc(
                                    $['Regels'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': {
                                                        'Bedrag': _p_cc(
                                                            $['Bedrag'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Handelstransacties.l_value.Inkopen.l_value.D.l_entry.l_value.Regels.l_value.D.l_entry.l_value.Bedrag.l_value => {
                                                                        switch ($[0]) {
                                                                            case 'Bekend':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Bekend', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'BTW-bedrag': _p_cc(
                                                                                                $['BTW-bedrag'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $,
                                                                                                })
                                                                                            ),
                                                                                            'Bedrag inclusief geheven BTW': _p_cc(
                                                                                                $['Bedrag inclusief geheven BTW'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $,
                                                                                                })
                                                                                            ),
                                                                                        },
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
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': $,
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
                                                                'l value': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Handelstransacties.l_value.Inkopen.l_value.D.l_entry.l_value.Regels.l_value.D.l_entry.l_value.Type.l_value => {
                                                                        switch ($[0]) {
                                                                            case 'Balans':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Balans', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'Balans item': _p_cc(
                                                                                                $['Balans item'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
                                                                                    }]
                                                                                )
                                                                            case 'Kosten':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Kosten', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'Grootboekrekening': _p_cc(
                                                                                                $['Grootboekrekening'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
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
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Handelstransacties.l_value.Inkopen.l_value.D.l_entry.l_value.Type.l_value => {
                                                switch ($[0]) {
                                                    case 'Bonnetje':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Bonnetje', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Inkoop (met crediteur)':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Inkoop (met crediteur)', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Crediteur': _p_cc(
                                                                        $['Crediteur'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $['l id'],
                                                                        })
                                                                    ),
                                                                    'Factuurnummer': _p_cc(
                                                                        $['Factuurnummer'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $,
                                                                        })
                                                                    ),
                                                                },
                                                            }]
                                                        )
                                                    case 'Loonheffing':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Loonheffing', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Ronde': _p_cc(
                                                                        $['Ronde'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $['l id'],
                                                                        })
                                                                    ),
                                                                },
                                                            }]
                                                        )
                                                    case 'Salaris':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Salaris', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Ronde': _p_cc(
                                                                        $['Ronde'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $['l id'],
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
                                                                            'l value': $['l id'],
                                                                        })
                                                                    ),
                                                                },
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Afhandeling': _p_cc(
                                    $['Afhandeling'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Handelstransacties.l_value.Verkopen.l_value.D.l_entry.l_value.Afhandeling.l_value => {
                                                switch ($[0]) {
                                                    case 'Mutaties':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Mutaties', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': null,
                                                            }]
                                                        )
                                                    case 'Rekening courant':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Rekening courant', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Rekening courant': _p_cc(
                                                                        $['Rekening courant'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $['l id'],
                                                                        })
                                                                    ),
                                                                },
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
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': $,
                                    })
                                ),
                                'BTW-periode': _p_cc(
                                    $['BTW-periode'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': $['l id'],
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
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Handelstransacties.l_value.Verkopen.l_value.D.l_entry.l_value.Brondocument.l_value => {
                                                switch ($[0]) {
                                                    case 'Toegevoegd':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Toegevoegd', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Document': _p_cc(
                                                                        $['Document'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $,
                                                                        })
                                                                    ),
                                                                },
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
                                        'l value': $['l id'],
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
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Handelstransacties.l_value.Verkopen.l_value.D.l_entry.l_value.Contracttype.l_value => {
                                                switch ($[0]) {
                                                    case 'Project':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Project', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Project': _p_cc(
                                                                        $['Project'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $['l id'],
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
                                                                            'l value': $['l id'],
                                                                        })
                                                                    ),
                                                                },
                                                            }]
                                                        )
                                                    case 'Licentieovereenkomst':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Licentieovereenkomst', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': {
                                                                    'Overeenkomst': _p_cc(
                                                                        $['Overeenkomst'],
                                                                        ($) => ({
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': $['l id'],
                                                                        })
                                                                    ),
                                                                },
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
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': $,
                                    })
                                ),
                                'Regels': _p_cc(
                                    $['Regels'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': {
                                                        'BTW-regime': _p_cc(
                                                            $['BTW-regime'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Handelstransacties.l_value.Verkopen.l_value.D.l_entry.l_value.Regels.l_value.D.l_entry.l_value.BTW$mi_regime.l_value => {
                                                                        switch ($[0]) {
                                                                            case 'Intracommunautair':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Intracommunautair', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': null,
                                                                                    }]
                                                                                )
                                                                            case 'Standaard':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Standaard', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'BTW-categorie': _p_cc(
                                                                                                $['BTW-categorie'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
                                                                                    }]
                                                                                )
                                                                            case 'Binnenland: heffing verlegd':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Binnenland: heffing verlegd', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': null,
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
                                                        'Bedrag exclusief BTW': _p_cc(
                                                            $['Bedrag exclusief BTW'],
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': $,
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
                                                                'l value': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Handelstransacties.l_value.Verkopen.l_value.D.l_entry.l_value.Regels.l_value.D.l_entry.l_value.Contracttype.l_value => {
                                                                        switch ($[0]) {
                                                                            case 'Project':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Project', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'Opbrengst': _p_cc(
                                                                                                $['Opbrengst'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
                                                                                    }]
                                                                                )
                                                                            case 'Los':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Los', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': null,
                                                                                    }]
                                                                                )
                                                                            case 'Licentieovereenkomst':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Licentieovereenkomst', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'Periode': _p_cc(
                                                                                                $['Periode'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
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
                                                            ($) => ({
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': $,
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
                                                                'l value': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Handelstransacties.l_value.Verkopen.l_value.D.l_entry.l_value.Regels.l_value.D.l_entry.l_value.Type.l_value => {
                                                                        switch ($[0]) {
                                                                            case 'Opbrengsten':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Opbrengsten', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'Grootboekrekening': _p_cc(
                                                                                                $['Grootboekrekening'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
                                                                                    }]
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
                                                                                        'l value': {
                                                                                            'Balans item': _p_cc(
                                                                                                $['Balans item'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
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
})

export const Mutaties: t_signatures.Mutaties = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Verrekenpost mutaties': _p_cc(
            $['Verrekenpost mutaties'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': {
                                            'Bedrag': _p_cc(
                                                $['Bedrag'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $,
                                                })
                                            ),
                                            'Afhandeling': _p_cc(
                                                $['Afhandeling'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': _p.decide.state(
                                                        $,
                                                        ($): t_out.Mutaties.l_value.Verrekenpost_mutaties.l_value.D.l_entry.l_value.D.l_entry.l_value.Afhandeling.l_value => {
                                                            switch ($[0]) {
                                                                case 'Resultaat':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['Resultaat', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l value': Balans_Resultaat_Mutatie(
                                                                                $
                                                                            ),
                                                                        }]
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
                                                                            'l value': _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Mutaties.l_value.Verrekenpost_mutaties.l_value.D.l_entry.l_value.D.l_entry.l_value.Afhandeling.l_value.Balans.l_value => {
                                                                                    switch ($[0]) {
                                                                                        case 'Informele rekening':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['Informele rekening', {
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': {
                                                                                                        'Informele rekening': _p_cc(
                                                                                                            $['Informele rekening'],
                                                                                                            ($) => ({
                                                                                                                'l location': {
                                                                                                                    'document resource identifier': "implement me",
                                                                                                                    'line': 42,
                                                                                                                    'column': 42,
                                                                                                                },
                                                                                                                'l value': $['l id'],
                                                                                                            })
                                                                                                        ),
                                                                                                    },
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': _p.decide.state(
                                            $,
                                            ($): t_out.Mutaties.l_value.Bankrekening_Mutatie_Verwerkingen.l_value.D.l_entry.l_value.D.l_entry.l_value => {
                                                switch ($[0]) {
                                                    case 'Resultaat':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['Resultaat', {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l value': Balans_Resultaat_Mutatie(
                                                                    $
                                                                ),
                                                            }]
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
                                                                'l value': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Mutaties.l_value.Bankrekening_Mutatie_Verwerkingen.l_value.D.l_entry.l_value.D.l_entry.l_value.Balans.l_value => {
                                                                        switch ($[0]) {
                                                                            case 'Informele rekening':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Informele rekening', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'Informele rekening': _p_cc(
                                                                                                $['Informele rekening'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
                                                                                    }]
                                                                                )
                                                                            case 'Verrekenpost':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Verrekenpost', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l value': {
                                                                                            'Verrekenpost': _p_cc(
                                                                                                $['Verrekenpost'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l value': $['l id'],
                                                                                                })
                                                                                            ),
                                                                                        },
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
                'l value': _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'l entry': {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': {
                                            'Bedrag': _p_cc(
                                                $['Bedrag'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $,
                                                })
                                            ),
                                            'Datum': _p_cc(
                                                $['Datum'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $,
                                                })
                                            ),
                                            'Omschrijving': _p_cc(
                                                $['Omschrijving'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $,
                                                })
                                            ),
                                            'Grootboekrekening': _p_cc(
                                                $['Grootboekrekening'],
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': $['l id'],
                                                })
                                            ),
                                        },
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
    },
})

export const Jaren: t_signatures.Jaren = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': {
                    'Afgesloten': _p_cc(
                        $['Afgesloten'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.decide.state(
                                $,
                                ($): t_out.Jaren.l_value.D.l_entry.l_value.Afgesloten.l_value => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return _p.ss(
                                                $,
                                                ($) => ['Ja', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': null,
                                                }]
                                            )
                                        case 'Nee':
                                            return _p.ss(
                                                $,
                                                ($) => ['Nee', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': null,
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
                    'Startdatum boekjaar': _p_cc(
                        $['Startdatum boekjaar'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': $,
                        })
                    ),
                    'Grootboekrekeningen': _p_cc(
                        $['Grootboekrekeningen'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': Grootboekrekeningen(
                                $
                            ),
                        })
                    ),
                    'Eerste boekjaar': _p_cc(
                        $['Eerste boekjaar'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': Eerste_boekjaar(
                                $
                            ),
                        })
                    ),
                    'Jaarbeheer': _p_cc(
                        $['Jaarbeheer'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': Jaarbeheer(
                                $
                            ),
                        })
                    ),
                    'Handelstransacties': _p_cc(
                        $['Handelstransacties'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': Handelstransacties(
                                $
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
                            'l value': Mutaties(
                                $
                            ),
                        })
                    ),
                },
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
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Jaar': _p_cc(
            $['Jaar'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.optional.map(
                    $,
                    ($) => ({
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l value': $['l id'],
                    })
                ),
            })
        ),
        'type': _p_cc(
            $['type'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.decide.state(
                    $,
                    ($): t_out.Balans_Resultaat_Mutatie.l_value.type_.l_value => {
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
                                        'l value': $['l id'],
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
                                        'l value': $['l id'],
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
                                        'l value': $['l id'],
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
})

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': _p.decide.state(
        $,
        ($): t_out.Eerste_boekjaar.l_value => {
            switch ($[0]) {
                case 'Ja':
                    return _p.ss(
                        $,
                        ($) => ['Ja', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': null,
                        }]
                    )
                case 'Nee':
                    return _p.ss(
                        $,
                        ($) => ['Nee', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': {
                                'Vorig boekjaar': _p_cc(
                                    $['Vorig boekjaar'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l value': $['l id'],
                                    })
                                ),
                            },
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
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': {
        'Fiscaal': _p_cc(
            $['Fiscaal'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': Fiscaal(
                    $
                ),
            })
        ),
        'Categorieen': _p_cc(
            $['Categorieen'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': Grootboek_Categorieen(
                    $
                ),
            })
        ),
        'Beheer': _p_cc(
            $['Beheer'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': Beheer(
                    $
                ),
            })
        ),
        'Jaren': _p_cc(
            $['Jaren'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': Jaren(
                    $
                ),
            })
        ),
    },
})
