
import * as p_ from 'pareto-core/implementation/transformer'
import * as p_di from 'pareto-core/interface/schema'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import type * as s_in from "../../../interface/schemas/resolved.js"
namespace t_signatures {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Root
    >
    export type Fiscaal = p_.Transformer<
        s_in.Fiscaal,
        s_out.Fiscaal
    >
    export type Grootboek_Categorieen = p_.Transformer<
        s_in.Grootboek_Categorieen,
        s_out.Grootboek_Categorieen
    >
    export type Beheer = p_.Transformer<
        s_in.Beheer,
        s_out.Beheer
    >
    export type Grootboekrekeningen = p_.Transformer<
        s_in.Grootboekrekeningen,
        s_out.Grootboekrekeningen
    >
    export type Jaarbeheer = p_.Transformer<
        s_in.Jaarbeheer,
        s_out.Jaarbeheer
    >
    export type Overige_balans_item = p_.Transformer<
        s_in.Overige_balans_item,
        s_out.Overige_balans_item
    >
    export type Verwijzing_naar_Informele_rekening = p_.Transformer<
        s_in.Verwijzing_naar_Informele_rekening,
        s_out.Verwijzing_naar_Informele_rekening
    >
    export type Verwijzing_naar_Bankrekening = p_.Transformer<
        s_in.Verwijzing_naar_Bankrekening,
        s_out.Verwijzing_naar_Bankrekening
    >
    export type Handelstransacties = p_.Transformer<
        s_in.Handelstransacties,
        s_out.Handelstransacties
    >
    export type Mutaties = p_.Transformer<
        s_in.Mutaties,
        s_out.Mutaties
    >
    export type Jaren = p_.Transformer<
        s_in.Jaren,
        s_out.Jaren
    >
    export type Rekening_Mutatie = p_.Transformer<
        s_in.Rekening_Mutatie,
        s_out.Rekening_Mutatie
    >
    export type Eerste_boekjaar = p_.Transformer<
        s_in.Eerste_boekjaar,
        s_out.Eerste_boekjaar
    >
}

import * as s_out from "../../../../boekhouding_unresolved/interface/schemas/unresolved.js"

export const Root: t_signatures.Root = ($) => ({
    'Fiscaal': p_change_context(
        $['Fiscaal'],
        ($) => Fiscaal(
            $,
        ),
    ),
    'Categorieen': p_change_context(
        $['Categorieen'],
        ($) => Grootboek_Categorieen(
            $,
        ),
    ),
    'Beheer': p_change_context(
        $['Beheer'],
        ($) => Beheer(
            $,
        ),
    ),
    'Jaren': p_change_context(
        $['Jaren'],
        ($) => Jaren(
            $,
        ),
    ),
})

export const Fiscaal: t_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': p_change_context(
        $['Balans Hoofdcategorieen'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Zijde': p_change_context(
                            $['Zijde'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Fiscaal.Balans_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde.l_state => {
                                        switch ($[0]) {
                                            case 'Activa':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Activa', null],
                                                )
                                            case 'Passiva':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Passiva', null],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'Subcategorieen': p_change_context(
                            $['Subcategorieen'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': null,
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Resultaat Hoofdcategorieen': p_change_context(
        $['Resultaat Hoofdcategorieen'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Zijde': p_change_context(
                            $['Zijde'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Fiscaal.Resultaat_Hoofdcategorieen.l_dictionary.D.l_entry.Zijde.l_state => {
                                        switch ($[0]) {
                                            case 'Kosten':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Kosten', null],
                                                )
                                            case 'Opbrengsten':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Opbrengsten', null],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'Subcategorieen': p_change_context(
                            $['Subcategorieen'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': null,
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($) => ({
    'Correctietypes vennootschapsbelasting': p_change_context(
        $['Correctietypes vennootschapsbelasting'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Te corrigeren promillage': p_change_context(
                            $['Te corrigeren promillage'],
                            ($) => $,
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Balans': p_change_context(
        $['Balans'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Zijde': p_change_context(
                            $['Zijde'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Grootboek_Categorieen.Balans.l_dictionary.D.l_entry.Zijde.l_state => {
                                        switch ($[0]) {
                                            case 'Activa':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Activa', null],
                                                )
                                            case 'Passiva':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Passiva', null],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'Subcategorieen': p_change_context(
                            $['Subcategorieen'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Hoofdcategorie fiscus': p_change_context(
                                                $['Hoofdcategorie fiscus'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }),
                                            ),
                                            'Subcategorie fiscus': p_change_context(
                                                $['Subcategorie fiscus'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Resultaat': p_change_context(
        $['Resultaat'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Zijde': p_change_context(
                            $['Zijde'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Grootboek_Categorieen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state => {
                                        switch ($[0]) {
                                            case 'Kosten':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Kosten', null],
                                                )
                                            case 'Opbrengsten':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Opbrengsten', null],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'Subcategorieen': p_change_context(
                            $['Subcategorieen'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Hoofdcategorie fiscus': p_change_context(
                                                $['Hoofdcategorie fiscus'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }),
                                            ),
                                            'Subcategorie fiscus': p_change_context(
                                                $['Subcategorie fiscus'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Beheer: t_signatures.Beheer = ($) => ({
    'BTW-categorieen': p_change_context(
        $['BTW-categorieen'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'BTW-heffing': p_change_context(
                            $['BTW-heffing'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Beheer.BTW$mi_categorieen.l_dictionary.D.l_entry.BTW$mi_heffing.l_state => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Ja', {
                                                        'BTW-promillage': p_change_context(
                                                            $['BTW-promillage'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Nee':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Nee', null],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Grootboekrekeningen': p_change_context(
        $['Grootboekrekeningen'],
        ($) => ({
            'Balans': p_change_context(
                $['Balans'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': {
                                'Hoofdcategorie': p_change_context(
                                    $['Hoofdcategorie'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l reference': $['l id'],
                                    }),
                                ),
                                'Subcategorie': p_change_context(
                                    $['Subcategorie'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l reference': $['l id'],
                                    }),
                                ),
                                'Zijde': p_change_context(
                                    $['Zijde'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l state': p_decide_state(
                                            $,
                                            ($): s_out.Beheer.Grootboekrekeningen.Balans.l_dictionary.D.l_entry.Zijde.l_state => {
                                                switch ($[0]) {
                                                    case 'Activa':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Activa', null],
                                                        )
                                                    case 'Passiva':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Passiva', null],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    }),
                                ),
                            },
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
            'Resultaat': p_change_context(
                $['Resultaat'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': {
                                'Hoofdcategorie': p_change_context(
                                    $['Hoofdcategorie'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l reference': $['l id'],
                                    }),
                                ),
                                'Subcategorie': p_change_context(
                                    $['Subcategorie'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l reference': $['l id'],
                                    }),
                                ),
                                'Zijde': p_change_context(
                                    $['Zijde'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l state': p_decide_state(
                                            $,
                                            ($): s_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state => {
                                                switch ($[0]) {
                                                    case 'Kosten':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Kosten', {
                                                                'Correctie op vennootschapsbelasting': p_change_context(
                                                                    $['Correctie op vennootschapsbelasting'],
                                                                    ($) => ({
                                                                        'l location': ['in main document', {
                                                                            'start': {
                                                                                'absolute': 42,
                                                                                'relative': {
                                                                                    'line': 42,
                                                                                    'column': 42,
                                                                                },
                                                                            },
                                                                            'end': {
                                                                                'absolute': 42,
                                                                                'relative': {
                                                                                    'line': 42,
                                                                                    'column': 42,
                                                                                },
                                                                            },
                                                                        }],
                                                                        'l state': p_decide_state(
                                                                            $,
                                                                            ($): s_out.Beheer.Grootboekrekeningen.Resultaat.l_dictionary.D.l_entry.Zijde.l_state.Kosten.Correctie_op_vennootschapsbelasting.l_state => {
                                                                                switch ($[0]) {
                                                                                    case 'Ja':
                                                                                        return p_.option(
                                                                                            $,
                                                                                            ($) => ['Ja', {
                                                                                                'Correctietype': p_change_context(
                                                                                                    $['Correctietype'],
                                                                                                    ($) => ({
                                                                                                        'l location': ['in main document', {
                                                                                                            'start': {
                                                                                                                'absolute': 42,
                                                                                                                'relative': {
                                                                                                                    'line': 42,
                                                                                                                    'column': 42,
                                                                                                                },
                                                                                                            },
                                                                                                            'end': {
                                                                                                                'absolute': 42,
                                                                                                                'relative': {
                                                                                                                    'line': 42,
                                                                                                                    'column': 42,
                                                                                                                },
                                                                                                            },
                                                                                                        }],
                                                                                                        'l reference': $['l id'],
                                                                                                    }),
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'Nee':
                                                                                        return p_.option(
                                                                                            $,
                                                                                            ($) => ['Nee', null],
                                                                                        )
                                                                                    default:
                                                                                        return p_.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        ),
                                                                    }),
                                                                ),
                                                            }],
                                                        )
                                                    case 'Opbrengsten':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Opbrengsten', null],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    }),
                                ),
                            },
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
        }),
    ),
    'Rekeningen': p_change_context(
        $['Rekeningen'],
        ($) => ({
            'Bank': p_change_context(
                $['Bank'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': null,
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
            'Informeel': p_change_context(
                $['Informeel'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': null,
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
        }),
    ),
    'Gebruikers': p_change_context(
        $['Gebruikers'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Volledige naam': p_change_context(
                            $['Volledige naam'],
                            ($) => $,
                        ),
                        'Wachtwoord': p_change_context(
                            $['Wachtwoord'],
                            ($) => $,
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Klanten': p_change_context(
        $['Klanten'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Licentieovereenkomsten': p_change_context(
                            $['Licentieovereenkomsten'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Periodes': p_change_context(
                                                $['Periodes'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l dictionary': p_.from.dictionary($,
                                                    ).map(
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'Bedrag': p_change_context(
                                                                    $['Bedrag'],
                                                                    ($) => $,
                                                                ),
                                                            },
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                        'Projecten': p_change_context(
                            $['Projecten'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Offertes': p_change_context(
                                                $['Offertes'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l dictionary': p_.from.dictionary($,
                                                    ).map(
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'Opbrengsten': p_change_context(
                                                                    $['Opbrengsten'],
                                                                    ($) => ({
                                                                        'l location': ['in main document', {
                                                                            'start': {
                                                                                'absolute': 42,
                                                                                'relative': {
                                                                                    'line': 42,
                                                                                    'column': 42,
                                                                                },
                                                                            },
                                                                            'end': {
                                                                                'absolute': 42,
                                                                                'relative': {
                                                                                    'line': 42,
                                                                                    'column': 42,
                                                                                },
                                                                            },
                                                                        }],
                                                                        'l dictionary': p_.from.dictionary($,
                                                                        ).map(
                                                                            ($, id) => ({
                                                                                'l entry': {
                                                                                    'Type': p_change_context(
                                                                                        $['Type'],
                                                                                        ($) => ({
                                                                                            'l location': ['in main document', {
                                                                                                'start': {
                                                                                                    'absolute': 42,
                                                                                                    'relative': {
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                },
                                                                                                'end': {
                                                                                                    'absolute': 42,
                                                                                                    'relative': {
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                },
                                                                                            }],
                                                                                            'l state': p_decide_state(
                                                                                                $,
                                                                                                ($): s_out.Beheer.Klanten.l_dictionary.D.l_entry.Projecten.l_dictionary.D.l_entry.Offertes.l_dictionary.D.l_entry.Opbrengsten.l_dictionary.D.l_entry.Type.l_state => {
                                                                                                    switch ($[0]) {
                                                                                                        case 'Project':
                                                                                                            return p_.option(
                                                                                                                $,
                                                                                                                ($) => ['Project', {
                                                                                                                    'Bedrag': p_change_context(
                                                                                                                        $['Bedrag'],
                                                                                                                        ($) => $,
                                                                                                                    ),
                                                                                                                    'Betaaldatum': p_change_context(
                                                                                                                        $['Betaaldatum'],
                                                                                                                        ($) => $,
                                                                                                                    ),
                                                                                                                }],
                                                                                                            )
                                                                                                        default:
                                                                                                            return p_.au(
                                                                                                                $[0],
                                                                                                            )
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                },
                                                                                'l location': ['in main document', {
                                                                                    'start': {
                                                                                        'absolute': 42,
                                                                                        'relative': {
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                    },
                                                                                    'end': {
                                                                                        'absolute': 42,
                                                                                        'relative': {
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                    },
                                                                                }],
                                                                            }),
                                                                        ),
                                                                    }),
                                                                ),
                                                            },
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Leveranciers': p_change_context(
        $['Leveranciers'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': null,
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Medewerkers': p_change_context(
        $['Medewerkers'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': null,
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($) => ({
    'Balans': p_change_context(
        $['Balans'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Stam': p_change_context(
                            $['Stam'],
                            ($) => null,
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Resultaat': p_change_context(
        $['Resultaat'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Stam': p_change_context(
                            $['Stam'],
                            ($) => null,
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Jaarbeheer: t_signatures.Jaarbeheer = ($) => ({
    'Resultaat': p_change_context(
        $['Resultaat'],
        ($) => ({
            'Grootboekrekening voor BTW afrondingen': p_change_context(
                $['Grootboekrekening voor BTW afrondingen'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l reference': $['l id'],
                }),
            ),
            'Salarisrondes': p_change_context(
                $['Salarisrondes'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': null,
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
            'BTW periodes': p_change_context(
                $['BTW periodes'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': {
                                '1. BTW-categorieen': p_change_context(
                                    $['1. BTW-categorieen'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l dictionary': p_.from.dictionary($,
                                        ).map(
                                            ($, id) => ({
                                                'l entry': null,
                                                'l location': ['in main document', {
                                                    'start': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                    'end': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                }],
                                            }),
                                        ),
                                    }),
                                ),
                                'Documenten': p_change_context(
                                    $['Documenten'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l dictionary': p_.from.dictionary($,
                                        ).map(
                                            ($, id) => ({
                                                'l entry': {
                                                    'Bestand': p_change_context(
                                                        $['Bestand'],
                                                        ($) => $,
                                                    ),
                                                },
                                                'l location': ['in main document', {
                                                    'start': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                    'end': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                }],
                                            }),
                                        ),
                                    }),
                                ),
                                'Omschrijving': p_change_context(
                                    $['Omschrijving'],
                                    ($) => $,
                                ),
                                'Status': p_change_context(
                                    $['Status'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l state': p_decide_state(
                                            $,
                                            ($): s_out.Jaarbeheer.Resultaat.BTW_periodes.l_dictionary.D.l_entry.Status.l_state => {
                                                switch ($[0]) {
                                                    case 'Aangegeven':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Aangegeven', {
                                                                'Afronding': p_change_context(
                                                                    $['Afronding'],
                                                                    ($) => $,
                                                                ),
                                                                'Bedrag': p_change_context(
                                                                    $['Bedrag'],
                                                                    ($) => $,
                                                                ),
                                                                'Datum': p_change_context(
                                                                    $['Datum'],
                                                                    ($) => $,
                                                                ),
                                                            }],
                                                        )
                                                    case 'Openstaand':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Openstaand', null],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    }),
                                ),
                            },
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
        }),
    ),
    'Balans': p_change_context(
        $['Balans'],
        ($) => ({
            'Grootboekrekening voor nog aan te geven BTW': p_change_context(
                $['Grootboekrekening voor nog aan te geven BTW'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l reference': $['l id'],
                }),
            ),
            'Grootboekrekening voor resultaat dit jaar': p_change_context(
                $['Grootboekrekening voor resultaat dit jaar'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l reference': $['l id'],
                }),
            ),
            'Grootboekrekening voor winstreserve': p_change_context(
                $['Grootboekrekening voor winstreserve'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l reference': $['l id'],
                }),
            ),
            'Grootboekrekening voor Inkoop saldo': p_change_context(
                $['Grootboekrekening voor Inkoop saldo'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l reference': $['l id'],
                }),
            ),
            'Grootboekrekening voor Verkoop saldo': p_change_context(
                $['Grootboekrekening voor Verkoop saldo'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l reference': $['l id'],
                }),
            ),
            'Beginsaldo nog aan te geven BTW': p_change_context(
                $['Beginsaldo nog aan te geven BTW'],
                ($) => $,
            ),
            'Beginsaldo winstreserve': p_change_context(
                $['Beginsaldo winstreserve'],
                ($) => $,
            ),
            'Bankrekeningen': p_change_context(
                $['Bankrekeningen'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': {
                                'Beginsaldo': p_change_context(
                                    $['Beginsaldo'],
                                    ($) => $,
                                ),
                                'Grootboekrekening': p_change_context(
                                    $['Grootboekrekening'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l reference': $['l id'],
                                    }),
                                ),
                                'Nieuw': p_change_context(
                                    $['Nieuw'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l state': p_decide_state(
                                            $,
                                            ($): s_out.Jaarbeheer.Balans.Bankrekeningen.l_dictionary.D.l_entry.Nieuw.l_state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Ja', null],
                                                        )
                                                    case 'Nee':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Nee', {
                                                                'Rekening': p_change_context(
                                                                    $['Rekening'],
                                                                    ($) => Verwijzing_naar_Bankrekening(
                                                                        $,
                                                                    ),
                                                                ),
                                                            }],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    }),
                                ),
                                'Mutaties': p_change_context(
                                    $['Mutaties'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l dictionary': p_.from.dictionary($,
                                        ).map(
                                            ($, id) => ({
                                                'l entry': {
                                                    'Bedrag': p_change_context(
                                                        $['Bedrag'],
                                                        ($) => $,
                                                    ),
                                                    'Datum': p_change_context(
                                                        $['Datum'],
                                                        ($) => $,
                                                    ),
                                                    'Omschrijving': p_change_context(
                                                        $['Omschrijving'],
                                                        ($) => $,
                                                    ),
                                                },
                                                'l location': ['in main document', {
                                                    'start': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                    'end': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                }],
                                            }),
                                        ),
                                    }),
                                ),
                            },
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
            'Informele rekeningen': p_change_context(
                $['Informele rekeningen'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': {
                                'Beginsaldo': p_change_context(
                                    $['Beginsaldo'],
                                    ($) => $,
                                ),
                                'Grootboekrekening': p_change_context(
                                    $['Grootboekrekening'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l reference': $['l id'],
                                    }),
                                ),
                                'Nieuw': p_change_context(
                                    $['Nieuw'],
                                    ($) => ({
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                        'l state': p_decide_state(
                                            $,
                                            ($): s_out.Jaarbeheer.Balans.Informele_rekeningen.l_dictionary.D.l_entry.Nieuw.l_state => {
                                                switch ($[0]) {
                                                    case 'Ja':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Ja', null],
                                                        )
                                                    case 'Nee':
                                                        return p_.option(
                                                            $,
                                                            ($) => ['Nee', {
                                                                'Rekening': p_change_context(
                                                                    $['Rekening'],
                                                                    ($) => Verwijzing_naar_Informele_rekening(
                                                                        $,
                                                                    ),
                                                                ),
                                                            }],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        ),
                                    }),
                                ),
                            },
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
            'Overige balans items': p_change_context(
                $['Overige balans items'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': Overige_balans_item(
                                $,
                            ),
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
            'Verrekenposten': p_change_context(
                $['Verrekenposten'],
                ($) => ({
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                    'l dictionary': p_.from.dictionary($,
                    ).map(
                        ($, id) => ({
                            'l entry': null,
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                        }),
                    ),
                }),
            ),
        }),
    ),
})

export const Overige_balans_item: t_signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': p_change_context(
        $['Beginsaldo'],
        ($) => $,
    ),
    'Grootboekrekening': p_change_context(
        $['Grootboekrekening'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l reference': $['l id'],
        }),
    ),
    'Nieuw': p_change_context(
        $['Nieuw'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): s_out.Overige_balans_item.Nieuw.l_state => {
                    switch ($[0]) {
                        case 'Ja':
                            return p_.option(
                                $,
                                ($) => ['Ja', null],
                            )
                        case 'Nee':
                            return p_.option(
                                $,
                                ($) => ['Nee', {
                                    'Balans item': p_change_context(
                                        $['Balans item'],
                                        ($) => ({
                                            'l location': ['in main document', {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            }],
                                            'l reference': $['l id'],
                                        }),
                                    ),
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l reference': $['l id'],
})

export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l reference': $['l id'],
})

export const Handelstransacties: t_signatures.Handelstransacties = ($) => ({
    'Inkopen': p_change_context(
        $['Inkopen'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Afhandeling': p_change_context(
                            $['Afhandeling'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Afhandeling.l_state => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Mutaties', null],
                                                )
                                            case 'Nog te betalen':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Nog te betalen', {
                                                        'Betalingstermijn': p_change_context(
                                                            $['Betalingstermijn'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Rekening courant':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Rekening courant', {
                                                        'Rekening courant': p_change_context(
                                                            $['Rekening courant'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'BTW-periode': p_change_context(
                            $['BTW-periode'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l reference': $['l id'],
                            }),
                        ),
                        'Brondocument': p_change_context(
                            $['Brondocument'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Brondocument.l_state => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Toegevoegd', {
                                                        'Document': p_change_context(
                                                            $['Document'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Niet van toepassing':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Niet van toepassing', null],
                                                )
                                            case 'Ontbreekt':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Ontbreekt', null],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'Datum': p_change_context(
                            $['Datum'],
                            ($) => $,
                        ),
                        'Regels': p_change_context(
                            $['Regels'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Bedrag': p_change_context(
                                                $['Bedrag'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l state': p_decide_state(
                                                        $,
                                                        ($): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Bedrag.l_state => {
                                                            switch ($[0]) {
                                                                case 'Bekend':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Bekend', {
                                                                            'BTW-bedrag': p_change_context(
                                                                                $['BTW-bedrag'],
                                                                                ($) => $,
                                                                            ),
                                                                            'Bedrag inclusief geheven BTW': p_change_context(
                                                                                $['Bedrag inclusief geheven BTW'],
                                                                                ($) => $,
                                                                            ),
                                                                        }],
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                }),
                                            ),
                                            'Omschrijving': p_change_context(
                                                $['Omschrijving'],
                                                ($) => $,
                                            ),
                                            'Type': p_change_context(
                                                $['Type'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l state': p_decide_state(
                                                        $,
                                                        ($): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type.l_state => {
                                                            switch ($[0]) {
                                                                case 'Balans':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Balans', {
                                                                            'Balans item': p_change_context(
                                                                                $['Balans item'],
                                                                                ($) => ({
                                                                                    'l location': ['in main document', {
                                                                                        'start': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                        'end': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                    }],
                                                                                    'l reference': $['l id'],
                                                                                }),
                                                                            ),
                                                                        }],
                                                                    )
                                                                case 'Kosten':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Kosten', {
                                                                            'Grootboekrekening': p_change_context(
                                                                                $['Grootboekrekening'],
                                                                                ($) => ({
                                                                                    'l location': ['in main document', {
                                                                                        'start': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                        'end': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                    }],
                                                                                    'l reference': $['l id'],
                                                                                }),
                                                                            ),
                                                                        }],
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                        'Type': p_change_context(
                            $['Type'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Handelstransacties.Inkopen.l_dictionary.D.l_entry.Type.l_state => {
                                        switch ($[0]) {
                                            case 'Bonnetje':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Bonnetje', null],
                                                )
                                            case 'Inkoop (met crediteur)':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Inkoop (met crediteur)', {
                                                        'Crediteur': p_change_context(
                                                            $['Crediteur'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                        'Factuurnummer': p_change_context(
                                                            $['Factuurnummer'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Loonheffing':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Loonheffing', {
                                                        'Ronde': p_change_context(
                                                            $['Ronde'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                    }],
                                                )
                                            case 'Salaris':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Salaris', {
                                                        'Ronde': p_change_context(
                                                            $['Ronde'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                        'Medewerker': p_change_context(
                                                            $['Medewerker'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Verkopen': p_change_context(
        $['Verkopen'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Afhandeling': p_change_context(
                            $['Afhandeling'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Afhandeling.l_state => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Mutaties', null],
                                                )
                                            case 'Rekening courant':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Rekening courant', {
                                                        'Rekening courant': p_change_context(
                                                            $['Rekening courant'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'Betalingstermijn': p_change_context(
                            $['Betalingstermijn'],
                            ($) => $,
                        ),
                        'BTW-periode': p_change_context(
                            $['BTW-periode'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l reference': $['l id'],
                            }),
                        ),
                        'Brondocument': p_change_context(
                            $['Brondocument'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Brondocument.l_state => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Toegevoegd', {
                                                        'Document': p_change_context(
                                                            $['Document'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'Debiteur': p_change_context(
                            $['Debiteur'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l reference': $['l id'],
                            }),
                        ),
                        'Contracttype': p_change_context(
                            $['Contracttype'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Contracttype.l_state => {
                                        switch ($[0]) {
                                            case 'Project':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Project', {
                                                        'Project': p_change_context(
                                                            $['Project'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                        'Offerte': p_change_context(
                                                            $['Offerte'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                    }],
                                                )
                                            case 'Licentieovereenkomst':
                                                return p_.option(
                                                    $,
                                                    ($) => ['Licentieovereenkomst', {
                                                        'Overeenkomst': p_change_context(
                                                            $['Overeenkomst'],
                                                            ($) => ({
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l reference': $['l id'],
                                                            }),
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'Datum': p_change_context(
                            $['Datum'],
                            ($) => $,
                        ),
                        'Regels': p_change_context(
                            $['Regels'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'BTW-regime': p_change_context(
                                                $['BTW-regime'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l state': p_decide_state(
                                                        $,
                                                        ($): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.BTW$mi_regime.l_state => {
                                                            switch ($[0]) {
                                                                case 'Intracommunautair':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Intracommunautair', null],
                                                                    )
                                                                case 'Standaard':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Standaard', {
                                                                            'BTW-categorie': p_change_context(
                                                                                $['BTW-categorie'],
                                                                                ($) => ({
                                                                                    'l location': ['in main document', {
                                                                                        'start': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                        'end': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                    }],
                                                                                    'l reference': $['l id'],
                                                                                }),
                                                                            ),
                                                                        }],
                                                                    )
                                                                case 'Binnenland: heffing verlegd':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Binnenland: heffing verlegd', null],
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                }),
                                            ),
                                            'Bedrag exclusief BTW': p_change_context(
                                                $['Bedrag exclusief BTW'],
                                                ($) => $,
                                            ),
                                            'Contracttype': p_change_context(
                                                $['Contracttype'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l state': p_decide_state(
                                                        $,
                                                        ($): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Contracttype.l_state => {
                                                            switch ($[0]) {
                                                                case 'Project':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Project', {
                                                                            'Opbrengst': p_change_context(
                                                                                $['Opbrengst'],
                                                                                ($) => ({
                                                                                    'l location': ['in main document', {
                                                                                        'start': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                        'end': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                    }],
                                                                                    'l reference': $['l id'],
                                                                                }),
                                                                            ),
                                                                        }],
                                                                    )
                                                                case 'Los':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Los', null],
                                                                    )
                                                                case 'Licentieovereenkomst':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Licentieovereenkomst', {
                                                                            'Periode': p_change_context(
                                                                                $['Periode'],
                                                                                ($) => ({
                                                                                    'l location': ['in main document', {
                                                                                        'start': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                        'end': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                    }],
                                                                                    'l reference': $['l id'],
                                                                                }),
                                                                            ),
                                                                        }],
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                }),
                                            ),
                                            'Omschrijving': p_change_context(
                                                $['Omschrijving'],
                                                ($) => $,
                                            ),
                                            'Type': p_change_context(
                                                $['Type'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l state': p_decide_state(
                                                        $,
                                                        ($): s_out.Handelstransacties.Verkopen.l_dictionary.D.l_entry.Regels.l_dictionary.D.l_entry.Type.l_state => {
                                                            switch ($[0]) {
                                                                case 'Opbrengsten':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Opbrengsten', {
                                                                            'Grootboekrekening': p_change_context(
                                                                                $['Grootboekrekening'],
                                                                                ($) => ({
                                                                                    'l location': ['in main document', {
                                                                                        'start': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                        'end': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                    }],
                                                                                    'l reference': $['l id'],
                                                                                }),
                                                                            ),
                                                                        }],
                                                                    )
                                                                case 'Balans':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Balans', {
                                                                            'Balans item': p_change_context(
                                                                                $['Balans item'],
                                                                                ($) => ({
                                                                                    'l location': ['in main document', {
                                                                                        'start': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                        'end': {
                                                                                            'absolute': 42,
                                                                                            'relative': {
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                        },
                                                                                    }],
                                                                                    'l reference': $['l id'],
                                                                                }),
                                                                            ),
                                                                        }],
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Mutaties: t_signatures.Mutaties = ($) => ({
    'Verrekenposten': p_change_context(
        $['Verrekenposten'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Stam': p_change_context(
                            $['Stam'],
                            ($) => null,
                        ),
                        'Mutaties': p_change_context(
                            $['Mutaties'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Bedrag': p_change_context(
                                                $['Bedrag'],
                                                ($) => $,
                                            ),
                                            'Afhandeling': p_change_context(
                                                $['Afhandeling'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l state': p_decide_state(
                                                        $,
                                                        ($): s_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry.Afhandeling.l_state => {
                                                            switch ($[0]) {
                                                                case 'Resultaat':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Resultaat', Rekening_Mutatie(
                                                                            $,
                                                                        )],
                                                                    )
                                                                case 'Balans':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Balans', {
                                                                            'l location': ['in main document', {
                                                                                'start': {
                                                                                    'absolute': 42,
                                                                                    'relative': {
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                },
                                                                                'end': {
                                                                                    'absolute': 42,
                                                                                    'relative': {
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                },
                                                                            }],
                                                                            'l state': p_decide_state(
                                                                                $,
                                                                                ($): s_out.Mutaties.Verrekenposten.l_dictionary.D.l_entry.Mutaties.l_dictionary.D.l_entry.Afhandeling.l_state.Balans.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'Informele rekening':
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ['Informele rekening', {
                                                                                                    'Informele rekening': p_change_context(
                                                                                                        $['Informele rekening'],
                                                                                                        ($) => ({
                                                                                                            'l location': ['in main document', {
                                                                                                                'start': {
                                                                                                                    'absolute': 42,
                                                                                                                    'relative': {
                                                                                                                        'line': 42,
                                                                                                                        'column': 42,
                                                                                                                    },
                                                                                                                },
                                                                                                                'end': {
                                                                                                                    'absolute': 42,
                                                                                                                    'relative': {
                                                                                                                        'line': 42,
                                                                                                                        'column': 42,
                                                                                                                    },
                                                                                                                },
                                                                                                            }],
                                                                                                            'l reference': $['l id'],
                                                                                                        }),
                                                                                                    ),
                                                                                                }],
                                                                                            )
                                                                                        default:
                                                                                            return p_.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        }],
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Bankrekeningen': p_change_context(
        $['Bankrekeningen'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Stam': p_change_context(
                            $['Stam'],
                            ($) => null,
                        ),
                        'Mutatie Verwerkingen': p_change_context(
                            $['Mutatie Verwerkingen'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Stam': p_change_context(
                                                $['Stam'],
                                                ($) => null,
                                            ),
                                            'type': p_change_context(
                                                $['type'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l state': p_decide_state(
                                                        $,
                                                        ($): s_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_.l_state => {
                                                            switch ($[0]) {
                                                                case 'Resultaat':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Resultaat', Rekening_Mutatie(
                                                                            $,
                                                                        )],
                                                                    )
                                                                case 'Balans':
                                                                    return p_.option(
                                                                        $,
                                                                        ($) => ['Balans', {
                                                                            'l location': ['in main document', {
                                                                                'start': {
                                                                                    'absolute': 42,
                                                                                    'relative': {
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                },
                                                                                'end': {
                                                                                    'absolute': 42,
                                                                                    'relative': {
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                },
                                                                            }],
                                                                            'l state': p_decide_state(
                                                                                $,
                                                                                ($): s_out.Mutaties.Bankrekeningen.l_dictionary.D.l_entry.Mutatie_Verwerkingen.l_dictionary.D.l_entry.type_.l_state.Balans.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'Informele rekening':
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ['Informele rekening', {
                                                                                                    'Informele rekening': p_change_context(
                                                                                                        $['Informele rekening'],
                                                                                                        ($) => ({
                                                                                                            'l location': ['in main document', {
                                                                                                                'start': {
                                                                                                                    'absolute': 42,
                                                                                                                    'relative': {
                                                                                                                        'line': 42,
                                                                                                                        'column': 42,
                                                                                                                    },
                                                                                                                },
                                                                                                                'end': {
                                                                                                                    'absolute': 42,
                                                                                                                    'relative': {
                                                                                                                        'line': 42,
                                                                                                                        'column': 42,
                                                                                                                    },
                                                                                                                },
                                                                                                            }],
                                                                                                            'l reference': $['l id'],
                                                                                                        }),
                                                                                                    ),
                                                                                                }],
                                                                                            )
                                                                                        case 'Verrekenpost':
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ['Verrekenpost', {
                                                                                                    'Verrekenpost': p_change_context(
                                                                                                        $['Verrekenpost'],
                                                                                                        ($) => ({
                                                                                                            'l location': ['in main document', {
                                                                                                                'start': {
                                                                                                                    'absolute': 42,
                                                                                                                    'relative': {
                                                                                                                        'line': 42,
                                                                                                                        'column': 42,
                                                                                                                    },
                                                                                                                },
                                                                                                                'end': {
                                                                                                                    'absolute': 42,
                                                                                                                    'relative': {
                                                                                                                        'line': 42,
                                                                                                                        'column': 42,
                                                                                                                    },
                                                                                                                },
                                                                                                            }],
                                                                                                            'l reference': $['l id'],
                                                                                                        }),
                                                                                                    ),
                                                                                                }],
                                                                                            )
                                                                                        default:
                                                                                            return p_.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        }],
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'Overige Balans Items': p_change_context(
        $['Overige Balans Items'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'Stam': p_change_context(
                            $['Stam'],
                            ($) => null,
                        ),
                        'Memoriaal Boekingen': p_change_context(
                            $['Memoriaal Boekingen'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l dictionary': p_.from.dictionary($,
                                ).map(
                                    ($, id) => ({
                                        'l entry': {
                                            'Bedrag': p_change_context(
                                                $['Bedrag'],
                                                ($) => $,
                                            ),
                                            'Datum': p_change_context(
                                                $['Datum'],
                                                ($) => $,
                                            ),
                                            'Omschrijving': p_change_context(
                                                $['Omschrijving'],
                                                ($) => $,
                                            ),
                                            'Grootboekrekening': p_change_context(
                                                $['Grootboekrekening'],
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }),
                                            ),
                                        },
                                        'l location': ['in main document', {
                                            'start': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                            'end': {
                                                'absolute': 42,
                                                'relative': {
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            },
                                        }],
                                    }),
                                ),
                            }),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Jaren: t_signatures.Jaren = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary($,
    ).map(
        ($, id) => ({
            'l entry': {
                'Afgesloten': p_change_context(
                    $['Afgesloten'],
                    ($) => ({
                        'l location': ['in main document', {
                            'start': {
                                'absolute': 42,
                                'relative': {
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                            'end': {
                                'absolute': 42,
                                'relative': {
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                        }],
                        'l state': p_decide_state(
                            $,
                            ($): s_out.Jaren.l_dictionary.D.l_entry.Afgesloten.l_state => {
                                switch ($[0]) {
                                    case 'Ja':
                                        return p_.option(
                                            $,
                                            ($) => ['Ja', null],
                                        )
                                    case 'Nee':
                                        return p_.option(
                                            $,
                                            ($) => ['Nee', null],
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        ),
                    }),
                ),
                'Startdatum boekjaar': p_change_context(
                    $['Startdatum boekjaar'],
                    ($) => $,
                ),
                'Grootboekrekeningen': p_change_context(
                    $['Grootboekrekeningen'],
                    ($) => Grootboekrekeningen(
                        $,
                    ),
                ),
                'Eerste boekjaar': p_change_context(
                    $['Eerste boekjaar'],
                    ($) => Eerste_boekjaar(
                        $,
                    ),
                ),
                'Jaarbeheer': p_change_context(
                    $['Jaarbeheer'],
                    ($) => Jaarbeheer(
                        $,
                    ),
                ),
                'Handelstransacties': p_change_context(
                    $['Handelstransacties'],
                    ($) => Handelstransacties(
                        $,
                    ),
                ),
                'Mutaties': p_change_context(
                    $['Mutaties'],
                    ($) => Mutaties(
                        $,
                    ),
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Rekening_Mutatie: t_signatures.Rekening_Mutatie = ($) => ({
    'Jaar': p_change_context(
        $['Jaar'],
        ($) => p_.from.optional($,
        ).map(
            ($) => ({
                'l location': ['in main document', {
                    'start': {
                        'absolute': 42,
                        'relative': {
                            'line': 42,
                            'column': 42,
                        },
                    },
                    'end': {
                        'absolute': 42,
                        'relative': {
                            'line': 42,
                            'column': 42,
                        },
                    },
                }],
                'l reference': $['l id'],
            }),
        ),
    ),
    'type': p_change_context(
        $['type'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): s_out.Rekening_Mutatie.type_.l_state => {
                    switch ($[0]) {
                        case 'Inkoop':
                            return p_.option(
                                $,
                                ($) => ['Inkoop', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'Verkoop':
                            return p_.option(
                                $,
                                ($) => ['Verkoop', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'BTW-periode':
                            return p_.option(
                                $,
                                ($) => ['BTW-periode', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): s_out.Eerste_boekjaar.l_state => {
            switch ($[0]) {
                case 'Ja':
                    return p_.option(
                        $,
                        ($) => ['Ja', null],
                    )
                case 'Nee':
                    return p_.option(
                        $,
                        ($) => ['Nee', {
                            'Vorig boekjaar': p_change_context(
                                $['Vorig boekjaar'],
                                ($) => ({
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }),
                            ),
                        }],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
})
