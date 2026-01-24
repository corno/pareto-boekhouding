
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../../generic/location"

export namespace Fiscaal_ {
    
    export namespace Balans_Hoofdcategorieen {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace Zijde {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Activa = null
                            
                            export type Passiva = null
                            
                        }
                        
                        export type state = 
                            | readonly ['Activa', state.Activa]
                            | readonly ['Passiva', state.Passiva]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'location': Zijde.location
                        readonly 'state': Zijde.state
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export type entry = null
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'location': Subcategorieen.location
                        readonly 'dictionary': Subcategorieen.dictionary
                    }
                    
                }
                
                export type entry = {
                    readonly 'Zijde': entry.Zijde
                    readonly 'Subcategorieen': entry.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Balans_Hoofdcategorieen = {
        readonly 'location': Balans_Hoofdcategorieen.location
        readonly 'dictionary': Balans_Hoofdcategorieen.dictionary
    }
    
    export namespace Resultaat_Hoofdcategorieen {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace Zijde {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Kosten = null
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type state = 
                            | readonly ['Kosten', state.Kosten]
                            | readonly ['Opbrengsten', state.Opbrengsten]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'location': Zijde.location
                        readonly 'state': Zijde.state
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export type entry = null
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'location': Subcategorieen.location
                        readonly 'dictionary': Subcategorieen.dictionary
                    }
                    
                }
                
                export type entry = {
                    readonly 'Zijde': entry.Zijde
                    readonly 'Subcategorieen': entry.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Resultaat_Hoofdcategorieen = {
        readonly 'location': Resultaat_Hoofdcategorieen.location
        readonly 'dictionary': Resultaat_Hoofdcategorieen.dictionary
    }
    
}

export type Fiscaal_ = {
    readonly 'Balans Hoofdcategorieen': Fiscaal_.Balans_Hoofdcategorieen
    readonly 'Resultaat Hoofdcategorieen': Fiscaal_.Resultaat_Hoofdcategorieen
}

export namespace Grootboek_Categorieen_ {
    
    export namespace Correctietypes_vennootschapsbelasting {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type Te_corrigeren_promillage = number
                    
                }
                
                export type entry = {
                    readonly 'Te corrigeren promillage': entry.Te_corrigeren_promillage
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Correctietypes_vennootschapsbelasting = {
        readonly 'location': Correctietypes_vennootschapsbelasting.location
        readonly 'dictionary': Correctietypes_vennootschapsbelasting.dictionary
    }
    
    export namespace Balans {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace Zijde {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Activa = null
                            
                            export type Passiva = null
                            
                        }
                        
                        export type state = 
                            | readonly ['Activa', state.Activa]
                            | readonly ['Passiva', state.Passiva]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'location': Zijde.location
                        readonly 'state': Zijde.state
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export namespace entry {
                                    
                                    export namespace Hoofdcategorie_fiscus {
                                        
                                        export type location = i__location.Location
                                        
                                        export type key = string
                                        
                                    }
                                    
                                    export type Hoofdcategorie_fiscus = {
                                        readonly 'location': Hoofdcategorie_fiscus.location
                                        readonly 'key': Hoofdcategorie_fiscus.key
                                    }
                                    
                                    export namespace Subcategorie_fiscus {
                                        
                                        export type location = i__location.Location
                                        
                                        export type key = string
                                        
                                    }
                                    
                                    export type Subcategorie_fiscus = {
                                        readonly 'location': Subcategorie_fiscus.location
                                        readonly 'key': Subcategorie_fiscus.key
                                    }
                                    
                                }
                                
                                export type entry = {
                                    readonly 'Hoofdcategorie fiscus': entry.Hoofdcategorie_fiscus
                                    readonly 'Subcategorie fiscus': entry.Subcategorie_fiscus
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'location': Subcategorieen.location
                        readonly 'dictionary': Subcategorieen.dictionary
                    }
                    
                }
                
                export type entry = {
                    readonly 'Zijde': entry.Zijde
                    readonly 'Subcategorieen': entry.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Balans = {
        readonly 'location': Balans.location
        readonly 'dictionary': Balans.dictionary
    }
    
    export namespace Resultaat {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace Zijde {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Kosten = null
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type state = 
                            | readonly ['Kosten', state.Kosten]
                            | readonly ['Opbrengsten', state.Opbrengsten]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'location': Zijde.location
                        readonly 'state': Zijde.state
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export namespace entry {
                                    
                                    export namespace Hoofdcategorie_fiscus {
                                        
                                        export type location = i__location.Location
                                        
                                        export type key = string
                                        
                                    }
                                    
                                    export type Hoofdcategorie_fiscus = {
                                        readonly 'location': Hoofdcategorie_fiscus.location
                                        readonly 'key': Hoofdcategorie_fiscus.key
                                    }
                                    
                                    export namespace Subcategorie_fiscus {
                                        
                                        export type location = i__location.Location
                                        
                                        export type key = string
                                        
                                    }
                                    
                                    export type Subcategorie_fiscus = {
                                        readonly 'location': Subcategorie_fiscus.location
                                        readonly 'key': Subcategorie_fiscus.key
                                    }
                                    
                                }
                                
                                export type entry = {
                                    readonly 'Hoofdcategorie fiscus': entry.Hoofdcategorie_fiscus
                                    readonly 'Subcategorie fiscus': entry.Subcategorie_fiscus
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'location': Subcategorieen.location
                        readonly 'dictionary': Subcategorieen.dictionary
                    }
                    
                }
                
                export type entry = {
                    readonly 'Zijde': entry.Zijde
                    readonly 'Subcategorieen': entry.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Resultaat = {
        readonly 'location': Resultaat.location
        readonly 'dictionary': Resultaat.dictionary
    }
    
}

export type Grootboek_Categorieen_ = {
    readonly 'Correctietypes vennootschapsbelasting': Grootboek_Categorieen_.Correctietypes_vennootschapsbelasting
    readonly 'Balans': Grootboek_Categorieen_.Balans
    readonly 'Resultaat': Grootboek_Categorieen_.Resultaat
}

export namespace Beheer_ {
    
    export namespace BTW$mi_categorieen {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace BTW$mi_heffing {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export namespace Ja {
                                
                                export type BTW$mi_promillage = number
                                
                            }
                            
                            export type Ja = {
                                readonly 'BTW-promillage': Ja.BTW$mi_promillage
                            }
                            
                        }
                        
                        export type state = 
                            | readonly ['Ja', state.Ja]
                        
                    }
                    
                    export type BTW$mi_heffing = {
                        readonly 'location': BTW$mi_heffing.location
                        readonly 'state': BTW$mi_heffing.state
                    }
                    
                }
                
                export type entry = {
                    readonly 'BTW-heffing': entry.BTW$mi_heffing
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type BTW$mi_categorieen = {
        readonly 'location': BTW$mi_categorieen.location
        readonly 'dictionary': BTW$mi_categorieen.dictionary
    }
    
    export namespace Grootboekrekeningen {
        
        export namespace Balans {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export namespace entry {
                        
                        export namespace Hoofdcategorie {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type Hoofdcategorie = {
                            readonly 'location': Hoofdcategorie.location
                            readonly 'key': Hoofdcategorie.key
                        }
                        
                        export namespace Subcategorie {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type Subcategorie = {
                            readonly 'location': Subcategorie.location
                            readonly 'key': Subcategorie.key
                        }
                        
                        export namespace Zijde {
                            
                            export type location = i__location.Location
                            
                            export namespace state {
                                
                                export type Activa = null
                                
                                export type Passiva = null
                                
                            }
                            
                            export type state = 
                                | readonly ['Activa', state.Activa]
                                | readonly ['Passiva', state.Passiva]
                            
                        }
                        
                        export type Zijde = {
                            readonly 'location': Zijde.location
                            readonly 'state': Zijde.state
                        }
                        
                    }
                    
                    export type entry = {
                        readonly 'Hoofdcategorie': entry.Hoofdcategorie
                        readonly 'Subcategorie': entry.Subcategorie
                        readonly 'Zijde': entry.Zijde
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Balans = {
            readonly 'location': Balans.location
            readonly 'dictionary': Balans.dictionary
        }
        
        export namespace Resultaat {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export namespace entry {
                        
                        export namespace Hoofdcategorie {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type Hoofdcategorie = {
                            readonly 'location': Hoofdcategorie.location
                            readonly 'key': Hoofdcategorie.key
                        }
                        
                        export namespace Subcategorie {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type Subcategorie = {
                            readonly 'location': Subcategorie.location
                            readonly 'key': Subcategorie.key
                        }
                        
                        export namespace Zijde {
                            
                            export type location = i__location.Location
                            
                            export namespace state {
                                
                                export namespace Kosten {
                                    
                                    export namespace Correctie_op_vennootschapsbelasting {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state {
                                            
                                            export namespace Ja {
                                                
                                                export namespace Correctietype {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Correctietype = {
                                                    readonly 'location': Correctietype.location
                                                    readonly 'key': Correctietype.key
                                                }
                                                
                                            }
                                            
                                            export type Ja = {
                                                readonly 'Correctietype': Ja.Correctietype
                                            }
                                            
                                            export type Nee = null
                                            
                                        }
                                        
                                        export type state = 
                                            | readonly ['Ja', state.Ja]
                                            | readonly ['Nee', state.Nee]
                                        
                                    }
                                    
                                    export type Correctie_op_vennootschapsbelasting = {
                                        readonly 'location': Correctie_op_vennootschapsbelasting.location
                                        readonly 'state': Correctie_op_vennootschapsbelasting.state
                                    }
                                    
                                }
                                
                                export type Kosten = {
                                    readonly 'Correctie op vennootschapsbelasting': Kosten.Correctie_op_vennootschapsbelasting
                                }
                                
                                export type Opbrengsten = null
                                
                            }
                            
                            export type state = 
                                | readonly ['Kosten', state.Kosten]
                                | readonly ['Opbrengsten', state.Opbrengsten]
                            
                        }
                        
                        export type Zijde = {
                            readonly 'location': Zijde.location
                            readonly 'state': Zijde.state
                        }
                        
                    }
                    
                    export type entry = {
                        readonly 'Hoofdcategorie': entry.Hoofdcategorie
                        readonly 'Subcategorie': entry.Subcategorie
                        readonly 'Zijde': entry.Zijde
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Resultaat = {
            readonly 'location': Resultaat.location
            readonly 'dictionary': Resultaat.dictionary
        }
        
    }
    
    export type Grootboekrekeningen = {
        readonly 'Balans': Grootboekrekeningen.Balans
        readonly 'Resultaat': Grootboekrekeningen.Resultaat
    }
    
    export namespace Rekeningen {
        
        export namespace Bank {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export type entry = null
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Bank = {
            readonly 'location': Bank.location
            readonly 'dictionary': Bank.dictionary
        }
        
        export namespace Informeel {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export type entry = null
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Informeel = {
            readonly 'location': Informeel.location
            readonly 'dictionary': Informeel.dictionary
        }
        
    }
    
    export type Rekeningen = {
        readonly 'Bank': Rekeningen.Bank
        readonly 'Informeel': Rekeningen.Informeel
    }
    
    export namespace Gebruikers {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type Volledige_naam = string
                    
                    export type Wachtwoord = string
                    
                }
                
                export type entry = {
                    readonly 'Volledige naam': entry.Volledige_naam
                    readonly 'Wachtwoord': entry.Wachtwoord
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Gebruikers = {
        readonly 'location': Gebruikers.location
        readonly 'dictionary': Gebruikers.dictionary
    }
    
    export namespace Klanten {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace Licentieovereenkomsten {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export namespace entry {
                                    
                                    export namespace Periodes {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace dictionary {
                                            
                                            export namespace D {
                                                
                                                export type location = i__location.Location
                                                
                                                export namespace entry {
                                                    
                                                    export type Bedrag = number
                                                    
                                                }
                                                
                                                export type entry = {
                                                    readonly 'Bedrag': entry.Bedrag
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'location': D.location
                                                readonly 'entry': D.entry
                                            }
                                            
                                        }
                                        
                                        export type dictionary = _pi.Dictionary<dictionary.D>
                                        
                                    }
                                    
                                    export type Periodes = {
                                        readonly 'location': Periodes.location
                                        readonly 'dictionary': Periodes.dictionary
                                    }
                                    
                                }
                                
                                export type entry = {
                                    readonly 'Periodes': entry.Periodes
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type Licentieovereenkomsten = {
                        readonly 'location': Licentieovereenkomsten.location
                        readonly 'dictionary': Licentieovereenkomsten.dictionary
                    }
                    
                    export namespace Projecten {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export namespace entry {
                                    
                                    export namespace Offertes {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace dictionary {
                                            
                                            export namespace D {
                                                
                                                export type location = i__location.Location
                                                
                                                export namespace entry {
                                                    
                                                    export namespace Opbrengsten {
                                                        
                                                        export type location = i__location.Location
                                                        
                                                        export namespace dictionary {
                                                            
                                                            export namespace D {
                                                                
                                                                export type location = i__location.Location
                                                                
                                                                export namespace entry {
                                                                    
                                                                    export namespace Type {
                                                                        
                                                                        export type location = i__location.Location
                                                                        
                                                                        export namespace state {
                                                                            
                                                                            export namespace Project {
                                                                                
                                                                                export type Bedrag = number
                                                                                
                                                                                export type Betaaldatum = number
                                                                                
                                                                            }
                                                                            
                                                                            export type Project = {
                                                                                readonly 'Bedrag': Project.Bedrag
                                                                                readonly 'Betaaldatum': Project.Betaaldatum
                                                                            }
                                                                            
                                                                        }
                                                                        
                                                                        export type state = 
                                                                            | readonly ['Project', state.Project]
                                                                        
                                                                    }
                                                                    
                                                                    export type Type = {
                                                                        readonly 'location': Type.location
                                                                        readonly 'state': Type.state
                                                                    }
                                                                    
                                                                }
                                                                
                                                                export type entry = {
                                                                    readonly 'Type': entry.Type
                                                                }
                                                                
                                                            }
                                                            
                                                            export type D = {
                                                                readonly 'location': D.location
                                                                readonly 'entry': D.entry
                                                            }
                                                            
                                                        }
                                                        
                                                        export type dictionary = _pi.Dictionary<dictionary.D>
                                                        
                                                    }
                                                    
                                                    export type Opbrengsten = {
                                                        readonly 'location': Opbrengsten.location
                                                        readonly 'dictionary': Opbrengsten.dictionary
                                                    }
                                                    
                                                }
                                                
                                                export type entry = {
                                                    readonly 'Opbrengsten': entry.Opbrengsten
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'location': D.location
                                                readonly 'entry': D.entry
                                            }
                                            
                                        }
                                        
                                        export type dictionary = _pi.Dictionary<dictionary.D>
                                        
                                    }
                                    
                                    export type Offertes = {
                                        readonly 'location': Offertes.location
                                        readonly 'dictionary': Offertes.dictionary
                                    }
                                    
                                }
                                
                                export type entry = {
                                    readonly 'Offertes': entry.Offertes
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type Projecten = {
                        readonly 'location': Projecten.location
                        readonly 'dictionary': Projecten.dictionary
                    }
                    
                }
                
                export type entry = {
                    readonly 'Licentieovereenkomsten': entry.Licentieovereenkomsten
                    readonly 'Projecten': entry.Projecten
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Klanten = {
        readonly 'location': Klanten.location
        readonly 'dictionary': Klanten.dictionary
    }
    
    export namespace Leveranciers {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export type entry = null
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Leveranciers = {
        readonly 'location': Leveranciers.location
        readonly 'dictionary': Leveranciers.dictionary
    }
    
    export namespace Medewerkers {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export type entry = null
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Medewerkers = {
        readonly 'location': Medewerkers.location
        readonly 'dictionary': Medewerkers.dictionary
    }
    
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
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace Type {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Bankrekening = null
                            
                            export type Overig = null
                            
                            export type Informele_rekening = null
                            
                        }
                        
                        export type state = 
                            | readonly ['Bankrekening', state.Bankrekening]
                            | readonly ['Overig', state.Overig]
                            | readonly ['Informele rekening', state.Informele_rekening]
                        
                    }
                    
                    export type Type = {
                        readonly 'location': Type.location
                        readonly 'state': Type.state
                    }
                    
                }
                
                export type entry = {
                    readonly 'Type': entry.Type
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Balans = {
        readonly 'location': Balans.location
        readonly 'dictionary': Balans.dictionary
    }
    
    export namespace Resultaat {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export type entry = null
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Resultaat = {
        readonly 'location': Resultaat.location
        readonly 'dictionary': Resultaat.dictionary
    }
    
}

export type Grootboekrekeningen_ = {
    readonly 'Balans': Grootboekrekeningen_.Balans
    readonly 'Resultaat': Grootboekrekeningen_.Resultaat
}

export namespace Jaarbeheer_ {
    
    export namespace Resultaat {
        
        export namespace Grootboekrekening_voor_BTW_afrondingen {
            
            export type location = i__location.Location
            
            export type key = string
            
        }
        
        export type Grootboekrekening_voor_BTW_afrondingen = {
            readonly 'location': Grootboekrekening_voor_BTW_afrondingen.location
            readonly 'key': Grootboekrekening_voor_BTW_afrondingen.key
        }
        
        export namespace Salarisrondes {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export type entry = null
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Salarisrondes = {
            readonly 'location': Salarisrondes.location
            readonly 'dictionary': Salarisrondes.dictionary
        }
        
        export namespace BTW_periodes {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export namespace entry {
                        
                        export namespace _11$pe__BTW$mi_categorieen {
                            
                            export type location = i__location.Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Location
                                    
                                    export type entry = null
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly 'entry': D.entry
                                }
                                
                            }
                            
                            export type dictionary = _pi.Dictionary<dictionary.D>
                            
                        }
                        
                        export type _11$pe__BTW$mi_categorieen = {
                            readonly 'location': _11$pe__BTW$mi_categorieen.location
                            readonly 'dictionary': _11$pe__BTW$mi_categorieen.dictionary
                        }
                        
                        export namespace Documenten {
                            
                            export type location = i__location.Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Location
                                    
                                    export namespace entry {
                                        
                                        export type Bestand = string
                                        
                                    }
                                    
                                    export type entry = {
                                        readonly 'Bestand': entry.Bestand
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly 'entry': D.entry
                                }
                                
                            }
                            
                            export type dictionary = _pi.Dictionary<dictionary.D>
                            
                        }
                        
                        export type Documenten = {
                            readonly 'location': Documenten.location
                            readonly 'dictionary': Documenten.dictionary
                        }
                        
                        export type Omschrijving = string
                        
                        export namespace Status {
                            
                            export type location = i__location.Location
                            
                            export namespace state {
                                
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
                            
                            export type state = 
                                | readonly ['Aangegeven', state.Aangegeven]
                                | readonly ['Openstaand', state.Openstaand]
                            
                        }
                        
                        export type Status = {
                            readonly 'location': Status.location
                            readonly 'state': Status.state
                        }
                        
                    }
                    
                    export type entry = {
                        readonly '1. BTW-categorieen': entry._11$pe__BTW$mi_categorieen
                        readonly 'Documenten': entry.Documenten
                        readonly 'Omschrijving': entry.Omschrijving
                        readonly 'Status': entry.Status
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type BTW_periodes = {
            readonly 'location': BTW_periodes.location
            readonly 'dictionary': BTW_periodes.dictionary
        }
        
    }
    
    export type Resultaat = {
        readonly 'Grootboekrekening voor BTW afrondingen': Resultaat.Grootboekrekening_voor_BTW_afrondingen
        readonly 'Salarisrondes': Resultaat.Salarisrondes
        readonly 'BTW periodes': Resultaat.BTW_periodes
    }
    
    export namespace Balans {
        
        export namespace Grootboekrekening_voor_nog_aan_te_geven_BTW {
            
            export type location = i__location.Location
            
            export type key = string
            
        }
        
        export type Grootboekrekening_voor_nog_aan_te_geven_BTW = {
            readonly 'location': Grootboekrekening_voor_nog_aan_te_geven_BTW.location
            readonly 'key': Grootboekrekening_voor_nog_aan_te_geven_BTW.key
        }
        
        export namespace Grootboekrekening_voor_resultaat_dit_jaar {
            
            export type location = i__location.Location
            
            export type key = string
            
        }
        
        export type Grootboekrekening_voor_resultaat_dit_jaar = {
            readonly 'location': Grootboekrekening_voor_resultaat_dit_jaar.location
            readonly 'key': Grootboekrekening_voor_resultaat_dit_jaar.key
        }
        
        export namespace Grootboekrekening_voor_winstreserve {
            
            export type location = i__location.Location
            
            export type key = string
            
        }
        
        export type Grootboekrekening_voor_winstreserve = {
            readonly 'location': Grootboekrekening_voor_winstreserve.location
            readonly 'key': Grootboekrekening_voor_winstreserve.key
        }
        
        export namespace Grootboekrekening_voor_Inkoop_saldo {
            
            export type location = i__location.Location
            
            export type key = string
            
        }
        
        export type Grootboekrekening_voor_Inkoop_saldo = {
            readonly 'location': Grootboekrekening_voor_Inkoop_saldo.location
            readonly 'key': Grootboekrekening_voor_Inkoop_saldo.key
        }
        
        export namespace Grootboekrekening_voor_Verkoop_saldo {
            
            export type location = i__location.Location
            
            export type key = string
            
        }
        
        export type Grootboekrekening_voor_Verkoop_saldo = {
            readonly 'location': Grootboekrekening_voor_Verkoop_saldo.location
            readonly 'key': Grootboekrekening_voor_Verkoop_saldo.key
        }
        
        export type Beginsaldo_nog_aan_te_geven_BTW = number
        
        export type Beginsaldo_winstreserve = number
        
        export namespace Informele_rekeningen {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export namespace entry {
                        
                        export type Beginsaldo = number
                        
                        export namespace Grootboekrekening {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type Grootboekrekening = {
                            readonly 'location': Grootboekrekening.location
                            readonly 'key': Grootboekrekening.key
                        }
                        
                        export namespace Nieuw {
                            
                            export type location = i__location.Location
                            
                            export namespace state {
                                
                                export type Ja = null
                                
                                export namespace Nee {
                                    
                                    export type Rekening = Verwijzing_naar_Informele_rekening_
                                    
                                }
                                
                                export type Nee = {
                                    readonly 'Rekening': Nee.Rekening
                                }
                                
                            }
                            
                            export type state = 
                                | readonly ['Ja', state.Ja]
                                | readonly ['Nee', state.Nee]
                            
                        }
                        
                        export type Nieuw = {
                            readonly 'location': Nieuw.location
                            readonly 'state': Nieuw.state
                        }
                        
                    }
                    
                    export type entry = {
                        readonly 'Beginsaldo': entry.Beginsaldo
                        readonly 'Grootboekrekening': entry.Grootboekrekening
                        readonly 'Nieuw': entry.Nieuw
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Informele_rekeningen = {
            readonly 'location': Informele_rekeningen.location
            readonly 'dictionary': Informele_rekeningen.dictionary
        }
        
        export namespace Bankrekeningen {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export namespace entry {
                        
                        export type Beginsaldo = number
                        
                        export namespace Grootboekrekening {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type Grootboekrekening = {
                            readonly 'location': Grootboekrekening.location
                            readonly 'key': Grootboekrekening.key
                        }
                        
                        export namespace Nieuw {
                            
                            export type location = i__location.Location
                            
                            export namespace state {
                                
                                export type Ja = null
                                
                                export namespace Nee {
                                    
                                    export type Rekening = Verwijzing_naar_Bankrekening_
                                    
                                }
                                
                                export type Nee = {
                                    readonly 'Rekening': Nee.Rekening
                                }
                                
                            }
                            
                            export type state = 
                                | readonly ['Ja', state.Ja]
                                | readonly ['Nee', state.Nee]
                            
                        }
                        
                        export type Nieuw = {
                            readonly 'location': Nieuw.location
                            readonly 'state': Nieuw.state
                        }
                        
                        export namespace Mutaties {
                            
                            export type location = i__location.Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Location
                                    
                                    export namespace entry {
                                        
                                        export type Bedrag = number
                                        
                                        export type Datum = number
                                        
                                        export type Omschrijving = string
                                        
                                    }
                                    
                                    export type entry = {
                                        readonly 'Bedrag': entry.Bedrag
                                        readonly 'Datum': entry.Datum
                                        readonly 'Omschrijving': entry.Omschrijving
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly 'entry': D.entry
                                }
                                
                            }
                            
                            export type dictionary = _pi.Dictionary<dictionary.D>
                            
                        }
                        
                        export type Mutaties = {
                            readonly 'location': Mutaties.location
                            readonly 'dictionary': Mutaties.dictionary
                        }
                        
                    }
                    
                    export type entry = {
                        readonly 'Beginsaldo': entry.Beginsaldo
                        readonly 'Grootboekrekening': entry.Grootboekrekening
                        readonly 'Nieuw': entry.Nieuw
                        readonly 'Mutaties': entry.Mutaties
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Bankrekeningen = {
            readonly 'location': Bankrekeningen.location
            readonly 'dictionary': Bankrekeningen.dictionary
        }
        
        export namespace Overige_balans_items {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export type entry = Overige_balans_item_
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Overige_balans_items = {
            readonly 'location': Overige_balans_items.location
            readonly 'dictionary': Overige_balans_items.dictionary
        }
        
        export namespace Verrekenposten {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export type entry = null
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type Verrekenposten = {
            readonly 'location': Verrekenposten.location
            readonly 'dictionary': Verrekenposten.dictionary
        }
        
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
        
        export type location = i__location.Location
        
        export type key = string
        
    }
    
    export type Grootboekrekening = {
        readonly 'location': Grootboekrekening.location
        readonly 'key': Grootboekrekening.key
    }
    
    export namespace Nieuw {
        
        export type location = i__location.Location
        
        export namespace state {
            
            export type Ja = null
            
            export namespace Nee {
                
                export namespace Balans_item {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type Balans_item = {
                    readonly 'location': Balans_item.location
                    readonly 'key': Balans_item.key
                }
                
            }
            
            export type Nee = {
                readonly 'Balans item': Nee.Balans_item
            }
            
        }
        
        export type state = 
            | readonly ['Ja', state.Ja]
            | readonly ['Nee', state.Nee]
        
    }
    
    export type Nieuw = {
        readonly 'location': Nieuw.location
        readonly 'state': Nieuw.state
    }
    
}

export type Overige_balans_item_ = {
    readonly 'Beginsaldo': Overige_balans_item_.Beginsaldo
    readonly 'Grootboekrekening': Overige_balans_item_.Grootboekrekening
    readonly 'Nieuw': Overige_balans_item_.Nieuw
}

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type location = i__location.Location
    
    export type key = string
    
}

export type Verwijzing_naar_Informele_rekening_ = {
    readonly 'location': Verwijzing_naar_Informele_rekening_.location
    readonly 'key': Verwijzing_naar_Informele_rekening_.key
}

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type location = i__location.Location
    
    export type key = string
    
}

export type Verwijzing_naar_Bankrekening_ = {
    readonly 'location': Verwijzing_naar_Bankrekening_.location
    readonly 'key': Verwijzing_naar_Bankrekening_.key
}

export namespace Handelstransacties_ {
    
    export namespace Inkopen {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace Afhandeling {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                
                                export namespace Rekening_courant {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Rekening_courant = {
                                    readonly 'location': Rekening_courant.location
                                    readonly 'key': Rekening_courant.key
                                }
                                
                            }
                            
                            export type Rekening_courant = {
                                readonly 'Rekening courant': Rekening_courant.Rekening_courant
                            }
                            
                        }
                        
                        export type state = 
                            | readonly ['Mutaties', state.Mutaties]
                            | readonly ['Rekening courant', state.Rekening_courant]
                        
                    }
                    
                    export type Afhandeling = {
                        readonly 'location': Afhandeling.location
                        readonly 'state': Afhandeling.state
                    }
                    
                    export namespace BTW$mi_regime {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Binnenland$cl__heffing_verlegd = null
                            
                            export type Geen_BTW_van_toepassing = null
                            
                            export type Import_van_buiten_de_EU = null
                            
                            export type Intracommunautair = null
                            
                            export namespace Standaard {
                                
                                export namespace BTW$mi_periode {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type BTW$mi_periode = {
                                    readonly 'location': BTW$mi_periode.location
                                    readonly 'key': BTW$mi_periode.key
                                }
                                
                            }
                            
                            export type Standaard = {
                                readonly 'BTW-periode': Standaard.BTW$mi_periode
                            }
                            
                        }
                        
                        export type state = 
                            | readonly ['Binnenland: heffing verlegd', state.Binnenland$cl__heffing_verlegd]
                            | readonly ['Geen BTW van toepassing', state.Geen_BTW_van_toepassing]
                            | readonly ['Import van buiten de EU', state.Import_van_buiten_de_EU]
                            | readonly ['Intracommunautair', state.Intracommunautair]
                            | readonly ['Standaard', state.Standaard]
                        
                    }
                    
                    export type BTW$mi_regime = {
                        readonly 'location': BTW$mi_regime.location
                        readonly 'state': BTW$mi_regime.state
                    }
                    
                    export namespace Brondocument {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export namespace Toegevoegd {
                                
                                export type Document = string
                                
                            }
                            
                            export type Toegevoegd = {
                                readonly 'Document': Toegevoegd.Document
                            }
                            
                            export type Niet_van_toepassing = null
                            
                            export type Ontbreekt = null
                            
                        }
                        
                        export type state = 
                            | readonly ['Toegevoegd', state.Toegevoegd]
                            | readonly ['Niet van toepassing', state.Niet_van_toepassing]
                            | readonly ['Ontbreekt', state.Ontbreekt]
                        
                    }
                    
                    export type Brondocument = {
                        readonly 'location': Brondocument.location
                        readonly 'state': Brondocument.state
                    }
                    
                    export type Datum = number
                    
                    export namespace Regels {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export namespace entry {
                                    
                                    export namespace Bedrag {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state {
                                            
                                            export namespace Bekend {
                                                
                                                export type BTW$mi_bedrag = number
                                                
                                                export type Bedrag_inclusief_geheven_BTW = number
                                                
                                            }
                                            
                                            export type Bekend = {
                                                readonly 'BTW-bedrag': Bekend.BTW$mi_bedrag
                                                readonly 'Bedrag inclusief geheven BTW': Bekend.Bedrag_inclusief_geheven_BTW
                                            }
                                            
                                        }
                                        
                                        export type state = 
                                            | readonly ['Bekend', state.Bekend]
                                        
                                    }
                                    
                                    export type Bedrag = {
                                        readonly 'location': Bedrag.location
                                        readonly 'state': Bedrag.state
                                    }
                                    
                                    export type Omschrijving = string
                                    
                                    export namespace Type {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state {
                                            
                                            export namespace Balans {
                                                
                                                export namespace Balans_item {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Balans_item = {
                                                    readonly 'location': Balans_item.location
                                                    readonly 'key': Balans_item.key
                                                }
                                                
                                            }
                                            
                                            export type Balans = {
                                                readonly 'Balans item': Balans.Balans_item
                                            }
                                            
                                            export namespace Kosten {
                                                
                                                export namespace Grootboekrekening {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Grootboekrekening = {
                                                    readonly 'location': Grootboekrekening.location
                                                    readonly 'key': Grootboekrekening.key
                                                }
                                                
                                            }
                                            
                                            export type Kosten = {
                                                readonly 'Grootboekrekening': Kosten.Grootboekrekening
                                            }
                                            
                                        }
                                        
                                        export type state = 
                                            | readonly ['Balans', state.Balans]
                                            | readonly ['Kosten', state.Kosten]
                                        
                                    }
                                    
                                    export type Type = {
                                        readonly 'location': Type.location
                                        readonly 'state': Type.state
                                    }
                                    
                                }
                                
                                export type entry = {
                                    readonly 'Bedrag': entry.Bedrag
                                    readonly 'Omschrijving': entry.Omschrijving
                                    readonly 'Type': entry.Type
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type Regels = {
                        readonly 'location': Regels.location
                        readonly 'dictionary': Regels.dictionary
                    }
                    
                    export namespace Type {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Bonnetje = null
                            
                            export namespace Inkoop_$po_met_crediteur$pc_ {
                                
                                export namespace Crediteur {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Crediteur = {
                                    readonly 'location': Crediteur.location
                                    readonly 'key': Crediteur.key
                                }
                                
                                export type Factuurnummer = string
                                
                            }
                            
                            export type Inkoop_$po_met_crediteur$pc_ = {
                                readonly 'Crediteur': Inkoop_$po_met_crediteur$pc_.Crediteur
                                readonly 'Factuurnummer': Inkoop_$po_met_crediteur$pc_.Factuurnummer
                            }
                            
                            export namespace Loonheffing {
                                
                                export namespace Ronde {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Ronde = {
                                    readonly 'location': Ronde.location
                                    readonly 'key': Ronde.key
                                }
                                
                            }
                            
                            export type Loonheffing = {
                                readonly 'Ronde': Loonheffing.Ronde
                            }
                            
                            export namespace Salaris {
                                
                                export namespace Ronde {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Ronde = {
                                    readonly 'location': Ronde.location
                                    readonly 'key': Ronde.key
                                }
                                
                                export namespace Medewerker {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Medewerker = {
                                    readonly 'location': Medewerker.location
                                    readonly 'key': Medewerker.key
                                }
                                
                            }
                            
                            export type Salaris = {
                                readonly 'Ronde': Salaris.Ronde
                                readonly 'Medewerker': Salaris.Medewerker
                            }
                            
                        }
                        
                        export type state = 
                            | readonly ['Bonnetje', state.Bonnetje]
                            | readonly ['Inkoop (met crediteur)', state.Inkoop_$po_met_crediteur$pc_]
                            | readonly ['Loonheffing', state.Loonheffing]
                            | readonly ['Salaris', state.Salaris]
                        
                    }
                    
                    export type Type = {
                        readonly 'location': Type.location
                        readonly 'state': Type.state
                    }
                    
                }
                
                export type entry = {
                    readonly 'Afhandeling': entry.Afhandeling
                    readonly 'BTW-regime': entry.BTW$mi_regime
                    readonly 'Brondocument': entry.Brondocument
                    readonly 'Datum': entry.Datum
                    readonly 'Regels': entry.Regels
                    readonly 'Type': entry.Type
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Inkopen = {
        readonly 'location': Inkopen.location
        readonly 'dictionary': Inkopen.dictionary
    }
    
    export namespace Verkopen {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export namespace Afhandeling {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                
                                export namespace Rekening_courant {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Rekening_courant = {
                                    readonly 'location': Rekening_courant.location
                                    readonly 'key': Rekening_courant.key
                                }
                                
                            }
                            
                            export type Rekening_courant = {
                                readonly 'Rekening courant': Rekening_courant.Rekening_courant
                            }
                            
                        }
                        
                        export type state = 
                            | readonly ['Mutaties', state.Mutaties]
                            | readonly ['Rekening courant', state.Rekening_courant]
                        
                    }
                    
                    export type Afhandeling = {
                        readonly 'location': Afhandeling.location
                        readonly 'state': Afhandeling.state
                    }
                    
                    export type Betalingstermijn = number
                    
                    export namespace BTW$mi_periode {
                        
                        export type location = i__location.Location
                        
                        export type key = string
                        
                    }
                    
                    export type BTW$mi_periode = {
                        readonly 'location': BTW$mi_periode.location
                        readonly 'key': BTW$mi_periode.key
                    }
                    
                    export namespace Brondocument {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export namespace Toegevoegd {
                                
                                export type Document = string
                                
                            }
                            
                            export type Toegevoegd = {
                                readonly 'Document': Toegevoegd.Document
                            }
                            
                        }
                        
                        export type state = 
                            | readonly ['Toegevoegd', state.Toegevoegd]
                        
                    }
                    
                    export type Brondocument = {
                        readonly 'location': Brondocument.location
                        readonly 'state': Brondocument.state
                    }
                    
                    export namespace Debiteur {
                        
                        export type location = i__location.Location
                        
                        export type key = string
                        
                    }
                    
                    export type Debiteur = {
                        readonly 'location': Debiteur.location
                        readonly 'key': Debiteur.key
                    }
                    
                    export namespace Contracttype {
                        
                        export type location = i__location.Location
                        
                        export namespace state {
                            
                            export namespace Project {
                                
                                export namespace Project {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Project = {
                                    readonly 'location': Project.location
                                    readonly 'key': Project.key
                                }
                                
                                export namespace Offerte {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Offerte = {
                                    readonly 'location': Offerte.location
                                    readonly 'key': Offerte.key
                                }
                                
                            }
                            
                            export type Project = {
                                readonly 'Project': Project.Project
                                readonly 'Offerte': Project.Offerte
                            }
                            
                            export namespace Licentieovereenkomst {
                                
                                export namespace Overeenkomst {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Overeenkomst = {
                                    readonly 'location': Overeenkomst.location
                                    readonly 'key': Overeenkomst.key
                                }
                                
                            }
                            
                            export type Licentieovereenkomst = {
                                readonly 'Overeenkomst': Licentieovereenkomst.Overeenkomst
                            }
                            
                        }
                        
                        export type state = 
                            | readonly ['Project', state.Project]
                            | readonly ['Licentieovereenkomst', state.Licentieovereenkomst]
                        
                    }
                    
                    export type Contracttype = {
                        readonly 'location': Contracttype.location
                        readonly 'state': Contracttype.state
                    }
                    
                    export type Datum = number
                    
                    export namespace Regels {
                        
                        export type location = i__location.Location
                        
                        export namespace dictionary {
                            
                            export namespace D {
                                
                                export type location = i__location.Location
                                
                                export namespace entry {
                                    
                                    export namespace BTW$mi_regime {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state {
                                            
                                            export type Intracommunautair = null
                                            
                                            export namespace Standaard {
                                                
                                                export namespace BTW$mi_categorie {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type BTW$mi_categorie = {
                                                    readonly 'location': BTW$mi_categorie.location
                                                    readonly 'key': BTW$mi_categorie.key
                                                }
                                                
                                            }
                                            
                                            export type Standaard = {
                                                readonly 'BTW-categorie': Standaard.BTW$mi_categorie
                                            }
                                            
                                            export type Binnenland$cl__heffing_verlegd = null
                                            
                                        }
                                        
                                        export type state = 
                                            | readonly ['Intracommunautair', state.Intracommunautair]
                                            | readonly ['Standaard', state.Standaard]
                                            | readonly ['Binnenland: heffing verlegd', state.Binnenland$cl__heffing_verlegd]
                                        
                                    }
                                    
                                    export type BTW$mi_regime = {
                                        readonly 'location': BTW$mi_regime.location
                                        readonly 'state': BTW$mi_regime.state
                                    }
                                    
                                    export type Bedrag_exclusief_BTW = number
                                    
                                    export namespace Contracttype {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state {
                                            
                                            export namespace Project {
                                                
                                                export namespace Opbrengst {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Opbrengst = {
                                                    readonly 'location': Opbrengst.location
                                                    readonly 'key': Opbrengst.key
                                                }
                                                
                                            }
                                            
                                            export type Project = {
                                                readonly 'Opbrengst': Project.Opbrengst
                                            }
                                            
                                            export type Los = null
                                            
                                            export namespace Licentieovereenkomst {
                                                
                                                export namespace Periode {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Periode = {
                                                    readonly 'location': Periode.location
                                                    readonly 'key': Periode.key
                                                }
                                                
                                            }
                                            
                                            export type Licentieovereenkomst = {
                                                readonly 'Periode': Licentieovereenkomst.Periode
                                            }
                                            
                                        }
                                        
                                        export type state = 
                                            | readonly ['Project', state.Project]
                                            | readonly ['Los', state.Los]
                                            | readonly ['Licentieovereenkomst', state.Licentieovereenkomst]
                                        
                                    }
                                    
                                    export type Contracttype = {
                                        readonly 'location': Contracttype.location
                                        readonly 'state': Contracttype.state
                                    }
                                    
                                    export type Omschrijving = string
                                    
                                    export namespace Type {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state {
                                            
                                            export namespace Opbrengsten {
                                                
                                                export namespace Grootboekrekening {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Grootboekrekening = {
                                                    readonly 'location': Grootboekrekening.location
                                                    readonly 'key': Grootboekrekening.key
                                                }
                                                
                                            }
                                            
                                            export type Opbrengsten = {
                                                readonly 'Grootboekrekening': Opbrengsten.Grootboekrekening
                                            }
                                            
                                            export namespace Balans {
                                                
                                                export namespace Balans_item {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Balans_item = {
                                                    readonly 'location': Balans_item.location
                                                    readonly 'key': Balans_item.key
                                                }
                                                
                                            }
                                            
                                            export type Balans = {
                                                readonly 'Balans item': Balans.Balans_item
                                            }
                                            
                                        }
                                        
                                        export type state = 
                                            | readonly ['Opbrengsten', state.Opbrengsten]
                                            | readonly ['Balans', state.Balans]
                                        
                                    }
                                    
                                    export type Type = {
                                        readonly 'location': Type.location
                                        readonly 'state': Type.state
                                    }
                                    
                                }
                                
                                export type entry = {
                                    readonly 'BTW-regime': entry.BTW$mi_regime
                                    readonly 'Bedrag exclusief BTW': entry.Bedrag_exclusief_BTW
                                    readonly 'Contracttype': entry.Contracttype
                                    readonly 'Omschrijving': entry.Omschrijving
                                    readonly 'Type': entry.Type
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly 'entry': D.entry
                            }
                            
                        }
                        
                        export type dictionary = _pi.Dictionary<dictionary.D>
                        
                    }
                    
                    export type Regels = {
                        readonly 'location': Regels.location
                        readonly 'dictionary': Regels.dictionary
                    }
                    
                }
                
                export type entry = {
                    readonly 'Afhandeling': entry.Afhandeling
                    readonly 'Betalingstermijn': entry.Betalingstermijn
                    readonly 'BTW-periode': entry.BTW$mi_periode
                    readonly 'Brondocument': entry.Brondocument
                    readonly 'Debiteur': entry.Debiteur
                    readonly 'Contracttype': entry.Contracttype
                    readonly 'Datum': entry.Datum
                    readonly 'Regels': entry.Regels
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Verkopen = {
        readonly 'location': Verkopen.location
        readonly 'dictionary': Verkopen.dictionary
    }
    
}

export type Handelstransacties_ = {
    readonly 'Inkopen': Handelstransacties_.Inkopen
    readonly 'Verkopen': Handelstransacties_.Verkopen
}

export namespace Mutaties_ {
    
    export namespace Verrekenpost_mutaties {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type location = i__location.Location
                    
                    export namespace dictionary {
                        
                        export namespace D {
                            
                            export type location = i__location.Location
                            
                            export namespace entry {
                                
                                export type Bedrag = number
                                
                                export namespace Afhandeling {
                                    
                                    export type location = i__location.Location
                                    
                                    export namespace state {
                                        
                                        export type Resultaat = Balans_Resultaat_Mutatie_
                                        
                                        export namespace Balans {
                                            
                                            export type location = i__location.Location
                                            
                                            export namespace state {
                                                
                                                export namespace Informele_rekening {
                                                    
                                                    export namespace Informele_rekening {
                                                        
                                                        export type location = i__location.Location
                                                        
                                                        export type key = string
                                                        
                                                    }
                                                    
                                                    export type Informele_rekening = {
                                                        readonly 'location': Informele_rekening.location
                                                        readonly 'key': Informele_rekening.key
                                                    }
                                                    
                                                }
                                                
                                                export type Informele_rekening = {
                                                    readonly 'Informele rekening': Informele_rekening.Informele_rekening
                                                }
                                                
                                            }
                                            
                                            export type state = 
                                                | readonly ['Informele rekening', state.Informele_rekening]
                                            
                                        }
                                        
                                        export type Balans = {
                                            readonly 'location': Balans.location
                                            readonly 'state': Balans.state
                                        }
                                        
                                    }
                                    
                                    export type state = 
                                        | readonly ['Resultaat', state.Resultaat]
                                        | readonly ['Balans', state.Balans]
                                    
                                }
                                
                                export type Afhandeling = {
                                    readonly 'location': Afhandeling.location
                                    readonly 'state': Afhandeling.state
                                }
                                
                            }
                            
                            export type entry = {
                                readonly 'Bedrag': entry.Bedrag
                                readonly 'Afhandeling': entry.Afhandeling
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'location': D.location
                            readonly 'entry': D.entry
                        }
                        
                    }
                    
                    export type dictionary = _pi.Dictionary<dictionary.D>
                    
                }
                
                export type entry = {
                    readonly 'location': entry.location
                    readonly 'dictionary': entry.dictionary
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Verrekenpost_mutaties = {
        readonly 'location': Verrekenpost_mutaties.location
        readonly 'dictionary': Verrekenpost_mutaties.dictionary
    }
    
    export namespace Bankrekening_Mutatie_Verwerkingen {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type location = i__location.Location
                    
                    export namespace dictionary {
                        
                        export namespace D {
                            
                            export type location = i__location.Location
                            
                            export namespace entry {
                                
                                export type location = i__location.Location
                                
                                export namespace state {
                                    
                                    export type Resultaat = Balans_Resultaat_Mutatie_
                                    
                                    export namespace Balans {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state {
                                            
                                            export namespace Informele_rekening {
                                                
                                                export namespace Informele_rekening {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Informele_rekening = {
                                                    readonly 'location': Informele_rekening.location
                                                    readonly 'key': Informele_rekening.key
                                                }
                                                
                                            }
                                            
                                            export type Informele_rekening = {
                                                readonly 'Informele rekening': Informele_rekening.Informele_rekening
                                            }
                                            
                                            export namespace Verrekenpost {
                                                
                                                export namespace Verrekenpost {
                                                    
                                                    export type location = i__location.Location
                                                    
                                                    export type key = string
                                                    
                                                }
                                                
                                                export type Verrekenpost = {
                                                    readonly 'location': Verrekenpost.location
                                                    readonly 'key': Verrekenpost.key
                                                }
                                                
                                            }
                                            
                                            export type Verrekenpost = {
                                                readonly 'Verrekenpost': Verrekenpost.Verrekenpost
                                            }
                                            
                                        }
                                        
                                        export type state = 
                                            | readonly ['Informele rekening', state.Informele_rekening]
                                            | readonly ['Verrekenpost', state.Verrekenpost]
                                        
                                    }
                                    
                                    export type Balans = {
                                        readonly 'location': Balans.location
                                        readonly 'state': Balans.state
                                    }
                                    
                                }
                                
                                export type state = 
                                    | readonly ['Resultaat', state.Resultaat]
                                    | readonly ['Balans', state.Balans]
                                
                            }
                            
                            export type entry = {
                                readonly 'location': entry.location
                                readonly 'state': entry.state
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'location': D.location
                            readonly 'entry': D.entry
                        }
                        
                    }
                    
                    export type dictionary = _pi.Dictionary<dictionary.D>
                    
                }
                
                export type entry = {
                    readonly 'location': entry.location
                    readonly 'dictionary': entry.dictionary
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Bankrekening_Mutatie_Verwerkingen = {
        readonly 'location': Bankrekening_Mutatie_Verwerkingen.location
        readonly 'dictionary': Bankrekening_Mutatie_Verwerkingen.dictionary
    }
    
    export namespace Memoriaal_boekingen {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type location = i__location.Location
                    
                    export namespace dictionary {
                        
                        export namespace D {
                            
                            export type location = i__location.Location
                            
                            export namespace entry {
                                
                                export type Bedrag = number
                                
                                export type Datum = number
                                
                                export type Omschrijving = string
                                
                                export namespace Grootboekrekening {
                                    
                                    export type location = i__location.Location
                                    
                                    export type key = string
                                    
                                }
                                
                                export type Grootboekrekening = {
                                    readonly 'location': Grootboekrekening.location
                                    readonly 'key': Grootboekrekening.key
                                }
                                
                            }
                            
                            export type entry = {
                                readonly 'Bedrag': entry.Bedrag
                                readonly 'Datum': entry.Datum
                                readonly 'Omschrijving': entry.Omschrijving
                                readonly 'Grootboekrekening': entry.Grootboekrekening
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'location': D.location
                            readonly 'entry': D.entry
                        }
                        
                    }
                    
                    export type dictionary = _pi.Dictionary<dictionary.D>
                    
                }
                
                export type entry = {
                    readonly 'location': entry.location
                    readonly 'dictionary': entry.dictionary
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type Memoriaal_boekingen = {
        readonly 'location': Memoriaal_boekingen.location
        readonly 'dictionary': Memoriaal_boekingen.dictionary
    }
    
}

export type Mutaties_ = {
    readonly 'Verrekenpost mutaties': Mutaties_.Verrekenpost_mutaties
    readonly 'Bankrekening Mutatie Verwerkingen': Mutaties_.Bankrekening_Mutatie_Verwerkingen
    readonly 'Memoriaal boekingen': Mutaties_.Memoriaal_boekingen
}

export namespace Jaren_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export namespace Afgesloten {
                    
                    export type location = i__location.Location
                    
                    export namespace state {
                        
                        export type Ja = null
                        
                        export type Nee = null
                        
                    }
                    
                    export type state = 
                        | readonly ['Ja', state.Ja]
                        | readonly ['Nee', state.Nee]
                    
                }
                
                export type Afgesloten = {
                    readonly 'location': Afgesloten.location
                    readonly 'state': Afgesloten.state
                }
                
                export type Startdatum_boekjaar = number
                
                export type Grootboekrekeningen = Grootboekrekeningen_
                
                export type Eerste_boekjaar = Eerste_boekjaar_
                
                export type Jaarbeheer = Jaarbeheer_
                
                export type Handelstransacties = Handelstransacties_
                
                export type Mutaties = Mutaties_
                
            }
            
            export type entry = {
                readonly 'Afgesloten': entry.Afgesloten
                readonly 'Startdatum boekjaar': entry.Startdatum_boekjaar
                readonly 'Grootboekrekeningen': entry.Grootboekrekeningen
                readonly 'Eerste boekjaar': entry.Eerste_boekjaar
                readonly 'Jaarbeheer': entry.Jaarbeheer
                readonly 'Handelstransacties': entry.Handelstransacties
                readonly 'Mutaties': entry.Mutaties
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Jaren_ = {
    readonly 'location': Jaren_.location
    readonly 'dictionary': Jaren_.dictionary
}

export namespace Balans_Resultaat_Mutatie_ {
    
    export namespace Jaar {
        
        export namespace O {
            
            export type location = i__location.Location
            
            export type key = string
            
        }
        
        export type O = {
            readonly 'location': O.location
            readonly 'key': O.key
        }
        
    }
    
    export type Jaar = _pi.Optional_Value<Jaar.O>
    
    export namespace type_ {
        
        export type location = i__location.Location
        
        export namespace state {
            
            export namespace Inkoop {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type Inkoop = {
                readonly 'location': Inkoop.location
                readonly 'key': Inkoop.key
            }
            
            export namespace Verkoop {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type Verkoop = {
                readonly 'location': Verkoop.location
                readonly 'key': Verkoop.key
            }
            
            export namespace BTW$mi_periode {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type BTW$mi_periode = {
                readonly 'location': BTW$mi_periode.location
                readonly 'key': BTW$mi_periode.key
            }
            
        }
        
        export type state = 
            | readonly ['Inkoop', state.Inkoop]
            | readonly ['Verkoop', state.Verkoop]
            | readonly ['BTW-periode', state.BTW$mi_periode]
        
    }
    
    export type type_ = {
        readonly 'location': type_.location
        readonly 'state': type_.state
    }
    
}

export type Balans_Resultaat_Mutatie_ = {
    readonly 'Jaar': Balans_Resultaat_Mutatie_.Jaar
    readonly 'type': Balans_Resultaat_Mutatie_.type_
}

export namespace Eerste_boekjaar_ {
    
    export type location = i__location.Location
    
    export namespace state {
        
        export type Ja = null
        
        export namespace Nee {
            
            export namespace Vorig_boekjaar {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type Vorig_boekjaar = {
                readonly 'location': Vorig_boekjaar.location
                readonly 'key': Vorig_boekjaar.key
            }
            
        }
        
        export type Nee = {
            readonly 'Vorig boekjaar': Nee.Vorig_boekjaar
        }
        
    }
    
    export type state = 
        | readonly ['Ja', state.Ja]
        | readonly ['Nee', state.Nee]
    
}

export type Eerste_boekjaar_ = {
    readonly 'location': Eerste_boekjaar_.location
    readonly 'state': Eerste_boekjaar_.state
}

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
