import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

namespace _psh {

    const depth = 1

    export const get_location = (): d_token._T_Range => {
        const loc = _pinternals.get_location_info(depth)
        return {
            'start': {
                'absolute': -1,
                'relative': {
                    'column': loc.column,
                    'line': loc.line,
                },
            },
            'end': {
                'absolute': -1,
                'relative': {
                    'column': loc.column,
                    'line': loc.line,
                },
            },
            'uri': loc.file
        }
    }

    export type Raw_Or_Normal_Dictionary<T> = { [key: string]: T } | _pi.Dictionary<T>
    export type Raw_Or_Normal_List<T> = T[] | _pi.List<T>
    export type Raw_Dictionary<T> = { [key: string]: T }

    export type Reference_To_Normal_Dictionary_Entry<G_Source, T_Dictionary_Entry> = {
        readonly 'key': string
        readonly 'location': G_Source
    }

    export type Reference_To_Stacked_Dictionary_Entry<G_Source, T_Dictionary_Entry> = {
        readonly 'key': string
        readonly 'location': G_Source
    }

    export const to_raw_array = <T>($: _pi.List<T>): readonly T[] => $.__get_raw_copy()


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
            return $.get_number_of_entries !== undefined && typeof $.get_number_of_entries === "function"
        }
        if (is_normal($)) {
            return {
                'location': location,
                'dictionary': $.map(($) => ({
                    'location': location,
                    'entry': $,
                }))
            }
        } else {
            return {
                'location': location,
                'dictionary': _pinternals.dictionary_literal($).map(($) => ({
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
    //         ? _pinternals.list_literal($)
    //         : $

    //     if (!(decorated.__for_each instanceof Function)) {
    //         throw new Error("invalid input in 'wrap_list'")
    //     }
    //     return {
    //         'location': location,
    //         'list': decorated.map(($) => ({
    //             'location': location,
    //             'element': $,
    //         }))
    //     }
    // }

    export const wrap_state_group = <T>(
        $: T,
    ) => {
        return {
            'location': get_location(),
            'state group': $,
        }
    }

    export const wrap_reference = <T>(
        $: string,
    ): Reference_To_Normal_Dictionary_Entry<d_token._T_Range, T> => {
        return {
            'location': get_location(),
            'key': $,
        }
    }

    export const wrap_stack_reference = <T>(
        name: string,
    ): Reference_To_Stacked_Dictionary_Entry<d_token._T_Range, T> => {
        return {
            'location': get_location(),
            'key': name,
        }
    }
}

import * as d_token from "../../../../../interface/generated/pareto/core/token"

import * as _i_out from "../../../../../interface/generated/pareto/schemas/boekhouding/data_types/target"
import * as _i_signatures from "../../../../../interface/signatures/transformers/boekhouding/oude_model"

export const Beheer: _i_signatures.Beheer = ($) => ({
    'BTW-categorieen': _psh.wrap_dictionary(_pt.cc($.Beheer['BTW-categorieen'], ($) => $.map(($): _i_out.Beheer.BTW$mi_categorieen.D<d_token._T_Range> => ({
        'BTW-heffing': _pt.cc($['BTW-heffing'], ($) => _pt.cc($, ($): _i_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing<d_token._T_Range> => {
            switch ($[0]) {
                case 'Ja': return _pt.ss($, ($) => _psh.wrap_state_group(['Ja', ({
                    'BTW-promillage': _pt.cc($['BTW-promillage'], ($) => $),
                })]))
                case 'Nee': return _pt.ss($, ($) => _pinternals.panic("SDFS"))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Gebruikers': _psh.wrap_dictionary(_pt.cc($.Beheer['Gebruikers'], ($) => $.map(($) => ({
        'Volledige naam': _pt.cc($['Volledige naam'], ($) => $),
        'Wachtwoord': _pt.cc($['Wachtwoord'], ($) => $),
    })))),
    'Grootboekrekeningen': _pt.cc($, ($): _i_out.Beheer.Grootboekrekeningen<d_token._T_Range> => ({
        'Balans': _psh.wrap_dictionary(_pt.cc($.Beheer['Balans'].Grootboekrekeningen, ($) => $.map(($) => ({
            'Hoofdcategorie': _pt.cc($['Hoofdcategorie'], ($) => _psh.wrap_reference($)),
            'Subcategorie': _pt.cc($['Subcategorie'], ($) => _psh.wrap_reference($)),
            'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Balans.D.Zijde<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Activa': return _pt.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                    case 'Passiva': return _pt.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Resultaat': _psh.wrap_dictionary(_pt.cc($.Beheer['Resultaat'].Grootboekrekeningen, ($) => $.map(($) => ({
            'Hoofdcategorie': _pt.cc($['Hoofdcategorie'], ($) => _psh.wrap_reference($)),
            'Subcategorie': _pt.cc($['Subcategorie'], ($) => _psh.wrap_reference($)),
            'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Kosten': return _pt.ss($, ($) => _psh.wrap_state_group(['Kosten', ({
                        'Correctie op vennootschapsbelasting': _pt.cc($['Correctie op vennootschapsbelasting'], ($) => _pt.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting<d_token._T_Range> => {
                            switch ($[0]) {
                                case 'Ja': return _pt.ss($, ($) => _psh.wrap_state_group(['Ja', ({
                                    'Correctietype': _pt.cc($['Correctietype'], ($) => _psh.wrap_reference($)),
                                })]))
                                case 'Nee': return _pt.ss($, ($) => _psh.wrap_state_group(['Nee', null]))
                                default: return _pt.au($[0])
                            }
                        })),
                    })]))
                    case 'Opbrengsten': return _pt.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', null]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
    })),
    'Klanten': _psh.wrap_dictionary(_pt.cc($['Klanten'], ($) => $.map(($) => ({
        'Licentieovereenkomsten': _pt.cc($['Licentieovereenkomsten'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Periodes': _pt.cc($['Periodes'], ($) => _psh.wrap_dictionary($.map(($) => ({
                'Bedrag': _pt.cc($['Bedrag'], ($) => $),
            })))),
        })))),
        'Projecten': _pt.cc($['Projecten'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Offertes': _pt.cc($['Offertes'], ($) => _psh.wrap_dictionary($.map(($) => ({
                'Opbrengsten': _pt.cc($['Opbrengsten'], ($) => _psh.wrap_dictionary($.map(($) => ({
                    'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type<d_token._T_Range> => {
                        switch ($[0]) {
                            case 'Project': return _pt.ss($, ($) => _psh.wrap_state_group(['Project', ({
                                'Bedrag': _pt.cc($['Bedrag'], ($) => $),
                                'Betaaldatum': _pt.cc($['Betaaldatum'], ($) => $),
                            })]))
                            default: return _pt.au($[0])
                        }
                    })),
                })))),
            })))),
        })))),
    })))),
    'Leveranciers': _psh.wrap_dictionary(_pt.cc($['Leveranciers'], ($) => $.map(($) => null))),
    'Medewerkers': _psh.wrap_dictionary(_pt.cc($['Medewerkers'], ($) => $.map(($) => null))),
    'Rekeningen': _pt.cc($, ($) => ({
        'Bank': _pt.cc($.Bankrekeningen, ($) => _psh.wrap_dictionary($.map(($) => null))),
        'Informeel': _pt.cc($['Informele rekeningen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
    })),
})
export const Eerste_boekjaar: _i_signatures.Eerste_boekjaar = ($) => _pt.cc($, ($): _i_out.Eerste_boekjaar<d_token._T_Range> => {
    switch ($[0]) {
        case 'Ja': return _pt.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
        case 'Nee': return _pt.ss($, ($) => _psh.wrap_state_group(['Nee', ({
            'Vorig boekjaar': _pt.cc($['Vorig boekjaar'], ($) => _psh.wrap_reference($)),
        })]))
        default: return _pt.au($[0])
    }
})
export const Fiscaal: _i_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _pt.cc($.Beheer.Balans['Hoofdcategorieen fiscus'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _pt.cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
        'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Activa': return _pt.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                case 'Passiva': return _pt.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Resultaat Hoofdcategorieen': _psh.wrap_dictionary(_pt.cc($.Beheer.Resultaat['Hoofdcategorieen fiscus'], ($) => $.map(($) => ({
        'Subcategorieen': _pt.cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
        'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Kosten': return _pt.ss($, ($) => _psh.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _pt.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
})
export const Grootboek_Categorieen: _i_signatures.Grootboek_Categorieen = ($) => ({
    'Balans': _pt.cc($.Beheer.Balans.Hoofdcategorieen, ($) => _psh.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _pt.cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Hoofdcategorie fiscus': _pt.cc($['Hoofdcategorie fiscus'], ($) => _psh.wrap_reference($)),
            'Subcategorie fiscus': _pt.cc($['Subcategorie fiscus'], ($) => _psh.wrap_reference($)),
        })))),
        'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Grootboek_Categorieen.Balans.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Activa': return _pt.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                case 'Passiva': return _pt.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Correctietypes vennootschapsbelasting': _pt.cc($.Beheer.Resultaat['Correctietypes vennootschapsbelasting'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Te corrigeren promillage': _pt.cc($['Te corrigeren promillage'], ($) => $),
    })))),
    'Resultaat': _pt.cc($.Beheer['Resultaat'].Hoofdcategorieen, ($) => _psh.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _pt.cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Hoofdcategorie fiscus': _pt.cc($['Hoofdcategorie fiscus'], ($) => _psh.wrap_reference($)),
            'Subcategorie fiscus': _pt.cc($['Subcategorie fiscus'], ($) => _psh.wrap_reference($)),
        })))),
        'Zijde': _pt.cc($['Zijde'], ($) => _pt.cc($, ($): _i_out.Grootboek_Categorieen.Resultaat.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Kosten': return _pt.ss($, ($) => _psh.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _pt.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
})
export const Grootboekrekeningen: _i_signatures.Grootboekrekeningen = ($) => ({
    'Balans': _pt.cc($['Balans grootboekrekeningen'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Grootboekrekeningen.Balans.D.Type<d_token._T_Range> => {
            switch ($[0]) {
                case 'Bankrekening': return _pt.ss($, ($) => _psh.wrap_state_group(['Bankrekening', null]))
                case 'Informele rekening': return _pt.ss($, ($) => _psh.wrap_state_group(['Informele rekening', null]))
                case 'Overig': return _pt.ss($, ($) => _psh.wrap_state_group(['Overig', null]))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Resultaat': _pt.cc($['Resultaat grootboekrekeningen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
})
export const Handelstransacties: _i_signatures.Handelstransacties = ($) => ({
    'Inkopen': _pt.cc($['Inkopen'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Afhandeling': _pt.cc($['Afhandeling'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Mutaties': return _pt.ss($, ($) => _psh.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _pt.ss($, ($) => _psh.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _pt.cc($['Rekening courant'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'BTW-regime': _pt.cc($['BTW-regime'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.BTW$mi_regime<d_token._T_Range> => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _pt.ss($, ($) => _psh.wrap_state_group(['Binnenland: heffing verlegd', null]))
                case 'Geen BTW van toepassing': return _pt.ss($, ($) => _psh.wrap_state_group(['Geen BTW van toepassing', null]))
                case 'Import van buiten de EU': return _pt.ss($, ($) => _psh.wrap_state_group(['Import van buiten de EU', null]))
                case 'Intracommunautair': return _pt.ss($, ($) => _psh.wrap_state_group(['Intracommunautair', null]))
                case 'Standaard': return _pt.ss($, ($) => _psh.wrap_state_group(['Standaard', ({
                    'BTW-periode': _pt.cc($['BTW-periode'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'Brondocument': _pt.cc($['Brondocument'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Brondocument<d_token._T_Range> => {
            switch ($[0]) {
                case 'Niet van toepassing': return _pt.ss($, ($) => _psh.wrap_state_group(['Niet van toepassing', null]))
                case 'Ontbreekt': return _pt.ss($, ($) => _psh.wrap_state_group(['Ontbreekt', null]))
                case 'Toegevoegd': return _pt.ss($, ($) => _psh.wrap_state_group(['Toegevoegd', ({
                    'Document': _pt.cc($['Document'], ($) => $),
                })]))
                case 'Nog toevoegen': return _pt.ss($, ($) => _psh.wrap_state_group(['Ontbreekt', null]))//FIXME!!!!
                default: return _pt.au($[0])
            }
        })),
        'Datum': _pt.cc($['Datum'], ($) => $),
        'Regels': _pt.cc($['Regels'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Bedrag': _pt.cc($['Bedrag'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Bekend': return _pt.ss($, ($) => _psh.wrap_state_group(['Bekend', ({
                        'BTW-bedrag': _pt.cc($['BTW-bedrag'], ($) => $),
                        'Bedrag inclusief geheven BTW': _pt.cc($['Bedrag inclusief geheven BTW'], ($) => $),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
            'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
            'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Regels.D.Type<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Balans': return _pt.ss($, ($) => _psh.wrap_state_group(['Balans', ({
                        'Balans item': _pt.cc($['Balans item'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Kosten': return _pt.ss($, ($) => _psh.wrap_state_group(['Kosten', ({
                        'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Type<d_token._T_Range> => {
            switch ($[0]) {
                case 'Bonnetje': return _pt.ss($, ($) => _psh.wrap_state_group(['Bonnetje', null]))
                case 'Inkoop (met crediteur)': return _pt.ss($, ($) => _psh.wrap_state_group(['Inkoop (met crediteur)', ({
                    'Crediteur': _pt.cc($['Crediteur'], ($) => _psh.wrap_reference($)),
                    'Factuurnummer': _pt.cc($['Factuurnummer'], ($) => $),
                })]))
                case 'Loonheffing': return _pt.ss($, ($) => _psh.wrap_state_group(['Loonheffing', ({
                    'Ronde': _pt.cc($['Ronde'], ($) => _psh.wrap_reference($)),
                })]))
                case 'Salaris': return _pt.ss($, ($) => _psh.wrap_state_group(['Salaris', ({
                    'Medewerker': _pt.cc($['Medewerker'], ($) => _psh.wrap_reference($)),
                    'Ronde': _pt.cc($['Ronde'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
    })))),
    'Verkopen': _pt.cc($['Verkopen'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Afhandeling': _pt.cc($['Afhandeling'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Mutaties': return _pt.ss($, ($) => _psh.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _pt.ss($, ($) => _psh.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _pt.cc($['Rekening courant'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'BTW-periode': _pt.cc($['BTW-periode'], ($) => _psh.wrap_reference($)),
        'Betalingstermijn': _pt.cc($['Betalingstermijn'], ($) => $),
        'Brondocument': _pt.cc($['Brondocument'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Brondocument<d_token._T_Range> => {
            switch ($[0]) {
                case 'Toegevoegd': return _pt.ss($, ($) => _psh.wrap_state_group(['Toegevoegd', ({
                    'Document': _pt.cc($['Document'], ($) => $),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'Contracttype': _pt.cc($['Contracttype'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Contracttype<d_token._T_Range> => {
            switch ($[0]) {
                case 'Licentieovereenkomst': return _pt.ss($, ($) => _psh.wrap_state_group(['Licentieovereenkomst', ({
                    'Overeenkomst': _pt.cc($['Overeenkomst'], ($) => _psh.wrap_reference($)),
                })]))
                case 'Project': return _pt.ss($, ($) => _psh.wrap_state_group(['Project', ({
                    'Offerte': _pt.cc($['Offerte'], ($) => _psh.wrap_reference($)),
                    'Project': _pt.cc($['Project'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _pt.au($[0])
            }
        })),
        'Datum': _pt.cc($['Datum'], ($) => $),
        'Debiteur': _pt.cc($['Debiteur'], ($) => _psh.wrap_reference($)),
        'Regels': _pt.cc($['Regels'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'BTW-regime': _pt.cc($['BTW-regime'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _pt.ss($, ($) => _psh.wrap_state_group(['Binnenland: heffing verlegd', null]))
                    case 'Intracommunautair': return _pt.ss($, ($) => _psh.wrap_state_group(['Intracommunautair', null]))
                    case 'Standaard': return _pt.ss($, ($) => _psh.wrap_state_group(['Standaard', ({
                        'BTW-categorie': _pt.cc($['BTW-categorie'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
            'Bedrag exclusief BTW': _pt.cc($['Bedrag exclusief BTW'], ($) => $),
            'Contracttype': _pt.cc($['Contracttype'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Licentieovereenkomst': return _pt.ss($, ($) => _psh.wrap_state_group(['Licentieovereenkomst', ({
                        'Periode': _pt.cc($['Periode'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Los': return _pt.ss($, ($) => _psh.wrap_state_group(['Los', null]))
                    case 'Project': return _pt.ss($, ($) => _psh.wrap_state_group(['Project', ({
                        'Opbrengst': _pt.cc($['Opbrengst'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
            'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
            'Type': _pt.cc($['Type'], ($) => _pt.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.Type<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Balans': return _pt.ss($, ($) => _psh.wrap_state_group(['Balans', ({
                        'Balans item': _pt.cc($['Balans item'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Opbrengsten': return _pt.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', ({
                        'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
    })))),
})
export const Jaarbeheer: _i_signatures.Jaarbeheer = ($) => ({
    'Balans': _pt.cc($, ($) => ({
        'Bankrekeningen': _pt.cc($['Bankrekeningen'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Beginsaldo': _pt.cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
            'Mutaties': _pt.cc($['Mutaties'], ($) => _psh.wrap_dictionary($.map(($) => ({
                'Bedrag': _pt.cc($['Bedrag'], ($) => $),
                'Datum': _pt.cc($['Datum'], ($) => $),
                'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
            })))),
            'Nieuw': _pt.cc($['Nieuw'], ($) => _pt.cc($, ($): _i_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Ja': return _pt.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
                    case 'Nee': return _pt.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                        'Rekening': _pt.cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                            $,
                        )),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Beginsaldo nog aan te geven BTW': _pt.cc($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': _pt.cc($['Beginsaldo winstreserve'], ($) => $),
        'Grootboekrekening voor Inkoop saldo': _pt.cc($['Inkoop saldo'].Grootboekrekening, ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor Verkoop saldo': _pt.cc($['Verkoop saldo'].Grootboekrekening, ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor nog aan te geven BTW': _pt.cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor resultaat dit jaar': _pt.cc($['Grootboekrekening voor resultaat dit jaar'], ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor winstreserve': _pt.cc($['Grootboekrekening voor winstreserve'], ($) => _psh.wrap_reference($)),
        'Informele rekeningen': _pt.cc($['Informele rekeningen'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Beginsaldo': _pt.cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
            'Nieuw': _pt.cc($['Nieuw'], ($) => _pt.cc($, ($): _i_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Ja': return _pt.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
                    case 'Nee': return _pt.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                        'Rekening': _pt.cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                            $,
                        )),
                    })]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Overige balans items': _pt.cc($['Overige balans items'], ($) => _psh.wrap_dictionary($.map(($) => Overige_balans_item(
            $,
        )))),
        'Verrekenposten': _pt.cc($['Verrekenposten'], ($) => _psh.wrap_dictionary($.map(($) => null))),
    })),
    'Resultaat': _pt.cc($, ($) => ({
        'BTW periodes': _pt.cc($['BTW periodes'], ($) => _psh.wrap_dictionary($.map(($) => ({
            '1. BTW-categorieen': _pt.cc($['1. BTW-categorieen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
            'Documenten': _pt.cc($['Documenten'], ($) => _psh.wrap_dictionary($.map(($) => ({
                'Bestand': _pt.cc($['Bestand'], ($) => $),
            })))),
            'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
            'Status': _pt.cc($['Status'], ($) => _pt.cc($, ($): _i_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Aangegeven': return _pt.ss($, ($) => _psh.wrap_state_group(['Aangegeven', ({
                        'Afronding': _pt.cc($['Afronding'], ($) => $),
                        'Bedrag': _pt.cc($['Bedrag'], ($) => $),
                        'Datum': _pt.cc($['Datum'], ($) => $),
                    })]))
                    case 'Openstaand': return _pt.ss($, ($) => _psh.wrap_state_group(['Openstaand', null]))
                    default: return _pt.au($[0])
                }
            })),
        })))),
        'Grootboekrekening voor BTW afrondingen': _pt.cc($['Grootboekrekening voor BTW afrondingen'], ($) => _psh.wrap_reference($)),
        'Salarisrondes': _pt.cc($['Salarisrondes'], ($) => _psh.wrap_dictionary($.map(($) => null))),
    })),
})
export const Jaren: _i_signatures.Jaren = ($) => _psh.wrap_dictionary($.Jaren.map(($, key) => ({
    'Afgesloten': _pt.cc($['Afgesloten'], ($) => _pt.cc($, ($): _i_out.Jaren.D.Afgesloten<d_token._T_Range> => {
        switch ($[0]) {
            case 'Ja': return _pt.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
            case 'Nee': return _pt.ss($, ($) => _psh.wrap_state_group(['Nee', null]))
            default: return _pt.au($[0])
        }
    })),
    'Eerste boekjaar': _pt.cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
    )),
    'Grootboekrekeningen': _pt.cc($, ($) => Grootboekrekeningen(
        $,
    )),
    'Handelstransacties': _pt.cc($, ($) => Handelstransacties(
        $,
    )),
    'Jaarbeheer': _pt.cc($, ($) => Jaarbeheer(
        $,
    )),
    'Mutaties': _pt.cc($, ($) => Mutaties(
        $,
        {
            'jaar': key,
        }
    )),
    'Startdatum boekjaar': _pt.cc($['Startdatum boekjaar'], ($) => $),
})))
export const Mutaties: _i_signatures.Mutaties = ($, $p) => ({
    'Bankrekening Mutatie Verwerkingen': _pt.cc($.Bankrekeningen, ($) => _psh.wrap_dictionary($.map(($) => _psh.wrap_dictionary($.Mutaties.filter(($) => _pt.cc($.Status, ($): _pi.Optional_Value<_i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range>> => {
        switch ($[0]) {
            case 'Nog te verwerken': return _pt.ss($, ($) => _pt.not_set())
            case 'Verwerkt': return _pt.ss($, ($) => _pt.set(_pt.cc($.Afhandeling, ($): _i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Informele rekening': return _pt.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Informele rekening', ({
                        'Informele rekening': _pt.cc($['Informele rekening'], ($) => _psh.wrap_reference($)),
                    })])]))

                    case 'Verrekenpost': return _pt.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Verrekenpost', ({
                        'Verrekenpost': _pt.cc($['Verrekenpost'], ($) => _psh.wrap_reference($)),
                    })])]))

                    case 'BTW-periode': return _pt.ss($, ($): _i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range> => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _pt.not_set()
                            : _pt.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['BTW-periode', _psh.wrap_reference($['BTW-periode'])])
                    }]))
                    case 'Inkoop': return _pt.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _pt.not_set()
                            : _pt.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['Inkoop', _psh.wrap_reference($['Inkoop'])])
                    }]))
                    case 'Verkoop': return _pt.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _pt.not_set()
                            : _pt.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['Verkoop', _psh.wrap_reference($['Verkoop'])])
                    }]))
                    default: return _pt.au($[0])
                }
            })))
            default: return _pt.au($[0])
        }
    })))))),
    'Memoriaal boekingen': _pt.cc($['Overige balans items'], ($) => _psh.wrap_dictionary($.map(($) => _psh.wrap_dictionary($['Memoriaal boekingen'].map(($) => ({
        'Bedrag': _pt.cc($['Bedrag'], ($) => $),
        'Datum': _pt.cc($['Datum'], ($) => $),
        'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
        'Omschrijving': _pt.cc($['Omschrijving'], ($) => $),
    })))))),
    'Verrekenpost mutaties': _pt.cc($.Verrekenposten, ($) => _psh.wrap_dictionary($.map(($) => _psh.wrap_dictionary($.Mutaties.map(($) => ({
        'Afhandeling': _pt.cc($['Afhandeling'], ($) => _pt.cc($, ($): _i_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Informele rekening': return _pt.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Informele rekening', ({
                    'Informele rekening': _pt.cc($['Informele rekening'], ($) => _psh.wrap_reference($)),
                })])]))

                case 'BTW-periode': return _pt.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _pt.not_set()
                        : _pt.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['BTW-periode', _psh.wrap_reference($['BTW-periode'])])
                }]))
                case 'Inkoop': return _pt.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _pt.not_set()
                        : _pt.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['Inkoop', _psh.wrap_reference($['Inkoop'])])
                }]))
                case 'Verkoop': return _pt.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _pt.not_set()
                        : _pt.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['Verkoop', _psh.wrap_reference($['Verkoop'])])
                }]))
                default: return _pt.au($[0])
            }
        })),
        'Bedrag': _pt.cc($['Bedrag'], ($) => $),
    })))))),
})
export const Overige_balans_item: _i_signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _pt.cc($, ($) => $.Beginsaldo),
    'Grootboekrekening': _pt.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
    'Nieuw': _pt.cc($['Nieuw'], ($) => _pt.cc($, ($): _i_out.Overige_balans_item.Nieuw<d_token._T_Range> => {
        switch ($[0]) {
            case 'Ja': return _pt.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
            case 'Nee': return _pt.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                'Balans item': _pt.cc($['Balans item'], ($) => _psh.wrap_reference($)),
            })]))
            default: return _pt.au($[0])
        }
    })),
})
export const Root: _i_signatures.Root = ($) => ({
    'Beheer': _pt.cc($, ($) => Beheer(
        $,
    )),
    'Categorieen': _pt.cc($, ($) => Grootboek_Categorieen(
        $,
    )),
    'Fiscaal': _pt.cc($, ($) => Fiscaal(
        $,
    )),
    'Jaren': _pt.cc($, ($) => Jaren(
        $,
    )),
})
export const Verwijzing_naar_Bankrekening: _i_signatures.Verwijzing_naar_Bankrekening = ($) => _psh.wrap_reference($)
export const Verwijzing_naar_Informele_rekening: _i_signatures.Verwijzing_naar_Informele_rekening = ($) => _psh.wrap_reference($)
