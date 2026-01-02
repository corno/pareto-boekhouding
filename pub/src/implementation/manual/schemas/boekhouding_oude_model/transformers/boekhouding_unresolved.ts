import * as _p from 'pareto-core-transformer'
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
    'BTW-categorieen': _psh.wrap_dictionary(_p.cc($.Beheer['BTW-categorieen'], ($) => $.map(($): _i_out.Beheer.BTW$mi_categorieen.D<d_token._T_Range> => ({
        'BTW-heffing': _p.cc($['BTW-heffing'], ($) => _p.cc($, ($): _i_out.Beheer.BTW$mi_categorieen.D.BTW$mi_heffing<d_token._T_Range> => {
            switch ($[0]) {
                case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', ({
                    'BTW-promillage': _p.cc($['BTW-promillage'], ($) => $),
                })]))
                case 'Nee': return _p.ss($, ($) => _pinternals.panic("SDFS"))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Gebruikers': _psh.wrap_dictionary(_p.cc($.Beheer['Gebruikers'], ($) => $.map(($) => ({
        'Volledige naam': _p.cc($['Volledige naam'], ($) => $),
        'Wachtwoord': _p.cc($['Wachtwoord'], ($) => $),
    })))),
    'Grootboekrekeningen': _p.cc($, ($): _i_out.Beheer.Grootboekrekeningen<d_token._T_Range> => ({
        'Balans': _psh.wrap_dictionary(_p.cc($.Beheer['Balans'].Grootboekrekeningen, ($) => $.map(($) => ({
            'Hoofdcategorie': _p.cc($['Hoofdcategorie'], ($) => _psh.wrap_reference($)),
            'Subcategorie': _p.cc($['Subcategorie'], ($) => _psh.wrap_reference($)),
            'Zijde': _p.cc($['Zijde'], ($) => _p.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Balans.D.Zijde<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Activa': return _p.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                    case 'Passiva': return _p.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Resultaat': _psh.wrap_dictionary(_p.cc($.Beheer['Resultaat'].Grootboekrekeningen, ($) => $.map(($) => ({
            'Hoofdcategorie': _p.cc($['Hoofdcategorie'], ($) => _psh.wrap_reference($)),
            'Subcategorie': _p.cc($['Subcategorie'], ($) => _psh.wrap_reference($)),
            'Zijde': _p.cc($['Zijde'], ($) => _p.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Kosten': return _p.ss($, ($) => _psh.wrap_state_group(['Kosten', ({
                        'Correctie op vennootschapsbelasting': _p.cc($['Correctie op vennootschapsbelasting'], ($) => _p.cc($, ($): _i_out.Beheer.Grootboekrekeningen.Resultaat.D.Zijde.SG.Kosten.Correctie_op_vennootschapsbelasting<d_token._T_Range> => {
                            switch ($[0]) {
                                case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', ({
                                    'Correctietype': _p.cc($['Correctietype'], ($) => _psh.wrap_reference($)),
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
    'Klanten': _psh.wrap_dictionary(_p.cc($['Klanten'], ($) => $.map(($) => ({
        'Licentieovereenkomsten': _p.cc($['Licentieovereenkomsten'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Periodes': _p.cc($['Periodes'], ($) => _psh.wrap_dictionary($.map(($) => ({
                'Bedrag': _p.cc($['Bedrag'], ($) => $),
            })))),
        })))),
        'Projecten': _p.cc($['Projecten'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Offertes': _p.cc($['Offertes'], ($) => _psh.wrap_dictionary($.map(($) => ({
                'Opbrengsten': _p.cc($['Opbrengsten'], ($) => _psh.wrap_dictionary($.map(($) => ({
                    'Type': _p.cc($['Type'], ($) => _p.cc($, ($): _i_out.Beheer.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D.Type<d_token._T_Range> => {
                        switch ($[0]) {
                            case 'Project': return _p.ss($, ($) => _psh.wrap_state_group(['Project', ({
                                'Bedrag': _p.cc($['Bedrag'], ($) => $),
                                'Betaaldatum': _p.cc($['Betaaldatum'], ($) => $),
                            })]))
                            default: return _p.au($[0])
                        }
                    })),
                })))),
            })))),
        })))),
    })))),
    'Leveranciers': _psh.wrap_dictionary(_p.cc($['Leveranciers'], ($) => $.map(($) => null))),
    'Medewerkers': _psh.wrap_dictionary(_p.cc($['Medewerkers'], ($) => $.map(($) => null))),
    'Rekeningen': _p.cc($, ($) => ({
        'Bank': _p.cc($.Bankrekeningen, ($) => _psh.wrap_dictionary($.map(($) => null))),
        'Informeel': _p.cc($['Informele rekeningen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
    })),
})
export const Eerste_boekjaar: _i_signatures.Eerste_boekjaar = ($) => _p.cc($, ($): _i_out.Eerste_boekjaar<d_token._T_Range> => {
    switch ($[0]) {
        case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
        case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', ({
            'Vorig boekjaar': _p.cc($['Vorig boekjaar'], ($) => _psh.wrap_reference($)),
        })]))
        default: return _p.au($[0])
    }
})
export const Fiscaal: _i_signatures.Fiscaal = ($) => ({
    'Balans Hoofdcategorieen': _p.cc($.Beheer.Balans['Hoofdcategorieen fiscus'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _p.cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
        'Zijde': _p.cc($['Zijde'], ($) => _p.cc($, ($): _i_out.Fiscaal.Balans_Hoofdcategorieen.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                case 'Passiva': return _p.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Resultaat Hoofdcategorieen': _psh.wrap_dictionary(_p.cc($.Beheer.Resultaat['Hoofdcategorieen fiscus'], ($) => $.map(($) => ({
        'Subcategorieen': _p.cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
        'Zijde': _p.cc($['Zijde'], ($) => _p.cc($, ($): _i_out.Fiscaal.Resultaat_Hoofdcategorieen.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => _psh.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _p.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
})
export const Grootboek_Categorieen: _i_signatures.Grootboek_Categorieen = ($) => ({
    'Balans': _p.cc($.Beheer.Balans.Hoofdcategorieen, ($) => _psh.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _p.cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Hoofdcategorie fiscus': _p.cc($['Hoofdcategorie fiscus'], ($) => _psh.wrap_reference($)),
            'Subcategorie fiscus': _p.cc($['Subcategorie fiscus'], ($) => _psh.wrap_reference($)),
        })))),
        'Zijde': _p.cc($['Zijde'], ($) => _p.cc($, ($): _i_out.Grootboek_Categorieen.Balans.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Activa': return _p.ss($, ($) => _psh.wrap_state_group(['Activa', null]))
                case 'Passiva': return _p.ss($, ($) => _psh.wrap_state_group(['Passiva', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Correctietypes vennootschapsbelasting': _p.cc($.Beheer.Resultaat['Correctietypes vennootschapsbelasting'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Te corrigeren promillage': _p.cc($['Te corrigeren promillage'], ($) => $),
    })))),
    'Resultaat': _p.cc($.Beheer['Resultaat'].Hoofdcategorieen, ($) => _psh.wrap_dictionary($.map(($) => ({
        'Subcategorieen': _p.cc($['Subcategorieen'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Hoofdcategorie fiscus': _p.cc($['Hoofdcategorie fiscus'], ($) => _psh.wrap_reference($)),
            'Subcategorie fiscus': _p.cc($['Subcategorie fiscus'], ($) => _psh.wrap_reference($)),
        })))),
        'Zijde': _p.cc($['Zijde'], ($) => _p.cc($, ($): _i_out.Grootboek_Categorieen.Resultaat.D.Zijde<d_token._T_Range> => {
            switch ($[0]) {
                case 'Kosten': return _p.ss($, ($) => _psh.wrap_state_group(['Kosten', null]))
                case 'Opbrengsten': return _p.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
})
export const Grootboekrekeningen: _i_signatures.Grootboekrekeningen = ($) => ({
    'Balans': _p.cc($['Balans grootboekrekeningen'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Type': _p.cc($['Type'], ($) => _p.cc($, ($): _i_out.Grootboekrekeningen.Balans.D.Type<d_token._T_Range> => {
            switch ($[0]) {
                case 'Bankrekening': return _p.ss($, ($) => _psh.wrap_state_group(['Bankrekening', null]))
                case 'Informele rekening': return _p.ss($, ($) => _psh.wrap_state_group(['Informele rekening', null]))
                case 'Overig': return _p.ss($, ($) => _psh.wrap_state_group(['Overig', null]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Resultaat': _p.cc($['Resultaat grootboekrekeningen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
})
export const Handelstransacties: _i_signatures.Handelstransacties = ($) => ({
    'Inkopen': _p.cc($['Inkopen'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Afhandeling': _p.cc($['Afhandeling'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => _psh.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _p.ss($, ($) => _psh.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _p.cc($['Rekening courant'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'BTW-regime': _p.cc($['BTW-regime'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Inkopen.D.BTW$mi_regime<d_token._T_Range> => {
            switch ($[0]) {
                case 'Binnenland: heffing verlegd': return _p.ss($, ($) => _psh.wrap_state_group(['Binnenland: heffing verlegd', null]))
                case 'Geen BTW van toepassing': return _p.ss($, ($) => _psh.wrap_state_group(['Geen BTW van toepassing', null]))
                case 'Import van buiten de EU': return _p.ss($, ($) => _psh.wrap_state_group(['Import van buiten de EU', null]))
                case 'Intracommunautair': return _p.ss($, ($) => _psh.wrap_state_group(['Intracommunautair', null]))
                case 'Standaard': return _p.ss($, ($) => _psh.wrap_state_group(['Standaard', ({
                    'BTW-periode': _p.cc($['BTW-periode'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Brondocument': _p.cc($['Brondocument'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Brondocument<d_token._T_Range> => {
            switch ($[0]) {
                case 'Niet van toepassing': return _p.ss($, ($) => _psh.wrap_state_group(['Niet van toepassing', null]))
                case 'Ontbreekt': return _p.ss($, ($) => _psh.wrap_state_group(['Ontbreekt', null]))
                case 'Toegevoegd': return _p.ss($, ($) => _psh.wrap_state_group(['Toegevoegd', ({
                    'Document': _p.cc($['Document'], ($) => $),
                })]))
                case 'Nog toevoegen': return _p.ss($, ($) => _psh.wrap_state_group(['Ontbreekt', null]))//FIXME!!!!
                default: return _p.au($[0])
            }
        })),
        'Datum': _p.cc($['Datum'], ($) => $),
        'Regels': _p.cc($['Regels'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Bedrag': _p.cc($['Bedrag'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Regels.D.Bedrag<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Bekend': return _p.ss($, ($) => _psh.wrap_state_group(['Bekend', ({
                        'BTW-bedrag': _p.cc($['BTW-bedrag'], ($) => $),
                        'Bedrag inclusief geheven BTW': _p.cc($['Bedrag inclusief geheven BTW'], ($) => $),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p.cc($['Omschrijving'], ($) => $),
            'Type': _p.cc($['Type'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Regels.D.Type<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', ({
                        'Balans item': _p.cc($['Balans item'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Kosten': return _p.ss($, ($) => _psh.wrap_state_group(['Kosten', ({
                        'Grootboekrekening': _p.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Type': _p.cc($['Type'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Inkopen.D.Type<d_token._T_Range> => {
            switch ($[0]) {
                case 'Bonnetje': return _p.ss($, ($) => _psh.wrap_state_group(['Bonnetje', null]))
                case 'Inkoop (met crediteur)': return _p.ss($, ($) => _psh.wrap_state_group(['Inkoop (met crediteur)', ({
                    'Crediteur': _p.cc($['Crediteur'], ($) => _psh.wrap_reference($)),
                    'Factuurnummer': _p.cc($['Factuurnummer'], ($) => $),
                })]))
                case 'Loonheffing': return _p.ss($, ($) => _psh.wrap_state_group(['Loonheffing', ({
                    'Ronde': _p.cc($['Ronde'], ($) => _psh.wrap_reference($)),
                })]))
                case 'Salaris': return _p.ss($, ($) => _psh.wrap_state_group(['Salaris', ({
                    'Medewerker': _p.cc($['Medewerker'], ($) => _psh.wrap_reference($)),
                    'Ronde': _p.cc($['Ronde'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
    })))),
    'Verkopen': _p.cc($['Verkopen'], ($) => _psh.wrap_dictionary($.map(($) => ({
        'Afhandeling': _p.cc($['Afhandeling'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Mutaties': return _p.ss($, ($) => _psh.wrap_state_group(['Mutaties', null]))
                case 'Rekening courant': return _p.ss($, ($) => _psh.wrap_state_group(['Rekening courant', ({
                    'Rekening courant': _p.cc($['Rekening courant'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'BTW-periode': _p.cc($['BTW-periode'], ($) => _psh.wrap_reference($)),
        'Betalingstermijn': _p.cc($['Betalingstermijn'], ($) => $),
        'Brondocument': _p.cc($['Brondocument'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Brondocument<d_token._T_Range> => {
            switch ($[0]) {
                case 'Toegevoegd': return _p.ss($, ($) => _psh.wrap_state_group(['Toegevoegd', ({
                    'Document': _p.cc($['Document'], ($) => $),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Contracttype': _p.cc($['Contracttype'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Contracttype<d_token._T_Range> => {
            switch ($[0]) {
                case 'Licentieovereenkomst': return _p.ss($, ($) => _psh.wrap_state_group(['Licentieovereenkomst', ({
                    'Overeenkomst': _p.cc($['Overeenkomst'], ($) => _psh.wrap_reference($)),
                })]))
                case 'Project': return _p.ss($, ($) => _psh.wrap_state_group(['Project', ({
                    'Offerte': _p.cc($['Offerte'], ($) => _psh.wrap_reference($)),
                    'Project': _p.cc($['Project'], ($) => _psh.wrap_reference($)),
                })]))
                default: return _p.au($[0])
            }
        })),
        'Datum': _p.cc($['Datum'], ($) => $),
        'Debiteur': _p.cc($['Debiteur'], ($) => _psh.wrap_reference($)),
        'Regels': _p.cc($['Regels'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'BTW-regime': _p.cc($['BTW-regime'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.BTW$mi_regime<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Binnenland: heffing verlegd': return _p.ss($, ($) => _psh.wrap_state_group(['Binnenland: heffing verlegd', null]))
                    case 'Intracommunautair': return _p.ss($, ($) => _psh.wrap_state_group(['Intracommunautair', null]))
                    case 'Standaard': return _p.ss($, ($) => _psh.wrap_state_group(['Standaard', ({
                        'BTW-categorie': _p.cc($['BTW-categorie'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Bedrag exclusief BTW': _p.cc($['Bedrag exclusief BTW'], ($) => $),
            'Contracttype': _p.cc($['Contracttype'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.Contracttype<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Licentieovereenkomst': return _p.ss($, ($) => _psh.wrap_state_group(['Licentieovereenkomst', ({
                        'Periode': _p.cc($['Periode'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Los': return _p.ss($, ($) => _psh.wrap_state_group(['Los', null]))
                    case 'Project': return _p.ss($, ($) => _psh.wrap_state_group(['Project', ({
                        'Opbrengst': _p.cc($['Opbrengst'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
            'Omschrijving': _p.cc($['Omschrijving'], ($) => $),
            'Type': _p.cc($['Type'], ($) => _p.cc($, ($): _i_out.Handelstransacties.Verkopen.D.Regels.D.Type<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Balans': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', ({
                        'Balans item': _p.cc($['Balans item'], ($) => _psh.wrap_reference($)),
                    })]))
                    case 'Opbrengsten': return _p.ss($, ($) => _psh.wrap_state_group(['Opbrengsten', ({
                        'Grootboekrekening': _p.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
    })))),
})
export const Jaarbeheer: _i_signatures.Jaarbeheer = ($) => ({
    'Balans': _p.cc($, ($) => ({
        'Bankrekeningen': _p.cc($['Bankrekeningen'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Beginsaldo': _p.cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
            'Mutaties': _p.cc($['Mutaties'], ($) => _psh.wrap_dictionary($.map(($) => ({
                'Bedrag': _p.cc($['Bedrag'], ($) => $),
                'Datum': _p.cc($['Datum'], ($) => $),
                'Omschrijving': _p.cc($['Omschrijving'], ($) => $),
            })))),
            'Nieuw': _p.cc($['Nieuw'], ($) => _p.cc($, ($): _i_out.Jaarbeheer.Balans.Bankrekeningen.D.Nieuw<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
                    case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                        'Rekening': _p.cc($['Rekening'], ($) => Verwijzing_naar_Bankrekening(
                            $,
                        )),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Beginsaldo nog aan te geven BTW': _p.cc($['Beginsaldo nog aan te geven BTW'], ($) => $),
        'Beginsaldo winstreserve': _p.cc($['Beginsaldo winstreserve'], ($) => $),
        'Grootboekrekening voor Inkoop saldo': _p.cc($['Inkoop saldo'].Grootboekrekening, ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor Verkoop saldo': _p.cc($['Verkoop saldo'].Grootboekrekening, ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor nog aan te geven BTW': _p.cc($['Grootboekrekening voor nog aan te geven BTW'], ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor resultaat dit jaar': _p.cc($['Grootboekrekening voor resultaat dit jaar'], ($) => _psh.wrap_reference($)),
        'Grootboekrekening voor winstreserve': _p.cc($['Grootboekrekening voor winstreserve'], ($) => _psh.wrap_reference($)),
        'Informele rekeningen': _p.cc($['Informele rekeningen'], ($) => _psh.wrap_dictionary($.map(($) => ({
            'Beginsaldo': _p.cc($['Beginsaldo'], ($) => $),
            'Grootboekrekening': _p.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
            'Nieuw': _p.cc($['Nieuw'], ($) => _p.cc($, ($): _i_out.Jaarbeheer.Balans.Informele_rekeningen.D.Nieuw<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
                    case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                        'Rekening': _p.cc($['Rekening'], ($) => Verwijzing_naar_Informele_rekening(
                            $,
                        )),
                    })]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Overige balans items': _p.cc($['Overige balans items'], ($) => _psh.wrap_dictionary($.map(($) => Overige_balans_item(
            $,
        )))),
        'Verrekenposten': _p.cc($['Verrekenposten'], ($) => _psh.wrap_dictionary($.map(($) => null))),
    })),
    'Resultaat': _p.cc($, ($) => ({
        'BTW periodes': _p.cc($['BTW periodes'], ($) => _psh.wrap_dictionary($.map(($) => ({
            '1. BTW-categorieen': _p.cc($['1. BTW-categorieen'], ($) => _psh.wrap_dictionary($.map(($) => null))),
            'Documenten': _p.cc($['Documenten'], ($) => _psh.wrap_dictionary($.map(($) => ({
                'Bestand': _p.cc($['Bestand'], ($) => $),
            })))),
            'Omschrijving': _p.cc($['Omschrijving'], ($) => $),
            'Status': _p.cc($['Status'], ($) => _p.cc($, ($): _i_out.Jaarbeheer.Resultaat.BTW_periodes.D.Status<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Aangegeven': return _p.ss($, ($) => _psh.wrap_state_group(['Aangegeven', ({
                        'Afronding': _p.cc($['Afronding'], ($) => $),
                        'Bedrag': _p.cc($['Bedrag'], ($) => $),
                        'Datum': _p.cc($['Datum'], ($) => $),
                    })]))
                    case 'Openstaand': return _p.ss($, ($) => _psh.wrap_state_group(['Openstaand', null]))
                    default: return _p.au($[0])
                }
            })),
        })))),
        'Grootboekrekening voor BTW afrondingen': _p.cc($['Grootboekrekening voor BTW afrondingen'], ($) => _psh.wrap_reference($)),
        'Salarisrondes': _p.cc($['Salarisrondes'], ($) => _psh.wrap_dictionary($.map(($) => null))),
    })),
})
export const Jaren: _i_signatures.Jaren = ($) => _psh.wrap_dictionary($.Jaren.map(($, key) => ({
    'Afgesloten': _p.cc($['Afgesloten'], ($) => _p.cc($, ($): _i_out.Jaren.D.Afgesloten<d_token._T_Range> => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
            case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', null]))
            default: return _p.au($[0])
        }
    })),
    'Eerste boekjaar': _p.cc($['Eerste boekjaar'], ($) => Eerste_boekjaar(
        $,
    )),
    'Grootboekrekeningen': _p.cc($, ($) => Grootboekrekeningen(
        $,
    )),
    'Handelstransacties': _p.cc($, ($) => Handelstransacties(
        $,
    )),
    'Jaarbeheer': _p.cc($, ($) => Jaarbeheer(
        $,
    )),
    'Mutaties': _p.cc($, ($) => Mutaties(
        $,
        {
            'jaar': key,
        }
    )),
    'Startdatum boekjaar': _p.cc($['Startdatum boekjaar'], ($) => $),
})))
export const Mutaties: _i_signatures.Mutaties = ($, $p) => ({
    'Bankrekening Mutatie Verwerkingen': _p.cc($.Bankrekeningen, ($) => _psh.wrap_dictionary($.map(($) => _psh.wrap_dictionary($.Mutaties.filter(($) => _p.cc($.Status, ($): _pi.Optional_Value<_i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range>> => {
        switch ($[0]) {
            case 'Nog te verwerken': return _p.ss($, ($) => _p.not_set())
            case 'Verwerkt': return _p.ss($, ($) => _p.set(_p.cc($.Afhandeling, ($): _i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range> => {
                switch ($[0]) {
                    case 'Informele rekening': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Informele rekening', ({
                        'Informele rekening': _p.cc($['Informele rekening'], ($) => _psh.wrap_reference($)),
                    })])]))

                    case 'Verrekenpost': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Verrekenpost', ({
                        'Verrekenpost': _p.cc($['Verrekenpost'], ($) => _psh.wrap_reference($)),
                    })])]))

                    case 'BTW-periode': return _p.ss($, ($): _i_out.Mutaties.Bankrekening_Mutatie_Verwerkingen.D.D<d_token._T_Range> => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.not_set()
                            : _p.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['BTW-periode', _psh.wrap_reference($['BTW-periode'])])
                    }]))
                    case 'Inkoop': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.not_set()
                            : _p.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['Inkoop', _psh.wrap_reference($['Inkoop'])])
                    }]))
                    case 'Verkoop': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                        'Jaar': $.Jaar === $p.jaar
                            ? _p.not_set()
                            : _p.set(_psh.wrap_reference($.Jaar)),
                        'type': _psh.wrap_state_group(['Verkoop', _psh.wrap_reference($['Verkoop'])])
                    }]))
                    default: return _p.au($[0])
                }
            })))
            default: return _p.au($[0])
        }
    })))))),
    'Memoriaal boekingen': _p.cc($['Overige balans items'], ($) => _psh.wrap_dictionary($.map(($) => _psh.wrap_dictionary($['Memoriaal boekingen'].map(($) => ({
        'Bedrag': _p.cc($['Bedrag'], ($) => $),
        'Datum': _p.cc($['Datum'], ($) => $),
        'Grootboekrekening': _p.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
        'Omschrijving': _p.cc($['Omschrijving'], ($) => $),
    })))))),
    'Verrekenpost mutaties': _p.cc($.Verrekenposten, ($) => _psh.wrap_dictionary($.map(($) => _psh.wrap_dictionary($.Mutaties.map(($) => ({
        'Afhandeling': _p.cc($['Afhandeling'], ($) => _p.cc($, ($): _i_out.Mutaties.Verrekenpost_mutaties.D.D.Afhandeling<d_token._T_Range> => {
            switch ($[0]) {
                case 'Informele rekening': return _p.ss($, ($) => _psh.wrap_state_group(['Balans', _psh.wrap_state_group(['Informele rekening', ({
                    'Informele rekening': _p.cc($['Informele rekening'], ($) => _psh.wrap_reference($)),
                })])]))

                case 'BTW-periode': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.not_set()
                        : _p.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['BTW-periode', _psh.wrap_reference($['BTW-periode'])])
                }]))
                case 'Inkoop': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.not_set()
                        : _p.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['Inkoop', _psh.wrap_reference($['Inkoop'])])
                }]))
                case 'Verkoop': return _p.ss($, ($) => _psh.wrap_state_group(['Resultaat', {
                    'Jaar': $.Jaar === $p.jaar
                        ? _p.not_set()
                        : _p.set(_psh.wrap_reference($.Jaar)),
                    'type': _psh.wrap_state_group(['Verkoop', _psh.wrap_reference($['Verkoop'])])
                }]))
                default: return _p.au($[0])
            }
        })),
        'Bedrag': _p.cc($['Bedrag'], ($) => $),
    })))))),
})
export const Overige_balans_item: _i_signatures.Overige_balans_item = ($) => ({
    'Beginsaldo': _p.cc($, ($) => $.Beginsaldo),
    'Grootboekrekening': _p.cc($['Grootboekrekening'], ($) => _psh.wrap_reference($)),
    'Nieuw': _p.cc($['Nieuw'], ($) => _p.cc($, ($): _i_out.Overige_balans_item.Nieuw<d_token._T_Range> => {
        switch ($[0]) {
            case 'Ja': return _p.ss($, ($) => _psh.wrap_state_group(['Ja', null]))
            case 'Nee': return _p.ss($, ($) => _psh.wrap_state_group(['Nee', ({
                'Balans item': _p.cc($['Balans item'], ($) => _psh.wrap_reference($)),
            })]))
            default: return _p.au($[0])
        }
    })),
})
export const Root: _i_signatures.Root = ($) => ({
    'Beheer': _p.cc($, ($) => Beheer(
        $,
    )),
    'Categorieen': _p.cc($, ($) => Grootboek_Categorieen(
        $,
    )),
    'Fiscaal': _p.cc($, ($) => Fiscaal(
        $,
    )),
    'Jaren': _p.cc($, ($) => Jaren(
        $,
    )),
})
export const Verwijzing_naar_Bankrekening: _i_signatures.Verwijzing_naar_Bankrekening = ($) => _psh.wrap_reference($)
export const Verwijzing_naar_Informele_rekening: _i_signatures.Verwijzing_naar_Informele_rekening = ($) => _psh.wrap_reference($)
