import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/boekhouding_oude_model/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/boekhouding_oude_model/data_types/target"


export const Bestandsnaam: _i_signatures._T_Bestandsnaam = ($, $p) => _i_generic.process_text(
    $,
    null
)
export const Root: _i_signatures._T_Root = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'Bankrekeningen': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "Bankrekeningen",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => null,
                        }
                    ),
                }
            )),
            'Beheer': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "Beheer",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'Balans': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Balans",
                            }
                        ), ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'Grootboekrekeningen': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "Grootboekrekeningen",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Hoofdcategorie': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Hoofdcategorie",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'Subcategorie': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Subcategorie",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'Zijde': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Zijde",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                            $,
                                                            {
                                                                'states': _pa.dictionary.literal({
                                                                    'Activa': ($): _i_out._T_Root.Beheer.Balans.Grootboekrekeningen.D.Zijde.SG => ['Activa', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                    'Passiva': ($): _i_out._T_Root.Beheer.Balans.Grootboekrekeningen.D.Zijde.SG => ['Passiva', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
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
                                    'Hoofdcategorieen': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "Hoofdcategorieen",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Zijde': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Zijde",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                            $,
                                                            {
                                                                'states': _pa.dictionary.literal({
                                                                    'Activa': ($): _i_out._T_Root.Beheer.Balans.Hoofdcategorieen.D.Zijde.SG => ['Activa', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                    'Passiva': ($): _i_out._T_Root.Beheer.Balans.Hoofdcategorieen.D.Zijde.SG => ['Passiva', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                }),
                                                            }
                                                        )),
                                                        'Subcategorieen': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Subcategorieen",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Hoofdcategorie fiscus': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Hoofdcategorie fiscus",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'Subcategorie fiscus': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Subcategorie fiscus",
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
                                    'Hoofdcategorieen fiscus': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "Hoofdcategorieen fiscus",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Zijde': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Zijde",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                            $,
                                                            {
                                                                'states': _pa.dictionary.literal({
                                                                    'Activa': ($): _i_out._T_Root.Beheer.Balans.Hoofdcategorieen_fiscus.D.Zijde.SG => ['Activa', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                    'Passiva': ($): _i_out._T_Root.Beheer.Balans.Hoofdcategorieen_fiscus.D.Zijde.SG => ['Passiva', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                }),
                                                            }
                                                        )),
                                                        'Subcategorieen': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Subcategorieen",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
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
                        )),
                        'BTW-categorieen': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "BTW-categorieen",
                            }
                        ), ($) => _i_generic.process_unconstrained_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'BTW-heffing': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "BTW-heffing",
                                                }
                                            ), ($) => _i_generic.process_unconstrained_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary.literal({
                                                        'Ja': ($): _i_out._T_Root.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing.SG => ['Ja', _i_generic.process_group(
                                                            $,
                                                            {
                                                                'properties': ($) => ({
                                                                    'BTW-promillage': _pa.cc(_i_generic.get_entry(
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
                                                        'Nee': ($): _i_out._T_Root.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing.SG => ['Nee', _i_generic.process_group(
                                                            $,
                                                            {
                                                                'properties': ($) => null,
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
                        'Gebruikers': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Gebruikers",
                            }
                        ), ($) => _i_generic.process_unconstrained_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'Volledige naam': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Volledige naam",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                            'Wachtwoord': _pa.cc(_i_generic.get_entry(
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
                        'Huidige datum': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Huidige datum",
                            }
                        ), ($) => _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['custom numbers']['Datum'],
                            }
                        )),
                        'Resultaat': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "Resultaat",
                            }
                        ), ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'Correctietypes vennootschapsbelasting': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "Correctietypes vennootschapsbelasting",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Te corrigeren promillage': _pa.cc(_i_generic.get_entry(
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
                                    'Grootboekrekeningen': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "Grootboekrekeningen",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Hoofdcategorie': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Hoofdcategorie",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'Subcategorie': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Subcategorie",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'Zijde': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Zijde",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                            $,
                                                            {
                                                                'states': _pa.dictionary.literal({
                                                                    'Kosten': ($): _i_out._T_Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.SG => ['Kosten', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => ({
                                                                                'Correctie op vennootschapsbelasting': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "Correctie op vennootschapsbelasting",
                                                                                    }
                                                                                ), ($) => _i_generic.process_unconstrained_state_group(
                                                                                    $,
                                                                                    {
                                                                                        'states': _pa.dictionary.literal({
                                                                                            'Ja': ($): _i_out._T_Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting.SG => ['Ja', _i_generic.process_group(
                                                                                                $,
                                                                                                {
                                                                                                    'properties': ($) => ({
                                                                                                        'Correctietype': _pa.cc(_i_generic.get_entry(
                                                                                                            $,
                                                                                                            {
                                                                                                                'key': "Correctietype",
                                                                                                            }
                                                                                                        ), ($) => _i_generic.process_text(
                                                                                                            $,
                                                                                                            null
                                                                                                        )),
                                                                                                    }),
                                                                                                }
                                                                                            )],
                                                                                            'Nee': ($): _i_out._T_Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting.SG => ['Nee', _i_generic.process_group(
                                                                                                $,
                                                                                                {
                                                                                                    'properties': ($) => null,
                                                                                                }
                                                                                            )],
                                                                                        }),
                                                                                    }
                                                                                )),
                                                                            }),
                                                                        }
                                                                    )],
                                                                    'Opbrengsten': ($): _i_out._T_Root.Beheer.Resultaat.Grootboekrekeningen.D.Zijde.SG => ['Opbrengsten', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
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
                                    'Hoofdcategorieen': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "Hoofdcategorieen",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Zijde': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Zijde",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                            $,
                                                            {
                                                                'states': _pa.dictionary.literal({
                                                                    'Kosten': ($): _i_out._T_Root.Beheer.Resultaat.Hoofdcategorieen.D.Zijde.SG => ['Kosten', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                    'Opbrengsten': ($): _i_out._T_Root.Beheer.Resultaat.Hoofdcategorieen.D.Zijde.SG => ['Opbrengsten', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                }),
                                                            }
                                                        )),
                                                        'Subcategorieen': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Subcategorieen",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Hoofdcategorie fiscus': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Hoofdcategorie fiscus",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'Subcategorie fiscus': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Subcategorie fiscus",
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
                                    'Hoofdcategorieen fiscus': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "Hoofdcategorieen fiscus",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Zijde': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Zijde",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                            $,
                                                            {
                                                                'states': _pa.dictionary.literal({
                                                                    'Kosten': ($): _i_out._T_Root.Beheer.Resultaat.Hoofdcategorieen_fiscus.D.Zijde.SG => ['Kosten', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                    'Opbrengsten': ($): _i_out._T_Root.Beheer.Resultaat.Hoofdcategorieen_fiscus.D.Zijde.SG => ['Opbrengsten', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => null,
                                                                        }
                                                                    )],
                                                                }),
                                                            }
                                                        )),
                                                        'Subcategorieen': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Subcategorieen",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
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
                        )),
                    }),
                }
            )),
            'Informele rekeningen': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "Informele rekeningen",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => null,
                        }
                    ),
                }
            )),
            'Jaren': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "Jaren",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Afgesloten': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Afgesloten",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary.literal({
                                            'Ja': ($): _i_out._T_Root.Jaren.D.Afgesloten.SG => ['Ja', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => null,
                                                }
                                            )],
                                            'Nee': ($): _i_out._T_Root.Jaren.D.Afgesloten.SG => ['Nee', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => null,
                                                }
                                            )],
                                        }),
                                    }
                                )),
                                'Balans grootboekrekeningen': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Balans grootboekrekeningen",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Type': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Type",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Bankrekening': ($): _i_out._T_Root.Jaren.D.Balans_grootboekrekeningen.D.Type.SG => ['Bankrekening', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Overig': ($): _i_out._T_Root.Jaren.D.Balans_grootboekrekeningen.D.Type.SG => ['Overig', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Informele rekening': ($): _i_out._T_Root.Jaren.D.Balans_grootboekrekeningen.D.Type.SG => ['Informele rekening', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
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
                                'Bankrekeningen': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Bankrekeningen",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Beginsaldo': _pa.cc(_i_generic.get_entry(
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
                                                    'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Grootboekrekening",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'Mutaties': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Mutaties",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Bedrag': _pa.cc(_i_generic.get_entry(
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
                                                                        'Datum': _pa.cc(_i_generic.get_entry(
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
                                                                        'Omschrijving': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Omschrijving",
                                                                            }
                                                                        ), ($) => _i_generic.process_text(
                                                                            $,
                                                                            null
                                                                        )),
                                                                        'Status': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Status",
                                                                            }
                                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                                            $,
                                                                            {
                                                                                'states': _pa.dictionary.literal({
                                                                                    'Nog te verwerken': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.SG => ['Nog te verwerken', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => null,
                                                                                        }
                                                                                    )],
                                                                                    'Verwerkt': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.SG => ['Verwerkt', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Afhandeling': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Afhandeling",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_unconstrained_state_group(
                                                                                                    $,
                                                                                                    {
                                                                                                        'states': _pa.dictionary.literal({
                                                                                                            'Inkoop': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.SG.Verwerkt.Afhandeling.SG => ['Inkoop', _i_generic.process_group(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'properties': ($) => ({
                                                                                                                        'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'key': "Jaar",
                                                                                                                            }
                                                                                                                        ), ($) => _i_generic.process_text(
                                                                                                                            $,
                                                                                                                            null
                                                                                                                        )),
                                                                                                                        'Inkoop': _pa.cc(_i_generic.get_entry(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'key': "Inkoop",
                                                                                                                            }
                                                                                                                        ), ($) => _i_generic.process_text(
                                                                                                                            $,
                                                                                                                            null
                                                                                                                        )),
                                                                                                                    }),
                                                                                                                }
                                                                                                            )],
                                                                                                            'Verrekenpost': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.SG.Verwerkt.Afhandeling.SG => ['Verrekenpost', _i_generic.process_group(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'properties': ($) => ({
                                                                                                                        'Verrekenpost': _pa.cc(_i_generic.get_entry(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'key': "Verrekenpost",
                                                                                                                            }
                                                                                                                        ), ($) => _i_generic.process_text(
                                                                                                                            $,
                                                                                                                            null
                                                                                                                        )),
                                                                                                                    }),
                                                                                                                }
                                                                                                            )],
                                                                                                            'BTW-periode': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.SG.Verwerkt.Afhandeling.SG => ['BTW-periode', _i_generic.process_group(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'properties': ($) => ({
                                                                                                                        'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'key': "Jaar",
                                                                                                                            }
                                                                                                                        ), ($) => _i_generic.process_text(
                                                                                                                            $,
                                                                                                                            null
                                                                                                                        )),
                                                                                                                        'BTW-periode': _pa.cc(_i_generic.get_entry(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'key': "BTW-periode",
                                                                                                                            }
                                                                                                                        ), ($) => _i_generic.process_text(
                                                                                                                            $,
                                                                                                                            null
                                                                                                                        )),
                                                                                                                    }),
                                                                                                                }
                                                                                                            )],
                                                                                                            'Verkoop': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.SG.Verwerkt.Afhandeling.SG => ['Verkoop', _i_generic.process_group(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'properties': ($) => ({
                                                                                                                        'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'key': "Jaar",
                                                                                                                            }
                                                                                                                        ), ($) => _i_generic.process_text(
                                                                                                                            $,
                                                                                                                            null
                                                                                                                        )),
                                                                                                                        'Verkoop': _pa.cc(_i_generic.get_entry(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'key': "Verkoop",
                                                                                                                            }
                                                                                                                        ), ($) => _i_generic.process_text(
                                                                                                                            $,
                                                                                                                            null
                                                                                                                        )),
                                                                                                                    }),
                                                                                                                }
                                                                                                            )],
                                                                                                            'Informele rekening': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Mutaties.D.Status.SG.Verwerkt.Afhandeling.SG => ['Informele rekening', _i_generic.process_group(
                                                                                                                $,
                                                                                                                {
                                                                                                                    'properties': ($) => ({
                                                                                                                        'Informele rekening': _pa.cc(_i_generic.get_entry(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'key': "Informele rekening",
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
                                                    'Nieuw': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Nieuw",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Ja': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Nieuw.SG => ['Ja', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Nee': ($): _i_out._T_Root.Jaren.D.Bankrekeningen.D.Nieuw.SG => ['Nee', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Jaar",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'Rekening': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Rekening",
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
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'Beginsaldo nog aan te geven BTW': _pa.cc(_i_generic.get_entry(
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
                                'Beginsaldo winstreserve': _pa.cc(_i_generic.get_entry(
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
                                'BTW periode saldo': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "BTW periode saldo",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Grootboekrekening",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                        }),
                                    }
                                )),
                                'BTW periodes': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "BTW periodes",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    '1. BTW-categorieen': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "1. BTW-categorieen",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => null,
                                                                }
                                                            ),
                                                        }
                                                    )),
                                                    'Documenten': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Documenten",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Bestand': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Bestand",
                                                                            }
                                                                        ), ($) => Bestandsnaam(
                                                                            $,
                                                                            {
                                                                                'value deserializers': $p['value deserializers'],
                                                                            }
                                                                        )),
                                                                    }),
                                                                }
                                                            ),
                                                        }
                                                    )),
                                                    'Omschrijving': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Omschrijving",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'Status': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Status",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Aangegeven': ($): _i_out._T_Root.Jaren.D.BTW_periodes.D.Status.SG => ['Aangegeven', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Afronding': _pa.cc(_i_generic.get_entry(
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
                                                                            'Bedrag': _pa.cc(_i_generic.get_entry(
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
                                                                            'Datum': _pa.cc(_i_generic.get_entry(
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
                                                                'Openstaand': ($): _i_out._T_Root.Jaren.D.BTW_periodes.D.Status.SG => ['Openstaand', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
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
                                'Eerste boekjaar': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Eerste boekjaar",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary.literal({
                                            'Ja': ($): _i_out._T_Root.Jaren.D.Eerste_boekjaar.SG => ['Ja', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => null,
                                                }
                                            )],
                                            'Nee': ($): _i_out._T_Root.Jaren.D.Eerste_boekjaar.SG => ['Nee', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'Vorig boekjaar': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "Vorig boekjaar",
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
                                'Grootboekrekening voor BTW afrondingen': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Grootboekrekening voor BTW afrondingen",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'Grootboekrekening voor nog aan te geven BTW': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Grootboekrekening voor nog aan te geven BTW",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'Grootboekrekening voor resultaat dit jaar': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Grootboekrekening voor resultaat dit jaar",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'Grootboekrekening voor winstreserve': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Grootboekrekening voor winstreserve",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'Informele rekeningen': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Informele rekeningen",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Beginsaldo': _pa.cc(_i_generic.get_entry(
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
                                                    'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Grootboekrekening",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'Nieuw': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Nieuw",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Ja': ($): _i_out._T_Root.Jaren.D.Informele_rekeningen.D.Nieuw.SG => ['Ja', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Nee': ($): _i_out._T_Root.Jaren.D.Informele_rekeningen.D.Nieuw.SG => ['Nee', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Jaar",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'Rekening': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Rekening",
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
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'Inkopen': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Inkopen",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Afhandeling': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Afhandeling",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Mutaties': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Afhandeling.SG => ['Mutaties', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Rekening courant': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Afhandeling.SG => ['Rekening courant', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Rekening courant': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Rekening courant",
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
                                                    'BTW-regime': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "BTW-regime",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Binnenland: heffing verlegd': ($): _i_out._T_Root.Jaren.D.Inkopen.D.BTW$mi_regime.SG => ['Binnenland: heffing verlegd', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Geen BTW van toepassing': ($): _i_out._T_Root.Jaren.D.Inkopen.D.BTW$mi_regime.SG => ['Geen BTW van toepassing', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'BTW-periode': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "BTW-periode",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                                'Import van buiten de EU': ($): _i_out._T_Root.Jaren.D.Inkopen.D.BTW$mi_regime.SG => ['Import van buiten de EU', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Intracommunautair': ($): _i_out._T_Root.Jaren.D.Inkopen.D.BTW$mi_regime.SG => ['Intracommunautair', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Standaard': ($): _i_out._T_Root.Jaren.D.Inkopen.D.BTW$mi_regime.SG => ['Standaard', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'BTW-periode': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "BTW-periode",
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
                                                    'Brondocument': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Brondocument",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Toegevoegd': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Brondocument.SG => ['Toegevoegd', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Document': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Document",
                                                                                }
                                                                            ), ($) => Bestandsnaam(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                                'Niet van toepassing': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Brondocument.SG => ['Niet van toepassing', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Ontbreekt': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Brondocument.SG => ['Ontbreekt', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Nog toevoegen': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Brondocument.SG => ['Nog toevoegen', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                            }),
                                                        }
                                                    )),
                                                    'Datum': _pa.cc(_i_generic.get_entry(
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
                                                    'Regels': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Regels",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Bedrag': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Bedrag",
                                                                            }
                                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                                            $,
                                                                            {
                                                                                'states': _pa.dictionary.literal({
                                                                                    'Bekend': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Regels.D.Bedrag.SG => ['Bekend', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'BTW-bedrag': _pa.cc(_i_generic.get_entry(
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
                                                                                                'Bedrag inclusief geheven BTW': _pa.cc(_i_generic.get_entry(
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
                                                                        'Omschrijving': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Omschrijving",
                                                                            }
                                                                        ), ($) => _i_generic.process_text(
                                                                            $,
                                                                            null
                                                                        )),
                                                                        'Type': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Type",
                                                                            }
                                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                                            $,
                                                                            {
                                                                                'states': _pa.dictionary.literal({
                                                                                    'Balans': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Regels.D.Type.SG => ['Balans', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Balans item': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Balans item",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    )],
                                                                                    'Kosten': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Regels.D.Type.SG => ['Kosten', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Grootboekrekening",
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
                                                                    }),
                                                                }
                                                            ),
                                                        }
                                                    )),
                                                    'Type': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Type",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Bonnetje': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Type.SG => ['Bonnetje', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Inkoop (met crediteur)': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Type.SG => ['Inkoop (met crediteur)', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Crediteur': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Crediteur",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'Factuurnummer': _pa.cc(_i_generic.get_entry(
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
                                                                'Loonheffing': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Type.SG => ['Loonheffing', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Ronde': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Ronde",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                                'Salaris': ($): _i_out._T_Root.Jaren.D.Inkopen.D.Type.SG => ['Salaris', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Ronde': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Ronde",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'Medewerker': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Medewerker",
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
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'Inkoop saldo': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Inkoop saldo",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Grootboekrekening",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                        }),
                                    }
                                )),
                                'Overige balans items': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Overige balans items",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Beginsaldo': _pa.cc(_i_generic.get_entry(
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
                                                    'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Grootboekrekening",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'Memoriaal boekingen': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Memoriaal boekingen",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Bedrag': _pa.cc(_i_generic.get_entry(
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
                                                                        'Datum': _pa.cc(_i_generic.get_entry(
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
                                                                        'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Grootboekrekening",
                                                                            }
                                                                        ), ($) => _i_generic.process_text(
                                                                            $,
                                                                            null
                                                                        )),
                                                                        'Omschrijving': _pa.cc(_i_generic.get_entry(
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
                                                    'Nieuw': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Nieuw",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Ja': ($): _i_out._T_Root.Jaren.D.Overige_balans_items.D.Nieuw.SG => ['Ja', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Nee': ($): _i_out._T_Root.Jaren.D.Overige_balans_items.D.Nieuw.SG => ['Nee', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Jaar",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'Balans item': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Balans item",
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
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'Resultaat grootboekrekeningen': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Resultaat grootboekrekeningen",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => null,
                                            }
                                        ),
                                    }
                                )),
                                'Salarisrondes': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Salarisrondes",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => null,
                                            }
                                        ),
                                    }
                                )),
                                'Startdatum boekjaar': _pa.cc(_i_generic.get_entry(
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
                                'Verkoop saldo': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Verkoop saldo",
                                    }
                                ), ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "Grootboekrekening",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                        }),
                                    }
                                )),
                                'Verkopen': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Verkopen",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Afhandeling': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Afhandeling",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Mutaties': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Afhandeling.SG => ['Mutaties', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => null,
                                                                    }
                                                                )],
                                                                'Rekening courant': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Afhandeling.SG => ['Rekening courant', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Rekening courant': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Rekening courant",
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
                                                    'Betalingstermijn': _pa.cc(_i_generic.get_entry(
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
                                                    'BTW-periode': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "BTW-periode",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'Brondocument': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Brondocument",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Toegevoegd': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Brondocument.SG => ['Toegevoegd', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Document': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Document",
                                                                                }
                                                                            ), ($) => Bestandsnaam(
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
                                                    'Contracttype': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Contracttype",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                        $,
                                                        {
                                                            'states': _pa.dictionary.literal({
                                                                'Project': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Contracttype.SG => ['Project', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Project': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Project",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'Offerte': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Offerte",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                        }),
                                                                    }
                                                                )],
                                                                'Licentieovereenkomst': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Contracttype.SG => ['Licentieovereenkomst', _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'Overeenkomst': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "Overeenkomst",
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
                                                    'Datum': _pa.cc(_i_generic.get_entry(
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
                                                    'Debiteur': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Debiteur",
                                                        }
                                                    ), ($) => _i_generic.process_text(
                                                        $,
                                                        null
                                                    )),
                                                    'Regels': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Regels",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'BTW-regime': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "BTW-regime",
                                                                            }
                                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                                            $,
                                                                            {
                                                                                'states': _pa.dictionary.literal({
                                                                                    'Intracommunautair': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime.SG => ['Intracommunautair', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => null,
                                                                                        }
                                                                                    )],
                                                                                    'Standaard': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime.SG => ['Standaard', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'BTW-categorie': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "BTW-categorie",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    )],
                                                                                    'Binnenland: heffing verlegd': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Regels.D.BTW$mi_regime.SG => ['Binnenland: heffing verlegd', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => null,
                                                                                        }
                                                                                    )],
                                                                                }),
                                                                            }
                                                                        )),
                                                                        'Bedrag exclusief BTW': _pa.cc(_i_generic.get_entry(
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
                                                                        'Contracttype': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Contracttype",
                                                                            }
                                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                                            $,
                                                                            {
                                                                                'states': _pa.dictionary.literal({
                                                                                    'Project': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Regels.D.Contracttype.SG => ['Project', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Opbrengst': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Opbrengst",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    )],
                                                                                    'Los': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Regels.D.Contracttype.SG => ['Los', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => null,
                                                                                        }
                                                                                    )],
                                                                                    'Licentieovereenkomst': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Regels.D.Contracttype.SG => ['Licentieovereenkomst', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Periode': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Periode",
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
                                                                        'Omschrijving': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Omschrijving",
                                                                            }
                                                                        ), ($) => _i_generic.process_text(
                                                                            $,
                                                                            null
                                                                        )),
                                                                        'Type': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Type",
                                                                            }
                                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                                            $,
                                                                            {
                                                                                'states': _pa.dictionary.literal({
                                                                                    'Opbrengsten': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Regels.D.Type.SG => ['Opbrengsten', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Grootboekrekening': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Grootboekrekening",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    )],
                                                                                    'Balans': ($): _i_out._T_Root.Jaren.D.Verkopen.D.Regels.D.Type.SG => ['Balans', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Balans item': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Balans item",
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
                                'Verrekenposten': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Verrekenposten",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Mutaties': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Mutaties",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Bedrag': _pa.cc(_i_generic.get_entry(
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
                                                                        'Afhandeling': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Afhandeling",
                                                                            }
                                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                                            $,
                                                                            {
                                                                                'states': _pa.dictionary.literal({
                                                                                    'Inkoop': ($): _i_out._T_Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling.SG => ['Inkoop', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Jaar",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                                'Inkoop': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Inkoop",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    )],
                                                                                    'Informele rekening': ($): _i_out._T_Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling.SG => ['Informele rekening', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Informele rekening': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Informele rekening",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    )],
                                                                                    'Verkoop': ($): _i_out._T_Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling.SG => ['Verkoop', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Jaar",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                                'Verkoop': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Verkoop",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                            }),
                                                                                        }
                                                                                    )],
                                                                                    'BTW-periode': ($): _i_out._T_Root.Jaren.D.Verrekenposten.D.Mutaties.D.Afhandeling.SG => ['BTW-periode', _i_generic.process_group(
                                                                                        $,
                                                                                        {
                                                                                            'properties': ($) => ({
                                                                                                'Jaar': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "Jaar",
                                                                                                    }
                                                                                                ), ($) => _i_generic.process_text(
                                                                                                    $,
                                                                                                    null
                                                                                                )),
                                                                                                'BTW-periode': _pa.cc(_i_generic.get_entry(
                                                                                                    $,
                                                                                                    {
                                                                                                        'key': "BTW-periode",
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
            'Klanten': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "Klanten",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'Licentieovereenkomsten': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Licentieovereenkomsten",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Periodes': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Periodes",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Bedrag': _pa.cc(_i_generic.get_entry(
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
                                'Projecten': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "Projecten",
                                    }
                                ), ($) => _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'Offertes': _pa.cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "Offertes",
                                                        }
                                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                                        $,
                                                        {
                                                            'value': ($) => _i_generic.process_group(
                                                                $,
                                                                {
                                                                    'properties': ($) => ({
                                                                        'Opbrengsten': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "Opbrengsten",
                                                                            }
                                                                        ), ($) => _i_generic.process_unconstrained_dictionary(
                                                                            $,
                                                                            {
                                                                                'value': ($) => _i_generic.process_group(
                                                                                    $,
                                                                                    {
                                                                                        'properties': ($) => ({
                                                                                            'Type': _pa.cc(_i_generic.get_entry(
                                                                                                $,
                                                                                                {
                                                                                                    'key': "Type",
                                                                                                }
                                                                                            ), ($) => _i_generic.process_unconstrained_state_group(
                                                                                                $,
                                                                                                {
                                                                                                    'states': _pa.dictionary.literal({
                                                                                                        'Project': ($): _i_out._T_Root.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type.SG => ['Project', _i_generic.process_group(
                                                                                                            $,
                                                                                                            {
                                                                                                                'properties': ($) => ({
                                                                                                                    'Bedrag': _pa.cc(_i_generic.get_entry(
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
                                                                                                                    'Betaaldatum': _pa.cc(_i_generic.get_entry(
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
            'Leveranciers': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "Leveranciers",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => null,
                        }
                    ),
                }
            )),
            'Medewerkers': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "Medewerkers",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => null,
                        }
                    ),
                }
            )),
        }),
    }
)
