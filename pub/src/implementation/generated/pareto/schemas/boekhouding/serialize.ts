    import * as _p from 'pareto-core/dist/serializer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/liana/schemas/boekhouding/serialize"
    import * as _i_serialize from "../../generic/serialize"
    import * as _i_marshall from "./marshall"
    
    
    export const Fiscaal: _i_signatures._T_Fiscaal = ($, $p) => _i_serialize.Document(
        _i_marshall.Fiscaal(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Grootboek_Categorieen: _i_signatures._T_Grootboek_Categorieen = ($, $p) => _i_serialize.Document(
        _i_marshall.Grootboek_Categorieen(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Beheer: _i_signatures._T_Beheer = ($, $p) => _i_serialize.Document(
        _i_marshall.Beheer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Grootboekrekeningen: _i_signatures._T_Grootboekrekeningen = ($, $p) => _i_serialize.Document(
        _i_marshall.Grootboekrekeningen(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Jaarbeheer: _i_signatures._T_Jaarbeheer = ($, $p) => _i_serialize.Document(
        _i_marshall.Jaarbeheer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Overige_balans_item: _i_signatures._T_Overige_balans_item = ($, $p) => _i_serialize.Document(
        _i_marshall.Overige_balans_item(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Verwijzing_naar_Informele_rekening: _i_signatures._T_Verwijzing_naar_Informele_rekening = ($, $p) => _i_serialize.Document(
        _i_marshall.Verwijzing_naar_Informele_rekening(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Verwijzing_naar_Bankrekening: _i_signatures._T_Verwijzing_naar_Bankrekening = ($, $p) => _i_serialize.Document(
        _i_marshall.Verwijzing_naar_Bankrekening(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Handelstransacties: _i_signatures._T_Handelstransacties = ($, $p) => _i_serialize.Document(
        _i_marshall.Handelstransacties(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Mutaties: _i_signatures._T_Mutaties = ($, $p) => _i_serialize.Document(
        _i_marshall.Mutaties(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Jaren: _i_signatures._T_Jaren = ($, $p) => _i_serialize.Document(
        _i_marshall.Jaren(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Balans_Resultaat_Mutatie: _i_signatures._T_Balans_Resultaat_Mutatie = ($, $p) => _i_serialize.Document(
        _i_marshall.Balans_Resultaat_Mutatie(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Eerste_boekjaar: _i_signatures._T_Eerste_boekjaar = ($, $p) => _i_serialize.Document(
        _i_marshall.Eerste_boekjaar(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Root: _i_signatures._T_Root = ($, $p) => _i_serialize.Document(
        _i_marshall.Root(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
