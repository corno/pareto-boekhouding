
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Fiscaal: t_signatures.Fiscaal = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Balans Hoofdcategorieen': _p_cc(
            $.__get_entry(
                'Balans Hoofdcategorieen', 
                ($) => abort(
                    ['no such entry', "Balans Hoofdcategorieen"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Zijde': _p_cc(
                                $.__get_entry(
                                    'Zijde', 
                                    ($) => abort(
                                        ['no such entry', "Zijde"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Subcategorieen': _p_cc(
                                $.__get_entry(
                                    'Subcategorieen', 
                                    ($) => abort(
                                        ['no such entry', "Subcategorieen"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "Location"
                                    ),
                                    'dictionary': v_generic.expect_dictionary(
                                        $, 
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($,id) => v_generic.expect_nothing(
                                            $, 
                                            ($) => abort(
                                                ['expected a nothing', null]
                                            )
                                        )
                                    ),
                                })
                            ),
                        })
                    )
                ),
            })
        ),
        'Resultaat Hoofdcategorieen': _p_cc(
            $.__get_entry(
                'Resultaat Hoofdcategorieen', 
                ($) => abort(
                    ['no such entry', "Resultaat Hoofdcategorieen"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Zijde': _p_cc(
                                $.__get_entry(
                                    'Zijde', 
                                    ($) => abort(
                                        ['no such entry', "Zijde"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Subcategorieen': _p_cc(
                                $.__get_entry(
                                    'Subcategorieen', 
                                    ($) => abort(
                                        ['no such entry', "Subcategorieen"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "Location"
                                    ),
                                    'dictionary': v_generic.expect_dictionary(
                                        $, 
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($,id) => v_generic.expect_nothing(
                                            $, 
                                            ($) => abort(
                                                ['expected a nothing', null]
                                            )
                                        )
                                    ),
                                })
                            ),
                        })
                    )
                ),
            })
        ),
    })
)
export const Grootboek_Categorieen: t_signatures.Grootboek_Categorieen = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Correctietypes vennootschapsbelasting': _p_cc(
            $.__get_entry(
                'Correctietypes vennootschapsbelasting', 
                ($) => abort(
                    ['no such entry', "Correctietypes vennootschapsbelasting"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Te corrigeren promillage': _p_cc(
                                $.__get_entry(
                                    'Te corrigeren promillage', 
                                    ($) => abort(
                                        ['no such entry', "Te corrigeren promillage"]
                                    )
                                ), 
                                ($) => v_deserialize_number.deserialize(
                                    v_generic.expect_text(
                                        $, 
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    ), 
                                    ($) => abort(
                                        ['not a valid number', null]
                                    )
                                )
                            ),
                        })
                    )
                ),
            })
        ),
        'Balans': _p_cc(
            $.__get_entry(
                'Balans', 
                ($) => abort(
                    ['no such entry', "Balans"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Zijde': _p_cc(
                                $.__get_entry(
                                    'Zijde', 
                                    ($) => abort(
                                        ['no such entry', "Zijde"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Subcategorieen': _p_cc(
                                $.__get_entry(
                                    'Subcategorieen', 
                                    ($) => abort(
                                        ['no such entry', "Subcategorieen"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "Location"
                                    ),
                                    'dictionary': v_generic.expect_dictionary(
                                        $, 
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($,id) => _p_cc(
                                            v_generic.expect_group(
                                                $, 
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ), 
                                            ($) => ({
                                                'Hoofdcategorie fiscus': _p_cc(
                                                    $.__get_entry(
                                                        'Hoofdcategorie fiscus', 
                                                        ($) => abort(
                                                            ['no such entry', "Hoofdcategorie fiscus"]
                                                        )
                                                    ), 
                                                    ($) => ({
                                                        'location': pdev.implement_me(
                                                            "LOC"
                                                        ),
                                                        'key': v_generic.expect_text(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a text', null]
                                                            )
                                                        ),
                                                    })
                                                ),
                                                'Subcategorie fiscus': _p_cc(
                                                    $.__get_entry(
                                                        'Subcategorie fiscus', 
                                                        ($) => abort(
                                                            ['no such entry', "Subcategorie fiscus"]
                                                        )
                                                    ), 
                                                    ($) => ({
                                                        'location': pdev.implement_me(
                                                            "LOC"
                                                        ),
                                                        'key': v_generic.expect_text(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a text', null]
                                                            )
                                                        ),
                                                    })
                                                ),
                                            })
                                        )
                                    ),
                                })
                            ),
                        })
                    )
                ),
            })
        ),
        'Resultaat': _p_cc(
            $.__get_entry(
                'Resultaat', 
                ($) => abort(
                    ['no such entry', "Resultaat"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Zijde': _p_cc(
                                $.__get_entry(
                                    'Zijde', 
                                    ($) => abort(
                                        ['no such entry', "Zijde"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Subcategorieen': _p_cc(
                                $.__get_entry(
                                    'Subcategorieen', 
                                    ($) => abort(
                                        ['no such entry', "Subcategorieen"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "Location"
                                    ),
                                    'dictionary': v_generic.expect_dictionary(
                                        $, 
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($,id) => _p_cc(
                                            v_generic.expect_group(
                                                $, 
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ), 
                                            ($) => ({
                                                'Hoofdcategorie fiscus': _p_cc(
                                                    $.__get_entry(
                                                        'Hoofdcategorie fiscus', 
                                                        ($) => abort(
                                                            ['no such entry', "Hoofdcategorie fiscus"]
                                                        )
                                                    ), 
                                                    ($) => ({
                                                        'location': pdev.implement_me(
                                                            "LOC"
                                                        ),
                                                        'key': v_generic.expect_text(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a text', null]
                                                            )
                                                        ),
                                                    })
                                                ),
                                                'Subcategorie fiscus': _p_cc(
                                                    $.__get_entry(
                                                        'Subcategorie fiscus', 
                                                        ($) => abort(
                                                            ['no such entry', "Subcategorie fiscus"]
                                                        )
                                                    ), 
                                                    ($) => ({
                                                        'location': pdev.implement_me(
                                                            "LOC"
                                                        ),
                                                        'key': v_generic.expect_text(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a text', null]
                                                            )
                                                        ),
                                                    })
                                                ),
                                            })
                                        )
                                    ),
                                })
                            ),
                        })
                    )
                ),
            })
        ),
    })
)
export const Beheer: t_signatures.Beheer = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'BTW-categorieen': _p_cc(
            $.__get_entry(
                'BTW-categorieen', 
                ($) => abort(
                    ['no such entry', "BTW-categorieen"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'BTW-heffing': _p_cc(
                                $.__get_entry(
                                    'BTW-heffing', 
                                    ($) => abort(
                                        ['no such entry', "BTW-heffing"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                        })
                    )
                ),
            })
        ),
        'Grootboekrekeningen': _p_cc(
            $.__get_entry(
                'Grootboekrekeningen', 
                ($) => abort(
                    ['no such entry', "Grootboekrekeningen"]
                )
            ), 
            ($) => _p_cc(
                v_generic.expect_group(
                    $, 
                    ($) => abort(
                        ['expected a group', null]
                    )
                ), 
                ($) => ({
                    'Balans': _p_cc(
                        $.__get_entry(
                            'Balans', 
                            ($) => abort(
                                ['no such entry', "Balans"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => _p_cc(
                                    v_generic.expect_group(
                                        $, 
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ), 
                                    ($) => ({
                                        'Hoofdcategorie': _p_cc(
                                            $.__get_entry(
                                                'Hoofdcategorie', 
                                                ($) => abort(
                                                    ['no such entry', "Hoofdcategorie"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "LOC"
                                                ),
                                                'key': v_generic.expect_text(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                            })
                                        ),
                                        'Subcategorie': _p_cc(
                                            $.__get_entry(
                                                'Subcategorie', 
                                                ($) => abort(
                                                    ['no such entry', "Subcategorie"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "LOC"
                                                ),
                                                'key': v_generic.expect_text(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                            })
                                        ),
                                        'Zijde': _p_cc(
                                            $.__get_entry(
                                                'Zijde', 
                                                ($) => abort(
                                                    ['no such entry', "Zijde"]
                                                )
                                            ), 
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            ),
                        })
                    ),
                    'Resultaat': _p_cc(
                        $.__get_entry(
                            'Resultaat', 
                            ($) => abort(
                                ['no such entry', "Resultaat"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => _p_cc(
                                    v_generic.expect_group(
                                        $, 
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ), 
                                    ($) => ({
                                        'Hoofdcategorie': _p_cc(
                                            $.__get_entry(
                                                'Hoofdcategorie', 
                                                ($) => abort(
                                                    ['no such entry', "Hoofdcategorie"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "LOC"
                                                ),
                                                'key': v_generic.expect_text(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                            })
                                        ),
                                        'Subcategorie': _p_cc(
                                            $.__get_entry(
                                                'Subcategorie', 
                                                ($) => abort(
                                                    ['no such entry', "Subcategorie"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "LOC"
                                                ),
                                                'key': v_generic.expect_text(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                            })
                                        ),
                                        'Zijde': _p_cc(
                                            $.__get_entry(
                                                'Zijde', 
                                                ($) => abort(
                                                    ['no such entry', "Zijde"]
                                                )
                                            ), 
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            ),
                        })
                    ),
                })
            )
        ),
        'Rekeningen': _p_cc(
            $.__get_entry(
                'Rekeningen', 
                ($) => abort(
                    ['no such entry', "Rekeningen"]
                )
            ), 
            ($) => _p_cc(
                v_generic.expect_group(
                    $, 
                    ($) => abort(
                        ['expected a group', null]
                    )
                ), 
                ($) => ({
                    'Bank': _p_cc(
                        $.__get_entry(
                            'Bank', 
                            ($) => abort(
                                ['no such entry', "Bank"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => v_generic.expect_nothing(
                                    $, 
                                    ($) => abort(
                                        ['expected a nothing', null]
                                    )
                                )
                            ),
                        })
                    ),
                    'Informeel': _p_cc(
                        $.__get_entry(
                            'Informeel', 
                            ($) => abort(
                                ['no such entry', "Informeel"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => v_generic.expect_nothing(
                                    $, 
                                    ($) => abort(
                                        ['expected a nothing', null]
                                    )
                                )
                            ),
                        })
                    ),
                })
            )
        ),
        'Gebruikers': _p_cc(
            $.__get_entry(
                'Gebruikers', 
                ($) => abort(
                    ['no such entry', "Gebruikers"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Volledige naam': _p_cc(
                                $.__get_entry(
                                    'Volledige naam', 
                                    ($) => abort(
                                        ['no such entry', "Volledige naam"]
                                    )
                                ), 
                                ($) => v_generic.expect_text(
                                    $, 
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                )
                            ),
                            'Wachtwoord': _p_cc(
                                $.__get_entry(
                                    'Wachtwoord', 
                                    ($) => abort(
                                        ['no such entry', "Wachtwoord"]
                                    )
                                ), 
                                ($) => v_generic.expect_text(
                                    $, 
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                )
                            ),
                        })
                    )
                ),
            })
        ),
        'Klanten': _p_cc(
            $.__get_entry(
                'Klanten', 
                ($) => abort(
                    ['no such entry', "Klanten"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Licentieovereenkomsten': _p_cc(
                                $.__get_entry(
                                    'Licentieovereenkomsten', 
                                    ($) => abort(
                                        ['no such entry', "Licentieovereenkomsten"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "Location"
                                    ),
                                    'dictionary': v_generic.expect_dictionary(
                                        $, 
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($,id) => _p_cc(
                                            v_generic.expect_group(
                                                $, 
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ), 
                                            ($) => ({
                                                'Periodes': _p_cc(
                                                    $.__get_entry(
                                                        'Periodes', 
                                                        ($) => abort(
                                                            ['no such entry', "Periodes"]
                                                        )
                                                    ), 
                                                    ($) => ({
                                                        'location': pdev.implement_me(
                                                            "Location"
                                                        ),
                                                        'dictionary': v_generic.expect_dictionary(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a dictionary', null]
                                                            )
                                                        ).__d_map(
                                                            ($,id) => _p_cc(
                                                                v_generic.expect_group(
                                                                    $, 
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ), 
                                                                ($) => ({
                                                                    'Bedrag': _p_cc(
                                                                        $.__get_entry(
                                                                            'Bedrag', 
                                                                            ($) => abort(
                                                                                ['no such entry', "Bedrag"]
                                                                            )
                                                                        ), 
                                                                        ($) => v_deserialize_number.deserialize(
                                                                            v_generic.expect_text(
                                                                                $, 
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            ), 
                                                                            ($) => abort(
                                                                                ['not a valid number', null]
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )
                                                        ),
                                                    })
                                                ),
                                            })
                                        )
                                    ),
                                })
                            ),
                            'Projecten': _p_cc(
                                $.__get_entry(
                                    'Projecten', 
                                    ($) => abort(
                                        ['no such entry', "Projecten"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "Location"
                                    ),
                                    'dictionary': v_generic.expect_dictionary(
                                        $, 
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($,id) => _p_cc(
                                            v_generic.expect_group(
                                                $, 
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ), 
                                            ($) => ({
                                                'Offertes': _p_cc(
                                                    $.__get_entry(
                                                        'Offertes', 
                                                        ($) => abort(
                                                            ['no such entry', "Offertes"]
                                                        )
                                                    ), 
                                                    ($) => ({
                                                        'location': pdev.implement_me(
                                                            "Location"
                                                        ),
                                                        'dictionary': v_generic.expect_dictionary(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a dictionary', null]
                                                            )
                                                        ).__d_map(
                                                            ($,id) => _p_cc(
                                                                v_generic.expect_group(
                                                                    $, 
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ), 
                                                                ($) => ({
                                                                    'Opbrengsten': _p_cc(
                                                                        $.__get_entry(
                                                                            'Opbrengsten', 
                                                                            ($) => abort(
                                                                                ['no such entry', "Opbrengsten"]
                                                                            )
                                                                        ), 
                                                                        ($) => ({
                                                                            'location': pdev.implement_me(
                                                                                "Location"
                                                                            ),
                                                                            'dictionary': v_generic.expect_dictionary(
                                                                                $, 
                                                                                ($) => abort(
                                                                                    ['expected a dictionary', null]
                                                                                )
                                                                            ).__d_map(
                                                                                ($,id) => _p_cc(
                                                                                    v_generic.expect_group(
                                                                                        $, 
                                                                                        ($) => abort(
                                                                                            ['expected a group', null]
                                                                                        )
                                                                                    ), 
                                                                                    ($) => ({
                                                                                        'Type': _p_cc(
                                                                                            $.__get_entry(
                                                                                                'Type', 
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "Type"]
                                                                                                )
                                                                                            ), 
                                                                                            ($) => _p_unreachable_code_path(
                                                                                            )
                                                                                        ),
                                                                                    })
                                                                                )
                                                                            ),
                                                                        })
                                                                    ),
                                                                })
                                                            )
                                                        ),
                                                    })
                                                ),
                                            })
                                        )
                                    ),
                                })
                            ),
                        })
                    )
                ),
            })
        ),
        'Leveranciers': _p_cc(
            $.__get_entry(
                'Leveranciers', 
                ($) => abort(
                    ['no such entry', "Leveranciers"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => v_generic.expect_nothing(
                        $, 
                        ($) => abort(
                            ['expected a nothing', null]
                        )
                    )
                ),
            })
        ),
        'Medewerkers': _p_cc(
            $.__get_entry(
                'Medewerkers', 
                ($) => abort(
                    ['no such entry', "Medewerkers"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => v_generic.expect_nothing(
                        $, 
                        ($) => abort(
                            ['expected a nothing', null]
                        )
                    )
                ),
            })
        ),
    })
)
export const Grootboekrekeningen: t_signatures.Grootboekrekeningen = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Balans': _p_cc(
            $.__get_entry(
                'Balans', 
                ($) => abort(
                    ['no such entry', "Balans"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Type': _p_cc(
                                $.__get_entry(
                                    'Type', 
                                    ($) => abort(
                                        ['no such entry', "Type"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                        })
                    )
                ),
            })
        ),
        'Resultaat': _p_cc(
            $.__get_entry(
                'Resultaat', 
                ($) => abort(
                    ['no such entry', "Resultaat"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => v_generic.expect_nothing(
                        $, 
                        ($) => abort(
                            ['expected a nothing', null]
                        )
                    )
                ),
            })
        ),
    })
)
export const Jaarbeheer: t_signatures.Jaarbeheer = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Resultaat': _p_cc(
            $.__get_entry(
                'Resultaat', 
                ($) => abort(
                    ['no such entry', "Resultaat"]
                )
            ), 
            ($) => _p_cc(
                v_generic.expect_group(
                    $, 
                    ($) => abort(
                        ['expected a group', null]
                    )
                ), 
                ($) => ({
                    'Grootboekrekening voor BTW afrondingen': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor BTW afrondingen', 
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor BTW afrondingen"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "LOC"
                            ),
                            'key': v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Salarisrondes': _p_cc(
                        $.__get_entry(
                            'Salarisrondes', 
                            ($) => abort(
                                ['no such entry', "Salarisrondes"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => v_generic.expect_nothing(
                                    $, 
                                    ($) => abort(
                                        ['expected a nothing', null]
                                    )
                                )
                            ),
                        })
                    ),
                    'BTW periodes': _p_cc(
                        $.__get_entry(
                            'BTW periodes', 
                            ($) => abort(
                                ['no such entry', "BTW periodes"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => _p_cc(
                                    v_generic.expect_group(
                                        $, 
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ), 
                                    ($) => ({
                                        '1. BTW-categorieen': _p_cc(
                                            $.__get_entry(
                                                '1. BTW-categorieen', 
                                                ($) => abort(
                                                    ['no such entry', "1. BTW-categorieen"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "Location"
                                                ),
                                                'dictionary': v_generic.expect_dictionary(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a dictionary', null]
                                                    )
                                                ).__d_map(
                                                    ($,id) => v_generic.expect_nothing(
                                                        $, 
                                                        ($) => abort(
                                                            ['expected a nothing', null]
                                                        )
                                                    )
                                                ),
                                            })
                                        ),
                                        'Documenten': _p_cc(
                                            $.__get_entry(
                                                'Documenten', 
                                                ($) => abort(
                                                    ['no such entry', "Documenten"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "Location"
                                                ),
                                                'dictionary': v_generic.expect_dictionary(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a dictionary', null]
                                                    )
                                                ).__d_map(
                                                    ($,id) => _p_cc(
                                                        v_generic.expect_group(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ), 
                                                        ($) => ({
                                                            'Bestand': _p_cc(
                                                                $.__get_entry(
                                                                    'Bestand', 
                                                                    ($) => abort(
                                                                        ['no such entry', "Bestand"]
                                                                    )
                                                                ), 
                                                                ($) => v_generic.expect_text(
                                                                    $, 
                                                                    ($) => abort(
                                                                        ['expected a text', null]
                                                                    )
                                                                )
                                                            ),
                                                        })
                                                    )
                                                ),
                                            })
                                        ),
                                        'Omschrijving': _p_cc(
                                            $.__get_entry(
                                                'Omschrijving', 
                                                ($) => abort(
                                                    ['no such entry', "Omschrijving"]
                                                )
                                            ), 
                                            ($) => v_generic.expect_text(
                                                $, 
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            )
                                        ),
                                        'Status': _p_cc(
                                            $.__get_entry(
                                                'Status', 
                                                ($) => abort(
                                                    ['no such entry', "Status"]
                                                )
                                            ), 
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            ),
                        })
                    ),
                })
            )
        ),
        'Balans': _p_cc(
            $.__get_entry(
                'Balans', 
                ($) => abort(
                    ['no such entry', "Balans"]
                )
            ), 
            ($) => _p_cc(
                v_generic.expect_group(
                    $, 
                    ($) => abort(
                        ['expected a group', null]
                    )
                ), 
                ($) => ({
                    'Grootboekrekening voor nog aan te geven BTW': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor nog aan te geven BTW', 
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor nog aan te geven BTW"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "LOC"
                            ),
                            'key': v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Grootboekrekening voor resultaat dit jaar': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor resultaat dit jaar', 
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor resultaat dit jaar"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "LOC"
                            ),
                            'key': v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Grootboekrekening voor winstreserve': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor winstreserve', 
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor winstreserve"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "LOC"
                            ),
                            'key': v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Grootboekrekening voor Inkoop saldo': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor Inkoop saldo', 
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor Inkoop saldo"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "LOC"
                            ),
                            'key': v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Grootboekrekening voor Verkoop saldo': _p_cc(
                        $.__get_entry(
                            'Grootboekrekening voor Verkoop saldo', 
                            ($) => abort(
                                ['no such entry', "Grootboekrekening voor Verkoop saldo"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "LOC"
                            ),
                            'key': v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'Beginsaldo nog aan te geven BTW': _p_cc(
                        $.__get_entry(
                            'Beginsaldo nog aan te geven BTW', 
                            ($) => abort(
                                ['no such entry', "Beginsaldo nog aan te geven BTW"]
                            )
                        ), 
                        ($) => v_deserialize_number.deserialize(
                            v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ), 
                            ($) => abort(
                                ['not a valid number', null]
                            )
                        )
                    ),
                    'Beginsaldo winstreserve': _p_cc(
                        $.__get_entry(
                            'Beginsaldo winstreserve', 
                            ($) => abort(
                                ['no such entry', "Beginsaldo winstreserve"]
                            )
                        ), 
                        ($) => v_deserialize_number.deserialize(
                            v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ), 
                            ($) => abort(
                                ['not a valid number', null]
                            )
                        )
                    ),
                    'Informele rekeningen': _p_cc(
                        $.__get_entry(
                            'Informele rekeningen', 
                            ($) => abort(
                                ['no such entry', "Informele rekeningen"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => _p_cc(
                                    v_generic.expect_group(
                                        $, 
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ), 
                                    ($) => ({
                                        'Beginsaldo': _p_cc(
                                            $.__get_entry(
                                                'Beginsaldo', 
                                                ($) => abort(
                                                    ['no such entry', "Beginsaldo"]
                                                )
                                            ), 
                                            ($) => v_deserialize_number.deserialize(
                                                v_generic.expect_text(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ), 
                                                ($) => abort(
                                                    ['not a valid number', null]
                                                )
                                            )
                                        ),
                                        'Grootboekrekening': _p_cc(
                                            $.__get_entry(
                                                'Grootboekrekening', 
                                                ($) => abort(
                                                    ['no such entry', "Grootboekrekening"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "LOC"
                                                ),
                                                'key': v_generic.expect_text(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                            })
                                        ),
                                        'Nieuw': _p_cc(
                                            $.__get_entry(
                                                'Nieuw', 
                                                ($) => abort(
                                                    ['no such entry', "Nieuw"]
                                                )
                                            ), 
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                    })
                                )
                            ),
                        })
                    ),
                    'Bankrekeningen': _p_cc(
                        $.__get_entry(
                            'Bankrekeningen', 
                            ($) => abort(
                                ['no such entry', "Bankrekeningen"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => _p_cc(
                                    v_generic.expect_group(
                                        $, 
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ), 
                                    ($) => ({
                                        'Beginsaldo': _p_cc(
                                            $.__get_entry(
                                                'Beginsaldo', 
                                                ($) => abort(
                                                    ['no such entry', "Beginsaldo"]
                                                )
                                            ), 
                                            ($) => v_deserialize_number.deserialize(
                                                v_generic.expect_text(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ), 
                                                ($) => abort(
                                                    ['not a valid number', null]
                                                )
                                            )
                                        ),
                                        'Grootboekrekening': _p_cc(
                                            $.__get_entry(
                                                'Grootboekrekening', 
                                                ($) => abort(
                                                    ['no such entry', "Grootboekrekening"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "LOC"
                                                ),
                                                'key': v_generic.expect_text(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                ),
                                            })
                                        ),
                                        'Nieuw': _p_cc(
                                            $.__get_entry(
                                                'Nieuw', 
                                                ($) => abort(
                                                    ['no such entry', "Nieuw"]
                                                )
                                            ), 
                                            ($) => _p_unreachable_code_path(
                                            )
                                        ),
                                        'Mutaties': _p_cc(
                                            $.__get_entry(
                                                'Mutaties', 
                                                ($) => abort(
                                                    ['no such entry', "Mutaties"]
                                                )
                                            ), 
                                            ($) => ({
                                                'location': pdev.implement_me(
                                                    "Location"
                                                ),
                                                'dictionary': v_generic.expect_dictionary(
                                                    $, 
                                                    ($) => abort(
                                                        ['expected a dictionary', null]
                                                    )
                                                ).__d_map(
                                                    ($,id) => _p_cc(
                                                        v_generic.expect_group(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ), 
                                                        ($) => ({
                                                            'Bedrag': _p_cc(
                                                                $.__get_entry(
                                                                    'Bedrag', 
                                                                    ($) => abort(
                                                                        ['no such entry', "Bedrag"]
                                                                    )
                                                                ), 
                                                                ($) => v_deserialize_number.deserialize(
                                                                    v_generic.expect_text(
                                                                        $, 
                                                                        ($) => abort(
                                                                            ['expected a text', null]
                                                                        )
                                                                    ), 
                                                                    ($) => abort(
                                                                        ['not a valid number', null]
                                                                    )
                                                                )
                                                            ),
                                                            'Datum': _p_cc(
                                                                $.__get_entry(
                                                                    'Datum', 
                                                                    ($) => abort(
                                                                        ['no such entry', "Datum"]
                                                                    )
                                                                ), 
                                                                ($) => v_deserialize_number.deserialize(
                                                                    v_generic.expect_text(
                                                                        $, 
                                                                        ($) => abort(
                                                                            ['expected a text', null]
                                                                        )
                                                                    ), 
                                                                    ($) => abort(
                                                                        ['not a valid number', null]
                                                                    )
                                                                )
                                                            ),
                                                            'Omschrijving': _p_cc(
                                                                $.__get_entry(
                                                                    'Omschrijving', 
                                                                    ($) => abort(
                                                                        ['no such entry', "Omschrijving"]
                                                                    )
                                                                ), 
                                                                ($) => v_generic.expect_text(
                                                                    $, 
                                                                    ($) => abort(
                                                                        ['expected a text', null]
                                                                    )
                                                                )
                                                            ),
                                                        })
                                                    )
                                                ),
                                            })
                                        ),
                                    })
                                )
                            ),
                        })
                    ),
                    'Overige balans items': _p_cc(
                        $.__get_entry(
                            'Overige balans items', 
                            ($) => abort(
                                ['no such entry', "Overige balans items"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => Overige_balans_item(
                                    $, 
                                    ($) => abort(
                                        $
                                    )
                                )
                            ),
                        })
                    ),
                    'Verrekenposten': _p_cc(
                        $.__get_entry(
                            'Verrekenposten', 
                            ($) => abort(
                                ['no such entry', "Verrekenposten"]
                            )
                        ), 
                        ($) => ({
                            'location': pdev.implement_me(
                                "Location"
                            ),
                            'dictionary': v_generic.expect_dictionary(
                                $, 
                                ($) => abort(
                                    ['expected a dictionary', null]
                                )
                            ).__d_map(
                                ($,id) => v_generic.expect_nothing(
                                    $, 
                                    ($) => abort(
                                        ['expected a nothing', null]
                                    )
                                )
                            ),
                        })
                    ),
                })
            )
        ),
    })
)
export const Overige_balans_item: t_signatures.Overige_balans_item = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Beginsaldo': _p_cc(
            $.__get_entry(
                'Beginsaldo', 
                ($) => abort(
                    ['no such entry', "Beginsaldo"]
                )
            ), 
            ($) => v_deserialize_number.deserialize(
                v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                ), 
                ($) => abort(
                    ['not a valid number', null]
                )
            )
        ),
        'Grootboekrekening': _p_cc(
            $.__get_entry(
                'Grootboekrekening', 
                ($) => abort(
                    ['no such entry', "Grootboekrekening"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "LOC"
                ),
                'key': v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
            })
        ),
        'Nieuw': _p_cc(
            $.__get_entry(
                'Nieuw', 
                ($) => abort(
                    ['no such entry', "Nieuw"]
                )
            ), 
            ($) => _p_unreachable_code_path(
            )
        ),
    })
)
export const Verwijzing_naar_Informele_rekening: t_signatures.Verwijzing_naar_Informele_rekening = ($,abort) => ({
    'location': pdev.implement_me(
        "LOC"
    ),
    'key': v_generic.expect_text(
        $, 
        ($) => abort(
            ['expected a text', null]
        )
    ),
})
export const Verwijzing_naar_Bankrekening: t_signatures.Verwijzing_naar_Bankrekening = ($,abort) => ({
    'location': pdev.implement_me(
        "LOC"
    ),
    'key': v_generic.expect_text(
        $, 
        ($) => abort(
            ['expected a text', null]
        )
    ),
})
export const Handelstransacties: t_signatures.Handelstransacties = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Inkopen': _p_cc(
            $.__get_entry(
                'Inkopen', 
                ($) => abort(
                    ['no such entry', "Inkopen"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Afhandeling': _p_cc(
                                $.__get_entry(
                                    'Afhandeling', 
                                    ($) => abort(
                                        ['no such entry', "Afhandeling"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'BTW-regime': _p_cc(
                                $.__get_entry(
                                    'BTW-regime', 
                                    ($) => abort(
                                        ['no such entry', "BTW-regime"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Brondocument': _p_cc(
                                $.__get_entry(
                                    'Brondocument', 
                                    ($) => abort(
                                        ['no such entry', "Brondocument"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Datum': _p_cc(
                                $.__get_entry(
                                    'Datum', 
                                    ($) => abort(
                                        ['no such entry', "Datum"]
                                    )
                                ), 
                                ($) => v_deserialize_number.deserialize(
                                    v_generic.expect_text(
                                        $, 
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    ), 
                                    ($) => abort(
                                        ['not a valid number', null]
                                    )
                                )
                            ),
                            'Regels': _p_cc(
                                $.__get_entry(
                                    'Regels', 
                                    ($) => abort(
                                        ['no such entry', "Regels"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "Location"
                                    ),
                                    'dictionary': v_generic.expect_dictionary(
                                        $, 
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($,id) => _p_cc(
                                            v_generic.expect_group(
                                                $, 
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ), 
                                            ($) => ({
                                                'Bedrag': _p_cc(
                                                    $.__get_entry(
                                                        'Bedrag', 
                                                        ($) => abort(
                                                            ['no such entry', "Bedrag"]
                                                        )
                                                    ), 
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                                'Omschrijving': _p_cc(
                                                    $.__get_entry(
                                                        'Omschrijving', 
                                                        ($) => abort(
                                                            ['no such entry', "Omschrijving"]
                                                        )
                                                    ), 
                                                    ($) => v_generic.expect_text(
                                                        $, 
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    )
                                                ),
                                                'Type': _p_cc(
                                                    $.__get_entry(
                                                        'Type', 
                                                        ($) => abort(
                                                            ['no such entry', "Type"]
                                                        )
                                                    ), 
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                            })
                                        )
                                    ),
                                })
                            ),
                            'Type': _p_cc(
                                $.__get_entry(
                                    'Type', 
                                    ($) => abort(
                                        ['no such entry', "Type"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                        })
                    )
                ),
            })
        ),
        'Verkopen': _p_cc(
            $.__get_entry(
                'Verkopen', 
                ($) => abort(
                    ['no such entry', "Verkopen"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => _p_cc(
                        v_generic.expect_group(
                            $, 
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ), 
                        ($) => ({
                            'Afhandeling': _p_cc(
                                $.__get_entry(
                                    'Afhandeling', 
                                    ($) => abort(
                                        ['no such entry', "Afhandeling"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Betalingstermijn': _p_cc(
                                $.__get_entry(
                                    'Betalingstermijn', 
                                    ($) => abort(
                                        ['no such entry', "Betalingstermijn"]
                                    )
                                ), 
                                ($) => v_deserialize_number.deserialize(
                                    v_generic.expect_text(
                                        $, 
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    ), 
                                    ($) => abort(
                                        ['not a valid number', null]
                                    )
                                )
                            ),
                            'BTW-periode': _p_cc(
                                $.__get_entry(
                                    'BTW-periode', 
                                    ($) => abort(
                                        ['no such entry', "BTW-periode"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "LOC"
                                    ),
                                    'key': v_generic.expect_text(
                                        $, 
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    ),
                                })
                            ),
                            'Brondocument': _p_cc(
                                $.__get_entry(
                                    'Brondocument', 
                                    ($) => abort(
                                        ['no such entry', "Brondocument"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Debiteur': _p_cc(
                                $.__get_entry(
                                    'Debiteur', 
                                    ($) => abort(
                                        ['no such entry', "Debiteur"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "LOC"
                                    ),
                                    'key': v_generic.expect_text(
                                        $, 
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    ),
                                })
                            ),
                            'Contracttype': _p_cc(
                                $.__get_entry(
                                    'Contracttype', 
                                    ($) => abort(
                                        ['no such entry', "Contracttype"]
                                    )
                                ), 
                                ($) => _p_unreachable_code_path(
                                )
                            ),
                            'Datum': _p_cc(
                                $.__get_entry(
                                    'Datum', 
                                    ($) => abort(
                                        ['no such entry', "Datum"]
                                    )
                                ), 
                                ($) => v_deserialize_number.deserialize(
                                    v_generic.expect_text(
                                        $, 
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    ), 
                                    ($) => abort(
                                        ['not a valid number', null]
                                    )
                                )
                            ),
                            'Regels': _p_cc(
                                $.__get_entry(
                                    'Regels', 
                                    ($) => abort(
                                        ['no such entry', "Regels"]
                                    )
                                ), 
                                ($) => ({
                                    'location': pdev.implement_me(
                                        "Location"
                                    ),
                                    'dictionary': v_generic.expect_dictionary(
                                        $, 
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ).__d_map(
                                        ($,id) => _p_cc(
                                            v_generic.expect_group(
                                                $, 
                                                ($) => abort(
                                                    ['expected a group', null]
                                                )
                                            ), 
                                            ($) => ({
                                                'BTW-regime': _p_cc(
                                                    $.__get_entry(
                                                        'BTW-regime', 
                                                        ($) => abort(
                                                            ['no such entry', "BTW-regime"]
                                                        )
                                                    ), 
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                                'Bedrag exclusief BTW': _p_cc(
                                                    $.__get_entry(
                                                        'Bedrag exclusief BTW', 
                                                        ($) => abort(
                                                            ['no such entry', "Bedrag exclusief BTW"]
                                                        )
                                                    ), 
                                                    ($) => v_deserialize_number.deserialize(
                                                        v_generic.expect_text(
                                                            $, 
                                                            ($) => abort(
                                                                ['expected a text', null]
                                                            )
                                                        ), 
                                                        ($) => abort(
                                                            ['not a valid number', null]
                                                        )
                                                    )
                                                ),
                                                'Contracttype': _p_cc(
                                                    $.__get_entry(
                                                        'Contracttype', 
                                                        ($) => abort(
                                                            ['no such entry', "Contracttype"]
                                                        )
                                                    ), 
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                                'Omschrijving': _p_cc(
                                                    $.__get_entry(
                                                        'Omschrijving', 
                                                        ($) => abort(
                                                            ['no such entry', "Omschrijving"]
                                                        )
                                                    ), 
                                                    ($) => v_generic.expect_text(
                                                        $, 
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    )
                                                ),
                                                'Type': _p_cc(
                                                    $.__get_entry(
                                                        'Type', 
                                                        ($) => abort(
                                                            ['no such entry', "Type"]
                                                        )
                                                    ), 
                                                    ($) => _p_unreachable_code_path(
                                                    )
                                                ),
                                            })
                                        )
                                    ),
                                })
                            ),
                        })
                    )
                ),
            })
        ),
    })
)
export const Mutaties: t_signatures.Mutaties = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Verrekenpost mutaties': _p_cc(
            $.__get_entry(
                'Verrekenpost mutaties', 
                ($) => abort(
                    ['no such entry', "Verrekenpost mutaties"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => ({
                        'location': pdev.implement_me(
                            "Location"
                        ),
                        'dictionary': v_generic.expect_dictionary(
                            $, 
                            ($) => abort(
                                ['expected a dictionary', null]
                            )
                        ).__d_map(
                            ($,id) => _p_cc(
                                v_generic.expect_group(
                                    $, 
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ), 
                                ($) => ({
                                    'Bedrag': _p_cc(
                                        $.__get_entry(
                                            'Bedrag', 
                                            ($) => abort(
                                                ['no such entry', "Bedrag"]
                                            )
                                        ), 
                                        ($) => v_deserialize_number.deserialize(
                                            v_generic.expect_text(
                                                $, 
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ), 
                                            ($) => abort(
                                                ['not a valid number', null]
                                            )
                                        )
                                    ),
                                    'Afhandeling': _p_cc(
                                        $.__get_entry(
                                            'Afhandeling', 
                                            ($) => abort(
                                                ['no such entry', "Afhandeling"]
                                            )
                                        ), 
                                        ($) => _p_unreachable_code_path(
                                        )
                                    ),
                                })
                            )
                        ),
                    })
                ),
            })
        ),
        'Bankrekening Mutatie Verwerkingen': _p_cc(
            $.__get_entry(
                'Bankrekening Mutatie Verwerkingen', 
                ($) => abort(
                    ['no such entry', "Bankrekening Mutatie Verwerkingen"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => ({
                        'location': pdev.implement_me(
                            "Location"
                        ),
                        'dictionary': v_generic.expect_dictionary(
                            $, 
                            ($) => abort(
                                ['expected a dictionary', null]
                            )
                        ).__d_map(
                            ($,id) => _p_unreachable_code_path(
                            )
                        ),
                    })
                ),
            })
        ),
        'Memoriaal boekingen': _p_cc(
            $.__get_entry(
                'Memoriaal boekingen', 
                ($) => abort(
                    ['no such entry', "Memoriaal boekingen"]
                )
            ), 
            ($) => ({
                'location': pdev.implement_me(
                    "Location"
                ),
                'dictionary': v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => ({
                        'location': pdev.implement_me(
                            "Location"
                        ),
                        'dictionary': v_generic.expect_dictionary(
                            $, 
                            ($) => abort(
                                ['expected a dictionary', null]
                            )
                        ).__d_map(
                            ($,id) => _p_cc(
                                v_generic.expect_group(
                                    $, 
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ), 
                                ($) => ({
                                    'Bedrag': _p_cc(
                                        $.__get_entry(
                                            'Bedrag', 
                                            ($) => abort(
                                                ['no such entry', "Bedrag"]
                                            )
                                        ), 
                                        ($) => v_deserialize_number.deserialize(
                                            v_generic.expect_text(
                                                $, 
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ), 
                                            ($) => abort(
                                                ['not a valid number', null]
                                            )
                                        )
                                    ),
                                    'Datum': _p_cc(
                                        $.__get_entry(
                                            'Datum', 
                                            ($) => abort(
                                                ['no such entry', "Datum"]
                                            )
                                        ), 
                                        ($) => v_deserialize_number.deserialize(
                                            v_generic.expect_text(
                                                $, 
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ), 
                                            ($) => abort(
                                                ['not a valid number', null]
                                            )
                                        )
                                    ),
                                    'Omschrijving': _p_cc(
                                        $.__get_entry(
                                            'Omschrijving', 
                                            ($) => abort(
                                                ['no such entry', "Omschrijving"]
                                            )
                                        ), 
                                        ($) => v_generic.expect_text(
                                            $, 
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                    'Grootboekrekening': _p_cc(
                                        $.__get_entry(
                                            'Grootboekrekening', 
                                            ($) => abort(
                                                ['no such entry', "Grootboekrekening"]
                                            )
                                        ), 
                                        ($) => ({
                                            'location': pdev.implement_me(
                                                "LOC"
                                            ),
                                            'key': v_generic.expect_text(
                                                $, 
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ),
                                        })
                                    ),
                                })
                            )
                        ),
                    })
                ),
            })
        ),
    })
)
export const Jaren: t_signatures.Jaren = ($,abort) => ({
    'location': pdev.implement_me(
        "Location"
    ),
    'dictionary': v_generic.expect_dictionary(
        $, 
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($,id) => _p_cc(
            v_generic.expect_group(
                $, 
                ($) => abort(
                    ['expected a group', null]
                )
            ), 
            ($) => ({
                'Afgesloten': _p_cc(
                    $.__get_entry(
                        'Afgesloten', 
                        ($) => abort(
                            ['no such entry', "Afgesloten"]
                        )
                    ), 
                    ($) => _p_unreachable_code_path(
                    )
                ),
                'Startdatum boekjaar': _p_cc(
                    $.__get_entry(
                        'Startdatum boekjaar', 
                        ($) => abort(
                            ['no such entry', "Startdatum boekjaar"]
                        )
                    ), 
                    ($) => v_deserialize_number.deserialize(
                        v_generic.expect_text(
                            $, 
                            ($) => abort(
                                ['expected a text', null]
                            )
                        ), 
                        ($) => abort(
                            ['not a valid number', null]
                        )
                    )
                ),
                'Grootboekrekeningen': _p_cc(
                    $.__get_entry(
                        'Grootboekrekeningen', 
                        ($) => abort(
                            ['no such entry', "Grootboekrekeningen"]
                        )
                    ), 
                    ($) => Grootboekrekeningen(
                        $, 
                        ($) => abort(
                            $
                        )
                    )
                ),
                'Eerste boekjaar': _p_cc(
                    $.__get_entry(
                        'Eerste boekjaar', 
                        ($) => abort(
                            ['no such entry', "Eerste boekjaar"]
                        )
                    ), 
                    ($) => Eerste_boekjaar(
                        $, 
                        ($) => abort(
                            $
                        )
                    )
                ),
                'Jaarbeheer': _p_cc(
                    $.__get_entry(
                        'Jaarbeheer', 
                        ($) => abort(
                            ['no such entry', "Jaarbeheer"]
                        )
                    ), 
                    ($) => Jaarbeheer(
                        $, 
                        ($) => abort(
                            $
                        )
                    )
                ),
                'Handelstransacties': _p_cc(
                    $.__get_entry(
                        'Handelstransacties', 
                        ($) => abort(
                            ['no such entry', "Handelstransacties"]
                        )
                    ), 
                    ($) => Handelstransacties(
                        $, 
                        ($) => abort(
                            $
                        )
                    )
                ),
                'Mutaties': _p_cc(
                    $.__get_entry(
                        'Mutaties', 
                        ($) => abort(
                            ['no such entry', "Mutaties"]
                        )
                    ), 
                    ($) => Mutaties(
                        $, 
                        ($) => abort(
                            $
                        )
                    )
                ),
            })
        )
    ),
})
export const Balans_Resultaat_Mutatie: t_signatures.Balans_Resultaat_Mutatie = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Jaar': _p_cc(
            $.__get_entry(
                'Jaar', 
                ($) => abort(
                    ['no such entry', "Jaar"]
                )
            ), 
            ($) => v_generic.expect_optional(
                $, 
                ($) => abort(
                    ['expected an optional', null]
                )
            ).__o_map(
                ($) => ({
                    'location': pdev.implement_me(
                        "LOC"
                    ),
                    'key': v_generic.expect_text(
                        $, 
                        ($) => abort(
                            ['expected a text', null]
                        )
                    ),
                })
            )
        ),
        'type': _p_cc(
            $.__get_entry(
                'type', 
                ($) => abort(
                    ['no such entry', "type"]
                )
            ), 
            ($) => _p_unreachable_code_path(
            )
        ),
    })
)
export const Eerste_boekjaar: t_signatures.Eerste_boekjaar = ($,abort) => _p_unreachable_code_path(
)
export const Root: t_signatures.Root = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'Fiscaal': _p_cc(
            $.__get_entry(
                'Fiscaal', 
                ($) => abort(
                    ['no such entry', "Fiscaal"]
                )
            ), 
            ($) => Fiscaal(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'Categorieen': _p_cc(
            $.__get_entry(
                'Categorieen', 
                ($) => abort(
                    ['no such entry', "Categorieen"]
                )
            ), 
            ($) => Grootboek_Categorieen(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'Beheer': _p_cc(
            $.__get_entry(
                'Beheer', 
                ($) => abort(
                    ['no such entry', "Beheer"]
                )
            ), 
            ($) => Beheer(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'Jaren': _p_cc(
            $.__get_entry(
                'Jaren', 
                ($) => abort(
                    ['no such entry', "Jaren"]
                )
            ), 
            ($) => Jaren(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
    })
)
