
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/boekhouding_oude_model/data"

export const Root: t_signatures.Root = ($) => ({
    'Bankrekeningen': _p_change_context(
        $['Bankrekeningen'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => null,
        ),
    ),
    'Beheer': _p_change_context(
        $['Beheer'],
        ($) => ({
            'Balans': _p_change_context(
                $['Balans'],
                ($) => ({
                    'Grootboekrekeningen': _p_change_context(
                        $['Grootboekrekeningen'],
                        ($) => _p.dictionary.map(
                            $,
                            ($, id) => ({
                                'Hoofdcategorie': _p_change_context(
                                    $['Hoofdcategorie'],
                                    ($) => $,
                                ),
                                'Subcategorie': _p_change_context(
                                    $['Subcategorie'],
                                    ($) => $,
                                ),
                                'Zijde': _p_change_context(
                                    $['Zijde'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Root.Beheer.Balans.Grootboekrekeningen.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Activa':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Activa', null],
                                                    )
                                                case 'Passiva':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Passiva', null],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                            }),
                        ),
                    ),
                    'Hoofdcategorieen': _p_change_context(
                        $['Hoofdcategorieen'],
                        ($) => _p.dictionary.map(
                            $,
                            ($, id) => ({
                                'Zijde': _p_change_context(
                                    $['Zijde'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Root.Beheer.Balans.Hoofdcategorieen.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Activa':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Activa', null],
                                                    )
                                                case 'Passiva':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Passiva', null],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'Subcategorieen': _p_change_context(
                                    $['Subcategorieen'],
                                    ($) => _p.dictionary.map(
                                        $,
                                        ($, id) => ({
                                            'Hoofdcategorie fiscus': _p_change_context(
                                                $['Hoofdcategorie fiscus'],
                                                ($) => $,
                                            ),
                                            'Subcategorie fiscus': _p_change_context(
                                                $['Subcategorie fiscus'],
                                                ($) => $,
                                            ),
                                        }),
                                    ),
                                ),
                            }),
                        ),
                    ),
                    'Hoofdcategorieen fiscus': _p_change_context(
                        $['Hoofdcategorieen fiscus'],
                        ($) => _p.dictionary.map(
                            $,
                            ($, id) => ({
                                'Zijde': _p_change_context(
                                    $['Zijde'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Root.Beheer.Balans.Hoofdcategorieen_fiscus.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Activa':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Activa', null],
                                                    )
                                                case 'Passiva':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Passiva', null],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'Subcategorieen': _p_change_context(
                                    $['Subcategorieen'],
                                    ($) => _p.dictionary.map(
                                        $,
                                        ($, id) => null,
                                    ),
                                ),
                            }),
                        ),
                    ),
                }),
            ),
            'BTW-categorieen': _p_change_context(
                $['BTW-categorieen'],
                ($) => _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'BTW-heffing': _p_change_context(
                            $['BTW-heffing'],
                            ($) => _p.decide.state(
                                $,
                                ($): t_out.Root.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing => {
                                    switch ($[0]) {
                                        case 'Ja':
                                            return _p.ss(
                                                $,
                                                ($) => ['Ja', {
                                                    'BTW-promillage': _p_change_context(
                                                        $['BTW-promillage'],
                                                        ($) => $,
                                                    ),
                                                }],
                                            )
                                        case 'Nee':
                                            return _p.ss(
                                                $,
                                                ($) => ['Nee', null],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        ),
                    }),
                ),
            ),
            'Gebruikers': _p_change_context(
                $['Gebruikers'],
                ($) => _p.dictionary.map(
                    $,
                    ($, id) => ({
                        'Volledige naam': _p_change_context(
                            $['Volledige naam'],
                            ($) => $,
                        ),
                        'Wachtwoord': _p_change_context(
                            $['Wachtwoord'],
                            ($) => $,
                        ),
                    }),
                ),
            ),
            'Huidige datum': _p_change_context(
                $['Huidige datum'],
                ($) => $,
            ),
            'Resultaat': _p_change_context(
                $['Resultaat'],
                ($) => ({
                    'Correctietypes vennootschapsbelasting': _p_change_context(
                        $['Correctietypes vennootschapsbelasting'],
                        ($) => _p.dictionary.map(
                            $,
                            ($, id) => ({
                                'Te corrigeren promillage': _p_change_context(
                                    $['Te corrigeren promillage'],
                                    ($) => $,
                                ),
                            }),
                        ),
                    ),
                    'Grootboekrekeningen': _p_change_context(
                        $['Grootboekrekeningen'],
                        ($) => _p.dictionary.map(
                            $,
                            ($, id) => ({
                                'Hoofdcategorie': _p_change_context(
                                    $['Hoofdcategorie'],
                                    ($) => $,
                                ),
                                'Subcategorie': _p_change_context(
                                    $['Subcategorie'],
                                    ($) => $,
                                ),
                                'Zijde': _p_change_context(
                                    $['Zijde'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Kosten':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Kosten', {
                                                            'Correctie op vennootschapsbelasting': _p_change_context(
                                                                $['Correctie op vennootschapsbelasting'],
                                                                ($) => _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.Kosten.Correctie_op_vennootschapsbelasting => {
                                                                        switch ($[0]) {
                                                                            case 'Ja':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Ja', {
                                                                                        'Correctietype': _p_change_context(
                                                                                            $['Correctietype'],
                                                                                            ($) => $,
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'Nee':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['Nee', null],
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'Opbrengsten':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Opbrengsten', null],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                            }),
                        ),
                    ),
                    'Hoofdcategorieen': _p_change_context(
                        $['Hoofdcategorieen'],
                        ($) => _p.dictionary.map(
                            $,
                            ($, id) => ({
                                'Zijde': _p_change_context(
                                    $['Zijde'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Root.Beheer.Resultaat.Hoofdcategorieen.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Kosten':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Kosten', null],
                                                    )
                                                case 'Opbrengsten':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Opbrengsten', null],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'Subcategorieen': _p_change_context(
                                    $['Subcategorieen'],
                                    ($) => _p.dictionary.map(
                                        $,
                                        ($, id) => ({
                                            'Hoofdcategorie fiscus': _p_change_context(
                                                $['Hoofdcategorie fiscus'],
                                                ($) => $,
                                            ),
                                            'Subcategorie fiscus': _p_change_context(
                                                $['Subcategorie fiscus'],
                                                ($) => $,
                                            ),
                                        }),
                                    ),
                                ),
                            }),
                        ),
                    ),
                    'Hoofdcategorieen fiscus': _p_change_context(
                        $['Hoofdcategorieen fiscus'],
                        ($) => _p.dictionary.map(
                            $,
                            ($, id) => ({
                                'Zijde': _p_change_context(
                                    $['Zijde'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Root.Beheer.Resultaat.Hoofdcategorieen_fiscus.D.Zijde => {
                                            switch ($[0]) {
                                                case 'Kosten':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Kosten', null],
                                                    )
                                                case 'Opbrengsten':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['Opbrengsten', null],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                                'Subcategorieen': _p_change_context(
                                    $['Subcategorieen'],
                                    ($) => _p.dictionary.map(
                                        $,
                                        ($, id) => null,
                                    ),
                                ),
                            }),
                        ),
                    ),
                }),
            ),
        }),
    ),
    'Informele rekeningen': _p_change_context(
        $['Informele rekeningen'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => null,
        ),
    ),
    'Jaren': _p_change_context(
        $['Jaren'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => ({
                'Afgesloten': _p_change_context(
                    $['Afgesloten'],
                    ($) => _p.decide.state(
                        $,
                        ($): t_out.Root.Jaren.D.Afgesloten => {
                            switch ($[0]) {
                                case 'Ja':
                                    return _p.ss(
                                        $,
                                        ($) => ['Ja', null],
                                    )
                                case 'Nee':
                                    return _p.ss(
                                        $,
                                        ($) => ['Nee', null],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    ),
                ),
                'Balans grootboekrekeningen': _p_change_context(
                    $['Balans grootboekrekeningen'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Type': _p_change_context(
                                $['Type'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Balans_grootboekrekeningen.D.Type => {
                                        switch ($[0]) {
                                            case 'Bankrekening':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Bankrekening', null],
                                                )
                                            case 'Overig':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Overig', null],
                                                )
                                            case 'Informele rekening':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Informele rekening', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                ),
                'Bankrekeningen': _p_change_context(
                    $['Bankrekeningen'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Beginsaldo': _p_change_context(
                                $['Beginsaldo'],
                                ($) => $,
                            ),
                            'Grootboekrekening': _p_change_context(
                                $['Grootboekrekening'],
                                ($) => $,
                            ),
                            'Mutaties': _p_change_context(
                                $['Mutaties'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => ({
                                        'Bedrag': _p_change_context(
                                            $['Bedrag'],
                                            ($) => $,
                                        ),
                                        'Datum': _p_change_context(
                                            $['Datum'],
                                            ($) => $,
                                        ),
                                        'Omschrijving': _p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        ),
                                        'Status': _p_change_context(
                                            $['Status'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status => {
                                                    switch ($[0]) {
                                                        case 'Nog te verwerken':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Nog te verwerken', null],
                                                            )
                                                        case 'Verwerkt':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Verwerkt', {
                                                                    'Afhandeling': _p_change_context(
                                                                        $['Afhandeling'],
                                                                        ($) => _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.Verwerkt.Afhandeling => {
                                                                                switch ($[0]) {
                                                                                    case 'Inkoop':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['Inkoop', {
                                                                                                'Jaar': _p_change_context(
                                                                                                    $['Jaar'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                                'Inkoop': _p_change_context(
                                                                                                    $['Inkoop'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'Verrekenpost':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['Verrekenpost', {
                                                                                                'Verrekenpost': _p_change_context(
                                                                                                    $['Verrekenpost'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'BTW-periode':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['BTW-periode', {
                                                                                                'Jaar': _p_change_context(
                                                                                                    $['Jaar'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                                'BTW-periode': _p_change_context(
                                                                                                    $['BTW-periode'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'Verkoop':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['Verkoop', {
                                                                                                'Jaar': _p_change_context(
                                                                                                    $['Jaar'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                                'Verkoop': _p_change_context(
                                                                                                    $['Verkoop'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'Informele rekening':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['Informele rekening', {
                                                                                                'Informele rekening': _p_change_context(
                                                                                                    $['Informele rekening'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                }],
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                            'Nieuw': _p_change_context(
                                $['Nieuw'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Bankrekeningen.D.Nieuw => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Ja', null],
                                                )
                                            case 'Nee':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Nee', {
                                                        'Jaar': _p_change_context(
                                                            $['Jaar'],
                                                            ($) => $,
                                                        ),
                                                        'Rekening': _p_change_context(
                                                            $['Rekening'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                ),
                'Beginsaldo nog aan te geven BTW': _p_change_context(
                    $['Beginsaldo nog aan te geven BTW'],
                    ($) => $,
                ),
                'Beginsaldo winstreserve': _p_change_context(
                    $['Beginsaldo winstreserve'],
                    ($) => $,
                ),
                'BTW periode saldo': _p_change_context(
                    $['BTW periode saldo'],
                    ($) => ({
                        'Grootboekrekening': _p_change_context(
                            $['Grootboekrekening'],
                            ($) => $,
                        ),
                    }),
                ),
                'BTW periodes': _p_change_context(
                    $['BTW periodes'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            '1. BTW-categorieen': _p_change_context(
                                $['1. BTW-categorieen'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => null,
                                ),
                            ),
                            'Documenten': _p_change_context(
                                $['Documenten'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => ({
                                        'Bestand': _p_change_context(
                                            $['Bestand'],
                                            ($) => Bestandsnaam(
                                                $,
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                            'Omschrijving': _p_change_context(
                                $['Omschrijving'],
                                ($) => $,
                            ),
                            'Status': _p_change_context(
                                $['Status'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.BTW_periodes.D.Status => {
                                        switch ($[0]) {
                                            case 'Aangegeven':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Aangegeven', {
                                                        'Afronding': _p_change_context(
                                                            $['Afronding'],
                                                            ($) => $,
                                                        ),
                                                        'Bedrag': _p_change_context(
                                                            $['Bedrag'],
                                                            ($) => $,
                                                        ),
                                                        'Datum': _p_change_context(
                                                            $['Datum'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Openstaand':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Openstaand', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                ),
                'Eerste boekjaar': _p_change_context(
                    $['Eerste boekjaar'],
                    ($) => _p.decide.state(
                        $,
                        ($): t_out.Root.Jaren.D.Eerste_boekjaar => {
                            switch ($[0]) {
                                case 'Ja':
                                    return _p.ss(
                                        $,
                                        ($) => ['Ja', null],
                                    )
                                case 'Nee':
                                    return _p.ss(
                                        $,
                                        ($) => ['Nee', {
                                            'Vorig boekjaar': _p_change_context(
                                                $['Vorig boekjaar'],
                                                ($) => $,
                                            ),
                                        }],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    ),
                ),
                'Grootboekrekening voor BTW afrondingen': _p_change_context(
                    $['Grootboekrekening voor BTW afrondingen'],
                    ($) => $,
                ),
                'Grootboekrekening voor nog aan te geven BTW': _p_change_context(
                    $['Grootboekrekening voor nog aan te geven BTW'],
                    ($) => $,
                ),
                'Grootboekrekening voor resultaat dit jaar': _p_change_context(
                    $['Grootboekrekening voor resultaat dit jaar'],
                    ($) => $,
                ),
                'Grootboekrekening voor winstreserve': _p_change_context(
                    $['Grootboekrekening voor winstreserve'],
                    ($) => $,
                ),
                'Informele rekeningen': _p_change_context(
                    $['Informele rekeningen'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Beginsaldo': _p_change_context(
                                $['Beginsaldo'],
                                ($) => $,
                            ),
                            'Grootboekrekening': _p_change_context(
                                $['Grootboekrekening'],
                                ($) => $,
                            ),
                            'Nieuw': _p_change_context(
                                $['Nieuw'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Informele_rekeningen.D.Nieuw => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Ja', null],
                                                )
                                            case 'Nee':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Nee', {
                                                        'Jaar': _p_change_context(
                                                            $['Jaar'],
                                                            ($) => $,
                                                        ),
                                                        'Rekening': _p_change_context(
                                                            $['Rekening'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                ),
                'Inkopen': _p_change_context(
                    $['Inkopen'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Afhandeling': _p_change_context(
                                $['Afhandeling'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Inkopen.D.Afhandeling => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Mutaties', null],
                                                )
                                            case 'Rekening courant':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Rekening courant', {
                                                        'Rekening courant': _p_change_context(
                                                            $['Rekening courant'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'BTW-regime': _p_change_context(
                                $['BTW-regime'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Inkopen.D.BTW$mi_regime => {
                                        switch ($[0]) {
                                            case 'Binnenland: heffing verlegd':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Binnenland: heffing verlegd', null],
                                                )
                                            case 'Geen BTW van toepassing':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Geen BTW van toepassing', {
                                                        'BTW-periode': _p_change_context(
                                                            $['BTW-periode'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Import van buiten de EU':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Import van buiten de EU', null],
                                                )
                                            case 'Intracommunautair':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Intracommunautair', null],
                                                )
                                            case 'Standaard':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Standaard', {
                                                        'BTW-periode': _p_change_context(
                                                            $['BTW-periode'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'Brondocument': _p_change_context(
                                $['Brondocument'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Inkopen.D.Brondocument => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Toegevoegd', {
                                                        'Document': _p_change_context(
                                                            $['Document'],
                                                            ($) => Bestandsnaam(
                                                                $,
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            case 'Niet van toepassing':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Niet van toepassing', null],
                                                )
                                            case 'Ontbreekt':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Ontbreekt', null],
                                                )
                                            case 'Nog toevoegen':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Nog toevoegen', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'Datum': _p_change_context(
                                $['Datum'],
                                ($) => $,
                            ),
                            'Regels': _p_change_context(
                                $['Regels'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => ({
                                        'Bedrag': _p_change_context(
                                            $['Bedrag'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Bedrag => {
                                                    switch ($[0]) {
                                                        case 'Bekend':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Bekend', {
                                                                    'BTW-bedrag': _p_change_context(
                                                                        $['BTW-bedrag'],
                                                                        ($) => $,
                                                                    ),
                                                                    'Bedrag inclusief geheven BTW': _p_change_context(
                                                                        $['Bedrag inclusief geheven BTW'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                        'Omschrijving': _p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        ),
                                        'Type': _p_change_context(
                                            $['Type'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Inkopen.D.Regels.D.Type => {
                                                    switch ($[0]) {
                                                        case 'Balans':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Balans', {
                                                                    'Balans item': _p_change_context(
                                                                        $['Balans item'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Kosten':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Kosten', {
                                                                    'Grootboekrekening': _p_change_context(
                                                                        $['Grootboekrekening'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                            'Type': _p_change_context(
                                $['Type'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Inkopen.D.Type => {
                                        switch ($[0]) {
                                            case 'Bonnetje':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Bonnetje', null],
                                                )
                                            case 'Inkoop (met crediteur)':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Inkoop (met crediteur)', {
                                                        'Crediteur': _p_change_context(
                                                            $['Crediteur'],
                                                            ($) => $,
                                                        ),
                                                        'Factuurnummer': _p_change_context(
                                                            $['Factuurnummer'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Loonheffing':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Loonheffing', {
                                                        'Ronde': _p_change_context(
                                                            $['Ronde'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Salaris':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Salaris', {
                                                        'Ronde': _p_change_context(
                                                            $['Ronde'],
                                                            ($) => $,
                                                        ),
                                                        'Medewerker': _p_change_context(
                                                            $['Medewerker'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                ),
                'Inkoop saldo': _p_change_context(
                    $['Inkoop saldo'],
                    ($) => ({
                        'Grootboekrekening': _p_change_context(
                            $['Grootboekrekening'],
                            ($) => $,
                        ),
                    }),
                ),
                'Overige balans items': _p_change_context(
                    $['Overige balans items'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Beginsaldo': _p_change_context(
                                $['Beginsaldo'],
                                ($) => $,
                            ),
                            'Grootboekrekening': _p_change_context(
                                $['Grootboekrekening'],
                                ($) => $,
                            ),
                            'Memoriaal boekingen': _p_change_context(
                                $['Memoriaal boekingen'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => ({
                                        'Bedrag': _p_change_context(
                                            $['Bedrag'],
                                            ($) => $,
                                        ),
                                        'Datum': _p_change_context(
                                            $['Datum'],
                                            ($) => $,
                                        ),
                                        'Grootboekrekening': _p_change_context(
                                            $['Grootboekrekening'],
                                            ($) => $,
                                        ),
                                        'Omschrijving': _p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        ),
                                    }),
                                ),
                            ),
                            'Nieuw': _p_change_context(
                                $['Nieuw'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Overige_balans_items.D.Nieuw => {
                                        switch ($[0]) {
                                            case 'Ja':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Ja', null],
                                                )
                                            case 'Nee':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Nee', {
                                                        'Jaar': _p_change_context(
                                                            $['Jaar'],
                                                            ($) => $,
                                                        ),
                                                        'Balans item': _p_change_context(
                                                            $['Balans item'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                        }),
                    ),
                ),
                'Resultaat grootboekrekeningen': _p_change_context(
                    $['Resultaat grootboekrekeningen'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => null,
                    ),
                ),
                'Salarisrondes': _p_change_context(
                    $['Salarisrondes'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => null,
                    ),
                ),
                'Startdatum boekjaar': _p_change_context(
                    $['Startdatum boekjaar'],
                    ($) => $,
                ),
                'Verkoop saldo': _p_change_context(
                    $['Verkoop saldo'],
                    ($) => ({
                        'Grootboekrekening': _p_change_context(
                            $['Grootboekrekening'],
                            ($) => $,
                        ),
                    }),
                ),
                'Verkopen': _p_change_context(
                    $['Verkopen'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Afhandeling': _p_change_context(
                                $['Afhandeling'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Verkopen.D.Afhandeling => {
                                        switch ($[0]) {
                                            case 'Mutaties':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Mutaties', null],
                                                )
                                            case 'Rekening courant':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Rekening courant', {
                                                        'Rekening courant': _p_change_context(
                                                            $['Rekening courant'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'Betalingstermijn': _p_change_context(
                                $['Betalingstermijn'],
                                ($) => $,
                            ),
                            'BTW-periode': _p_change_context(
                                $['BTW-periode'],
                                ($) => $,
                            ),
                            'Brondocument': _p_change_context(
                                $['Brondocument'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Verkopen.D.Brondocument => {
                                        switch ($[0]) {
                                            case 'Toegevoegd':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Toegevoegd', {
                                                        'Document': _p_change_context(
                                                            $['Document'],
                                                            ($) => Bestandsnaam(
                                                                $,
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'Contracttype': _p_change_context(
                                $['Contracttype'],
                                ($) => _p.decide.state(
                                    $,
                                    ($): t_out.Root.Jaren.D.Verkopen.D.Contracttype => {
                                        switch ($[0]) {
                                            case 'Project':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Project', {
                                                        'Project': _p_change_context(
                                                            $['Project'],
                                                            ($) => $,
                                                        ),
                                                        'Offerte': _p_change_context(
                                                            $['Offerte'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'Licentieovereenkomst':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['Licentieovereenkomst', {
                                                        'Overeenkomst': _p_change_context(
                                                            $['Overeenkomst'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            ),
                            'Datum': _p_change_context(
                                $['Datum'],
                                ($) => $,
                            ),
                            'Debiteur': _p_change_context(
                                $['Debiteur'],
                                ($) => $,
                            ),
                            'Regels': _p_change_context(
                                $['Regels'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => ({
                                        'BTW-regime': _p_change_context(
                                            $['BTW-regime'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime => {
                                                    switch ($[0]) {
                                                        case 'Intracommunautair':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Intracommunautair', null],
                                                            )
                                                        case 'Standaard':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Standaard', {
                                                                    'BTW-categorie': _p_change_context(
                                                                        $['BTW-categorie'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Binnenland: heffing verlegd':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Binnenland: heffing verlegd', null],
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                        'Bedrag exclusief BTW': _p_change_context(
                                            $['Bedrag exclusief BTW'],
                                            ($) => $,
                                        ),
                                        'Contracttype': _p_change_context(
                                            $['Contracttype'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Contracttype => {
                                                    switch ($[0]) {
                                                        case 'Project':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Project', {
                                                                    'Opbrengst': _p_change_context(
                                                                        $['Opbrengst'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Los':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Los', null],
                                                            )
                                                        case 'Licentieovereenkomst':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Licentieovereenkomst', {
                                                                    'Periode': _p_change_context(
                                                                        $['Periode'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                        'Omschrijving': _p_change_context(
                                            $['Omschrijving'],
                                            ($) => $,
                                        ),
                                        'Type': _p_change_context(
                                            $['Type'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Verkopen.D.Regels.D.Type => {
                                                    switch ($[0]) {
                                                        case 'Opbrengsten':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Opbrengsten', {
                                                                    'Grootboekrekening': _p_change_context(
                                                                        $['Grootboekrekening'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Balans':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Balans', {
                                                                    'Balans item': _p_change_context(
                                                                        $['Balans item'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        default:
                                                            return _p.au(
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
                'Verrekenposten': _p_change_context(
                    $['Verrekenposten'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Mutaties': _p_change_context(
                                $['Mutaties'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => ({
                                        'Bedrag': _p_change_context(
                                            $['Bedrag'],
                                            ($) => $,
                                        ),
                                        'Afhandeling': _p_change_context(
                                            $['Afhandeling'],
                                            ($) => _p.decide.state(
                                                $,
                                                ($): t_out.Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling => {
                                                    switch ($[0]) {
                                                        case 'Inkoop':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Inkoop', {
                                                                    'Jaar': _p_change_context(
                                                                        $['Jaar'],
                                                                        ($) => $,
                                                                    ),
                                                                    'Inkoop': _p_change_context(
                                                                        $['Inkoop'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Informele rekening':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Informele rekening', {
                                                                    'Informele rekening': _p_change_context(
                                                                        $['Informele rekening'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'Verkoop':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['Verkoop', {
                                                                    'Jaar': _p_change_context(
                                                                        $['Jaar'],
                                                                        ($) => $,
                                                                    ),
                                                                    'Verkoop': _p_change_context(
                                                                        $['Verkoop'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'BTW-periode':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['BTW-periode', {
                                                                    'Jaar': _p_change_context(
                                                                        $['Jaar'],
                                                                        ($) => $,
                                                                    ),
                                                                    'BTW-periode': _p_change_context(
                                                                        $['BTW-periode'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        default:
                                                            return _p.au(
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
    'Klanten': _p_change_context(
        $['Klanten'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => ({
                'Licentieovereenkomsten': _p_change_context(
                    $['Licentieovereenkomsten'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Periodes': _p_change_context(
                                $['Periodes'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => ({
                                        'Bedrag': _p_change_context(
                                            $['Bedrag'],
                                            ($) => $,
                                        ),
                                    }),
                                ),
                            ),
                        }),
                    ),
                ),
                'Projecten': _p_change_context(
                    $['Projecten'],
                    ($) => _p.dictionary.map(
                        $,
                        ($, id) => ({
                            'Offertes': _p_change_context(
                                $['Offertes'],
                                ($) => _p.dictionary.map(
                                    $,
                                    ($, id) => ({
                                        'Opbrengsten': _p_change_context(
                                            $['Opbrengsten'],
                                            ($) => _p.dictionary.map(
                                                $,
                                                ($, id) => ({
                                                    'Type': _p_change_context(
                                                        $['Type'],
                                                        ($) => _p.decide.state(
                                                            $,
                                                            ($): t_out.Root.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type => {
                                                                switch ($[0]) {
                                                                    case 'Project':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['Project', {
                                                                                'Bedrag': _p_change_context(
                                                                                    $['Bedrag'],
                                                                                    ($) => $,
                                                                                ),
                                                                                'Betaaldatum': _p_change_context(
                                                                                    $['Betaaldatum'],
                                                                                    ($) => $,
                                                                                ),
                                                                            }],
                                                                        )
                                                                    default:
                                                                        return _p.au(
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
    'Leveranciers': _p_change_context(
        $['Leveranciers'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => null,
        ),
    ),
    'Medewerkers': _p_change_context(
        $['Medewerkers'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => null,
        ),
    ),
})

export const Bestandsnaam: t_signatures.Bestandsnaam = ($) => $
