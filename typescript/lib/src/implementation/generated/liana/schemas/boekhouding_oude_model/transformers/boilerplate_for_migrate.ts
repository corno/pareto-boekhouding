
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'



import * as t_signatures from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/data"

export const Root: t_signatures.Root = ($) => ({
    'Bankrekeningen': p_change_context(
        $['Bankrekeningen'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => p_.literal.nothing(),
        ),
    ),
    'Beheer': p_change_context(
        $['Beheer'],
        ($) => ({
            'Balans': p_change_context(
                $['Balans'],
                ($) => ({
                    'Grootboekrekeningen': p_change_context(
                        $['Grootboekrekeningen'],
                        ($) => p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ({
                                'Hoofdcategorie': p_change_context(
                                    $['Hoofdcategorie'],
                                    ($) => $,
                                ),
                                'Subcategorie': p_change_context(
                                    $['Subcategorie'],
                                    ($) => $,
                                ),
                                'Zijde': p_change_context(
                                    $['Zijde'],
                                    ($) => p_decide_state(
                                        $,
                                        ($): t_out.Root.Beheer.Balans.Grootboekrekeningen.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Activa':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Activa', p_.literal.nothing()],
                                                    )
                                                case 'Passiva':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Passiva', p_.literal.nothing()],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                            }),
                        ),
                    ),
                    'Hoofdcategorieen': p_change_context(
                        $['Hoofdcategorieen'],
                        ($) => p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ({
                                'Zijde': p_change_context(
                                    $['Zijde'],
                                    ($) => p_decide_state(
                                        $,
                                        ($): t_out.Root.Beheer.Balans.Hoofdcategorieen.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Activa':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Activa', p_.literal.nothing()],
                                                    )
                                                case 'Passiva':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Passiva', p_.literal.nothing()],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'Subcategorieen': p_change_context(
                                    $['Subcategorieen'],
                                    ($) => p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ({
                                            'Hoofdcategorie fiscus': p_change_context(
                                                $['Hoofdcategorie fiscus'],
                                                ($) => $,
                                            ),
                                            'Subcategorie fiscus': p_change_context(
                                                $['Subcategorie fiscus'],
                                                ($) => $,
                                            ),
                                        }),
                                    ),
                                ),
                            }),
                        ),
                    ),
                    'Hoofdcategorieen fiscus': p_change_context(
                        $['Hoofdcategorieen fiscus'],
                        ($) => p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ({
                                'Zijde': p_change_context(
                                    $['Zijde'],
                                    ($) => p_decide_state(
                                        $,
                                        ($): t_out.Root.Beheer.Balans.Hoofdcategorieen_fiscus.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Activa':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Activa', p_.literal.nothing()],
                                                    )
                                                case 'Passiva':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Passiva', p_.literal.nothing()],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'Subcategorieen': p_change_context(
                                    $['Subcategorieen'],
                                    ($) => p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => p_.literal.nothing(),
                                    ),
                                ),
                            }),
                        ),
                    ),
                }),
            ),
            'BTW-categorieen': p_change_context(
                $['BTW-categorieen'],
                ($) => p_.from.dictionary(
                    $,
                ).map(
                    ($, id) => ({
                        'BTW-heffing': p_change_context(
                            $['BTW-heffing'],
                            ($) => p_decide_state(
                                $,
                                ($): t_out.Root.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return p_.ss(
                                                $,
                                                ($) => ['Ja', {
                                                    'BTW-promillage': p_change_context(
                                                        $['BTW-promillage'],
                                                        ($) => $,
                                                    ),
                                                }],
                                            )
                                        case 'Nee':
                                            return p_.ss(
                                                $,
                                                ($) => ['Nee', p_.literal.nothing()],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        ),
                    }),
                ),
            ),
            'Gebruikers': p_change_context(
                $['Gebruikers'],
                ($) => p_.from.dictionary(
                    $,
                ).map(
                    ($, id) => ({
                        'Volledige naam': p_change_context(
                            $['Volledige naam'],
                            ($) => $,
                        ),
                        'Wachtwoord': p_change_context(
                            $['Wachtwoord'],
                            ($) => $,
                        ),
                    }),
                ),
            ),
            'Huidige datum': p_change_context(
                $['Huidige datum'],
                ($) => $,
            ),
            'Resultaat': p_change_context(
                $['Resultaat'],
                ($) => ({
                    'Correctietypes vennootschapsbelasting': p_change_context(
                        $['Correctietypes vennootschapsbelasting'],
                        ($) => p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ({
                                'Te corrigeren promillage': p_change_context(
                                    $['Te corrigeren promillage'],
                                    ($) => $,
                                ),
                            }),
                        ),
                    ),
                    'Grootboekrekeningen': p_change_context(
                        $['Grootboekrekeningen'],
                        ($) => p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ({
                                'Hoofdcategorie': p_change_context(
                                    $['Hoofdcategorie'],
                                    ($) => $,
                                ),
                                'Subcategorie': p_change_context(
                                    $['Subcategorie'],
                                    ($) => $,
                                ),
                                'Zijde': p_change_context(
                                    $['Zijde'],
                                    ($) => p_decide_state(
                                        $,
                                        ($): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Kosten':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Kosten', {
                                                            'Correctie op vennootschapsbelasting': p_change_context(
                                                                $['Correctie op vennootschapsbelasting'],
                                                                ($) => p_decide_state(
                                                                    $,
                                                                    ($): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                        switch ($[0]) {
                                                                            case 'Ja':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['Ja', {
                                                                                        'Correctietype': p_change_context(
                                                                                            $['Correctietype'],
                                                                                            ($) => $,
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'Nee':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['Nee', p_.literal.nothing()],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'Opbrengsten':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Opbrengsten', p_.literal.nothing()],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                            }),
                        ),
                    ),
                    'Hoofdcategorieen': p_change_context(
                        $['Hoofdcategorieen'],
                        ($) => p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ({
                                'Zijde': p_change_context(
                                    $['Zijde'],
                                    ($) => p_decide_state(
                                        $,
                                        ($): t_out.Root.Beheer.Resultaat.Hoofdcategorieen.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Kosten':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Kosten', p_.literal.nothing()],
                                                    )
                                                case 'Opbrengsten':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Opbrengsten', p_.literal.nothing()],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'Subcategorieen': p_change_context(
                                    $['Subcategorieen'],
                                    ($) => p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ({
                                            'Hoofdcategorie fiscus': p_change_context(
                                                $['Hoofdcategorie fiscus'],
                                                ($) => $,
                                            ),
                                            'Subcategorie fiscus': p_change_context(
                                                $['Subcategorie fiscus'],
                                                ($) => $,
                                            ),
                                        }),
                                    ),
                                ),
                            }),
                        ),
                    ),
                    'Hoofdcategorieen fiscus': p_change_context(
                        $['Hoofdcategorieen fiscus'],
                        ($) => p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ({
                                'Zijde': p_change_context(
                                    $['Zijde'],
                                    ($) => p_decide_state(
                                        $,
                                        ($): t_out.Root.Beheer.Resultaat.Hoofdcategorieen_fiscus.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Kosten':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Kosten', p_.literal.nothing()],
                                                    )
                                                case 'Opbrengsten':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['Opbrengsten', p_.literal.nothing()],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'Subcategorieen': p_change_context(
                                    $['Subcategorieen'],
                                    ($) => p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => p_.literal.nothing(),
                                    ),
                                ),
                            }),
                        ),
                    ),
                }),
            ),
        }),
    ),
    'Informele rekeningen': p_change_context(
        $['Informele rekeningen'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => p_.literal.nothing(),
        ),
    ),
    'Jaren': p_change_context(
        $['Jaren'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'Afgesloten': p_change_context(
                    $['Afgesloten'],
                    ($) => p_decide_state(
                        $,
                        ($): t_out.Root.Jaren.D.Afgesloten => {
                            switch ($[0]) {
                                case 'Ja':
                                    return p_.ss(
                                        $,
                                        ($) => ['Ja', p_.literal.nothing()],
                                    )
                                case 'Nee':
                                    return p_.ss(
                                        $,
                                        ($) => ['Nee', p_.literal.nothing()],
                                    )
                                default:
                                    return p_.au(
                                        $[0],
                                    )
                            }
                        },
                    ),
                ),
                'Balans grootboekrekeningen': p_change_context(
                    $['Balans grootboekrekeningen'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Type': p_change_context(
                                $['Type'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Balans_grootboekrekeningen.D.Type => {
                                        switch ($[0]) {
                                            case 'Bankrekening':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Bankrekening', p_.literal.nothing()],
                                                )
                                            case 'Overig':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Overig', p_.literal.nothing()],
                                                )
                                            case 'Informele rekening':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Informele rekening', p_.literal.nothing()],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                ),
                'Bankrekeningen': p_change_context(
                    $['Bankrekeningen'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Beginsaldo': p_change_context(
                                $['Beginsaldo'],
                                ($) => $,
                            ),
                            'Grootboekrekening': p_change_context(
                                $['Grootboekrekening'],
                                ($) => $,
                            ),
                            'Mutaties': p_change_context(
                                $['Mutaties'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => ({
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
                                        'Status': p_change_context(
                                            $['Status'],
                                            ($) => p_decide_state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status => {
                                                    switch ($[0]) {
                                                        case 'Nog te verwerken':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Nog te verwerken', p_.literal.nothing()],
                                                            )
                                                        case 'Verwerkt':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Verwerkt', {
                                                                    'Afhandeling': p_change_context(
                                                                        $['Afhandeling'],
                                                                        ($) => p_decide_state(
                                                                            $,
                                                                            ($): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.Verwerkt.Afhandeling => {
                                                                                switch ($[0]) {
                                                                                    case 'Inkoop':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ['Inkoop', {
                                                                                                'Jaar': p_change_context(
                                                                                                    $['Jaar'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                                'Inkoop': p_change_context(
                                                                                                    $['Inkoop'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'Verrekenpost':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ['Verrekenpost', {
                                                                                                'Verrekenpost': p_change_context(
                                                                                                    $['Verrekenpost'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'BTW-periode':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ['BTW-periode', {
                                                                                                'Jaar': p_change_context(
                                                                                                    $['Jaar'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                                'BTW-periode': p_change_context(
                                                                                                    $['BTW-periode'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'Verkoop':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ['Verkoop', {
                                                                                                'Jaar': p_change_context(
                                                                                                    $['Jaar'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                                'Verkoop': p_change_context(
                                                                                                    $['Verkoop'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'Informele rekening':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ['Informele rekening', {
                                                                                                'Informele rekening': p_change_context(
                                                                                                    $['Informele rekening'],
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
                                        ),
                                    }),
                                ),
                            ),
                            'Nieuw': p_change_context(
                                $['Nieuw'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Bankrekeningen.D.Nieuw => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Ja', p_.literal.nothing()],
                                                )
                                            case 'Nee':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Nee', {
                                                        'Jaar': p_change_context(
                                                            $['Jaar'],
                                                            ($) => $,
                                                        ),
                                                        'Rekening': p_change_context(
                                                            $['Rekening'],
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
                            ),
                        }),
                    ),
                ),
                'Beginsaldo nog aan te geven BTW': p_change_context(
                    $['Beginsaldo nog aan te geven BTW'],
                    ($) => $,
                ),
                'Beginsaldo winstreserve': p_change_context(
                    $['Beginsaldo winstreserve'],
                    ($) => $,
                ),
                'BTW periode saldo': p_change_context(
                    $['BTW periode saldo'],
                    ($) => ({
                        'Grootboekrekening': p_change_context(
                            $['Grootboekrekening'],
                            ($) => $,
                        ),
                    }),
                ),
                'BTW periodes': p_change_context(
                    $['BTW periodes'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            '1. BTW-categorieen': p_change_context(
                                $['1. BTW-categorieen'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => p_.literal.nothing(),
                                ),
                            ),
                            'Documenten': p_change_context(
                                $['Documenten'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => ({
                                        'Bestand': p_change_context(
                                            $['Bestand'],
                                            ($) => Bestandsnaam(
                                                $,
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                            'Omschrijving': p_change_context(
                                $['Omschrijving'],
                                ($) => $,
                            ),
                            'Status': p_change_context(
                                $['Status'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.BTW_periodes.D.Status => {
                                        switch ($[0]) {
                                            case 'Aangegeven':
                                                return p_.ss(
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
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Openstaand', p_.literal.nothing()],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                ),
                'Eerste boekjaar': p_change_context(
                    $['Eerste boekjaar'],
                    ($) => p_decide_state(
                        $,
                        ($): t_out.Root.Jaren.D.Eerste_boekjaar => {
                            switch ($[0]) {
                                case 'Ja':
                                    return p_.ss(
                                        $,
                                        ($) => ['Ja', p_.literal.nothing()],
                                    )
                                case 'Nee':
                                    return p_.ss(
                                        $,
                                        ($) => ['Nee', {
                                            'Vorig boekjaar': p_change_context(
                                                $['Vorig boekjaar'],
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
                ),
                'Grootboekrekening voor BTW afrondingen': p_change_context(
                    $['Grootboekrekening voor BTW afrondingen'],
                    ($) => $,
                ),
                'Grootboekrekening voor nog aan te geven BTW': p_change_context(
                    $['Grootboekrekening voor nog aan te geven BTW'],
                    ($) => $,
                ),
                'Grootboekrekening voor resultaat dit jaar': p_change_context(
                    $['Grootboekrekening voor resultaat dit jaar'],
                    ($) => $,
                ),
                'Grootboekrekening voor winstreserve': p_change_context(
                    $['Grootboekrekening voor winstreserve'],
                    ($) => $,
                ),
                'Informele rekeningen': p_change_context(
                    $['Informele rekeningen'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Beginsaldo': p_change_context(
                                $['Beginsaldo'],
                                ($) => $,
                            ),
                            'Grootboekrekening': p_change_context(
                                $['Grootboekrekening'],
                                ($) => $,
                            ),
                            'Nieuw': p_change_context(
                                $['Nieuw'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Informele_rekeningen.D.Nieuw => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Ja', p_.literal.nothing()],
                                                )
                                            case 'Nee':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Nee', {
                                                        'Jaar': p_change_context(
                                                            $['Jaar'],
                                                            ($) => $,
                                                        ),
                                                        'Rekening': p_change_context(
                                                            $['Rekening'],
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
                            ),
                        }),
                    ),
                ),
                'Inkopen': p_change_context(
                    $['Inkopen'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Afhandeling': p_change_context(
                                $['Afhandeling'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Inkopen.D.Afhandeling => {
                                        switch ($[0]) {
                                            case 'Nog te betalen':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Nog te betalen', {
                                                        'Betalingstermijn': p_change_context(
                                                            $['Betalingstermijn'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Mutaties':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Mutaties', p_.literal.nothing()],
                                                )
                                            case 'Rekening courant':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Rekening courant', {
                                                        'Rekening courant': p_change_context(
                                                            $['Rekening courant'],
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
                            ),
                            'BTW-regime': p_change_context(
                                $['BTW-regime'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Inkopen.D.BTW$mi_regime => {
                                        switch ($[0]) {
                                            case 'Binnenland: heffing verlegd':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Binnenland: heffing verlegd', {
                                                        'BTW-periode': p_change_context(
                                                            $['BTW-periode'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Geen BTW van toepassing':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Geen BTW van toepassing', {
                                                        'BTW-periode': p_change_context(
                                                            $['BTW-periode'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Import van buiten de EU':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Import van buiten de EU', {
                                                        'BTW-periode': p_change_context(
                                                            $['BTW-periode'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Intracommunautair':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Intracommunautair', {
                                                        'BTW-periode': p_change_context(
                                                            $['BTW-periode'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Standaard':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Standaard', {
                                                        'BTW-periode': p_change_context(
                                                            $['BTW-periode'],
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
                            ),
                            'Brondocument': p_change_context(
                                $['Brondocument'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Inkopen.D.Brondocument => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Toegevoegd', {
                                                        'Document': p_change_context(
                                                            $['Document'],
                                                            ($) => Bestandsnaam(
                                                                $,
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            case 'Niet van toepassing':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Niet van toepassing', p_.literal.nothing()],
                                                )
                                            case 'Ontbreekt':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Ontbreekt', p_.literal.nothing()],
                                                )
                                            case 'Nog toevoegen':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Nog toevoegen', p_.literal.nothing()],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'Datum': p_change_context(
                                $['Datum'],
                                ($) => $,
                            ),
                            'Regels': p_change_context(
                                $['Regels'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => ({
                                        'Bedrag': p_change_context(
                                            $['Bedrag'],
                                            ($) => p_decide_state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Bedrag => {
                                                    switch ($[0]) {
                                                        case 'Bekend':
                                                            return p_.ss(
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
                                        ),
                                        'Omschrijving': p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        ),
                                        'Type': p_change_context(
                                            $['Type'],
                                            ($) => p_decide_state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Type => {
                                                    switch ($[0]) {
                                                        case 'Balans':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Balans', {
                                                                    'Balans item': p_change_context(
                                                                        $['Balans item'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Kosten':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Kosten', {
                                                                    'Grootboekrekening': p_change_context(
                                                                        $['Grootboekrekening'],
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
                                        ),
                                    }),
                                ),
                            ),
                            'Type': p_change_context(
                                $['Type'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Inkopen.D.Type => {
                                        switch ($[0]) {
                                            case 'Bonnetje':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Bonnetje', p_.literal.nothing()],
                                                )
                                            case 'Inkoop (met crediteur)':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Inkoop (met crediteur)', {
                                                        'Crediteur': p_change_context(
                                                            $['Crediteur'],
                                                            ($) => $,
                                                        ),
                                                        'Factuurnummer': p_change_context(
                                                            $['Factuurnummer'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Loonheffing':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Loonheffing', {
                                                        'Ronde': p_change_context(
                                                            $['Ronde'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Salaris':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Salaris', {
                                                        'Ronde': p_change_context(
                                                            $['Ronde'],
                                                            ($) => $,
                                                        ),
                                                        'Medewerker': p_change_context(
                                                            $['Medewerker'],
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
                            ),
                        }),
                    ),
                ),
                'Inkoop saldo': p_change_context(
                    $['Inkoop saldo'],
                    ($) => ({
                        'Grootboekrekening': p_change_context(
                            $['Grootboekrekening'],
                            ($) => $,
                        ),
                    }),
                ),
                'Overige balans items': p_change_context(
                    $['Overige balans items'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Beginsaldo': p_change_context(
                                $['Beginsaldo'],
                                ($) => $,
                            ),
                            'Grootboekrekening': p_change_context(
                                $['Grootboekrekening'],
                                ($) => $,
                            ),
                            'Memoriaal boekingen': p_change_context(
                                $['Memoriaal boekingen'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => ({
                                        'Bedrag': p_change_context(
                                            $['Bedrag'],
                                            ($) => $,
                                        ),
                                        'Datum': p_change_context(
                                            $['Datum'],
                                            ($) => $,
                                        ),
                                        'Grootboekrekening': p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => $,
                                        ),
                                        'Omschrijving': p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        ),
                                    }),
                                ),
                            ),
                            'Nieuw': p_change_context(
                                $['Nieuw'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Overige_balans_items.D.Nieuw => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Ja', p_.literal.nothing()],
                                                )
                                            case 'Nee':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Nee', {
                                                        'Jaar': p_change_context(
                                                            $['Jaar'],
                                                            ($) => $,
                                                        ),
                                                        'Balans item': p_change_context(
                                                            $['Balans item'],
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
                            ),
                        }),
                    ),
                ),
                'Resultaat grootboekrekeningen': p_change_context(
                    $['Resultaat grootboekrekeningen'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => p_.literal.nothing(),
                    ),
                ),
                'Salarisrondes': p_change_context(
                    $['Salarisrondes'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => p_.literal.nothing(),
                    ),
                ),
                'Startdatum boekjaar': p_change_context(
                    $['Startdatum boekjaar'],
                    ($) => $,
                ),
                'Verkoop saldo': p_change_context(
                    $['Verkoop saldo'],
                    ($) => ({
                        'Grootboekrekening': p_change_context(
                            $['Grootboekrekening'],
                            ($) => $,
                        ),
                    }),
                ),
                'Verkopen': p_change_context(
                    $['Verkopen'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Afhandeling': p_change_context(
                                $['Afhandeling'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Verkopen.D.Afhandeling => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Mutaties', p_.literal.nothing()],
                                                )
                                            case 'Rekening courant':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Rekening courant', {
                                                        'Rekening courant': p_change_context(
                                                            $['Rekening courant'],
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
                            ),
                            'Betalingstermijn': p_change_context(
                                $['Betalingstermijn'],
                                ($) => $,
                            ),
                            'BTW-periode': p_change_context(
                                $['BTW-periode'],
                                ($) => $,
                            ),
                            'Brondocument': p_change_context(
                                $['Brondocument'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Verkopen.D.Brondocument => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Toegevoegd', {
                                                        'Document': p_change_context(
                                                            $['Document'],
                                                            ($) => Bestandsnaam(
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
                            ),
                            'Contracttype': p_change_context(
                                $['Contracttype'],
                                ($) => p_decide_state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Verkopen.D.Contracttype => {
                                        switch ($[0]) {
                                            case 'Project':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Project', {
                                                        'Project': p_change_context(
                                                            $['Project'],
                                                            ($) => $,
                                                        ),
                                                        'Offerte': p_change_context(
                                                            $['Offerte'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Licentieovereenkomst':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['Licentieovereenkomst', {
                                                        'Overeenkomst': p_change_context(
                                                            $['Overeenkomst'],
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
                            ),
                            'Datum': p_change_context(
                                $['Datum'],
                                ($) => $,
                            ),
                            'Debiteur': p_change_context(
                                $['Debiteur'],
                                ($) => $,
                            ),
                            'Regels': p_change_context(
                                $['Regels'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => ({
                                        'BTW-regime': p_change_context(
                                            $['BTW-regime'],
                                            ($) => p_decide_state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                    switch ($[0]) {
                                                        case 'Intracommunautair':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Intracommunautair', p_.literal.nothing()],
                                                            )
                                                        case 'Standaard':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Standaard', {
                                                                    'BTW-categorie': p_change_context(
                                                                        $['BTW-categorie'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Binnenland: heffing verlegd':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Binnenland: heffing verlegd', p_.literal.nothing()],
                                                            )
                                                        default:
                                                            return p_.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                        'Bedrag exclusief BTW': p_change_context(
                                            $['Bedrag exclusief BTW'],
                                            ($) => $,
                                        ),
                                        'Contracttype': p_change_context(
                                            $['Contracttype'],
                                            ($) => p_decide_state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Contracttype => {
                                                    switch ($[0]) {
                                                        case 'Project':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Project', {
                                                                    'Opbrengst': p_change_context(
                                                                        $['Opbrengst'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Los':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Los', p_.literal.nothing()],
                                                            )
                                                        case 'Licentieovereenkomst':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Licentieovereenkomst', {
                                                                    'Periode': p_change_context(
                                                                        $['Periode'],
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
                                        ),
                                        'Omschrijving': p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        ),
                                        'Type': p_change_context(
                                            $['Type'],
                                            ($) => p_decide_state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Type => {
                                                    switch ($[0]) {
                                                        case 'Opbrengsten':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Opbrengsten', {
                                                                    'Grootboekrekening': p_change_context(
                                                                        $['Grootboekrekening'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Balans':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Balans', {
                                                                    'Balans item': p_change_context(
                                                                        $['Balans item'],
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
                                        ),
                                    }),
                                ),
                            ),
                        }),
                    ),
                ),
                'Verrekenposten': p_change_context(
                    $['Verrekenposten'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Mutaties': p_change_context(
                                $['Mutaties'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => ({
                                        'Bedrag': p_change_context(
                                            $['Bedrag'],
                                            ($) => $,
                                        ),
                                        'Afhandeling': p_change_context(
                                            $['Afhandeling'],
                                            ($) => p_decide_state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling => {
                                                    switch ($[0]) {
                                                        case 'Inkoop':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Inkoop', {
                                                                    'Jaar': p_change_context(
                                                                        $['Jaar'],
                                                                        ($) => $,
                                                                    ),
                                                                    'Inkoop': p_change_context(
                                                                        $['Inkoop'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Informele rekening':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Informele rekening', {
                                                                    'Informele rekening': p_change_context(
                                                                        $['Informele rekening'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Verkoop':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['Verkoop', {
                                                                    'Jaar': p_change_context(
                                                                        $['Jaar'],
                                                                        ($) => $,
                                                                    ),
                                                                    'Verkoop': p_change_context(
                                                                        $['Verkoop'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'BTW-periode':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['BTW-periode', {
                                                                    'Jaar': p_change_context(
                                                                        $['Jaar'],
                                                                        ($) => $,
                                                                    ),
                                                                    'BTW-periode': p_change_context(
                                                                        $['BTW-periode'],
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
                                        ),
                                    }),
                                ),
                            ),
                        }),
                    ),
                ),
            }),
        ),
    ),
    'Klanten': p_change_context(
        $['Klanten'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'Licentieovereenkomsten': p_change_context(
                    $['Licentieovereenkomsten'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Periodes': p_change_context(
                                $['Periodes'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => ({
                                        'Bedrag': p_change_context(
                                            $['Bedrag'],
                                            ($) => $,
                                        ),
                                    }),
                                ),
                            ),
                        }),
                    ),
                ),
                'Projecten': p_change_context(
                    $['Projecten'],
                    ($) => p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => ({
                            'Offertes': p_change_context(
                                $['Offertes'],
                                ($) => p_.from.dictionary(
                                    $,
                                ).map(
                                    ($, id) => ({
                                        'Opbrengsten': p_change_context(
                                            $['Opbrengsten'],
                                            ($) => p_.from.dictionary(
                                                $,
                                            ).map(
                                                ($, id) => ({
                                                    'Type': p_change_context(
                                                        $['Type'],
                                                        ($) => p_decide_state(
                                                            $,
                                                            ($): t_out.Root.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                switch ($[0]) {
                                                                    case 'Project':
                                                                        return p_.ss(
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
                                                    ),
                                                }),
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                        }),
                    ),
                ),
            }),
        ),
    ),
    'Leveranciers': p_change_context(
        $['Leveranciers'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => p_.literal.nothing(),
        ),
    ),
    'Medewerkers': p_change_context(
        $['Medewerkers'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => p_.literal.nothing(),
        ),
    ),
})

export const Bestandsnaam: t_signatures.Bestandsnaam = ($) => ({
    'stem': p_change_context(
        $['stem'],
        ($) => $,
    ),
    'extension': p_change_context(
        $['extension'],
        ($) => $,
    ),
})
