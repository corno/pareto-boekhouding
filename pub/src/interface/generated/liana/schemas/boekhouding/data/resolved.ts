
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../../generic/location"

export namespace Fiscaal_ {
    
    export namespace Balans_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export type Activa = null
                
                export type Passiva = null
                
            }
            
            export type Zijde = 
                | readonly ['Activa', Zijde.Activa]
                | readonly ['Passiva', Zijde.Passiva]
            
            export namespace Subcategorieen {
                
                export type D = null
                
            }
            
            export type Subcategorieen = _pi.Dictionary<Subcategorieen.D>
            
        }
        
        export type D = {
            readonly 'Zijde': D.Zijde
            readonly 'Subcategorieen': D.Subcategorieen
        }
        
    }
    
    export type Balans_Hoofdcategorieen = _pi.Dictionary<Balans_Hoofdcategorieen.D>
    
    export namespace Resultaat_Hoofdcategorieen {
        
        export namespace D {
            
            export namespace Zijde {
                
                export type Kosten = null
                
                export type Opbrengsten = null
                
            }
            
            export type Zijde = 
                | readonly ['Kosten', Zijde.Kosten]
                | readonly ['Opbrengsten', Zijde.Opbrengsten]
            
            export namespace Subcategorieen {
                
                export type D = null
                
            }
            
            export type Subcategorieen = _pi.Dictionary<Subcategorieen.D>
            
        }
        
        export type D = {
            readonly 'Zijde': D.Zijde
            readonly 'Subcategorieen': D.Subcategorieen
        }
        
    }
    
    export type Resultaat_Hoofdcategorieen = _pi.Dictionary<Resultaat_Hoofdcategorieen.D>
    
}

export type Fiscaal_ = {
    readonly 'Balans Hoofdcategorieen': Fiscaal_.Balans_Hoofdcategorieen
    readonly 'Resultaat Hoofdcategorieen': Fiscaal_.Resultaat_Hoofdcategorieen
}

export namespace Grootboek_Categorieen_ {
    
    export namespace Correctietypes_vennootschapsbelasting {
        
        export namespace D {
            
            export type Te_corrigeren_promillage = number
            
        }
        
        export type D = {
            readonly 'Te corrigeren promillage': D.Te_corrigeren_promillage
        }
        
    }
    
    export type Correctietypes_vennootschapsbelasting = _pi.Dictionary<Correctietypes_vennootschapsbelasting.D>
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Zijde {
                
                export type Activa = null
                
                export type Passiva = null
                
            }
            
            export type Zijde = 
                | readonly ['Activa', Zijde.Activa]
                | readonly ['Passiva', Zijde.Passiva]
            
            export namespace Subcategorieen {
                
                export namespace D {
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export type entry = Fiscaal_.Balans_Hoofdcategorieen.D
                        
                        export type id = string
                        
                    }
                    
                    export type Hoofdcategorie_fiscus = {
                        readonly 'entry': Hoofdcategorie_fiscus.entry
                        readonly 'id': Hoofdcategorie_fiscus.id
                    }
                    
                    export namespace Subcategorie_fiscus {
                        
                        export type entry = Fiscaal_.Balans_Hoofdcategorieen.D.Subcategorieen.D
                        
                        export type id = string
                        
                    }
                    
                    export type Subcategorie_fiscus = {
                        readonly 'entry': Subcategorie_fiscus.entry
                        readonly 'id': Subcategorie_fiscus.id
                    }
                    
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
    
    export type Balans = _pi.Dictionary<Balans.D>
    
    export namespace Resultaat {
        
        export namespace D {
            
            export namespace Zijde {
                
                export type Kosten = null
                
                export type Opbrengsten = null
                
            }
            
            export type Zijde = 
                | readonly ['Kosten', Zijde.Kosten]
                | readonly ['Opbrengsten', Zijde.Opbrengsten]
            
            export namespace Subcategorieen {
                
                export namespace D {
                    
                    export namespace Hoofdcategorie_fiscus {
                        
                        export type entry = Fiscaal_.Resultaat_Hoofdcategorieen.D
                        
                        export type id = string
                        
                    }
                    
                    export type Hoofdcategorie_fiscus = {
                        readonly 'entry': Hoofdcategorie_fiscus.entry
                        readonly 'id': Hoofdcategorie_fiscus.id
                    }
                    
                    export namespace Subcategorie_fiscus {
                        
                        export type entry = Fiscaal_.Resultaat_Hoofdcategorieen.D.Subcategorieen.D
                        
                        export type id = string
                        
                    }
                    
                    export type Subcategorie_fiscus = {
                        readonly 'entry': Subcategorie_fiscus.entry
                        readonly 'id': Subcategorie_fiscus.id
                    }
                    
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
    
    export type Resultaat = _pi.Dictionary<Resultaat.D>
    
}

export type Grootboek_Categorieen_ = {
    readonly 'Correctietypes vennootschapsbelasting': Grootboek_Categorieen_.Correctietypes_vennootschapsbelasting
    readonly 'Balans': Grootboek_Categorieen_.Balans
    readonly 'Resultaat': Grootboek_Categorieen_.Resultaat
}

export namespace Beheer_ {
    
    export namespace BTW$mi_categorieen {
        
        export namespace D {
            
            export namespace BTW$mi_heffing {
                
                export namespace Ja {
                    
                    export type BTW$mi_promillage = number
                    
                }
                
                export type Ja = {
                    readonly 'BTW-promillage': Ja.BTW$mi_promillage
                }
                
            }
            
            export type BTW$mi_heffing = 
                | readonly ['Ja', BTW$mi_heffing.Ja]
            
        }
        
        export type D = {
            readonly 'BTW-heffing': D.BTW$mi_heffing
        }
        
    }
    
    export type BTW$mi_categorieen = _pi.Dictionary<BTW$mi_categorieen.D>
    
    export namespace Grootboekrekeningen {
        
        export namespace Balans {
            
            export namespace D {
                
                export namespace Hoofdcategorie {
                    
                    export type entry = Grootboek_Categorieen_.Balans.D
                    
                    export type id = string
                    
                }
                
                export type Hoofdcategorie = {
                    readonly 'entry': Hoofdcategorie.entry
                    readonly 'id': Hoofdcategorie.id
                }
                
                export namespace Subcategorie {
                    
                    export type entry = Grootboek_Categorieen_.Balans.D.Subcategorieen.D
                    
                    export type id = string
                    
                }
                
                export type Subcategorie = {
                    readonly 'entry': Subcategorie.entry
                    readonly 'id': Subcategorie.id
                }
                
                export namespace Zijde {
                    
                    export type Activa = null
                    
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
        
        export type Balans = _pi.Dictionary<Balans.D>
        
        export namespace Resultaat {
            
            export namespace D {
                
                export namespace Hoofdcategorie {
                    
                    export type entry = Grootboek_Categorieen_.Resultaat.D
                    
                    export type id = string
                    
                }
                
                export type Hoofdcategorie = {
                    readonly 'entry': Hoofdcategorie.entry
                    readonly 'id': Hoofdcategorie.id
                }
                
                export namespace Subcategorie {
                    
                    export type entry = Grootboek_Categorieen_.Resultaat.D.Subcategorieen.D
                    
                    export type id = string
                    
                }
                
                export type Subcategorie = {
                    readonly 'entry': Subcategorie.entry
                    readonly 'id': Subcategorie.id
                }
                
                export namespace Zijde {
                    
                    export namespace Kosten {
                        
                        export namespace Correctie_op_vennootschapsbelasting {
                            
                            export namespace Ja {
                                
                                export namespace Correctietype {
                                    
                                    export type entry = Grootboek_Categorieen_.Correctietypes_vennootschapsbelasting.D
                                    
                                    export type id = string
                                    
                                }
                                
                                export type Correctietype = {
                                    readonly 'entry': Correctietype.entry
                                    readonly 'id': Correctietype.id
                                }
                                
                            }
                            
                            export type Ja = {
                                readonly 'Correctietype': Ja.Correctietype
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
        
        export type Resultaat = _pi.Dictionary<Resultaat.D>
        
    }
    
    export type Grootboekrekeningen = {
        readonly 'Balans': Grootboekrekeningen.Balans
        readonly 'Resultaat': Grootboekrekeningen.Resultaat
    }
    
    export namespace Rekeningen {
        
        export namespace Bank {
            
            export type D = null
            
        }
        
        export type Bank = _pi.Dictionary<Bank.D>
        
        export namespace Informeel {
            
            export type D = null
            
        }
        
        export type Informeel = _pi.Dictionary<Informeel.D>
        
    }
    
    export type Rekeningen = {
        readonly 'Bank': Rekeningen.Bank
        readonly 'Informeel': Rekeningen.Informeel
    }
    
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
        
        export type D = null
        
    }
    
    export type Leveranciers = _pi.Dictionary<Leveranciers.D>
    
    export namespace Medewerkers {
        
        export type D = null
        
    }
    
    export type Medewerkers = _pi.Dictionary<Medewerkers.D>
    
}

export type Beheer_ = {
    readonly 'BTW-categorieen': Beheer_.BTW$mi_categorieen
    readonly 'Grootboekrekeningen': Beheer_.Grootboekrekeningen
    readonly 'Rekeningen': Beheer_.Rekeningen
    readonly 'Gebruikers': Beheer_.Gebruikers
    readonly 'Klanten': Beheer_.Klanten
    readonly 'Leveranciers': Beheer_.Leveranciers
    readonly 'Medewerkers': Beheer_.Medewerkers
}

export namespace Grootboekrekeningen_ {
    
    export namespace Balans {
        
        export namespace D {
            
            export namespace Type {
                
                export type Bankrekening = null
                
                export type Overig = null
                
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
    
    export type Balans = _pi.Dictionary<Balans.D>
    
    export namespace Resultaat {
        
        export type D = null
        
    }
    
    export type Resultaat = _pi.Dictionary<Resultaat.D>
    
}

export type Grootboekrekeningen_ = {
    readonly 'Balans': Grootboekrekeningen_.Balans
    readonly 'Resultaat': Grootboekrekeningen_.Resultaat
}

export namespace Jaarbeheer_ {
    
    export namespace Resultaat {
        
        export namespace Grootboekrekening_voor_BTW_afrondingen {
            
            export type entry = Grootboekrekeningen_.Resultaat.D
            
            export type id = string
            
        }
        
        export type Grootboekrekening_voor_BTW_afrondingen = {
            readonly 'entry': Grootboekrekening_voor_BTW_afrondingen.entry
            readonly 'id': Grootboekrekening_voor_BTW_afrondingen.id
        }
        
        export namespace Salarisrondes {
            
            export type D = null
            
        }
        
        export type Salarisrondes = _pi.Dictionary<Salarisrondes.D>
        
        export namespace BTW_periodes {
            
            export namespace D {
                
                export namespace _11$pe__BTW$mi_categorieen {
                    
                    export type D = null
                    
                }
                
                export type _11$pe__BTW$mi_categorieen = _pi.Dictionary<_11$pe__BTW$mi_categorieen.D>
                
                export namespace Documenten {
                    
                    export namespace D {
                        
                        export type Bestand = string
                        
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
        
    }
    
    export type Resultaat = {
        readonly 'Grootboekrekening voor BTW afrondingen': Resultaat.Grootboekrekening_voor_BTW_afrondingen
        readonly 'Salarisrondes': Resultaat.Salarisrondes
        readonly 'BTW periodes': Resultaat.BTW_periodes
    }
    
    export namespace Balans {
        
        export namespace Grootboekrekening_voor_nog_aan_te_geven_BTW {
            
            export type entry = Grootboekrekeningen_.Balans.D
            
            export type id = string
            
        }
        
        export type Grootboekrekening_voor_nog_aan_te_geven_BTW = {
            readonly 'entry': Grootboekrekening_voor_nog_aan_te_geven_BTW.entry
            readonly 'id': Grootboekrekening_voor_nog_aan_te_geven_BTW.id
        }
        
        export namespace Grootboekrekening_voor_resultaat_dit_jaar {
            
            export type entry = Grootboekrekeningen_.Balans.D
            
            export type id = string
            
        }
        
        export type Grootboekrekening_voor_resultaat_dit_jaar = {
            readonly 'entry': Grootboekrekening_voor_resultaat_dit_jaar.entry
            readonly 'id': Grootboekrekening_voor_resultaat_dit_jaar.id
        }
        
        export namespace Grootboekrekening_voor_winstreserve {
            
            export type entry = Grootboekrekeningen_.Balans.D
            
            export type id = string
            
        }
        
        export type Grootboekrekening_voor_winstreserve = {
            readonly 'entry': Grootboekrekening_voor_winstreserve.entry
            readonly 'id': Grootboekrekening_voor_winstreserve.id
        }
        
        export namespace Grootboekrekening_voor_Inkoop_saldo {
            
            export type entry = Grootboekrekeningen_.Balans.D
            
            export type id = string
            
        }
        
        export type Grootboekrekening_voor_Inkoop_saldo = {
            readonly 'entry': Grootboekrekening_voor_Inkoop_saldo.entry
            readonly 'id': Grootboekrekening_voor_Inkoop_saldo.id
        }
        
        export namespace Grootboekrekening_voor_Verkoop_saldo {
            
            export type entry = Grootboekrekeningen_.Balans.D
            
            export type id = string
            
        }
        
        export type Grootboekrekening_voor_Verkoop_saldo = {
            readonly 'entry': Grootboekrekening_voor_Verkoop_saldo.entry
            readonly 'id': Grootboekrekening_voor_Verkoop_saldo.id
        }
        
        export type Beginsaldo_nog_aan_te_geven_BTW = number
        
        export type Beginsaldo_winstreserve = number
        
        export namespace Informele_rekeningen {
            
            export namespace D {
                
                export type Beginsaldo = number
                
                export namespace Grootboekrekening {
                    
                    export type entry = Grootboekrekeningen_.Balans.D
                    
                    export type id = string
                    
                }
                
                export type Grootboekrekening = {
                    readonly 'entry': Grootboekrekening.entry
                    readonly 'id': Grootboekrekening.id
                }
                
                export namespace Nieuw {
                    
                    export type Ja = null
                    
                    export namespace Nee {
                        
                        export type Rekening = Verwijzing_naar_Informele_rekening_
                        
                    }
                    
                    export type Nee = {
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
        
        export namespace Bankrekeningen {
            
            export namespace D {
                
                export type Beginsaldo = number
                
                export namespace Grootboekrekening {
                    
                    export type entry = Grootboekrekeningen_.Balans.D
                    
                    export type id = string
                    
                }
                
                export type Grootboekrekening = {
                    readonly 'entry': Grootboekrekening.entry
                    readonly 'id': Grootboekrekening.id
                }
                
                export namespace Nieuw {
                    
                    export type Ja = null
                    
                    export namespace Nee {
                        
                        export type Rekening = Verwijzing_naar_Bankrekening_
                        
                    }
                    
                    export type Nee = {
                        readonly 'Rekening': Nee.Rekening
                    }
                    
                }
                
                export type Nieuw = 
                    | readonly ['Ja', Nieuw.Ja]
                    | readonly ['Nee', Nieuw.Nee]
                
                export namespace Mutaties {
                    
                    export namespace D {
                        
                        export type Bedrag = number
                        
                        export type Datum = number
                        
                        export type Omschrijving = string
                        
                    }
                    
                    export type D = {
                        readonly 'Bedrag': D.Bedrag
                        readonly 'Datum': D.Datum
                        readonly 'Omschrijving': D.Omschrijving
                    }
                    
                }
                
                export type Mutaties = _pi.Dictionary<Mutaties.D>
                
            }
            
            export type D = {
                readonly 'Beginsaldo': D.Beginsaldo
                readonly 'Grootboekrekening': D.Grootboekrekening
                readonly 'Nieuw': D.Nieuw
                readonly 'Mutaties': D.Mutaties
            }
            
        }
        
        export type Bankrekeningen = _pi.Dictionary<Bankrekeningen.D>
        
        export namespace Overige_balans_items {
            
            export type D = Overige_balans_item_
            
        }
        
        export type Overige_balans_items = _pi.Dictionary<Overige_balans_items.D>
        
        export namespace Verrekenposten {
            
            export type D = null
            
        }
        
        export type Verrekenposten = _pi.Dictionary<Verrekenposten.D>
        
    }
    
    export type Balans = {
        readonly 'Grootboekrekening voor nog aan te geven BTW': Balans.Grootboekrekening_voor_nog_aan_te_geven_BTW
        readonly 'Grootboekrekening voor resultaat dit jaar': Balans.Grootboekrekening_voor_resultaat_dit_jaar
        readonly 'Grootboekrekening voor winstreserve': Balans.Grootboekrekening_voor_winstreserve
        readonly 'Grootboekrekening voor Inkoop saldo': Balans.Grootboekrekening_voor_Inkoop_saldo
        readonly 'Grootboekrekening voor Verkoop saldo': Balans.Grootboekrekening_voor_Verkoop_saldo
        readonly 'Beginsaldo nog aan te geven BTW': Balans.Beginsaldo_nog_aan_te_geven_BTW
        readonly 'Beginsaldo winstreserve': Balans.Beginsaldo_winstreserve
        readonly 'Informele rekeningen': Balans.Informele_rekeningen
        readonly 'Bankrekeningen': Balans.Bankrekeningen
        readonly 'Overige balans items': Balans.Overige_balans_items
        readonly 'Verrekenposten': Balans.Verrekenposten
    }
    
}

export type Jaarbeheer_ = {
    readonly 'Resultaat': Jaarbeheer_.Resultaat
    readonly 'Balans': Jaarbeheer_.Balans
}

export namespace Overige_balans_item_ {
    
    export type Beginsaldo = number
    
    export namespace Grootboekrekening {
        
        export type entry = Grootboekrekeningen_.Balans.D
        
        export type id = string
        
    }
    
    export type Grootboekrekening = {
        readonly 'entry': Grootboekrekening.entry
        readonly 'id': Grootboekrekening.id
    }
    
    export namespace Nieuw {
        
        export type Ja = null
        
        export namespace Nee {
            
            export namespace Balans_item {
                
                export type entry = Jaarbeheer_.Balans.Overige_balans_items.D
                
                export type id = string
                
            }
            
            export type Balans_item = {
                readonly 'entry': Balans_item.entry
                readonly 'id': Balans_item.id
            }
            
        }
        
        export type Nee = {
            readonly 'Balans item': Nee.Balans_item
        }
        
    }
    
    export type Nieuw = 
        | readonly ['Ja', Nieuw.Ja]
        | readonly ['Nee', Nieuw.Nee]
    
}

export type Overige_balans_item_ = {
    readonly 'Beginsaldo': Overige_balans_item_.Beginsaldo
    readonly 'Grootboekrekening': Overige_balans_item_.Grootboekrekening
    readonly 'Nieuw': Overige_balans_item_.Nieuw
}

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type entry = Jaarbeheer_.Balans.Informele_rekeningen.D
    
    export type id = string
    
}

export type Verwijzing_naar_Informele_rekening_ = {
    readonly 'entry': Verwijzing_naar_Informele_rekening_.entry
    readonly 'id': Verwijzing_naar_Informele_rekening_.id
}

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type entry = Jaarbeheer_.Balans.Bankrekeningen.D
    
    export type id = string
    
}

export type Verwijzing_naar_Bankrekening_ = {
    readonly 'entry': Verwijzing_naar_Bankrekening_.entry
    readonly 'id': Verwijzing_naar_Bankrekening_.id
}

export namespace Handelstransacties_ {
    
    export namespace Inkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export type Mutaties = null
                
                export namespace Rekening_courant {
                    
                    export namespace Rekening_courant {
                        
                        export type entry = Jaarbeheer_.Balans.Informele_rekeningen.D
                        
                        export type id = string
                        
                    }
                    
                    export type Rekening_courant = {
                        readonly 'entry': Rekening_courant.entry
                        readonly 'id': Rekening_courant.id
                    }
                    
                }
                
                export type Rekening_courant = {
                    readonly 'Rekening courant': Rekening_courant.Rekening_courant
                }
                
            }
            
            export type Afhandeling = 
                | readonly ['Mutaties', Afhandeling.Mutaties]
                | readonly ['Rekening courant', Afhandeling.Rekening_courant]
            
            export namespace BTW$mi_regime {
                
                export type Binnenland$cl__heffing_verlegd = null
                
                export type Geen_BTW_van_toepassing = null
                
                export type Import_van_buiten_de_EU = null
                
                export type Intracommunautair = null
                
                export namespace Standaard {
                    
                    export namespace BTW$mi_periode {
                        
                        export type entry = Jaarbeheer_.Resultaat.BTW_periodes.D
                        
                        export type id = string
                        
                    }
                    
                    export type BTW$mi_periode = {
                        readonly 'entry': BTW$mi_periode.entry
                        readonly 'id': BTW$mi_periode.id
                    }
                    
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
                    
                    export type Document = string
                    
                }
                
                export type Toegevoegd = {
                    readonly 'Document': Toegevoegd.Document
                }
                
                export type Niet_van_toepassing = null
                
                export type Ontbreekt = null
                
            }
            
            export type Brondocument = 
                | readonly ['Toegevoegd', Brondocument.Toegevoegd]
                | readonly ['Niet van toepassing', Brondocument.Niet_van_toepassing]
                | readonly ['Ontbreekt', Brondocument.Ontbreekt]
            
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
                            
                            export namespace Balans_item {
                                
                                export type entry = Jaarbeheer_.Balans.Overige_balans_items.D
                                
                                export type id = string
                                
                            }
                            
                            export type Balans_item = {
                                readonly 'entry': Balans_item.entry
                                readonly 'id': Balans_item.id
                            }
                            
                        }
                        
                        export type Balans = {
                            readonly 'Balans item': Balans.Balans_item
                        }
                        
                        export namespace Kosten {
                            
                            export namespace Grootboekrekening {
                                
                                export type entry = Grootboekrekeningen_.Resultaat.D
                                
                                export type id = string
                                
                            }
                            
                            export type Grootboekrekening = {
                                readonly 'entry': Grootboekrekening.entry
                                readonly 'id': Grootboekrekening.id
                            }
                            
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
                
                export type Bonnetje = null
                
                export namespace Inkoop_$po_met_crediteur$pc_ {
                    
                    export namespace Crediteur {
                        
                        export type entry = Beheer_.Leveranciers.D
                        
                        export type id = string
                        
                    }
                    
                    export type Crediteur = {
                        readonly 'entry': Crediteur.entry
                        readonly 'id': Crediteur.id
                    }
                    
                    export type Factuurnummer = string
                    
                }
                
                export type Inkoop_$po_met_crediteur$pc_ = {
                    readonly 'Crediteur': Inkoop_$po_met_crediteur$pc_.Crediteur
                    readonly 'Factuurnummer': Inkoop_$po_met_crediteur$pc_.Factuurnummer
                }
                
                export namespace Loonheffing {
                    
                    export namespace Ronde {
                        
                        export type entry = Jaarbeheer_.Resultaat.Salarisrondes.D
                        
                        export type id = string
                        
                    }
                    
                    export type Ronde = {
                        readonly 'entry': Ronde.entry
                        readonly 'id': Ronde.id
                    }
                    
                }
                
                export type Loonheffing = {
                    readonly 'Ronde': Loonheffing.Ronde
                }
                
                export namespace Salaris {
                    
                    export namespace Ronde {
                        
                        export type entry = Jaarbeheer_.Resultaat.Salarisrondes.D
                        
                        export type id = string
                        
                    }
                    
                    export type Ronde = {
                        readonly 'entry': Ronde.entry
                        readonly 'id': Ronde.id
                    }
                    
                    export namespace Medewerker {
                        
                        export type entry = Beheer_.Medewerkers.D
                        
                        export type id = string
                        
                    }
                    
                    export type Medewerker = {
                        readonly 'entry': Medewerker.entry
                        readonly 'id': Medewerker.id
                    }
                    
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
    
    export namespace Verkopen {
        
        export namespace D {
            
            export namespace Afhandeling {
                
                export type Mutaties = null
                
                export namespace Rekening_courant {
                    
                    export namespace Rekening_courant {
                        
                        export type entry = Jaarbeheer_.Balans.Informele_rekeningen.D
                        
                        export type id = string
                        
                    }
                    
                    export type Rekening_courant = {
                        readonly 'entry': Rekening_courant.entry
                        readonly 'id': Rekening_courant.id
                    }
                    
                }
                
                export type Rekening_courant = {
                    readonly 'Rekening courant': Rekening_courant.Rekening_courant
                }
                
            }
            
            export type Afhandeling = 
                | readonly ['Mutaties', Afhandeling.Mutaties]
                | readonly ['Rekening courant', Afhandeling.Rekening_courant]
            
            export type Betalingstermijn = number
            
            export namespace BTW$mi_periode {
                
                export type entry = Jaarbeheer_.Resultaat.BTW_periodes.D
                
                export type id = string
                
            }
            
            export type BTW$mi_periode = {
                readonly 'entry': BTW$mi_periode.entry
                readonly 'id': BTW$mi_periode.id
            }
            
            export namespace Brondocument {
                
                export namespace Toegevoegd {
                    
                    export type Document = string
                    
                }
                
                export type Toegevoegd = {
                    readonly 'Document': Toegevoegd.Document
                }
                
            }
            
            export type Brondocument = 
                | readonly ['Toegevoegd', Brondocument.Toegevoegd]
            
            export namespace Debiteur {
                
                export type entry = Beheer_.Klanten.D
                
                export type id = string
                
            }
            
            export type Debiteur = {
                readonly 'entry': Debiteur.entry
                readonly 'id': Debiteur.id
            }
            
            export namespace Contracttype {
                
                export namespace Project {
                    
                    export namespace Project {
                        
                        export type entry = Beheer_.Klanten.D.Projecten.D
                        
                        export type id = string
                        
                    }
                    
                    export type Project = {
                        readonly 'entry': Project.entry
                        readonly 'id': Project.id
                    }
                    
                    export namespace Offerte {
                        
                        export type entry = Beheer_.Klanten.D.Projecten.D.Offertes.D
                        
                        export type id = string
                        
                    }
                    
                    export type Offerte = {
                        readonly 'entry': Offerte.entry
                        readonly 'id': Offerte.id
                    }
                    
                }
                
                export type Project = {
                    readonly 'Project': Project.Project
                    readonly 'Offerte': Project.Offerte
                }
                
                export namespace Licentieovereenkomst {
                    
                    export namespace Overeenkomst {
                        
                        export type entry = Beheer_.Klanten.D.Licentieovereenkomsten.D
                        
                        export type id = string
                        
                    }
                    
                    export type Overeenkomst = {
                        readonly 'entry': Overeenkomst.entry
                        readonly 'id': Overeenkomst.id
                    }
                    
                }
                
                export type Licentieovereenkomst = {
                    readonly 'Overeenkomst': Licentieovereenkomst.Overeenkomst
                }
                
            }
            
            export type Contracttype = 
                | readonly ['Project', Contracttype.Project]
                | readonly ['Licentieovereenkomst', Contracttype.Licentieovereenkomst]
            
            export type Datum = number
            
            export namespace Regels {
                
                export namespace D {
                    
                    export namespace BTW$mi_regime {
                        
                        export type Intracommunautair = null
                        
                        export namespace Standaard {
                            
                            export namespace BTW$mi_categorie {
                                
                                export type entry = Beheer_.BTW$mi_categorieen.D
                                
                                export type id = string
                                
                            }
                            
                            export type BTW$mi_categorie = {
                                readonly 'entry': BTW$mi_categorie.entry
                                readonly 'id': BTW$mi_categorie.id
                            }
                            
                        }
                        
                        export type Standaard = {
                            readonly 'BTW-categorie': Standaard.BTW$mi_categorie
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
                            
                            export namespace Opbrengst {
                                
                                export type entry = Beheer_.Klanten.D.Projecten.D.Offertes.D.Opbrengsten.D
                                
                                export type id = string
                                
                            }
                            
                            export type Opbrengst = {
                                readonly 'entry': Opbrengst.entry
                                readonly 'id': Opbrengst.id
                            }
                            
                        }
                        
                        export type Project = {
                            readonly 'Opbrengst': Project.Opbrengst
                        }
                        
                        export type Los = null
                        
                        export namespace Licentieovereenkomst {
                            
                            export namespace Periode {
                                
                                export type entry = Beheer_.Klanten.D.Licentieovereenkomsten.D.Periodes.D
                                
                                export type id = string
                                
                            }
                            
                            export type Periode = {
                                readonly 'entry': Periode.entry
                                readonly 'id': Periode.id
                            }
                            
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
                            
                            export namespace Grootboekrekening {
                                
                                export type entry = Grootboekrekeningen_.Resultaat.D
                                
                                export type id = string
                                
                            }
                            
                            export type Grootboekrekening = {
                                readonly 'entry': Grootboekrekening.entry
                                readonly 'id': Grootboekrekening.id
                            }
                            
                        }
                        
                        export type Opbrengsten = {
                            readonly 'Grootboekrekening': Opbrengsten.Grootboekrekening
                        }
                        
                        export namespace Balans {
                            
                            export namespace Balans_item {
                                
                                export type entry = Jaarbeheer_.Balans.Overige_balans_items.D
                                
                                export type id = string
                                
                            }
                            
                            export type Balans_item = {
                                readonly 'entry': Balans_item.entry
                                readonly 'id': Balans_item.id
                            }
                            
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
            readonly 'Debiteur': D.Debiteur
            readonly 'Contracttype': D.Contracttype
            readonly 'Datum': D.Datum
            readonly 'Regels': D.Regels
        }
        
    }
    
    export type Verkopen = _pi.Dictionary<Verkopen.D>
    
}

export type Handelstransacties_ = {
    readonly 'Inkopen': Handelstransacties_.Inkopen
    readonly 'Verkopen': Handelstransacties_.Verkopen
}

export namespace Mutaties_ {
    
    export namespace Verrekenpost_mutaties {
        
        export namespace D {
            
            export namespace D {
                
                export type Bedrag = number
                
                export namespace Afhandeling {
                    
                    export type Resultaat = Balans_Resultaat_Mutatie_
                    
                    export namespace Balans {
                        
                        export namespace Informele_rekening {
                            
                            export namespace Informele_rekening {
                                
                                export type entry = Jaarbeheer_.Balans.Informele_rekeningen.D
                                
                                export type id = string
                                
                            }
                            
                            export type Informele_rekening = {
                                readonly 'entry': Informele_rekening.entry
                                readonly 'id': Informele_rekening.id
                            }
                            
                        }
                        
                        export type Informele_rekening = {
                            readonly 'Informele rekening': Informele_rekening.Informele_rekening
                        }
                        
                    }
                    
                    export type Balans = 
                        | readonly ['Informele rekening', Balans.Informele_rekening]
                    
                }
                
                export type Afhandeling = 
                    | readonly ['Resultaat', Afhandeling.Resultaat]
                    | readonly ['Balans', Afhandeling.Balans]
                
            }
            
            export type D = {
                readonly 'Bedrag': D.Bedrag
                readonly 'Afhandeling': D.Afhandeling
            }
            
        }
        
        export type D = _pi.Dictionary<D.D>
        
    }
    
    export type Verrekenpost_mutaties = _pi.Dictionary<Verrekenpost_mutaties.D>
    
    export namespace Bankrekening_Mutatie_Verwerkingen {
        
        export namespace D {
            
            export namespace D {
                
                export type Resultaat = Balans_Resultaat_Mutatie_
                
                export namespace Balans {
                    
                    export namespace Informele_rekening {
                        
                        export namespace Informele_rekening {
                            
                            export type entry = Jaarbeheer_.Balans.Informele_rekeningen.D
                            
                            export type id = string
                            
                        }
                        
                        export type Informele_rekening = {
                            readonly 'entry': Informele_rekening.entry
                            readonly 'id': Informele_rekening.id
                        }
                        
                    }
                    
                    export type Informele_rekening = {
                        readonly 'Informele rekening': Informele_rekening.Informele_rekening
                    }
                    
                    export namespace Verrekenpost {
                        
                        export namespace Verrekenpost {
                            
                            export type entry = Jaarbeheer_.Balans.Verrekenposten.D
                            
                            export type id = string
                            
                        }
                        
                        export type Verrekenpost = {
                            readonly 'entry': Verrekenpost.entry
                            readonly 'id': Verrekenpost.id
                        }
                        
                    }
                    
                    export type Verrekenpost = {
                        readonly 'Verrekenpost': Verrekenpost.Verrekenpost
                    }
                    
                }
                
                export type Balans = 
                    | readonly ['Informele rekening', Balans.Informele_rekening]
                    | readonly ['Verrekenpost', Balans.Verrekenpost]
                
            }
            
            export type D = 
                | readonly ['Resultaat', D.Resultaat]
                | readonly ['Balans', D.Balans]
            
        }
        
        export type D = _pi.Dictionary<D.D>
        
    }
    
    export type Bankrekening_Mutatie_Verwerkingen = _pi.Dictionary<Bankrekening_Mutatie_Verwerkingen.D>
    
    export namespace Memoriaal_boekingen {
        
        export namespace D {
            
            export namespace D {
                
                export type Bedrag = number
                
                export type Datum = number
                
                export type Omschrijving = string
                
                export namespace Grootboekrekening {
                    
                    export type entry = Grootboekrekeningen_.Resultaat.D
                    
                    export type id = string
                    
                }
                
                export type Grootboekrekening = {
                    readonly 'entry': Grootboekrekening.entry
                    readonly 'id': Grootboekrekening.id
                }
                
            }
            
            export type D = {
                readonly 'Bedrag': D.Bedrag
                readonly 'Datum': D.Datum
                readonly 'Omschrijving': D.Omschrijving
                readonly 'Grootboekrekening': D.Grootboekrekening
            }
            
        }
        
        export type D = _pi.Dictionary<D.D>
        
    }
    
    export type Memoriaal_boekingen = _pi.Dictionary<Memoriaal_boekingen.D>
    
}

export type Mutaties_ = {
    readonly 'Verrekenpost mutaties': Mutaties_.Verrekenpost_mutaties
    readonly 'Bankrekening Mutatie Verwerkingen': Mutaties_.Bankrekening_Mutatie_Verwerkingen
    readonly 'Memoriaal boekingen': Mutaties_.Memoriaal_boekingen
}

export namespace Jaren_ {
    
    export namespace D {
        
        export namespace Afgesloten {
            
            export type Ja = null
            
            export type Nee = null
            
        }
        
        export type Afgesloten = 
            | readonly ['Ja', Afgesloten.Ja]
            | readonly ['Nee', Afgesloten.Nee]
        
        export type Startdatum_boekjaar = number
        
        export type Grootboekrekeningen = Grootboekrekeningen_
        
        export type Eerste_boekjaar = Eerste_boekjaar_
        
        export type Jaarbeheer = Jaarbeheer_
        
        export type Handelstransacties = Handelstransacties_
        
        export type Mutaties = Mutaties_
        
    }
    
    export type D = {
        readonly 'Afgesloten': D.Afgesloten
        readonly 'Startdatum boekjaar': D.Startdatum_boekjaar
        readonly 'Grootboekrekeningen': D.Grootboekrekeningen
        readonly 'Eerste boekjaar': D.Eerste_boekjaar
        readonly 'Jaarbeheer': D.Jaarbeheer
        readonly 'Handelstransacties': D.Handelstransacties
        readonly 'Mutaties': D.Mutaties
    }
    
}

export type Jaren_ = _pi.Dictionary<Jaren_.D>

export namespace Balans_Resultaat_Mutatie_ {
    
    export namespace Jaar {
        
        export namespace O {
            
            export type entry = Jaren_.D
            
            export type id = string
            
        }
        
        export type O = {
            readonly 'entry': O.entry
            readonly 'id': O.id
        }
        
    }
    
    export type Jaar = _pi.Optional_Value<Jaar.O>
    
    export namespace type_ {
        
        export namespace Inkoop {
            
            export type entry = Handelstransacties_.Inkopen.D
            
            export type id = string
            
        }
        
        export type Inkoop = {
            readonly 'entry': Inkoop.entry
            readonly 'id': Inkoop.id
        }
        
        export namespace Verkoop {
            
            export type entry = Handelstransacties_.Verkopen.D
            
            export type id = string
            
        }
        
        export type Verkoop = {
            readonly 'entry': Verkoop.entry
            readonly 'id': Verkoop.id
        }
        
        export namespace BTW$mi_periode {
            
            export type entry = Jaarbeheer_.Resultaat.BTW_periodes.D
            
            export type id = string
            
        }
        
        export type BTW$mi_periode = {
            readonly 'entry': BTW$mi_periode.entry
            readonly 'id': BTW$mi_periode.id
        }
        
    }
    
    export type type_ = 
        | readonly ['Inkoop', type_.Inkoop]
        | readonly ['Verkoop', type_.Verkoop]
        | readonly ['BTW-periode', type_.BTW$mi_periode]
    
}

export type Balans_Resultaat_Mutatie_ = {
    readonly 'Jaar': Balans_Resultaat_Mutatie_.Jaar
    readonly 'type': Balans_Resultaat_Mutatie_.type_
}

export namespace Eerste_boekjaar_ {
    
    export type Ja = null
    
    export namespace Nee {
        
        export namespace Vorig_boekjaar {
            
            export type entry = Jaren_.D
            
            export type id = string
            
        }
        
        export type Vorig_boekjaar = {
            readonly 'entry': Vorig_boekjaar.entry
            readonly 'id': Vorig_boekjaar.id
        }
        
    }
    
    export type Nee = {
        readonly 'Vorig boekjaar': Nee.Vorig_boekjaar
    }
    
}

export type Eerste_boekjaar_ = 
    | readonly ['Ja', Eerste_boekjaar_.Ja]
    | readonly ['Nee', Eerste_boekjaar_.Nee]

export namespace Root_ {
    
    export type Fiscaal = Fiscaal_
    
    export type Categorieen = Grootboek_Categorieen_
    
    export type Beheer = Beheer_
    
    export type Jaren = Jaren_
    
}

export type Root_ = {
    readonly 'Fiscaal': Root_.Fiscaal
    readonly 'Categorieen': Root_.Categorieen
    readonly 'Beheer': Root_.Beheer
    readonly 'Jaren': Root_.Jaren
}

export { 
    Fiscaal_ as Fiscaal, 
    Grootboek_Categorieen_ as Grootboek_Categorieen, 
    Beheer_ as Beheer, 
    Grootboekrekeningen_ as Grootboekrekeningen, 
    Jaarbeheer_ as Jaarbeheer, 
    Overige_balans_item_ as Overige_balans_item, 
    Verwijzing_naar_Informele_rekening_ as Verwijzing_naar_Informele_rekening, 
    Verwijzing_naar_Bankrekening_ as Verwijzing_naar_Bankrekening, 
    Handelstransacties_ as Handelstransacties, 
    Mutaties_ as Mutaties, 
    Jaren_ as Jaren, 
    Balans_Resultaat_Mutatie_ as Balans_Resultaat_Mutatie, 
    Eerste_boekjaar_ as Eerste_boekjaar, 
    Root_ as Root, 
}
