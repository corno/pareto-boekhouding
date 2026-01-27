import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import * as _pds from 'pareto-core/dist/deserializer'

namespace _psh {

    const depth = 1

    export const get_location = (): d_token._T_Range => ({
        'start': {
            'absolute': -1,
            'relative': {
                'column': _pds.natural.source_column(depth),
                'line': _pds.natural.source_line(depth),
            },
        },
        'end': {
            'absolute': -1,
            'relative': {
                'column': _pds.natural.source_column(depth),
                'line': _pds.natural.source_line(depth),
            },
        },
        // 'uri': _pds.text.source_file(depth)
    })

    export type Raw_Or_Normal_Dictionary<T> = { [id: string]: T } | _pi.Dictionary<T>
    export type Raw_Or_Normal_List<T> = T[] | _pi.List<T>
    export type Raw_Dictionary<T> = { [id: string]: T }

    export type Reference_To_Normal_Dictionary_Entry<G_Source, T_Dictionary_Entry> = {
        readonly 'key': string
        readonly 'location': G_Source
    }

    export type Reference_To_Stacked_Dictionary_Entry<G_Source, T_Dictionary_Entry> = {
        readonly 'key': string
        readonly 'location': G_Source
    }

    export type Dictionary<G_Source, T_D> = {
        readonly 'dictionary': _pi.Dictionary<{
            readonly 'entry': T_D
            readonly 'location': G_Source
        }>
        readonly 'location': G_Source
    }

    export type List<G_Source, T_L> = {
        readonly 'list': _pi.List<{
            readonly 'element': T_L
            readonly 'location': G_Source
        }>
        readonly 'location': G_Source
    }


    export const wrap_dictionary = <T>(
        $: Raw_Or_Normal_Dictionary<T>,
    ): Dictionary<d_token._T_Range, T> => {
        const location = get_location()
        function is_normal($: Raw_Or_Normal_Dictionary<T>): $ is _pi.Dictionary<T> {
            return $.__get_number_of_entries !== undefined && typeof $.__get_number_of_entries === "function"
        }
        if (is_normal($)) {
            return {
                'location': location,
                'dictionary': $.__d_map(($) => ({
                    'location': location,
                    'entry': $,
                }))
            }
        } else {
            return {
                'location': location,
                'dictionary': _p.dictionary.literal($).__d_map(($) => ({
                    'location': location,
                    'entry': $,
                }))
            }
        }
    }

    // export const wrap_list = <T>(
    //     $: Raw_Or_Normal_List<T>,
    // ): List<_pi.Deprecated_Source_Location, T> => {
    //     const location = _pinternals.get_location_info(depth)
    //     const decorated: _pi.List<T> = $ instanceof Array
    //         ? _pinternals.list.literal($)
    //         : $

    //     if (!(decorated.__for_each instanceof Function)) {
    //         throw new Error("invalid input in 'wrap_list'")
    //     }
    //     return {
    //         'location': location,
    //         'list': decorated.__d_map(($) => ({
    //             'location': location,
    //             'element': $,
    //         }))
    //     }
    // }

    export const wrap_state_group = <T>(
        $: T,
    ) => ({
        'location': get_location(),
        'state group': $,
    })

    export const wrap_reference = <T>(
        $: string,
    ): Reference_To_Normal_Dictionary_Entry<d_token._T_Range, T> => ({
        'location': get_location(),
        'key': $,
    })

    export const wrap_stack_reference = <T>(
        name: string,
    ): Reference_To_Stacked_Dictionary_Entry<d_token._T_Range, T> => {
        return {
            'location': get_location(),
            'key': name,
        }
    }
}

import * as d_token from "../../../../../interface/generated/liana/generic/token"

import * as d_out from "../../../../../interface/generated/liana/schemas/boekhouding/data"
import * as d_signatures from "../../../../../interface/signatures/transformers/boekhouding/oude_model"

export const Beheer: d_signatures.Beheer = ($) => ({
    'BTW-categorieen': _psh.wrap_dictionary(_p.deprecated_cc($.Beheer['BTW-categorieen'], ($) => $.__d_map(($): d_out.Beheer.BTW$mi_categorieen.D<d_token._T_Range> => ({
        'BTW-heffing': _p.deprecated_cc($['BTW-heffing'], ($) => _p.deprecated_cc($, ($): d_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing<d_token._T_Range> => {
            switch ($[0]) {
                case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', ({
                    'BTW-promillage': _p.deprecated_cc($['BTW-promillage'], ($) => $),
                })]))
                case 'Nee': return _p.ss($, ($) => _pdev.implement_me("SDFS"))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Gebruikers': _psh.wrap_dictionary(_p.deprecated_cc($.Beheer['Gebruikers'], ($) => $.__d_map(($) => ({
        'Volledige naam': _p.deprecated_cc($['Volledige naam'], ($) => $),
        'Wachtwoord': _p.deprecated_cc($['Wachtwoord'], ($) => $),
    })))),
    'Grootboekrekeningen': _p.deprecated_cc($, ($): d_out.Beheer.Grootboekrekeningen<d_token._T_Range> => ({
        'Balans': _psh.wrap_dictionary(_p.deprecated_cc($.Beheer['Balans'].Grootboekrekeningen, ($) => $.__d_map(($) => ({
            'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($) => _psh.wrap_reference($)),
            'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($) => _psh.wrap_reference($)),
            'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): d_out.Beheer.Grootboekrekeningen.Balans.D.Zijde<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Activa': return _p.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                    case 'Passiva': return _p.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Resultaat': _psh.wrap_dictionary(_p.deprecated_cc($.Beheer['Resultaat'].Grootboekrekeningen, ($) => $.__d_map(($) => ({
            'Hoofdcategorie': _p.deprecated_cc($['Hoofdcategorie'], ($) => _psh.wrap_reference($)),
            'Subcategorie': _p.deprecated_cc($['Subcategorie'], ($) => _psh.wrap_reference($)),
            'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): d_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Kosten': return _p.ss($, ($) => _psh.wrap_state_group(['Kosten', ({
                        'Correctie op vennootschapsbelasting': _p.deprecated_cc($['Correctie op vennootschapsbelasting'], ($) => _p.deprecated_cc($, ($): d_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting<d_token._T_Range> => {
                            switch ($[0]) {
                                case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', ({
                                    'Correctietype': _p.deprecated_cc($['Correctietype'], ($) => _psh.wrap_reference($)),
                                })]))
                                case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', null]))
                                default: return _p.au($[0])
                            }
                        })),
                    })]))
                    case 'Opbrengsten': return _p.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
    })),
    'Klanten': _psh.wrap_dictionary(_p.deprecated_cc($['Klanten'], ($) => $.__d_map(($) => ({
        'Licentieovereenkomsten': _p.deprecated_cc($['Licentieovereenkomsten'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            'Periodes': _p.deprecated_cc($['Periodes'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
            })))),
        })))),
        'Projecten': _p.deprecated_cc($['Projecten'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            'Offertes': _p.deprecated_cc($['Offertes'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
                'Opbrengsten': _p.deprecated_cc($['Opbrengsten'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
                    'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): d_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type<d_token._T_Range> => {
                        switch ($[0]) {
                            case 'Project': return _p.ss($, ($) => _psh.wrap_state_group(['Project', ({
                                'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
                                'Betaaldatum': _p.deprecated_cc($['Betaaldatum'], ($) => $),
                            })]))
                            default: return _p.au($[0])
                        }
                    })),
                })))),
            })))),
        })))),
    })))),
    'Leveranciers': _psh.wrap_dictionary(_p.deprecated_cc($['Leveranciers'], ($) => $.__d_map(($) => null))),
    'Medewerkers': _psh.wrap_dictionary(_p.deprecated_cc($['Medewerkers'], ($) => $.__d_map(($) => null))),
    'Rekeningen': _p.deprecated_cc($, ($) => ({
        'Bank': _p.deprecated_cc($.Bankrekeningen, ($) => _psh.wrap_dictionary($.__d_map(($) => null))),
        'Informeel': _p.deprecated_cc($['Informele rekeningen'], ($) => _psh.wrap_dictionary($.__d_map(($) => null))),
    })),
})
export const Eerste_boekjaar: d_signatures.Eerste_boekjaar = ($) => _p.deprecated_cc($, ($): d_out.Eerste_boekjaar<d_token._T_Range> => {
    switch ($[0]) {
        case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
        case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', ({
            'Vorig boekjaar': _p.deprecated_cc($['Vorig boekjaar'], ($) => _psh.wrap_reference($)),
        })]))
        default: return _p.au($[0])
    }
})
export const Fiscaal: d_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _p.deprecated_cc($.Beheer.Balans['Hoofdcategorieen fiscus'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
        'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.__d_map(($) => null))),
        'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): d_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                case 'Passiva': return _p.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Resultaat Hoofdcategorieen': _psh.wrap_dictionary(_p.deprecated_cc($.Beheer.Resultaat['Hoofdcategorieen fiscus'], ($) => $.__d_map(($) => ({
        'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.__d_map(($) => null))),
        'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): d_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => _psh.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _p.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
})
export const Grootboek_Categorieen: d_signatures.Grootboek_Categorieen = ($) => ({
    'Balans': _p.deprecated_cc($.Beheer.Balans.Hoofdcategorieen, ($) => _psh.wrap_dictionary($.__d_map(($) => ({
        'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($) => _psh.wrap_reference($)),
            'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($) => _psh.wrap_reference($)),
        })))),
        'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): d_out.Grootboek_Categorieen.Balans.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                case 'Passiva': return _p.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Correctietypes vennootschapsbelasting': _p.deprecated_cc($.Beheer.Resultaat['Correctietypes vennootschapsbelasting'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
        'Te corrigeren promillage': _p.deprecated_cc($['Te corrigeren promillage'], ($) => $),
    })))),
    'Resultaat': _p.deprecated_cc($.Beheer['Resultaat'].Hoofdcategorieen, ($) => _psh.wrap_dictionary($.__d_map(($) => ({
        'Subcategorieen': _p.deprecated_cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            'Hoofdcategorie fiscus': _p.deprecated_cc($['Hoofdcategorie fiscus'], ($) => _psh.wrap_reference($)),
            'Subcategorie fiscus': _p.deprecated_cc($['Subcategorie fiscus'], ($) => _psh.wrap_reference($)),
        })))),
        'Zijde': _p.deprecated_cc($['Zijde'], ($) => _p.deprecated_cc($, ($): d_out.Grootboek_Categorieen.Resultaat.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => _psh.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _p.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
})
export const Grootboekrekeningen: d_signatures.Grootboekrekeningen = ($) => ({
    'Balans': _p.deprecated_cc($['Balans grootboekrekeningen'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
        'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): d_out.Grootboekrekeningen.Balans.D.Type<d_token._T_Range> => {
            switch ($[0]) {
                case 'Bankrekening': return _p.ss($, ($) => _psh.wrap_state_group(['Bankrekening', null]))
                case 'Informele rekening': return _p.ss($, ($) => _psh.wrap_state_group(['Informele rekening', null]))
                case 'Overig': return _p.ss($, ($) => _psh.wrap_state_group(['Overig', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Resultaat': _p.deprecated_cc($['Resultaat grootboekrekeningen'], ($) => _psh.wrap_dictionary($.__d_map(($) => null))),
})
export const Handelstransacties: d_signatures.Handelstransacties = ($) => ({
    'Inkopen': _p.deprecated_cc($['Inkopen'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
        'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Inkopen.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => _psh.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _p.ss($, ($) => _psh.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Inkopen.D.BTW$mi_regime<d_token._T_Range> => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _p.ss($, ($) => _psh.wrap_state_group(['Binnenland: heffing verlegd', null]))
                case 'Geen BTW van toepassing': return _p.ss($, ($) => _psh.wrap_state_group(['Geen BTW van toepassing', null]))
                case 'Import van buiten de EU': return _p.ss($, ($) => _psh.wrap_state_group(['Import van buiten de EU', null]))
                case 'Intracommunautair': return _p.ss($, ($) => _psh.wrap_state_group(['Intracommunautair', null]))
                case 'Standaard': return _p.ss($, ($) => _psh.wrap_state_group(['Standaard', ({
                    'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Brondocument': _p.deprecated_cc($['Brondocument'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Inkopen.D.Brondocument<d_token._T_Range> => {
            switch ($[0]) {
                case 'Niet van toepassing': return _p.ss($, ($) => _psh.wrap_state_group(['Niet van toepassing', null]))
                case 'Ontbreekt': return _p.ss($, ($) => _psh.wrap_state_group(['Ontbreekt', null]))
                case 'Toegevoegd': return _p.ss($, ($) => _psh.wrap_state_group(['Toegevoegd', ({
                    'Document': _p.deprecated_cc($['Document'], ($) => $),
                })]))
                case 'Nog toevoegen': return _p.ss($, ($) => _psh.wrap_state_group(['Ontbreekt', null]))//FIXME!!!!
                default: return _p.au($[0])
            }
        })),
        'Datum': _p.deprecated_cc($['Datum'], ($) => $),
        'Regels': _p.deprecated_cc($['Regels'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Bekend': return _p.ss($, ($) => _psh.wrap_state_group(['Bekend', ({
                        'BTW-bedrag': _p.deprecated_cc($['BTW-bedrag'], ($) => $),
                        'Bedrag inclusief geheven BTW': _p.deprecated_cc($['Bedrag inclusief geheven BTW'], ($) => $),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
            'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Inkopen.D.Regels.D.Type<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', ({
                        'Balans item': _p.deprecated_cc($['Balans item'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Kosten': return _p.ss($, ($) => _psh.wrap_state_group(['Kosten', ({
                        'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Inkopen.D.Type<d_token._T_Range> => {
            switch ($[0]) {
                case 'Bonnetje': return _p.ss($, ($) => _psh.wrap_state_group(['Bonnetje', null]))
                case 'Inkoop (met crediteur)': return _p.ss($, ($) => _psh.wrap_state_group(['Inkoop (met crediteur)', ({
                    'Crediteur': _p.deprecated_cc($['Crediteur'], ($) => _psh.wrap_reference($)),
                    'Factuurnummer': _p.deprecated_cc($['Factuurnummer'], ($) => $),
                })]))
                case 'Loonheffing': return _p.ss($, ($) => _psh.wrap_state_group(['Loonheffing', ({
                    'Ronde': _p.deprecated_cc($['Ronde'], ($) => _psh.wrap_reference($)),
                })]))
                case 'Salaris': return _p.ss($, ($) => _psh.wrap_state_group(['Salaris', ({
                    'Medewerker': _p.deprecated_cc($['Medewerker'], ($) => _psh.wrap_reference($)),
                    'Ronde': _p.deprecated_cc($['Ronde'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Verkopen': _p.deprecated_cc($['Verkopen'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
        'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Verkopen.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => _psh.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _p.ss($, ($) => _psh.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _p.deprecated_cc($['Rekening courant'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'BTW-periode': _p.deprecated_cc($['BTW-periode'], ($) => _psh.wrap_reference($)),
        'Betalingstermijn': _p.deprecated_cc($['Betalingstermijn'], ($) => $),
        'Brondocument': _p.deprecated_cc($['Brondocument'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Verkopen.D.Brondocument<d_token._T_Range> => {
            switch ($[0]) {
                case 'Toegevoegd': return _p.ss($, ($) => _psh.wrap_state_group(['Toegevoegd', ({
                    'Document': _p.deprecated_cc($['Document'], ($) => $),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Contracttype': _p.deprecated_cc($['Contracttype'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Verkopen.D.Contracttype<d_token._T_Range> => {
            switch ($[0]) {
                case 'Licentieovereenkomst': return _p.ss($, ($) => _psh.wrap_state_group(['Licentieovereenkomst', ({
                    'Overeenkomst': _p.deprecated_cc($['Overeenkomst'], ($) => _psh.wrap_reference($)),
                })]))
                case 'Project': return _p.ss($, ($) => _psh.wrap_state_group(['Project', ({
                    'Offerte': _p.deprecated_cc($['Offerte'], ($) => _psh.wrap_reference($)),
                    'Project': _p.deprecated_cc($['Project'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Datum': _p.deprecated_cc($['Datum'], ($) => $),
        'Debiteur': _p.deprecated_cc($['Debiteur'], ($) => _psh.wrap_reference($)),
        'Regels': _p.deprecated_cc($['Regels'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            'BTW-regime': _p.deprecated_cc($['BTW-regime'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _p.ss($, ($) => _psh.wrap_state_group(['Binnenland: heffing verlegd', null]))
                    case 'Intracommunautair': return _p.ss($, ($) => _psh.wrap_state_group(['Intracommunautair', null]))
                    case 'Standaard': return _p.ss($, ($) => _psh.wrap_state_group(['Standaard', ({
                        'BTW-categorie': _p.deprecated_cc($['BTW-categorie'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Bedrag exclusief BTW': _p.deprecated_cc($['Bedrag exclusief BTW'], ($) => $),
            'Contracttype': _p.deprecated_cc($['Contracttype'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Licentieovereenkomst': return _p.ss($, ($) => _psh.wrap_state_group(['Licentieovereenkomst', ({
                        'Periode': _p.deprecated_cc($['Periode'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Los': return _p.ss($, ($) => _psh.wrap_state_group(['Los', null]))
                    case 'Project': return _p.ss($, ($) => _psh.wrap_state_group(['Project', ({
                        'Opbrengst': _p.deprecated_cc($['Opbrengst'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
            'Type': _p.deprecated_cc($['Type'], ($) => _p.deprecated_cc($, ($): d_out.Handelstransacties.Verkopen.D.Regels.D.Type<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', ({
                        'Balans item': _p.deprecated_cc($['Balans item'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Opbrengsten': return _p.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', ({
                        'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
    })))),
})
export const Jaarbeheer: d_signatures.Jaarbeheer = ($) => ({
    'Balans': _p.deprecated_cc($, ($) => ({
        'Bankrekeningen': _p.deprecated_cc($['Bankrekeningen'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
            'Mutaties': _p.deprecated_cc($['Mutaties'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
                'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
                'Datum': _p.deprecated_cc($['Datum'], ($) => $),
                'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
            })))),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => _p.deprecated_cc($, ($): d_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
                    case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                        'Rekening': _p.deprecated_cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                            $,
                        )),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Beginsaldo nog aan te geven BTW': _p.deprecated_cc($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': _p.deprecated_cc($['Beginsaldo winstreserve'], ($) => $),
        'Grootboekrekening voor Inkoop saldo': _p.deprecated_cc($['Inkoop saldo'].Grootboekrekening, ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor Verkoop saldo': _p.deprecated_cc($['Verkoop saldo'].Grootboekrekening, ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor nog aan te geven BTW': _p.deprecated_cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor resultaat dit jaar': _p.deprecated_cc($['Grootboekrekening voor resultaat dit jaar'], ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor winstreserve': _p.deprecated_cc($['Grootboekrekening voor winstreserve'], ($) => _psh.wrap_reference($)),
        'Informele rekeningen': _p.deprecated_cc($['Informele rekeningen'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            'Beginsaldo': _p.deprecated_cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
            'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => _p.deprecated_cc($, ($): d_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
                    case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                        'Rekening': _p.deprecated_cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                            $,
                        )),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Overige balans items': _p.deprecated_cc($['Overige balans items'], ($) => _psh.wrap_dictionary($.__d_map(($) => Overige_balans_item(
            $,
        )))),
        'Verrekenposten': _p.deprecated_cc($['Verrekenposten'], ($) => _psh.wrap_dictionary($.__d_map(($) => null))),
    })),
    'Resultaat': _p.deprecated_cc($, ($) => ({
        'BTW periodes': _p.deprecated_cc($['BTW periodes'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
            '1. BTW-categorieen': _p.deprecated_cc($['1. BTW-categorieen'], ($) => _psh.wrap_dictionary($.__d_map(($) => null))),
            'Documenten': _p.deprecated_cc($['Documenten'], ($) => _psh.wrap_dictionary($.__d_map(($) => ({
                'Bestand': _p.deprecated_cc($['Bestand'], ($) => $),
            })))),
            'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
            'Status': _p.deprecated_cc($['Status'], ($) => _p.deprecated_cc($, ($): d_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Aangegeven': return _p.ss($, ($) => _psh.wrap_state_group(['Aangegeven', ({
                        'Afronding': _p.deprecated_cc($['Afronding'], ($) => $),
                        'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
                        'Datum': _p.deprecated_cc($['Datum'], ($) => $),
                    })]))
                    case 'Openstaand': return _p.ss($, ($) => _psh.wrap_state_group(['Openstaand', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Grootboekrekening voor BTW afrondingen': _p.deprecated_cc($['Grootboekrekening voor BTW afrondingen'], ($) => _psh.wrap_reference($)),
        'Salarisrondes': _p.deprecated_cc($['Salarisrondes'], ($) => _psh.wrap_dictionary($.__d_map(($) => null))),
    })),
})
export const Jaren: d_signatures.Jaren = ($) => _psh.wrap_dictionary($.Jaren.__d_map(($, id) => ({
    'Afgesloten': _p.deprecated_cc($['Afgesloten'], ($) => _p.deprecated_cc($, ($): d_out.Jaren.D.Afgesloten<d_token._T_Range> => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
            case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', null]))
            default: return _p.au($[0])
        }
    })),
    'Eerste boekjaar': _p.deprecated_cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
    )),
    'Grootboekrekeningen': _p.deprecated_cc($, ($) => Grootboekrekeningen(
        $,
    )),
    'Handelstransacties': _p.deprecated_cc($, ($) => Handelstransacties(
        $,
    )),
    'Jaarbeheer': _p.deprecated_cc($, ($) => Jaarbeheer(
        $,
    )),
    'Mutaties': _p.deprecated_cc($, ($) => Mutaties(
        $,
        {
            'jaar': key,
        }
    )),
    'Startdatum boekjaar': _p.deprecated_cc($['Startdatum boekjaar'], ($) => $),
})))
export const Mutaties: d_signatures.Mutaties = ($, $p) => ({
    'Bankrekening Mutatie Verwerkingen': _p.deprecated_cc($.Bankrekeningen, ($) => _psh.wrap_dictionary($.__d_map(($) => _psh.wrap_dictionary(_p.dictionary.filter($.Mutaties, ($) => _p.deprecated_cc($.Status, ($): _pi.Optional_Value<d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range>> => {
        switch ($[0]) {
            case 'Nog te verwerken': return _p.ss($, ($) => _p.optional.not_set())
            case 'Verwerkt': return _p.ss($, ($) => _p.optional.set(_p.deprecated_cc($.Afhandeling, ($): d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Informele rekening': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Informele rekening', ({
                        'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($) => _psh.wrap_reference($)),
                    })])]))

                    case 'Verrekenpost': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Verrekenpost', ({
                        'Verrekenpost': _p.deprecated_cc($['Verrekenpost'], ($) => _psh.wrap_reference($)),
                    })])]))

                    case 'BTW-periode': return _p.ss($, ($): d_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range> => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.optional.not_set()
                            : _p.optional.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['BTW-periode', _psh.wrap_reference($['BTW-periode'])])
                    }]))
                    case 'Inkoop': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.optional.not_set()
                            : _p.optional.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['Inkoop', _psh.wrap_reference($['Inkoop'])])
                    }]))
                    case 'Verkoop': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.optional.not_set()
                            : _p.optional.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['Verkoop', _psh.wrap_reference($['Verkoop'])])
                    }]))
                    default: return _p.au($[0])
                }
            })))
            default: return _p.au($[0])
        }
    })))))),
    'Memoriaal boekingen': _p.deprecated_cc($['Overige balans items'], ($) => _psh.wrap_dictionary($.__d_map(($) => _psh.wrap_dictionary($['Memoriaal boekingen'].__d_map(($) => ({
        'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
        'Datum': _p.deprecated_cc($['Datum'], ($) => $),
        'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
        'Omschrijving': _p.deprecated_cc($['Omschrijving'], ($) => $),
    })))))),
    'Verrekenpost mutaties': _p.deprecated_cc($.Verrekenposten, ($) => _psh.wrap_dictionary($.__d_map(($) => _psh.wrap_dictionary($.Mutaties.__d_map(($) => ({
        'Afhandeling': _p.deprecated_cc($['Afhandeling'], ($) => _p.deprecated_cc($, ($): d_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Informele rekening': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Informele rekening', ({
                    'Informele rekening': _p.deprecated_cc($['Informele rekening'], ($) => _psh.wrap_reference($)),
                })])]))

                case 'BTW-periode': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.not_set()
                        : _p.optional.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['BTW-periode', _psh.wrap_reference($['BTW-periode'])])
                }]))
                case 'Inkoop': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.not_set()
                        : _p.optional.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['Inkoop', _psh.wrap_reference($['Inkoop'])])
                }]))
                case 'Verkoop': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.optional.not_set()
                        : _p.optional.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['Verkoop', _psh.wrap_reference($['Verkoop'])])
                }]))
                default: return _p.au($[0])
            }
        })),
        'Bedrag': _p.deprecated_cc($['Bedrag'], ($) => $),
    })))))),
})
export const Overige_balans_item: d_signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _p.deprecated_cc($, ($) => $.Beginsaldo),
    'Grootboekrekening': _p.deprecated_cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
    'Nieuw': _p.deprecated_cc($['Nieuw'], ($) => _p.deprecated_cc($, ($): d_out.Overige_balans_item.Nieuw<d_token._T_Range> => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
            case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                'Balans item': _p.deprecated_cc($['Balans item'], ($) => _psh.wrap_reference($)),
            })]))
            default: return _p.au($[0])
        }
    })),
})
export const Root: d_signatures.Root = ($) => ({
    'Beheer': _p.deprecated_cc($, ($) => Beheer(
        $,
    )),
    'Categorieen': _p.deprecated_cc($, ($) => Grootboek_Categorieen(
        $,
    )),
    'Fiscaal': _p.deprecated_cc($, ($) => Fiscaal(
        $,
    )),
    'Jaren': _p.deprecated_cc($, ($) => Jaren(
        $,
    )),
})
export const Verwijzing_naar_Bankrekening: d_signatures.Verwijzing_naar_Bankrekening = ($) => _psh.wrap_reference($)
export const Verwijzing_naar_Informele_rekening: d_signatures.Verwijzing_naar_Informele_rekening = ($) => _psh.wrap_reference($)
