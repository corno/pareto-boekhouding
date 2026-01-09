import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/boekhouding/data_types/target"


export const Fiscaal: _i_signatures._T_Fiscaal = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Balans Hoofdcategorieen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Balans Hoofdcategorieen",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Zijde': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Zijde",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Activa': ($): _i_out._T_Fiscaal.Balans_Hoofdcategorieen.D.Zijde.SG<_i_in._T_Range> => ['Activa', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Passiva': ($): _i_out._T_Fiscaal.Balans_Hoofdcategorieen.D.Zijde.SG<_i_in._T_Range> => ['Passiva', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                                'Subcategorieen': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Subcategorieen",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_nothing(
                                            $,
                                            null
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'Resultaat Hoofdcategorieen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Resultaat Hoofdcategorieen",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Zijde': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Zijde",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Kosten': ($): _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde.SG<_i_in._T_Range> => ['Kosten', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Opbrengsten': ($): _i_out._T_Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde.SG<_i_in._T_Range> => ['Opbrengsten', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                                'Subcategorieen': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Subcategorieen",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_nothing(
                                            $,
                                            null
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Grootboek_Categorieen: _i_signatures._T_Grootboek_Categorieen = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Correctietypes vennootschapsbelasting': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Correctietypes vennootschapsbelasting",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Te corrigeren promillage': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Te corrigeren promillage",
                                    }
                                ), ($) => _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['custom numbers']['Promillage'],
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'Balans': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Balans",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Zijde': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Zijde",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Activa': ($): _i_out._T_Grootboek_Categorieen.Balans.D.Zijde.SG<_i_in._T_Range> => ['Activa', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Passiva': ($): _i_out._T_Grootboek_Categorieen.Balans.D.Zijde.SG<_i_in._T_Range> => ['Passiva', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                                'Subcategorieen': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Subcategorieen",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Hoofdcategorie fiscus': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Hoofdcategorie fiscus",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'Subcategorie fiscus': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Subcategorie fiscus",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'Resultaat': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Resultaat",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Zijde': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Zijde",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Kosten': ($): _i_out._T_Grootboek_Categorieen.Resultaat.D.Zijde.SG<_i_in._T_Range> => ['Kosten', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Opbrengsten': ($): _i_out._T_Grootboek_Categorieen.Resultaat.D.Zijde.SG<_i_in._T_Range> => ['Opbrengsten', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                                'Subcategorieen': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Subcategorieen",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Hoofdcategorie fiscus': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Hoofdcategorie fiscus",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                    'Subcategorie fiscus': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Subcategorie fiscus",
                                                        }
                                                    ), ($) => _i_generic.process_selected_reference(
                                                        $,
                                                        null
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Beheer: _i_signatures._T_Beheer = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'BTW-categorieen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "BTW-categorieen",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'BTW-heffing': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "BTW-heffing",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Ja': ($): _i_out._T_Beheer.BTW$mi_categorieen.D.BTW$mi_heffing.SG<_i_in._T_Range> => ['Ja', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'BTW-promillage': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "BTW-promillage",
                                                            }
                                                        ), ($) => _i_generic.process_number(
                                                            $,
                                                            {
                                                                'deserializer': $p['value deserializers']['custom numbers']['Promillage'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'Grootboekrekeningen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Grootboekrekeningen",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'Balans': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Balans",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'Hoofdcategorie': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Hoofdcategorie",
                                                }
                                            ), ($) => _i_generic.process_selected_reference(
                                                $,
                                                null
                                            )),
                                            'Subcategorie': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Subcategorie",
                                                }
                                            ), ($) => _i_generic.process_selected_reference(
                                                $,
                                                null
                                            )),
                                            'Zijde': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Zijde",
                                                }
                                            ), ($) => _i_generic.process_unresolved_state_group(
                                                $,
                                                {
                                                    'states': _p.dictionary.literal({
                                                        'Activa': ($): _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Zijde.SG<_i_in._T_Range> => ['Activa', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        'Passiva': ($): _i_out._T_Beheer.Grootboekrekeningen.Balans.D.Zijde.SG<_i_in._T_Range> => ['Passiva', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                    }),
                                                }
                                            )),
                                        }),
                                    }
                                ),
                            }
                        )),
                        'Resultaat': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Resultaat",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'Hoofdcategorie': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Hoofdcategorie",
                                                }
                                            ), ($) => _i_generic.process_selected_reference(
                                                $,
                                                null
                                            )),
                                            'Subcategorie': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Subcategorie",
                                                }
                                            ), ($) => _i_generic.process_selected_reference(
                                                $,
                                                null
                                            )),
                                            'Zijde': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Zijde",
                                                }
                                            ), ($) => _i_generic.process_unresolved_state_group(
                                                $,
                                                {
                                                    'states': _p.dictionary.literal({
                                                        'Kosten': ($): _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG<_i_in._T_Range> => ['Kosten', _i_generic.process_group(
                                                            $,
                                                            {
                                                                'properties': ($) => ({
                                                                    'Correctie op vennootschapsbelasting': _p.deprecated_cc(_i_generic.get_entry(
                                                                        $,
                                                                        {
                                                                            'key': "Correctie op vennootschapsbelasting",
                                                                        }
                                                                    ), ($) => _i_generic.process_unresolved_state_group(
                                                                        $,
                                                                        {
                                                                            'states': _p.dictionary.literal({
                                                                                'Ja': ($): _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting.SG<_i_in._T_Range> => ['Ja', _i_generic.process_group(
                                                                                    $,
                                                                                    {
                                                                                        'properties': ($) => ({
                                                                                            'Correctietype': _p.deprecated_cc(_i_generic.get_entry(
                                                                                                $,
                                                                                                {
                                                                                                    'key': "Correctietype",
                                                                                                }
                                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                                $,
                                                                                                null
                                                                                            )),
                                                                                        }),
                                                                                    }
                                                                                )],
                                                                                'Nee': ($): _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting.SG<_i_in._T_Range> => ['Nee', _i_generic.process_nothing(
                                                                                    $,
                                                                                    null
                                                                                )],
                                                                            }),
                                                                        }
                                                                    )),
                                                                }),
                                                            }
                                                        )],
                                                        'Opbrengsten': ($): _i_out._T_Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG<_i_in._T_Range> => ['Opbrengsten', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                    }),
                                                }
                                            )),
                                        }),
                                    }
                                ),
                            }
                        )),
                    }),
                }
            )),
            'Rekeningen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Rekeningen",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'Bank': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Bank",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_nothing(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'Informeel': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Informeel",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_nothing(
                                    $,
                                    null
                                ),
                            }
                        )),
                    }),
                }
            )),
            'Gebruikers': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Gebruikers",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Volledige naam': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Volledige naam",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'Wachtwoord': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Wachtwoord",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                            }),
                        }
                    ),
                }
            )),
            'Klanten': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Klanten",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Licentieovereenkomsten': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Licentieovereenkomsten",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Periodes': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Periodes",
                                                        }
                                                    ), ($) => _i_generic.process_unresolved_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Bedrag': _p.deprecated_cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Bedrag",
                                                                            }
                                                                        ), ($) => _i_generic.process_number(
                                                                            $,
                                                                            {
                                                                                'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                                            }
                                                                        )),
                                                                    }),
                                                                }
                                                            ),
                                                        }
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'Projecten': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Projecten",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Offertes': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Offertes",
                                                        }
                                                    ), ($) => _i_generic.process_unresolved_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Opbrengsten': _p.deprecated_cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Opbrengsten",
                                                                            }
                                                                        ), ($) => _i_generic.process_unresolved_dictionary(
                                                                            $,
                                                                            {
                                                                                'value': ($) => _i_generic.process_group(
                                                                                    $,
                                                                                    {
                                                                                        'properties': ($) => ({
                                                                                            'Type': _p.deprecated_cc(_i_generic.get_entry(
                                                                                                $,
                                                                                                {
                                                                                                    'key': "Type",
                                                                                                }
                                                                                            ), ($) => _i_generic.process_unresolved_state_group(
                                                                                                $,
                                                                                                {
                                                                                                    'states': _p.dictionary.literal({
                                                                                                        'Project': ($): _i_out._T_Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type.SG<_i_in._T_Range> => ['Project', _i_generic.process_group(
                                                                                                            $,
                                                                                                            {
                                                                                                                'properties': ($) => ({
                                                                                                                    'Bedrag': _p.deprecated_cc(_i_generic.get_entry(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'key': "Bedrag",
                                                                                                                        }
                                                                                                                    ), ($) => _i_generic.process_number(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                                                                                        }
                                                                                                                    )),
                                                                                                                    'Betaaldatum': _p.deprecated_cc(_i_generic.get_entry(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'key': "Betaaldatum",
                                                                                                                        }
                                                                                                                    ), ($) => _i_generic.process_number(
                                                                                                                        $,
                                                                                                                        {
                                                                                                                            'deserializer': $p['value deserializers']['custom numbers']['Datum'],
                                                                                                                        }
                                                                                                                    )),
                                                                                                                }),
                                                                                                            }
                                                                                                        )],
                                                                                                    }),
                                                                                                }
                                                                                            )),
                                                                                        }),
                                                                                    }
                                                                                ),
                                                                            }
                                                                        )),
                                                                    }),
                                                                }
                                                            ),
                                                        }
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'Leveranciers': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Leveranciers",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_nothing(
                        $,
                        null
                    ),
                }
            )),
            'Medewerkers': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Medewerkers",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_nothing(
                        $,
                        null
                    ),
                }
            )),
        }),
    }
)
export const Grootboekrekeningen: _i_signatures._T_Grootboekrekeningen = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Balans': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Balans",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Type': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Type",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Bankrekening': ($): _i_out._T_Grootboekrekeningen.Balans.D.Type.SG<_i_in._T_Range> => ['Bankrekening', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Overig': ($): _i_out._T_Grootboekrekeningen.Balans.D.Type.SG<_i_in._T_Range> => ['Overig', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Informele rekening': ($): _i_out._T_Grootboekrekeningen.Balans.D.Type.SG<_i_in._T_Range> => ['Informele rekening', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'Resultaat': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Resultaat",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_nothing(
                        $,
                        null
                    ),
                }
            )),
        }),
    }
)
export const Jaarbeheer: _i_signatures._T_Jaarbeheer = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Resultaat': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Resultaat",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'Grootboekrekening voor BTW afrondingen': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Grootboekrekening voor BTW afrondingen",
                            }
                        ), ($) => _i_generic.process_selected_reference(
                            $,
                            null
                        )),
                        'Salarisrondes': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Salarisrondes",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_nothing(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'BTW periodes': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "BTW periodes",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            '1. BTW-categorieen': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "1. BTW-categorieen",
                                                }
                                            ), ($) => _i_generic.process_unresolved_dictionary(
                                                $,
                                                {
                                                    'value': ($) => _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    ),
                                                }
                                            )),
                                            'Documenten': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Documenten",
                                                }
                                            ), ($) => _i_generic.process_unresolved_dictionary(
                                                $,
                                                {
                                                    'value': ($) => _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'Bestand': _p.deprecated_cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "Bestand",
                                                                    }
                                                                ), ($) => _i_generic.process_text(
                                                                    $,
                                                                    null
                                                                )),
                                                            }),
                                                        }
                                                    ),
                                                }
                                            )),
                                            'Omschrijving': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Omschrijving",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                            'Status': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Status",
                                                }
                                            ), ($) => _i_generic.process_unresolved_state_group(
                                                $,
                                                {
                                                    'states': _p.dictionary.literal({
                                                        'Aangegeven': ($): _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status.SG<_i_in._T_Range> => ['Aangegeven', _i_generic.process_group(
                                                            $,
                                                            {
                                                                'properties': ($) => ({
                                                                    'Afronding': _p.deprecated_cc(_i_generic.get_entry(
                                                                        $,
                                                                        {
                                                                            'key': "Afronding",
                                                                        }
                                                                    ), ($) => _i_generic.process_number(
                                                                        $,
                                                                        {
                                                                            'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                                        }
                                                                    )),
                                                                    'Bedrag': _p.deprecated_cc(_i_generic.get_entry(
                                                                        $,
                                                                        {
                                                                            'key': "Bedrag",
                                                                        }
                                                                    ), ($) => _i_generic.process_number(
                                                                        $,
                                                                        {
                                                                            'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                                        }
                                                                    )),
                                                                    'Datum': _p.deprecated_cc(_i_generic.get_entry(
                                                                        $,
                                                                        {
                                                                            'key': "Datum",
                                                                        }
                                                                    ), ($) => _i_generic.process_number(
                                                                        $,
                                                                        {
                                                                            'deserializer': $p['value deserializers']['custom numbers']['Datum'],
                                                                        }
                                                                    )),
                                                                }),
                                                            }
                                                        )],
                                                        'Openstaand': ($): _i_out._T_Jaarbeheer.Resultaat.BTW_periodes.D.Status.SG<_i_in._T_Range> => ['Openstaand', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                    }),
                                                }
                                            )),
                                        }),
                                    }
                                ),
                            }
                        )),
                    }),
                }
            )),
            'Balans': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Balans",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'Grootboekrekening voor nog aan te geven BTW': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Grootboekrekening voor nog aan te geven BTW",
                            }
                        ), ($) => _i_generic.process_selected_reference(
                            $,
                            null
                        )),
                        'Grootboekrekening voor resultaat dit jaar': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Grootboekrekening voor resultaat dit jaar",
                            }
                        ), ($) => _i_generic.process_selected_reference(
                            $,
                            null
                        )),
                        'Grootboekrekening voor winstreserve': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Grootboekrekening voor winstreserve",
                            }
                        ), ($) => _i_generic.process_selected_reference(
                            $,
                            null
                        )),
                        'Grootboekrekening voor Inkoop saldo': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Grootboekrekening voor Inkoop saldo",
                            }
                        ), ($) => _i_generic.process_selected_reference(
                            $,
                            null
                        )),
                        'Grootboekrekening voor Verkoop saldo': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Grootboekrekening voor Verkoop saldo",
                            }
                        ), ($) => _i_generic.process_selected_reference(
                            $,
                            null
                        )),
                        'Beginsaldo nog aan te geven BTW': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Beginsaldo nog aan te geven BTW",
                            }
                        ), ($) => _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                            }
                        )),
                        'Beginsaldo winstreserve': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Beginsaldo winstreserve",
                            }
                        ), ($) => _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                            }
                        )),
                        'Informele rekeningen': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Informele rekeningen",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'Beginsaldo': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Beginsaldo",
                                                }
                                            ), ($) => _i_generic.process_number(
                                                $,
                                                {
                                                    'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                }
                                            )),
                                            'Grootboekrekening': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Grootboekrekening",
                                                }
                                            ), ($) => _i_generic.process_selected_reference(
                                                $,
                                                null
                                            )),
                                            'Nieuw': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Nieuw",
                                                }
                                            ), ($) => _i_generic.process_unresolved_state_group(
                                                $,
                                                {
                                                    'states': _p.dictionary.literal({
                                                        'Ja': ($): _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw.SG<_i_in._T_Range> => ['Ja', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        'Nee': ($): _i_out._T_Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw.SG<_i_in._T_Range> => ['Nee', _i_generic.process_group(
                                                            $,
                                                            {
                                                                'properties': ($) => ({
                                                                    'Rekening': _p.deprecated_cc(_i_generic.get_entry(
                                                                        $,
                                                                        {
                                                                            'key': "Rekening",
                                                                        }
                                                                    ), ($) => Verwijzing_naar_Informele_rekening(
                                                                        $,
                                                                        {
                                                                            'value deserializers': $p['value deserializers'],
                                                                        }
                                                                    )),
                                                                }),
                                                            }
                                                        )],
                                                    }),
                                                }
                                            )),
                                        }),
                                    }
                                ),
                            }
                        )),
                        'Bankrekeningen': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Bankrekeningen",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'Beginsaldo': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Beginsaldo",
                                                }
                                            ), ($) => _i_generic.process_number(
                                                $,
                                                {
                                                    'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                }
                                            )),
                                            'Grootboekrekening': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Grootboekrekening",
                                                }
                                            ), ($) => _i_generic.process_selected_reference(
                                                $,
                                                null
                                            )),
                                            'Nieuw': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Nieuw",
                                                }
                                            ), ($) => _i_generic.process_unresolved_state_group(
                                                $,
                                                {
                                                    'states': _p.dictionary.literal({
                                                        'Ja': ($): _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Nieuw.SG<_i_in._T_Range> => ['Ja', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        'Nee': ($): _i_out._T_Jaarbeheer.Balans.Bankrekeningen.D.Nieuw.SG<_i_in._T_Range> => ['Nee', _i_generic.process_group(
                                                            $,
                                                            {
                                                                'properties': ($) => ({
                                                                    'Rekening': _p.deprecated_cc(_i_generic.get_entry(
                                                                        $,
                                                                        {
                                                                            'key': "Rekening",
                                                                        }
                                                                    ), ($) => Verwijzing_naar_Bankrekening(
                                                                        $,
                                                                        {
                                                                            'value deserializers': $p['value deserializers'],
                                                                        }
                                                                    )),
                                                                }),
                                                            }
                                                        )],
                                                    }),
                                                }
                                            )),
                                            'Mutaties': _p.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Mutaties",
                                                }
                                            ), ($) => _i_generic.process_unresolved_dictionary(
                                                $,
                                                {
                                                    'value': ($) => _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'Bedrag': _p.deprecated_cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "Bedrag",
                                                                    }
                                                                ), ($) => _i_generic.process_number(
                                                                    $,
                                                                    {
                                                                        'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                                    }
                                                                )),
                                                                'Datum': _p.deprecated_cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "Datum",
                                                                    }
                                                                ), ($) => _i_generic.process_number(
                                                                    $,
                                                                    {
                                                                        'deserializer': $p['value deserializers']['custom numbers']['Datum'],
                                                                    }
                                                                )),
                                                                'Omschrijving': _p.deprecated_cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "Omschrijving",
                                                                    }
                                                                ), ($) => _i_generic.process_text(
                                                                    $,
                                                                    null
                                                                )),
                                                            }),
                                                        }
                                                    ),
                                                }
                                            )),
                                        }),
                                    }
                                ),
                            }
                        )),
                        'Overige balans items': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Overige balans items",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => Overige_balans_item(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                ),
                            }
                        )),
                        'Verrekenposten': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Verrekenposten",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_nothing(
                                    $,
                                    null
                                ),
                            }
                        )),
                    }),
                }
            )),
        }),
    }
)
export const Overige_balans_item: _i_signatures._T_Overige_balans_item = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Beginsaldo': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Beginsaldo",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                }
            )),
            'Grootboekrekening': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Grootboekrekening",
                }
            ), ($) => _i_generic.process_selected_reference(
                $,
                null
            )),
            'Nieuw': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Nieuw",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'Ja': ($): _i_out._T_Overige_balans_item.Nieuw.SG<_i_in._T_Range> => ['Ja', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'Nee': ($): _i_out._T_Overige_balans_item.Nieuw.SG<_i_in._T_Range> => ['Nee', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'Balans item': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "Balans item",
                                        }
                                    ), ($) => _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                    }),
                }
            )),
        }),
    }
)
export const Verwijzing_naar_Informele_rekening: _i_signatures._T_Verwijzing_naar_Informele_rekening = ($, $p) => _i_generic.process_selected_reference(
    $,
    null
)
export const Verwijzing_naar_Bankrekening: _i_signatures._T_Verwijzing_naar_Bankrekening = ($, $p) => _i_generic.process_selected_reference(
    $,
    null
)
export const Handelstransacties: _i_signatures._T_Handelstransacties = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Inkopen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Inkopen",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Afhandeling': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Afhandeling",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Mutaties': ($): _i_out._T_Handelstransacties.Inkopen.D.Afhandeling.SG<_i_in._T_Range> => ['Mutaties', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Rekening courant': ($): _i_out._T_Handelstransacties.Inkopen.D.Afhandeling.SG<_i_in._T_Range> => ['Rekening courant', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Rekening courant': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Rekening courant",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                                'BTW-regime': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "BTW-regime",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Binnenland: heffing verlegd': ($): _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime.SG<_i_in._T_Range> => ['Binnenland: heffing verlegd', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Geen BTW van toepassing': ($): _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime.SG<_i_in._T_Range> => ['Geen BTW van toepassing', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Import van buiten de EU': ($): _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime.SG<_i_in._T_Range> => ['Import van buiten de EU', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Intracommunautair': ($): _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime.SG<_i_in._T_Range> => ['Intracommunautair', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Standaard': ($): _i_out._T_Handelstransacties.Inkopen.D.BTW$mi_regime.SG<_i_in._T_Range> => ['Standaard', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'BTW-periode': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "BTW-periode",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                                'Brondocument': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Brondocument",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Toegevoegd': ($): _i_out._T_Handelstransacties.Inkopen.D.Brondocument.SG<_i_in._T_Range> => ['Toegevoegd', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Document': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Document",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'Niet van toepassing': ($): _i_out._T_Handelstransacties.Inkopen.D.Brondocument.SG<_i_in._T_Range> => ['Niet van toepassing', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Ontbreekt': ($): _i_out._T_Handelstransacties.Inkopen.D.Brondocument.SG<_i_in._T_Range> => ['Ontbreekt', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                                'Datum': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Datum",
                                    }
                                ), ($) => _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['custom numbers']['Datum'],
                                    }
                                )),
                                'Regels': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Regels",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Bedrag': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Bedrag",
                                                        }
                                                    ), ($) => _i_generic.process_unresolved_state_group(
                                                        $,
                                                        {
                                                            'states': _p.dictionary.literal({
                                                                'Bekend': ($): _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Bedrag.SG<_i_in._T_Range> => ['Bekend', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'BTW-bedrag': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "BTW-bedrag",
                                                                                }
                                                                            ), ($) => _i_generic.process_number(
                                                                                $,
                                                                                {
                                                                                    'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                                                }
                                                                            )),
                                                                            'Bedrag inclusief geheven BTW': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Bedrag inclusief geheven BTW",
                                                                                }
                                                                            ), ($) => _i_generic.process_number(
                                                                                $,
                                                                                {
                                                                                    'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                            }),
                                                        }
                                                    )),
                                                    'Omschrijving': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Omschrijving",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'Type': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Type",
                                                        }
                                                    ), ($) => _i_generic.process_unresolved_state_group(
                                                        $,
                                                        {
                                                            'states': _p.dictionary.literal({
                                                                'Balans': ($): _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type.SG<_i_in._T_Range> => ['Balans', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Balans item': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Balans item",
                                                                                }
                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                                'Kosten': ($): _i_out._T_Handelstransacties.Inkopen.D.Regels.D.Type.SG<_i_in._T_Range> => ['Kosten', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Grootboekrekening': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Grootboekrekening",
                                                                                }
                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                            }),
                                                        }
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'Type': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Type",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Bonnetje': ($): _i_out._T_Handelstransacties.Inkopen.D.Type.SG<_i_in._T_Range> => ['Bonnetje', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Inkoop (met crediteur)': ($): _i_out._T_Handelstransacties.Inkopen.D.Type.SG<_i_in._T_Range> => ['Inkoop (met crediteur)', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Crediteur': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Crediteur",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                        'Factuurnummer': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Factuurnummer",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'Loonheffing': ($): _i_out._T_Handelstransacties.Inkopen.D.Type.SG<_i_in._T_Range> => ['Loonheffing', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Ronde': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Ronde",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'Salaris': ($): _i_out._T_Handelstransacties.Inkopen.D.Type.SG<_i_in._T_Range> => ['Salaris', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Ronde': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Ronde",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                        'Medewerker': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Medewerker",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'Verkopen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Verkopen",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Afhandeling': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Afhandeling",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Mutaties': ($): _i_out._T_Handelstransacties.Verkopen.D.Afhandeling.SG<_i_in._T_Range> => ['Mutaties', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'Rekening courant': ($): _i_out._T_Handelstransacties.Verkopen.D.Afhandeling.SG<_i_in._T_Range> => ['Rekening courant', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Rekening courant': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Rekening courant",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                                'Betalingstermijn': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Betalingstermijn",
                                    }
                                ), ($) => _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['custom numbers']['Dagen'],
                                    }
                                )),
                                'BTW-periode': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "BTW-periode",
                                    }
                                ), ($) => _i_generic.process_selected_reference(
                                    $,
                                    null
                                )),
                                'Brondocument': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Brondocument",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Toegevoegd': ($): _i_out._T_Handelstransacties.Verkopen.D.Brondocument.SG<_i_in._T_Range> => ['Toegevoegd', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Document': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Document",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                                'Debiteur': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Debiteur",
                                    }
                                ), ($) => _i_generic.process_selected_reference(
                                    $,
                                    null
                                )),
                                'Contracttype': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Contracttype",
                                    }
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'Project': ($): _i_out._T_Handelstransacties.Verkopen.D.Contracttype.SG<_i_in._T_Range> => ['Project', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Project': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Project",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                        'Offerte': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Offerte",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'Licentieovereenkomst': ($): _i_out._T_Handelstransacties.Verkopen.D.Contracttype.SG<_i_in._T_Range> => ['Licentieovereenkomst', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Overeenkomst': _p.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Overeenkomst",
                                                            }
                                                        ), ($) => _i_generic.process_selected_reference(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                                'Datum': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Datum",
                                    }
                                ), ($) => _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['custom numbers']['Datum'],
                                    }
                                )),
                                'Regels': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Regels",
                                    }
                                ), ($) => _i_generic.process_unresolved_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'BTW-regime': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "BTW-regime",
                                                        }
                                                    ), ($) => _i_generic.process_unresolved_state_group(
                                                        $,
                                                        {
                                                            'states': _p.dictionary.literal({
                                                                'Intracommunautair': ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime.SG<_i_in._T_Range> => ['Intracommunautair', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                'Standaard': ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime.SG<_i_in._T_Range> => ['Standaard', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'BTW-categorie': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "BTW-categorie",
                                                                                }
                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                                'Binnenland: heffing verlegd': ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime.SG<_i_in._T_Range> => ['Binnenland: heffing verlegd', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                            }),
                                                        }
                                                    )),
                                                    'Bedrag exclusief BTW': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Bedrag exclusief BTW",
                                                        }
                                                    ), ($) => _i_generic.process_number(
                                                        $,
                                                        {
                                                            'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                                        }
                                                    )),
                                                    'Contracttype': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Contracttype",
                                                        }
                                                    ), ($) => _i_generic.process_unresolved_state_group(
                                                        $,
                                                        {
                                                            'states': _p.dictionary.literal({
                                                                'Project': ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype.SG<_i_in._T_Range> => ['Project', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Opbrengst': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Opbrengst",
                                                                                }
                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                                'Los': ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype.SG<_i_in._T_Range> => ['Los', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                'Licentieovereenkomst': ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Contracttype.SG<_i_in._T_Range> => ['Licentieovereenkomst', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Periode': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Periode",
                                                                                }
                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                            }),
                                                        }
                                                    )),
                                                    'Omschrijving': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Omschrijving",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'Type': _p.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Type",
                                                        }
                                                    ), ($) => _i_generic.process_unresolved_state_group(
                                                        $,
                                                        {
                                                            'states': _p.dictionary.literal({
                                                                'Opbrengsten': ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type.SG<_i_in._T_Range> => ['Opbrengsten', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Grootboekrekening': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Grootboekrekening",
                                                                                }
                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                                'Balans': ($): _i_out._T_Handelstransacties.Verkopen.D.Regels.D.Type.SG<_i_in._T_Range> => ['Balans', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Balans item': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Balans item",
                                                                                }
                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                            }),
                                                        }
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Mutaties: _i_signatures._T_Mutaties = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Verrekenpost mutaties': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Verrekenpost mutaties",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_unresolved_dictionary(
                        $,
                        {
                            'value': ($) => _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'Bedrag': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "Bedrag",
                                            }
                                        ), ($) => _i_generic.process_number(
                                            $,
                                            {
                                                'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                            }
                                        )),
                                        'Afhandeling': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "Afhandeling",
                                            }
                                        ), ($) => _i_generic.process_unresolved_state_group(
                                            $,
                                            {
                                                'states': _p.dictionary.literal({
                                                    'Resultaat': ($): _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.SG<_i_in._T_Range> => ['Resultaat', Balans_Resultaat_Mutatie(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )],
                                                    'Balans': ($): _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.SG<_i_in._T_Range> => ['Balans', _i_generic.process_unresolved_state_group(
                                                        $,
                                                        {
                                                            'states': _p.dictionary.literal({
                                                                'Informele rekening': ($): _i_out._T_Mutaties.Verrekenpost_mutaties.D.D.Afhandeling.SG.Balans.SG<_i_in._T_Range> => ['Informele rekening', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Informele rekening': _p.deprecated_cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Informele rekening",
                                                                                }
                                                                            ), ($) => _i_generic.process_selected_reference(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                            }),
                                                        }
                                                    )],
                                                }),
                                            }
                                        )),
                                    }),
                                }
                            ),
                        }
                    ),
                }
            )),
            'Bankrekening Mutatie Verwerkingen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Bankrekening Mutatie Verwerkingen",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_unresolved_dictionary(
                        $,
                        {
                            'value': ($) => _i_generic.process_unresolved_state_group(
                                $,
                                {
                                    'states': _p.dictionary.literal({
                                        'Resultaat': ($): _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG<_i_in._T_Range> => ['Resultaat', Balans_Resultaat_Mutatie(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        )],
                                        'Balans': ($): _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG<_i_in._T_Range> => ['Balans', _i_generic.process_unresolved_state_group(
                                            $,
                                            {
                                                'states': _p.dictionary.literal({
                                                    'Informele rekening': ($): _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG.Balans.SG<_i_in._T_Range> => ['Informele rekening', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'Informele rekening': _p.deprecated_cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "Informele rekening",
                                                                    }
                                                                ), ($) => _i_generic.process_selected_reference(
                                                                    $,
                                                                    null
                                                                )),
                                                            }),
                                                        }
                                                    )],
                                                    'Verrekenpost': ($): _i_out._T_Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D.SG.Balans.SG<_i_in._T_Range> => ['Verrekenpost', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'Verrekenpost': _p.deprecated_cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "Verrekenpost",
                                                                    }
                                                                ), ($) => _i_generic.process_selected_reference(
                                                                    $,
                                                                    null
                                                                )),
                                                            }),
                                                        }
                                                    )],
                                                }),
                                            }
                                        )],
                                    }),
                                }
                            ),
                        }
                    ),
                }
            )),
            'Memoriaal boekingen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Memoriaal boekingen",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_unresolved_dictionary(
                        $,
                        {
                            'value': ($) => _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'Bedrag': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "Bedrag",
                                            }
                                        ), ($) => _i_generic.process_number(
                                            $,
                                            {
                                                'deserializer': $p['value deserializers']['custom numbers']['Bedrag'],
                                            }
                                        )),
                                        'Datum': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "Datum",
                                            }
                                        ), ($) => _i_generic.process_number(
                                            $,
                                            {
                                                'deserializer': $p['value deserializers']['custom numbers']['Datum'],
                                            }
                                        )),
                                        'Omschrijving': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "Omschrijving",
                                            }
                                        ), ($) => _i_generic.process_text(
                                            $,
                                            null
                                        )),
                                        'Grootboekrekening': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "Grootboekrekening",
                                            }
                                        ), ($) => _i_generic.process_selected_reference(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            ),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Jaren: _i_signatures._T_Jaren = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'Afgesloten': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "Afgesloten",
                        }
                    ), ($) => _i_generic.process_unresolved_state_group(
                        $,
                        {
                            'states': _p.dictionary.literal({
                                'Ja': ($): _i_out._T_Jaren.D.Afgesloten.SG<_i_in._T_Range> => ['Ja', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'Nee': ($): _i_out._T_Jaren.D.Afgesloten.SG<_i_in._T_Range> => ['Nee', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )),
                    'Startdatum boekjaar': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "Startdatum boekjaar",
                        }
                    ), ($) => _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['custom numbers']['Datum'],
                        }
                    )),
                    'Grootboekrekeningen': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "Grootboekrekeningen",
                        }
                    ), ($) => Grootboekrekeningen(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                    'Eerste boekjaar': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "Eerste boekjaar",
                        }
                    ), ($) => Eerste_boekjaar(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                    'Jaarbeheer': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "Jaarbeheer",
                        }
                    ), ($) => Jaarbeheer(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                    'Handelstransacties': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "Handelstransacties",
                        }
                    ), ($) => Handelstransacties(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                    'Mutaties': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "Mutaties",
                        }
                    ), ($) => Mutaties(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                }),
            }
        ),
    }
)
export const Balans_Resultaat_Mutatie: _i_signatures._T_Balans_Resultaat_Mutatie = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Jaar': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Jaar",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_selected_reference(
                        $,
                        null
                    ),
                }
            )),
            'type': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'Inkoop': ($): _i_out._T_Balans_Resultaat_Mutatie._type.SG<_i_in._T_Range> => ['Inkoop', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'Verkoop': ($): _i_out._T_Balans_Resultaat_Mutatie._type.SG<_i_in._T_Range> => ['Verkoop', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'BTW-periode': ($): _i_out._T_Balans_Resultaat_Mutatie._type.SG<_i_in._T_Range> => ['BTW-periode', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                    }),
                }
            )),
        }),
    }
)
export const Eerste_boekjaar: _i_signatures._T_Eerste_boekjaar = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _p.dictionary.literal({
            'Ja': ($): _i_out._T_Eerste_boekjaar.SG<_i_in._T_Range> => ['Ja', _i_generic.process_nothing(
                $,
                null
            )],
            'Nee': ($): _i_out._T_Eerste_boekjaar.SG<_i_in._T_Range> => ['Nee', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'Vorig boekjaar': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Vorig boekjaar",
                            }
                        ), ($) => _i_generic.process_selected_reference(
                            $,
                            null
                        )),
                    }),
                }
            )],
        }),
    }
)
export const Root: _i_signatures._T_Root = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Fiscaal': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Fiscaal",
                }
            ), ($) => Fiscaal(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'Categorieen': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Categorieen",
                }
            ), ($) => Grootboek_Categorieen(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'Beheer': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Beheer",
                }
            ), ($) => Beheer(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'Jaren': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "Jaren",
                }
            ), ($) => Jaren(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
