    
    import * as _pi from 'pareto-core/dist/interface'
    
    export namespace Root_ {
        
        export namespace Bankrekeningen {
            
            export namespace D {
                
            }
            
            export type D = null
            
        }
        
        export type Bankrekeningen = _pi.Dictionary<Bankrekeningen.D>
        
        export namespace Beheer {
            
            export namespace Balans {
                
                export namespace Grootboekrekeningen {
                    
                    export namespace D {
                        
                        export type Hoofdcategorie = string
                        
                        export type Subcategorie = string
                        
                        export namespace Zijde {
                            
                            export namespace Activa {
                                
                            }
                            
                            export type Activa = null
                            
                            export namespace Passiva {
                                
                            }
                            
                            export type Passiva = null
                            
                        }
                        
                        export type Zijde = 
                            | readonly ['Activa', Zijde.Activa]
                            | readonly ['Passiva', Zijde.Passiva]
                        
                    }
                    
                    export type D = {
                        readonly 'Hoofdcategorie': D.Hoofdcategorie
                        readonly 'Subcategorie': D.Subcategorie
                        readonly 'Zijde': D.Zijde
                    }
                    
                }
                
                export type Grootboekrekeningen = _pi.Dictionary<Grootboekrekeningen.D>
                
                export namespace Hoofdcategorieen {
                    
                    export namespace D {
                        
                        export namespace Zijde {
                            
                            export namespace Activa {
                                
                            }
                            
                            export type Activa = null
                            
                            export namespace Passiva {
                                
                            }
                            
                            export type Passiva = null
                            
                        }
                        
                        export type Zijde = 
                            | readonly ['Activa', Zijde.Activa]
                            | readonly ['Passiva', Zijde.Passiva]
                        
                        export namespace Subcategorieen {
                            
                            export namespace D {
                                
                                export type Hoofdcategorie_fiscus = string
                                
                                export type Subcategorie_fiscus = string
                                
                            }
                            
                            export type D = {
                                readonly 'Hoofdcategorie fiscus': D.Hoofdcategorie_fiscus
                                readonly 'Subcategorie fiscus': D.Subcategorie_fiscus
                            }
                            
                        }
                        
                        export type Subcategorieen = _pi.Dictionary<Subcategorieen.D>
                        
                    }
                    
                    export type D = {
                        readonly 'Zijde': D.Zijde
                        readonly 'Subcategorieen': D.Subcategorieen
                    }
                    
                }
                
                export type Hoofdcategorieen = _pi.Dictionary<Hoofdcategorieen.D>
                
                export namespace Hoofdcategorieen_fiscus {
                    
                    export namespace D {
                        
                        export namespace Zijde {
                            
                            export namespace Activa {
                                
                            }
                            
                            export type Activa = null
                            
                            export namespace Passiva {
                                
                            }
                            
                            export type Passiva = null
                            
                        }
                        
                        export type Zijde = 
                            | readonly ['Activa', Zijde.Activa]
                            | readonly ['Passiva', Zijde.Passiva]
                        
                        export namespace Subcategorieen {
                            
                            export namespace D {
                                
                            }
                            
                            export type D = null
                            
                        }
                        
                        export type Subcategorieen = _pi.Dictionary<Subcategorieen.D>
                        
                    }
                    
                    export type D = {
                        readonly 'Zijde': D.Zijde
                        readonly 'Subcategorieen': D.Subcategorieen
                    }
                    
                }
                
                export type Hoofdcategorieen_fiscus = _pi.Dictionary<Hoofdcategorieen_fiscus.D>
                
            }
            
            export type Balans = {
                readonly 'Grootboekrekeningen': Balans.Grootboekrekeningen
                readonly 'Hoofdcategorieen': Balans.Hoofdcategorieen
                readonly 'Hoofdcategorieen fiscus': Balans.Hoofdcategorieen_fiscus
            }
            
            export namespace BTW$mi_categorieen {
                
                export namespace D {
                    
                    export namespace BTW$mi_heffing {
                        
                        export namespace Ja {
                            
                            export type BTW$mi_promillage = number
                            
                        }
                        
                        export type Ja = {
                            readonly 'BTW-promillage': Ja.BTW$mi_promillage
                        }
                        
                        export namespace Nee {
                            
                        }
                        
                        export type Nee = null
                        
                    }
                    
                    export type BTW$mi_heffing = 
                        | readonly ['Ja', BTW$mi_heffing.Ja]
                        | readonly ['Nee', BTW$mi_heffing.Nee]
                    
                }
                
                export type D = {
                    readonly 'BTW-heffing': D.BTW$mi_heffing
                }
                
            }
            
            export type BTW$mi_categorieen = _pi.Dictionary<BTW$mi_categorieen.D>
            
            export namespace Gebruikers {
                
                export namespace D {
                    
                    export type Volledige_naam = string
                    
                    export type Wachtwoord = string
                    
                }
                
                export type D = {
                    readonly 'Volledige naam': D.Volledige_naam
                    readonly 'Wachtwoord': D.Wachtwoord
                }
                
            }
            
            export type Gebruikers = _pi.Dictionary<Gebruikers.D>
            
            export type Huidige_datum = number
            
            export namespace Resultaat {
                
                export namespace Correctietypes_vennootschapsbelasting {
                    
                    export namespace D {
                        
                        export type Te_corrigeren_promillage = number
                        
                    }
                    
                    export type D = {
                        readonly 'Te corrigeren promillage': D.Te_corrigeren_promillage
                    }
                    
                }
                
                export type Correctietypes_vennootschapsbelasting = _pi.Dictionary<Correctietypes_vennootschapsbelasting.D>
                
                export namespace Grootboekrekeningen {
                    
                    export namespace D {
                        
                        export type Hoofdcategorie = string
                        
                        export type Subcategorie = string
                        
                        export namespace Zijde {
                            
                            export namespace Kosten {
                                
                                export namespace Correctie_op_vennootschapsbelasting {
                                    
                                    export namespace Ja {
                                        
                                        export type Correctietype = string
                                        
                                    }
                                    
                                    export type Ja = {
                                        readonly 'Correctietype': Ja.Correctietype
                                    }
                                    
                                    export namespace Nee {
                                        
                                    }
                                    
                                    export type Nee = null
                                    
                                }
                                
                                export type Correctie_op_vennootschapsbelasting = 
                                    | readonly ['Ja', Correctie_op_vennootschapsbelasting.Ja]
                                    | readonly ['Nee', Correctie_op_vennootschapsbelasting.Nee]
                                
                            }
                            
                            export type Kosten = {
                                readonly 'Correctie op vennootschapsbelasting': Kosten.Correctie_op_vennootschapsbelasting
                            }
                            
                            export namespace Opbrengsten {
                                
                            }
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type Zijde = 
                            | readonly ['Kosten', Zijde.Kosten]
                            | readonly ['Opbrengsten', Zijde.Opbrengsten]
                        
                    }
                    
                    export type D = {
                        readonly 'Hoofdcategorie': D.Hoofdcategorie
                        readonly 'Subcategorie': D.Subcategorie
                        readonly 'Zijde': D.Zijde
                    }
                    
                }
                
                export type Grootboekrekeningen = _pi.Dictionary<Grootboekrekeningen.D>
                
                export namespace Hoofdcategorieen {
                    
                    export namespace D {
                        
                        export namespace Zijde {
                            
                            export namespace Kosten {
                                
                            }
                            
                            export type Kosten = null
                            
                            export namespace Opbrengsten {
                                
                            }
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type Zijde = 
                            | readonly ['Kosten', Zijde.Kosten]
                            | readonly ['Opbrengsten', Zijde.Opbrengsten]
                        
                        export namespace Subcategorieen {
                            
                            export namespace D {
                                
                                export type Hoofdcategorie_fiscus = string
                                
                                export type Subcategorie_fiscus = string
                                
                            }
                            
                            export type D = {
                                readonly 'Hoofdcategorie fiscus': D.Hoofdcategorie_fiscus
                                readonly 'Subcategorie fiscus': D.Subcategorie_fiscus
                            }
                            
                        }
                        
                        export type Subcategorieen = _pi.Dictionary<Subcategorieen.D>
                        
                    }
                    
                    export type D = {
                        readonly 'Zijde': D.Zijde
                        readonly 'Subcategorieen': D.Subcategorieen
                    }
                    
                }
                
                export type Hoofdcategorieen = _pi.Dictionary<Hoofdcategorieen.D>
                
                export namespace Hoofdcategorieen_fiscus {
                    
                    export namespace D {
                        
                        export namespace Zijde {
                            
                            export namespace Kosten {
                                
                            }
                            
                            export type Kosten = null
                            
                            export namespace Opbrengsten {
                                
                            }
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type Zijde = 
                            | readonly ['Kosten', Zijde.Kosten]
                            | readonly ['Opbrengsten', Zijde.Opbrengsten]
                        
                        export namespace Subcategorieen {
                            
                            export namespace D {
                                
                            }
                            
                            export type D = null
                            
                        }
                        
                        export type Subcategorieen = _pi.Dictionary<Subcategorieen.D>
                        
                    }
                    
                    export type D = {
                        readonly 'Zijde': D.Zijde
                        readonly 'Subcategorieen': D.Subcategorieen
                    }
                    
                }
                
                export type Hoofdcategorieen_fiscus = _pi.Dictionary<Hoofdcategorieen_fiscus.D>
                
            }
            
            export type Resultaat = {
                readonly 'Correctietypes vennootschapsbelasting': Resultaat.Correctietypes_vennootschapsbelasting
                readonly 'Grootboekrekeningen': Resultaat.Grootboekrekeningen
                readonly 'Hoofdcategorieen': Resultaat.Hoofdcategorieen
                readonly 'Hoofdcategorieen fiscus': Resultaat.Hoofdcategorieen_fiscus
            }
            
        }
        
        export type Beheer = {
            readonly 'Balans': Beheer.Balans
            readonly 'BTW-categorieen': Beheer.BTW$mi_categorieen
            readonly 'Gebruikers': Beheer.Gebruikers
            readonly 'Huidige datum': Beheer.Huidige_datum
            readonly 'Resultaat': Beheer.Resultaat
        }
        
        export namespace Informele_rekeningen {
            
            export namespace D {
                
            }
            
            export type D = null
            
        }
        
        export type Informele_rekeningen = _pi.Dictionary<Informele_rekeningen.D>
        
        export namespace Jaren {
            
            export namespace D {
                
                export namespace Afgesloten {
                    
                    export namespace Ja {
                        
                    }
                    
                    export type Ja = null
                    
                    export namespace Nee {
                        
                    }
                    
                    export type Nee = null
                    
                }
                
                export type Afgesloten = 
                    | readonly ['Ja', Afgesloten.Ja]
                    | readonly ['Nee', Afgesloten.Nee]
                
                export namespace Balans_grootboekrekeningen {
                    
                    export namespace D {
                        
                        export namespace Type {
                            
                            export namespace Bankrekening {
                                
                            }
                            
                            export type Bankrekening = null
                            
                            export namespace Overig {
                                
                            }
                            
                            export type Overig = null
                            
                            export namespace Informele_rekening {
                                
                            }
                            
                            export type Informele_rekening = null
                            
                        }
                        
                        export type Type = 
                            | readonly ['Bankrekening', Type.Bankrekening]
                            | readonly ['Overig', Type.Overig]
                            | readonly ['Informele rekening', Type.Informele_rekening]
                        
                    }
                    
                    export type D = {
                        readonly 'Type': D.Type
                    }
                    
                }
                
                export type Balans_grootboekrekeningen = _pi.Dictionary<Balans_grootboekrekeningen.D>
                
                export namespace Bankrekeningen {
                    
                    export namespace D {
                        
                        export type Beginsaldo = number
                        
                        export type Grootboekrekening = string
                        
                        export namespace Mutaties {
                            
                            export namespace D {
                                
                                export type Bedrag = number
                                
                                export type Datum = number
                                
                                export type Omschrijving = string
                                
                                export namespace Status {
                                    
                                    export namespace Nog_te_verwerken {
                                        
                                    }
                                    
                                    export type Nog_te_verwerken = null
                                    
                                    export namespace Verwerkt {
                                        
                                        export namespace Afhandeling {
                                            
                                            export namespace Inkoop {
                                                
                                                export type Jaar = string
                                                
                                                export type Inkoop = string
                                                
                                            }
                                            
                                            export type Inkoop = {
                                                readonly 'Jaar': Inkoop.Jaar
                                                readonly 'Inkoop': Inkoop.Inkoop
                                            }
                                            
                                            export namespace Verrekenpost {
                                                
                                                export type Verrekenpost = string
                                                
                                            }
                                            
                                            export type Verrekenpost = {
                                                readonly 'Verrekenpost': Verrekenpost.Verrekenpost
                                            }
                                            
                                            export namespace BTW$mi_periode {
                                                
                                                export type Jaar = string
                                                
                                                export type BTW$mi_periode = string
                                                
                                            }
                                            
                                            export type BTW$mi_periode = {
                                                readonly 'Jaar': BTW$mi_periode.Jaar
                                                readonly 'BTW-periode': BTW$mi_periode.BTW$mi_periode
                                            }
                                            
                                            export namespace Verkoop {
                                                
                                                export type Jaar = string
                                                
                                                export type Verkoop = string
                                                
                                            }
                                            
                                            export type Verkoop = {
                                                readonly 'Jaar': Verkoop.Jaar
                                                readonly 'Verkoop': Verkoop.Verkoop
                                            }
                                            
                                            export namespace Informele_rekening {
                                                
                                                export type Informele_rekening = string
                                                
                                            }
                                            
                                            export type Informele_rekening = {
                                                readonly 'Informele rekening': Informele_rekening.Informele_rekening
                                            }
                                            
                                        }
                                        
                                        export type Afhandeling = 
                                            | readonly ['Inkoop', Afhandeling.Inkoop]
                                            | readonly ['Verrekenpost', Afhandeling.Verrekenpost]
                                            | readonly ['BTW-periode', Afhandeling.BTW$mi_periode]
                                            | readonly ['Verkoop', Afhandeling.Verkoop]
                                            | readonly ['Informele rekening', Afhandeling.Informele_rekening]
                                        
                                    }
                                    
                                    export type Verwerkt = {
                                        readonly 'Afhandeling': Verwerkt.Afhandeling
                                    }
                                    
                                }
                                
                                export type Status = 
                                    | readonly ['Nog te verwerken', Status.Nog_te_verwerken]
                                    | readonly ['Verwerkt', Status.Verwerkt]
                                
                            }
                            
                            export type D = {
                                readonly 'Bedrag': D.Bedrag
                                readonly 'Datum': D.Datum
                                readonly 'Omschrijving': D.Omschrijving
                                readonly 'Status': D.Status
                            }
                            
                        }
                        
                        export type Mutaties = _pi.Dictionary<Mutaties.D>
                        
                        export namespace Nieuw {
                            
                            export namespace Ja {
                                
                            }
                            
                            export type Ja = null
                            
                            export namespace Nee {
                                
                                export type Jaar = string
                                
                                export type Rekening = string
                                
                            }
                            
                            export type Nee = {
                                readonly 'Jaar': Nee.Jaar
                                readonly 'Rekening': Nee.Rekening
                            }
                            
                        }
                        
                        export type Nieuw = 
                            | readonly ['Ja', Nieuw.Ja]
                            | readonly ['Nee', Nieuw.Nee]
                        
                    }
                    
                    export type D = {
                        readonly 'Beginsaldo': D.Beginsaldo
                        readonly 'Grootboekrekening': D.Grootboekrekening
                        readonly 'Mutaties': D.Mutaties
                        readonly 'Nieuw': D.Nieuw
                    }
                    
                }
                
                export type Bankrekeningen = _pi.Dictionary<Bankrekeningen.D>
                
                export type Beginsaldo_nog_aan_te_geven_BTW = number
                
                export type Beginsaldo_winstreserve = number
                
                export namespace BTW_periode_saldo {
                    
                    export type Grootboekrekening = string
                    
                }
                
                export type BTW_periode_saldo = {
                    readonly 'Grootboekrekening': BTW_periode_saldo.Grootboekrekening
                }
                
                export namespace BTW_periodes {
                    
                    export namespace D {
                        
                        export namespace _11$pe__BTW$mi_categorieen {
                            
                            export namespace D {
                                
                            }
                            
                            export type D = null
                            
                        }
                        
                        export type _11$pe__BTW$mi_categorieen = _pi.Dictionary<_11$pe__BTW$mi_categorieen.D>
                        
                        export namespace Documenten {
                            
                            export namespace D {
                                
                                export type Bestand = Bestandsnaam_
                                
                            }
                            
                            export type D = {
                                readonly 'Bestand': D.Bestand
                            }
                            
                        }
                        
                        export type Documenten = _pi.Dictionary<Documenten.D>
                        
                        export type Omschrijving = string
                        
                        export namespace Status {
                            
                            export namespace Aangegeven {
                                
                                export type Afronding = number
                                
                                export type Bedrag = number
                                
                                export type Datum = number
                                
                            }
                            
                            export type Aangegeven = {
                                readonly 'Afronding': Aangegeven.Afronding
                                readonly 'Bedrag': Aangegeven.Bedrag
                                readonly 'Datum': Aangegeven.Datum
                            }
                            
                            export namespace Openstaand {
                                
                            }
                            
                            export type Openstaand = null
                            
                        }
                        
                        export type Status = 
                            | readonly ['Aangegeven', Status.Aangegeven]
                            | readonly ['Openstaand', Status.Openstaand]
                        
                    }
                    
                    export type D = {
                        readonly '1. BTW-categorieen': D._11$pe__BTW$mi_categorieen
                        readonly 'Documenten': D.Documenten
                        readonly 'Omschrijving': D.Omschrijving
                        readonly 'Status': D.Status
                    }
                    
                }
                
                export type BTW_periodes = _pi.Dictionary<BTW_periodes.D>
                
                export namespace Eerste_boekjaar {
                    
                    export namespace Ja {
                        
                    }
                    
                    export type Ja = null
                    
                    export namespace Nee {
                        
                        export type Vorig_boekjaar = string
                        
                    }
                    
                    export type Nee = {
                        readonly 'Vorig boekjaar': Nee.Vorig_boekjaar
                    }
                    
                }
                
                export type Eerste_boekjaar = 
                    | readonly ['Ja', Eerste_boekjaar.Ja]
                    | readonly ['Nee', Eerste_boekjaar.Nee]
                
                export type Grootboekrekening_voor_BTW_afrondingen = string
                
                export type Grootboekrekening_voor_nog_aan_te_geven_BTW = string
                
                export type Grootboekrekening_voor_resultaat_dit_jaar = string
                
                export type Grootboekrekening_voor_winstreserve = string
                
                export namespace Informele_rekeningen {
                    
                    export namespace D {
                        
                        export type Beginsaldo = number
                        
                        export type Grootboekrekening = string
                        
                        export namespace Nieuw {
                            
                            export namespace Ja {
                                
                            }
                            
                            export type Ja = null
                            
                            export namespace Nee {
                                
                                export type Jaar = string
                                
                                export type Rekening = string
                                
                            }
                            
                            export type Nee = {
                                readonly 'Jaar': Nee.Jaar
                                readonly 'Rekening': Nee.Rekening
                            }
                            
                        }
                        
                        export type Nieuw = 
                            | readonly ['Ja', Nieuw.Ja]
                            | readonly ['Nee', Nieuw.Nee]
                        
                    }
                    
                    export type D = {
                        readonly 'Beginsaldo': D.Beginsaldo
                        readonly 'Grootboekrekening': D.Grootboekrekening
                        readonly 'Nieuw': D.Nieuw
                    }
                    
                }
                
                export type Informele_rekeningen = _pi.Dictionary<Informele_rekeningen.D>
                
                export namespace Inkopen {
                    
                    export namespace D {
                        
                        export namespace Afhandeling {
                            
                            export namespace Mutaties {
                                
                            }
                            
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                
                                export type Rekening_courant = string
                                
                            }
                            
                            export type Rekening_courant = {
                                readonly 'Rekening courant': Rekening_courant.Rekening_courant
                            }
                            
                        }
                        
                        export type Afhandeling = 
                            | readonly ['Mutaties', Afhandeling.Mutaties]
                            | readonly ['Rekening courant', Afhandeling.Rekening_courant]
                        
                        export namespace BTW$mi_regime {
                            
                            export namespace Binnenland$cl__heffing_verlegd {
                                
                            }
                            
                            export type Binnenland$cl__heffing_verlegd = null
                            
                            export namespace Geen_BTW_van_toepassing {
                                
                                export type BTW$mi_periode = string
                                
                            }
                            
                            export type Geen_BTW_van_toepassing = {
                                readonly 'BTW-periode': Geen_BTW_van_toepassing.BTW$mi_periode
                            }
                            
                            export namespace Import_van_buiten_de_EU {
                                
                            }
                            
                            export type Import_van_buiten_de_EU = null
                            
                            export namespace Intracommunautair {
                                
                            }
                            
                            export type Intracommunautair = null
                            
                            export namespace Standaard {
                                
                                export type BTW$mi_periode = string
                                
                            }
                            
                            export type Standaard = {
                                readonly 'BTW-periode': Standaard.BTW$mi_periode
                            }
                            
                        }
                        
                        export type BTW$mi_regime = 
                            | readonly ['Binnenland: heffing verlegd', BTW$mi_regime.Binnenland$cl__heffing_verlegd]
                            | readonly ['Geen BTW van toepassing', BTW$mi_regime.Geen_BTW_van_toepassing]
                            | readonly ['Import van buiten de EU', BTW$mi_regime.Import_van_buiten_de_EU]
                            | readonly ['Intracommunautair', BTW$mi_regime.Intracommunautair]
                            | readonly ['Standaard', BTW$mi_regime.Standaard]
                        
                        export namespace Brondocument {
                            
                            export namespace Toegevoegd {
                                
                                export type Document = Bestandsnaam_
                                
                            }
                            
                            export type Toegevoegd = {
                                readonly 'Document': Toegevoegd.Document
                            }
                            
                            export namespace Niet_van_toepassing {
                                
                            }
                            
                            export type Niet_van_toepassing = null
                            
                            export namespace Ontbreekt {
                                
                            }
                            
                            export type Ontbreekt = null
                            
                            export namespace Nog_toevoegen {
                                
                            }
                            
                            export type Nog_toevoegen = null
                            
                        }
                        
                        export type Brondocument = 
                            | readonly ['Toegevoegd', Brondocument.Toegevoegd]
                            | readonly ['Niet van toepassing', Brondocument.Niet_van_toepassing]
                            | readonly ['Ontbreekt', Brondocument.Ontbreekt]
                            | readonly ['Nog toevoegen', Brondocument.Nog_toevoegen]
                        
                        export type Datum = number
                        
                        export namespace Regels {
                            
                            export namespace D {
                                
                                export namespace Bedrag {
                                    
                                    export namespace Bekend {
                                        
                                        export type BTW$mi_bedrag = number
                                        
                                        export type Bedrag_inclusief_geheven_BTW = number
                                        
                                    }
                                    
                                    export type Bekend = {
                                        readonly 'BTW-bedrag': Bekend.BTW$mi_bedrag
                                        readonly 'Bedrag inclusief geheven BTW': Bekend.Bedrag_inclusief_geheven_BTW
                                    }
                                    
                                }
                                
                                export type Bedrag = 
                                    | readonly ['Bekend', Bedrag.Bekend]
                                
                                export type Omschrijving = string
                                
                                export namespace Type {
                                    
                                    export namespace Balans {
                                        
                                        export type Balans_item = string
                                        
                                    }
                                    
                                    export type Balans = {
                                        readonly 'Balans item': Balans.Balans_item
                                    }
                                    
                                    export namespace Kosten {
                                        
                                        export type Grootboekrekening = string
                                        
                                    }
                                    
                                    export type Kosten = {
                                        readonly 'Grootboekrekening': Kosten.Grootboekrekening
                                    }
                                    
                                }
                                
                                export type Type = 
                                    | readonly ['Balans', Type.Balans]
                                    | readonly ['Kosten', Type.Kosten]
                                
                            }
                            
                            export type D = {
                                readonly 'Bedrag': D.Bedrag
                                readonly 'Omschrijving': D.Omschrijving
                                readonly 'Type': D.Type
                            }
                            
                        }
                        
                        export type Regels = _pi.Dictionary<Regels.D>
                        
                        export namespace Type {
                            
                            export namespace Bonnetje {
                                
                            }
                            
                            export type Bonnetje = null
                            
                            export namespace Inkoop_$po_met_crediteur$pc_ {
                                
                                export type Crediteur = string
                                
                                export type Factuurnummer = string
                                
                            }
                            
                            export type Inkoop_$po_met_crediteur$pc_ = {
                                readonly 'Crediteur': Inkoop_$po_met_crediteur$pc_.Crediteur
                                readonly 'Factuurnummer': Inkoop_$po_met_crediteur$pc_.Factuurnummer
                            }
                            
                            export namespace Loonheffing {
                                
                                export type Ronde = string
                                
                            }
                            
                            export type Loonheffing = {
                                readonly 'Ronde': Loonheffing.Ronde
                            }
                            
                            export namespace Salaris {
                                
                                export type Ronde = string
                                
                                export type Medewerker = string
                                
                            }
                            
                            export type Salaris = {
                                readonly 'Ronde': Salaris.Ronde
                                readonly 'Medewerker': Salaris.Medewerker
                            }
                            
                        }
                        
                        export type Type = 
                            | readonly ['Bonnetje', Type.Bonnetje]
                            | readonly ['Inkoop (met crediteur)', Type.Inkoop_$po_met_crediteur$pc_]
                            | readonly ['Loonheffing', Type.Loonheffing]
                            | readonly ['Salaris', Type.Salaris]
                        
                    }
                    
                    export type D = {
                        readonly 'Afhandeling': D.Afhandeling
                        readonly 'BTW-regime': D.BTW$mi_regime
                        readonly 'Brondocument': D.Brondocument
                        readonly 'Datum': D.Datum
                        readonly 'Regels': D.Regels
                        readonly 'Type': D.Type
                    }
                    
                }
                
                export type Inkopen = _pi.Dictionary<Inkopen.D>
                
                export namespace Inkoop_saldo {
                    
                    export type Grootboekrekening = string
                    
                }
                
                export type Inkoop_saldo = {
                    readonly 'Grootboekrekening': Inkoop_saldo.Grootboekrekening
                }
                
                export namespace Overige_balans_items {
                    
                    export namespace D {
                        
                        export type Beginsaldo = number
                        
                        export type Grootboekrekening = string
                        
                        export namespace Memoriaal_boekingen {
                            
                            export namespace D {
                                
                                export type Bedrag = number
                                
                                export type Datum = number
                                
                                export type Grootboekrekening = string
                                
                                export type Omschrijving = string
                                
                            }
                            
                            export type D = {
                                readonly 'Bedrag': D.Bedrag
                                readonly 'Datum': D.Datum
                                readonly 'Grootboekrekening': D.Grootboekrekening
                                readonly 'Omschrijving': D.Omschrijving
                            }
                            
                        }
                        
                        export type Memoriaal_boekingen = _pi.Dictionary<Memoriaal_boekingen.D>
                        
                        export namespace Nieuw {
                            
                            export namespace Ja {
                                
                            }
                            
                            export type Ja = null
                            
                            export namespace Nee {
                                
                                export type Jaar = string
                                
                                export type Balans_item = string
                                
                            }
                            
                            export type Nee = {
                                readonly 'Jaar': Nee.Jaar
                                readonly 'Balans item': Nee.Balans_item
                            }
                            
                        }
                        
                        export type Nieuw = 
                            | readonly ['Ja', Nieuw.Ja]
                            | readonly ['Nee', Nieuw.Nee]
                        
                    }
                    
                    export type D = {
                        readonly 'Beginsaldo': D.Beginsaldo
                        readonly 'Grootboekrekening': D.Grootboekrekening
                        readonly 'Memoriaal boekingen': D.Memoriaal_boekingen
                        readonly 'Nieuw': D.Nieuw
                    }
                    
                }
                
                export type Overige_balans_items = _pi.Dictionary<Overige_balans_items.D>
                
                export namespace Resultaat_grootboekrekeningen {
                    
                    export namespace D {
                        
                    }
                    
                    export type D = null
                    
                }
                
                export type Resultaat_grootboekrekeningen = _pi.Dictionary<Resultaat_grootboekrekeningen.D>
                
                export namespace Salarisrondes {
                    
                    export namespace D {
                        
                    }
                    
                    export type D = null
                    
                }
                
                export type Salarisrondes = _pi.Dictionary<Salarisrondes.D>
                
                export type Startdatum_boekjaar = number
                
                export namespace Verkoop_saldo {
                    
                    export type Grootboekrekening = string
                    
                }
                
                export type Verkoop_saldo = {
                    readonly 'Grootboekrekening': Verkoop_saldo.Grootboekrekening
                }
                
                export namespace Verkopen {
                    
                    export namespace D {
                        
                        export namespace Afhandeling {
                            
                            export namespace Mutaties {
                                
                            }
                            
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                
                                export type Rekening_courant = string
                                
                            }
                            
                            export type Rekening_courant = {
                                readonly 'Rekening courant': Rekening_courant.Rekening_courant
                            }
                            
                        }
                        
                        export type Afhandeling = 
                            | readonly ['Mutaties', Afhandeling.Mutaties]
                            | readonly ['Rekening courant', Afhandeling.Rekening_courant]
                        
                        export type Betalingstermijn = number
                        
                        export type BTW$mi_periode = string
                        
                        export namespace Brondocument {
                            
                            export namespace Toegevoegd {
                                
                                export type Document = Bestandsnaam_
                                
                            }
                            
                            export type Toegevoegd = {
                                readonly 'Document': Toegevoegd.Document
                            }
                            
                        }
                        
                        export type Brondocument = 
                            | readonly ['Toegevoegd', Brondocument.Toegevoegd]
                        
                        export namespace Contracttype {
                            
                            export namespace Project {
                                
                                export type Project = string
                                
                                export type Offerte = string
                                
                            }
                            
                            export type Project = {
                                readonly 'Project': Project.Project
                                readonly 'Offerte': Project.Offerte
                            }
                            
                            export namespace Licentieovereenkomst {
                                
                                export type Overeenkomst = string
                                
                            }
                            
                            export type Licentieovereenkomst = {
                                readonly 'Overeenkomst': Licentieovereenkomst.Overeenkomst
                            }
                            
                        }
                        
                        export type Contracttype = 
                            | readonly ['Project', Contracttype.Project]
                            | readonly ['Licentieovereenkomst', Contracttype.Licentieovereenkomst]
                        
                        export type Datum = number
                        
                        export type Debiteur = string
                        
                        export namespace Regels {
                            
                            export namespace D {
                                
                                export namespace BTW$mi_regime {
                                    
                                    export namespace Intracommunautair {
                                        
                                    }
                                    
                                    export type Intracommunautair = null
                                    
                                    export namespace Standaard {
                                        
                                        export type BTW$mi_categorie = string
                                        
                                    }
                                    
                                    export type Standaard = {
                                        readonly 'BTW-categorie': Standaard.BTW$mi_categorie
                                    }
                                    
                                    export namespace Binnenland$cl__heffing_verlegd {
                                        
                                    }
                                    
                                    export type Binnenland$cl__heffing_verlegd = null
                                    
                                }
                                
                                export type BTW$mi_regime = 
                                    | readonly ['Intracommunautair', BTW$mi_regime.Intracommunautair]
                                    | readonly ['Standaard', BTW$mi_regime.Standaard]
                                    | readonly ['Binnenland: heffing verlegd', BTW$mi_regime.Binnenland$cl__heffing_verlegd]
                                
                                export type Bedrag_exclusief_BTW = number
                                
                                export namespace Contracttype {
                                    
                                    export namespace Project {
                                        
                                        export type Opbrengst = string
                                        
                                    }
                                    
                                    export type Project = {
                                        readonly 'Opbrengst': Project.Opbrengst
                                    }
                                    
                                    export namespace Los {
                                        
                                    }
                                    
                                    export type Los = null
                                    
                                    export namespace Licentieovereenkomst {
                                        
                                        export type Periode = string
                                        
                                    }
                                    
                                    export type Licentieovereenkomst = {
                                        readonly 'Periode': Licentieovereenkomst.Periode
                                    }
                                    
                                }
                                
                                export type Contracttype = 
                                    | readonly ['Project', Contracttype.Project]
                                    | readonly ['Los', Contracttype.Los]
                                    | readonly ['Licentieovereenkomst', Contracttype.Licentieovereenkomst]
                                
                                export type Omschrijving = string
                                
                                export namespace Type {
                                    
                                    export namespace Opbrengsten {
                                        
                                        export type Grootboekrekening = string
                                        
                                    }
                                    
                                    export type Opbrengsten = {
                                        readonly 'Grootboekrekening': Opbrengsten.Grootboekrekening
                                    }
                                    
                                    export namespace Balans {
                                        
                                        export type Balans_item = string
                                        
                                    }
                                    
                                    export type Balans = {
                                        readonly 'Balans item': Balans.Balans_item
                                    }
                                    
                                }
                                
                                export type Type = 
                                    | readonly ['Opbrengsten', Type.Opbrengsten]
                                    | readonly ['Balans', Type.Balans]
                                
                            }
                            
                            export type D = {
                                readonly 'BTW-regime': D.BTW$mi_regime
                                readonly 'Bedrag exclusief BTW': D.Bedrag_exclusief_BTW
                                readonly 'Contracttype': D.Contracttype
                                readonly 'Omschrijving': D.Omschrijving
                                readonly 'Type': D.Type
                            }
                            
                        }
                        
                        export type Regels = _pi.Dictionary<Regels.D>
                        
                    }
                    
                    export type D = {
                        readonly 'Afhandeling': D.Afhandeling
                        readonly 'Betalingstermijn': D.Betalingstermijn
                        readonly 'BTW-periode': D.BTW$mi_periode
                        readonly 'Brondocument': D.Brondocument
                        readonly 'Contracttype': D.Contracttype
                        readonly 'Datum': D.Datum
                        readonly 'Debiteur': D.Debiteur
                        readonly 'Regels': D.Regels
                    }
                    
                }
                
                export type Verkopen = _pi.Dictionary<Verkopen.D>
                
                export namespace Verrekenposten {
                    
                    export namespace D {
                        
                        export namespace Mutaties {
                            
                            export namespace D {
                                
                                export type Bedrag = number
                                
                                export namespace Afhandeling {
                                    
                                    export namespace Inkoop {
                                        
                                        export type Jaar = string
                                        
                                        export type Inkoop = string
                                        
                                    }
                                    
                                    export type Inkoop = {
                                        readonly 'Jaar': Inkoop.Jaar
                                        readonly 'Inkoop': Inkoop.Inkoop
                                    }
                                    
                                    export namespace Informele_rekening {
                                        
                                        export type Informele_rekening = string
                                        
                                    }
                                    
                                    export type Informele_rekening = {
                                        readonly 'Informele rekening': Informele_rekening.Informele_rekening
                                    }
                                    
                                    export namespace Verkoop {
                                        
                                        export type Jaar = string
                                        
                                        export type Verkoop = string
                                        
                                    }
                                    
                                    export type Verkoop = {
                                        readonly 'Jaar': Verkoop.Jaar
                                        readonly 'Verkoop': Verkoop.Verkoop
                                    }
                                    
                                    export namespace BTW$mi_periode {
                                        
                                        export type Jaar = string
                                        
                                        export type BTW$mi_periode = string
                                        
                                    }
                                    
                                    export type BTW$mi_periode = {
                                        readonly 'Jaar': BTW$mi_periode.Jaar
                                        readonly 'BTW-periode': BTW$mi_periode.BTW$mi_periode
                                    }
                                    
                                }
                                
                                export type Afhandeling = 
                                    | readonly ['Inkoop', Afhandeling.Inkoop]
                                    | readonly ['Informele rekening', Afhandeling.Informele_rekening]
                                    | readonly ['Verkoop', Afhandeling.Verkoop]
                                    | readonly ['BTW-periode', Afhandeling.BTW$mi_periode]
                                
                            }
                            
                            export type D = {
                                readonly 'Bedrag': D.Bedrag
                                readonly 'Afhandeling': D.Afhandeling
                            }
                            
                        }
                        
                        export type Mutaties = _pi.Dictionary<Mutaties.D>
                        
                    }
                    
                    export type D = {
                        readonly 'Mutaties': D.Mutaties
                    }
                    
                }
                
                export type Verrekenposten = _pi.Dictionary<Verrekenposten.D>
                
            }
            
            export type D = {
                readonly 'Afgesloten': D.Afgesloten
                readonly 'Balans grootboekrekeningen': D.Balans_grootboekrekeningen
                readonly 'Bankrekeningen': D.Bankrekeningen
                readonly 'Beginsaldo nog aan te geven BTW': D.Beginsaldo_nog_aan_te_geven_BTW
                readonly 'Beginsaldo winstreserve': D.Beginsaldo_winstreserve
                readonly 'BTW periode saldo': D.BTW_periode_saldo
                readonly 'BTW periodes': D.BTW_periodes
                readonly 'Eerste boekjaar': D.Eerste_boekjaar
                readonly 'Grootboekrekening voor BTW afrondingen': D.Grootboekrekening_voor_BTW_afrondingen
                readonly 'Grootboekrekening voor nog aan te geven BTW': D.Grootboekrekening_voor_nog_aan_te_geven_BTW
                readonly 'Grootboekrekening voor resultaat dit jaar': D.Grootboekrekening_voor_resultaat_dit_jaar
                readonly 'Grootboekrekening voor winstreserve': D.Grootboekrekening_voor_winstreserve
                readonly 'Informele rekeningen': D.Informele_rekeningen
                readonly 'Inkopen': D.Inkopen
                readonly 'Inkoop saldo': D.Inkoop_saldo
                readonly 'Overige balans items': D.Overige_balans_items
                readonly 'Resultaat grootboekrekeningen': D.Resultaat_grootboekrekeningen
                readonly 'Salarisrondes': D.Salarisrondes
                readonly 'Startdatum boekjaar': D.Startdatum_boekjaar
                readonly 'Verkoop saldo': D.Verkoop_saldo
                readonly 'Verkopen': D.Verkopen
                readonly 'Verrekenposten': D.Verrekenposten
            }
            
        }
        
        export type Jaren = _pi.Dictionary<Jaren.D>
        
        export namespace Klanten {
            
            export namespace D {
                
                export namespace Licentieovereenkomsten {
                    
                    export namespace D {
                        
                        export namespace Periodes {
                            
                            export namespace D {
                                
                                export type Bedrag = number
                                
                            }
                            
                            export type D = {
                                readonly 'Bedrag': D.Bedrag
                            }
                            
                        }
                        
                        export type Periodes = _pi.Dictionary<Periodes.D>
                        
                    }
                    
                    export type D = {
                        readonly 'Periodes': D.Periodes
                    }
                    
                }
                
                export type Licentieovereenkomsten = _pi.Dictionary<Licentieovereenkomsten.D>
                
                export namespace Projecten {
                    
                    export namespace D {
                        
                        export namespace Offertes {
                            
                            export namespace D {
                                
                                export namespace Opbrengsten {
                                    
                                    export namespace D {
                                        
                                        export namespace Type {
                                            
                                            export namespace Project {
                                                
                                                export type Bedrag = number
                                                
                                                export type Betaaldatum = number
                                                
                                            }
                                            
                                            export type Project = {
                                                readonly 'Bedrag': Project.Bedrag
                                                readonly 'Betaaldatum': Project.Betaaldatum
                                            }
                                            
                                        }
                                        
                                        export type Type = 
                                            | readonly ['Project', Type.Project]
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'Type': D.Type
                                    }
                                    
                                }
                                
                                export type Opbrengsten = _pi.Dictionary<Opbrengsten.D>
                                
                            }
                            
                            export type D = {
                                readonly 'Opbrengsten': D.Opbrengsten
                            }
                            
                        }
                        
                        export type Offertes = _pi.Dictionary<Offertes.D>
                        
                    }
                    
                    export type D = {
                        readonly 'Offertes': D.Offertes
                    }
                    
                }
                
                export type Projecten = _pi.Dictionary<Projecten.D>
                
            }
            
            export type D = {
                readonly 'Licentieovereenkomsten': D.Licentieovereenkomsten
                readonly 'Projecten': D.Projecten
            }
            
        }
        
        export type Klanten = _pi.Dictionary<Klanten.D>
        
        export namespace Leveranciers {
            
            export namespace D {
                
            }
            
            export type D = null
            
        }
        
        export type Leveranciers = _pi.Dictionary<Leveranciers.D>
        
        export namespace Medewerkers {
            
            export namespace D {
                
            }
            
            export type D = null
            
        }
        
        export type Medewerkers = _pi.Dictionary<Medewerkers.D>
        
    }
    
    export type Root_ = {
        readonly 'Bankrekeningen': Root_.Bankrekeningen
        readonly 'Beheer': Root_.Beheer
        readonly 'Informele rekeningen': Root_.Informele_rekeningen
        readonly 'Jaren': Root_.Jaren
        readonly 'Klanten': Root_.Klanten
        readonly 'Leveranciers': Root_.Leveranciers
        readonly 'Medewerkers': Root_.Medewerkers
    }
    
    export type Bestandsnaam_ = string
    
    export { 
        Root_ as Root, 
        Bestandsnaam_ as Bestandsnaam, 
    }
