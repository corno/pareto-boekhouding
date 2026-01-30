
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export namespace Fiscaal_ {
    
    export namespace Balans_Hoofdcategorieen {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace Zijde {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Activa = null
                            
                            export type Passiva = null
                            
                        }
                        
                        export type _ = 
                            | readonly ['Activa', _.Activa]
                            | readonly ['Passiva', _.Passiva]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'location': Zijde.location
                        readonly ' ': Zijde._
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export type _ = null
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly ' ': D._
                            }
                            
                        }
                        
                        export type _ = _pi.Dictionary<_.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'location': Subcategorieen.location
                        readonly ' ': Subcategorieen._
                    }
                    
                }
                
                export type _ = {
                    readonly 'Zijde': _.Zijde
                    readonly 'Subcategorieen': _.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Balans_Hoofdcategorieen = {
        readonly 'location': Balans_Hoofdcategorieen.location
        readonly ' ': Balans_Hoofdcategorieen._
    }
    
    export namespace Resultaat_Hoofdcategorieen {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace Zijde {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Kosten = null
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type _ = 
                            | readonly ['Kosten', _.Kosten]
                            | readonly ['Opbrengsten', _.Opbrengsten]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'location': Zijde.location
                        readonly ' ': Zijde._
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export type _ = null
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly ' ': D._
                            }
                            
                        }
                        
                        export type _ = _pi.Dictionary<_.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'location': Subcategorieen.location
                        readonly ' ': Subcategorieen._
                    }
                    
                }
                
                export type _ = {
                    readonly 'Zijde': _.Zijde
                    readonly 'Subcategorieen': _.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Resultaat_Hoofdcategorieen = {
        readonly 'location': Resultaat_Hoofdcategorieen.location
        readonly ' ': Resultaat_Hoofdcategorieen._
    }
    
}

export type Fiscaal_ = {
    readonly 'Balans Hoofdcategorieen': Fiscaal_.Balans_Hoofdcategorieen
    readonly 'Resultaat Hoofdcategorieen': Fiscaal_.Resultaat_Hoofdcategorieen
}

export namespace Grootboek_Categorieen_ {
    
    export namespace Correctietypes_vennootschapsbelasting {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export type Te_corrigeren_promillage = number
                    
                }
                
                export type _ = {
                    readonly 'Te corrigeren promillage': _.Te_corrigeren_promillage
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Correctietypes_vennootschapsbelasting = {
        readonly 'location': Correctietypes_vennootschapsbelasting.location
        readonly ' ': Correctietypes_vennootschapsbelasting._
    }
    
    export namespace Balans {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace Zijde {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Activa = null
                            
                            export type Passiva = null
                            
                        }
                        
                        export type _ = 
                            | readonly ['Activa', _.Activa]
                            | readonly ['Passiva', _.Passiva]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'location': Zijde.location
                        readonly ' ': Zijde._
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace _ {
                                    
                                    export namespace Hoofdcategorie_fiscus {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export type _ = string
                                        
                                    }
                                    
                                    export type Hoofdcategorie_fiscus = {
                                        readonly 'location': Hoofdcategorie_fiscus.location
                                        readonly ' ': Hoofdcategorie_fiscus._
                                    }
                                    
                                    export namespace Subcategorie_fiscus {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export type _ = string
                                        
                                    }
                                    
                                    export type Subcategorie_fiscus = {
                                        readonly 'location': Subcategorie_fiscus.location
                                        readonly ' ': Subcategorie_fiscus._
                                    }
                                    
                                }
                                
                                export type _ = {
                                    readonly 'Hoofdcategorie fiscus': _.Hoofdcategorie_fiscus
                                    readonly 'Subcategorie fiscus': _.Subcategorie_fiscus
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly ' ': D._
                            }
                            
                        }
                        
                        export type _ = _pi.Dictionary<_.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'location': Subcategorieen.location
                        readonly ' ': Subcategorieen._
                    }
                    
                }
                
                export type _ = {
                    readonly 'Zijde': _.Zijde
                    readonly 'Subcategorieen': _.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Balans = {
        readonly 'location': Balans.location
        readonly ' ': Balans._
    }
    
    export namespace Resultaat {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace Zijde {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Kosten = null
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type _ = 
                            | readonly ['Kosten', _.Kosten]
                            | readonly ['Opbrengsten', _.Opbrengsten]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'location': Zijde.location
                        readonly ' ': Zijde._
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace _ {
                                    
                                    export namespace Hoofdcategorie_fiscus {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export type _ = string
                                        
                                    }
                                    
                                    export type Hoofdcategorie_fiscus = {
                                        readonly 'location': Hoofdcategorie_fiscus.location
                                        readonly ' ': Hoofdcategorie_fiscus._
                                    }
                                    
                                    export namespace Subcategorie_fiscus {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export type _ = string
                                        
                                    }
                                    
                                    export type Subcategorie_fiscus = {
                                        readonly 'location': Subcategorie_fiscus.location
                                        readonly ' ': Subcategorie_fiscus._
                                    }
                                    
                                }
                                
                                export type _ = {
                                    readonly 'Hoofdcategorie fiscus': _.Hoofdcategorie_fiscus
                                    readonly 'Subcategorie fiscus': _.Subcategorie_fiscus
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly ' ': D._
                            }
                            
                        }
                        
                        export type _ = _pi.Dictionary<_.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'location': Subcategorieen.location
                        readonly ' ': Subcategorieen._
                    }
                    
                }
                
                export type _ = {
                    readonly 'Zijde': _.Zijde
                    readonly 'Subcategorieen': _.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Resultaat = {
        readonly 'location': Resultaat.location
        readonly ' ': Resultaat._
    }
    
}

export type Grootboek_Categorieen_ = {
    readonly 'Correctietypes vennootschapsbelasting': Grootboek_Categorieen_.Correctietypes_vennootschapsbelasting
    readonly 'Balans': Grootboek_Categorieen_.Balans
    readonly 'Resultaat': Grootboek_Categorieen_.Resultaat
}

export namespace Beheer_ {
    
    export namespace BTW$mi_categorieen {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace BTW$mi_heffing {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace Ja {
                                
                                export type BTW$mi_promillage = number
                                
                            }
                            
                            export type Ja = {
                                readonly 'BTW-promillage': Ja.BTW$mi_promillage
                            }
                            
                        }
                        
                        export type _ = 
                            | readonly ['Ja', _.Ja]
                        
                    }
                    
                    export type BTW$mi_heffing = {
                        readonly 'location': BTW$mi_heffing.location
                        readonly ' ': BTW$mi_heffing._
                    }
                    
                }
                
                export type _ = {
                    readonly 'BTW-heffing': _.BTW$mi_heffing
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type BTW$mi_categorieen = {
        readonly 'location': BTW$mi_categorieen.location
        readonly ' ': BTW$mi_categorieen._
    }
    
    export namespace Grootboekrekeningen {
        
        export namespace Balans {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export namespace Hoofdcategorie {
                            
                            export type location = i__location.Relative_Location
                            
                            export type _ = string
                            
                        }
                        
                        export type Hoofdcategorie = {
                            readonly 'location': Hoofdcategorie.location
                            readonly ' ': Hoofdcategorie._
                        }
                        
                        export namespace Subcategorie {
                            
                            export type location = i__location.Relative_Location
                            
                            export type _ = string
                            
                        }
                        
                        export type Subcategorie = {
                            readonly 'location': Subcategorie.location
                            readonly ' ': Subcategorie._
                        }
                        
                        export namespace Zijde {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export type Activa = null
                                
                                export type Passiva = null
                                
                            }
                            
                            export type _ = 
                                | readonly ['Activa', _.Activa]
                                | readonly ['Passiva', _.Passiva]
                            
                        }
                        
                        export type Zijde = {
                            readonly 'location': Zijde.location
                            readonly ' ': Zijde._
                        }
                        
                    }
                    
                    export type _ = {
                        readonly 'Hoofdcategorie': _.Hoofdcategorie
                        readonly 'Subcategorie': _.Subcategorie
                        readonly 'Zijde': _.Zijde
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Balans = {
            readonly 'location': Balans.location
            readonly ' ': Balans._
        }
        
        export namespace Resultaat {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export namespace Hoofdcategorie {
                            
                            export type location = i__location.Relative_Location
                            
                            export type _ = string
                            
                        }
                        
                        export type Hoofdcategorie = {
                            readonly 'location': Hoofdcategorie.location
                            readonly ' ': Hoofdcategorie._
                        }
                        
                        export namespace Subcategorie {
                            
                            export type location = i__location.Relative_Location
                            
                            export type _ = string
                            
                        }
                        
                        export type Subcategorie = {
                            readonly 'location': Subcategorie.location
                            readonly ' ': Subcategorie._
                        }
                        
                        export namespace Zijde {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export namespace Kosten {
                                    
                                    export namespace Correctie_op_vennootschapsbelasting {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export namespace Ja {
                                                
                                                export namespace Correctietype {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Correctietype = {
                                                    readonly 'location': Correctietype.location
                                                    readonly ' ': Correctietype._
                                                }
                                                
                                            }
                                            
                                            export type Ja = {
                                                readonly 'Correctietype': Ja.Correctietype
                                            }
                                            
                                            export type Nee = null
                                            
                                        }
                                        
                                        export type _ = 
                                            | readonly ['Ja', _.Ja]
                                            | readonly ['Nee', _.Nee]
                                        
                                    }
                                    
                                    export type Correctie_op_vennootschapsbelasting = {
                                        readonly 'location': Correctie_op_vennootschapsbelasting.location
                                        readonly ' ': Correctie_op_vennootschapsbelasting._
                                    }
                                    
                                }
                                
                                export type Kosten = {
                                    readonly 'Correctie op vennootschapsbelasting': Kosten.Correctie_op_vennootschapsbelasting
                                }
                                
                                export type Opbrengsten = null
                                
                            }
                            
                            export type _ = 
                                | readonly ['Kosten', _.Kosten]
                                | readonly ['Opbrengsten', _.Opbrengsten]
                            
                        }
                        
                        export type Zijde = {
                            readonly 'location': Zijde.location
                            readonly ' ': Zijde._
                        }
                        
                    }
                    
                    export type _ = {
                        readonly 'Hoofdcategorie': _.Hoofdcategorie
                        readonly 'Subcategorie': _.Subcategorie
                        readonly 'Zijde': _.Zijde
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Resultaat = {
            readonly 'location': Resultaat.location
            readonly ' ': Resultaat._
        }
        
    }
    
    export type Grootboekrekeningen = {
        readonly 'Balans': Grootboekrekeningen.Balans
        readonly 'Resultaat': Grootboekrekeningen.Resultaat
    }
    
    export namespace Rekeningen {
        
        export namespace Bank {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export type _ = null
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Bank = {
            readonly 'location': Bank.location
            readonly ' ': Bank._
        }
        
        export namespace Informeel {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export type _ = null
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Informeel = {
            readonly 'location': Informeel.location
            readonly ' ': Informeel._
        }
        
    }
    
    export type Rekeningen = {
        readonly 'Bank': Rekeningen.Bank
        readonly 'Informeel': Rekeningen.Informeel
    }
    
    export namespace Gebruikers {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export type Volledige_naam = string
                    
                    export type Wachtwoord = string
                    
                }
                
                export type _ = {
                    readonly 'Volledige naam': _.Volledige_naam
                    readonly 'Wachtwoord': _.Wachtwoord
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Gebruikers = {
        readonly 'location': Gebruikers.location
        readonly ' ': Gebruikers._
    }
    
    export namespace Klanten {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace Licentieovereenkomsten {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace _ {
                                    
                                    export namespace Periodes {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export namespace D {
                                                
                                                export type location = i__location.Relative_Location
                                                
                                                export namespace _ {
                                                    
                                                    export type Bedrag = number
                                                    
                                                }
                                                
                                                export type _ = {
                                                    readonly 'Bedrag': _.Bedrag
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'location': D.location
                                                readonly ' ': D._
                                            }
                                            
                                        }
                                        
                                        export type _ = _pi.Dictionary<_.D>
                                        
                                    }
                                    
                                    export type Periodes = {
                                        readonly 'location': Periodes.location
                                        readonly ' ': Periodes._
                                    }
                                    
                                }
                                
                                export type _ = {
                                    readonly 'Periodes': _.Periodes
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly ' ': D._
                            }
                            
                        }
                        
                        export type _ = _pi.Dictionary<_.D>
                        
                    }
                    
                    export type Licentieovereenkomsten = {
                        readonly 'location': Licentieovereenkomsten.location
                        readonly ' ': Licentieovereenkomsten._
                    }
                    
                    export namespace Projecten {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace _ {
                                    
                                    export namespace Offertes {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export namespace D {
                                                
                                                export type location = i__location.Relative_Location
                                                
                                                export namespace _ {
                                                    
                                                    export namespace Opbrengsten {
                                                        
                                                        export type location = i__location.Relative_Location
                                                        
                                                        export namespace _ {
                                                            
                                                            export namespace D {
                                                                
                                                                export type location = i__location.Relative_Location
                                                                
                                                                export namespace _ {
                                                                    
                                                                    export namespace Type {
                                                                        
                                                                        export type location = i__location.Relative_Location
                                                                        
                                                                        export namespace _ {
                                                                            
                                                                            export namespace Project {
                                                                                
                                                                                export type Bedrag = number
                                                                                
                                                                                export type Betaaldatum = number
                                                                                
                                                                            }
                                                                            
                                                                            export type Project = {
                                                                                readonly 'Bedrag': Project.Bedrag
                                                                                readonly 'Betaaldatum': Project.Betaaldatum
                                                                            }
                                                                            
                                                                        }
                                                                        
                                                                        export type _ = 
                                                                            | readonly ['Project', _.Project]
                                                                        
                                                                    }
                                                                    
                                                                    export type Type = {
                                                                        readonly 'location': Type.location
                                                                        readonly ' ': Type._
                                                                    }
                                                                    
                                                                }
                                                                
                                                                export type _ = {
                                                                    readonly 'Type': _.Type
                                                                }
                                                                
                                                            }
                                                            
                                                            export type D = {
                                                                readonly 'location': D.location
                                                                readonly ' ': D._
                                                            }
                                                            
                                                        }
                                                        
                                                        export type _ = _pi.Dictionary<_.D>
                                                        
                                                    }
                                                    
                                                    export type Opbrengsten = {
                                                        readonly 'location': Opbrengsten.location
                                                        readonly ' ': Opbrengsten._
                                                    }
                                                    
                                                }
                                                
                                                export type _ = {
                                                    readonly 'Opbrengsten': _.Opbrengsten
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'location': D.location
                                                readonly ' ': D._
                                            }
                                            
                                        }
                                        
                                        export type _ = _pi.Dictionary<_.D>
                                        
                                    }
                                    
                                    export type Offertes = {
                                        readonly 'location': Offertes.location
                                        readonly ' ': Offertes._
                                    }
                                    
                                }
                                
                                export type _ = {
                                    readonly 'Offertes': _.Offertes
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly ' ': D._
                            }
                            
                        }
                        
                        export type _ = _pi.Dictionary<_.D>
                        
                    }
                    
                    export type Projecten = {
                        readonly 'location': Projecten.location
                        readonly ' ': Projecten._
                    }
                    
                }
                
                export type _ = {
                    readonly 'Licentieovereenkomsten': _.Licentieovereenkomsten
                    readonly 'Projecten': _.Projecten
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Klanten = {
        readonly 'location': Klanten.location
        readonly ' ': Klanten._
    }
    
    export namespace Leveranciers {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export type _ = null
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Leveranciers = {
        readonly 'location': Leveranciers.location
        readonly ' ': Leveranciers._
    }
    
    export namespace Medewerkers {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export type _ = null
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Medewerkers = {
        readonly 'location': Medewerkers.location
        readonly ' ': Medewerkers._
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
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace Type {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Bankrekening = null
                            
                            export type Overig = null
                            
                            export type Informele_rekening = null
                            
                        }
                        
                        export type _ = 
                            | readonly ['Bankrekening', _.Bankrekening]
                            | readonly ['Overig', _.Overig]
                            | readonly ['Informele rekening', _.Informele_rekening]
                        
                    }
                    
                    export type Type = {
                        readonly 'location': Type.location
                        readonly ' ': Type._
                    }
                    
                }
                
                export type _ = {
                    readonly 'Type': _.Type
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Balans = {
        readonly 'location': Balans.location
        readonly ' ': Balans._
    }
    
    export namespace Resultaat {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export type _ = null
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Resultaat = {
        readonly 'location': Resultaat.location
        readonly ' ': Resultaat._
    }
    
}

export type Grootboekrekeningen_ = {
    readonly 'Balans': Grootboekrekeningen_.Balans
    readonly 'Resultaat': Grootboekrekeningen_.Resultaat
}

export namespace Jaarbeheer_ {
    
    export namespace Resultaat {
        
        export namespace Grootboekrekening_voor_BTW_afrondingen {
            
            export type location = i__location.Relative_Location
            
            export type _ = string
            
        }
        
        export type Grootboekrekening_voor_BTW_afrondingen = {
            readonly 'location': Grootboekrekening_voor_BTW_afrondingen.location
            readonly ' ': Grootboekrekening_voor_BTW_afrondingen._
        }
        
        export namespace Salarisrondes {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export type _ = null
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Salarisrondes = {
            readonly 'location': Salarisrondes.location
            readonly ' ': Salarisrondes._
        }
        
        export namespace BTW_periodes {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export namespace _11$pe__BTW$mi_categorieen {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = null
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly ' ': D._
                                }
                                
                            }
                            
                            export type _ = _pi.Dictionary<_.D>
                            
                        }
                        
                        export type _11$pe__BTW$mi_categorieen = {
                            readonly 'location': _11$pe__BTW$mi_categorieen.location
                            readonly ' ': _11$pe__BTW$mi_categorieen._
                        }
                        
                        export namespace Documenten {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export namespace _ {
                                        
                                        export type Bestand = string
                                        
                                    }
                                    
                                    export type _ = {
                                        readonly 'Bestand': _.Bestand
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly ' ': D._
                                }
                                
                            }
                            
                            export type _ = _pi.Dictionary<_.D>
                            
                        }
                        
                        export type Documenten = {
                            readonly 'location': Documenten.location
                            readonly ' ': Documenten._
                        }
                        
                        export type Omschrijving = string
                        
                        export namespace Status {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
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
                            
                            export type _ = 
                                | readonly ['Aangegeven', _.Aangegeven]
                                | readonly ['Openstaand', _.Openstaand]
                            
                        }
                        
                        export type Status = {
                            readonly 'location': Status.location
                            readonly ' ': Status._
                        }
                        
                    }
                    
                    export type _ = {
                        readonly '1. BTW-categorieen': _._11$pe__BTW$mi_categorieen
                        readonly 'Documenten': _.Documenten
                        readonly 'Omschrijving': _.Omschrijving
                        readonly 'Status': _.Status
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type BTW_periodes = {
            readonly 'location': BTW_periodes.location
            readonly ' ': BTW_periodes._
        }
        
    }
    
    export type Resultaat = {
        readonly 'Grootboekrekening voor BTW afrondingen': Resultaat.Grootboekrekening_voor_BTW_afrondingen
        readonly 'Salarisrondes': Resultaat.Salarisrondes
        readonly 'BTW periodes': Resultaat.BTW_periodes
    }
    
    export namespace Balans {
        
        export namespace Grootboekrekening_voor_nog_aan_te_geven_BTW {
            
            export type location = i__location.Relative_Location
            
            export type _ = string
            
        }
        
        export type Grootboekrekening_voor_nog_aan_te_geven_BTW = {
            readonly 'location': Grootboekrekening_voor_nog_aan_te_geven_BTW.location
            readonly ' ': Grootboekrekening_voor_nog_aan_te_geven_BTW._
        }
        
        export namespace Grootboekrekening_voor_resultaat_dit_jaar {
            
            export type location = i__location.Relative_Location
            
            export type _ = string
            
        }
        
        export type Grootboekrekening_voor_resultaat_dit_jaar = {
            readonly 'location': Grootboekrekening_voor_resultaat_dit_jaar.location
            readonly ' ': Grootboekrekening_voor_resultaat_dit_jaar._
        }
        
        export namespace Grootboekrekening_voor_winstreserve {
            
            export type location = i__location.Relative_Location
            
            export type _ = string
            
        }
        
        export type Grootboekrekening_voor_winstreserve = {
            readonly 'location': Grootboekrekening_voor_winstreserve.location
            readonly ' ': Grootboekrekening_voor_winstreserve._
        }
        
        export namespace Grootboekrekening_voor_Inkoop_saldo {
            
            export type location = i__location.Relative_Location
            
            export type _ = string
            
        }
        
        export type Grootboekrekening_voor_Inkoop_saldo = {
            readonly 'location': Grootboekrekening_voor_Inkoop_saldo.location
            readonly ' ': Grootboekrekening_voor_Inkoop_saldo._
        }
        
        export namespace Grootboekrekening_voor_Verkoop_saldo {
            
            export type location = i__location.Relative_Location
            
            export type _ = string
            
        }
        
        export type Grootboekrekening_voor_Verkoop_saldo = {
            readonly 'location': Grootboekrekening_voor_Verkoop_saldo.location
            readonly ' ': Grootboekrekening_voor_Verkoop_saldo._
        }
        
        export type Beginsaldo_nog_aan_te_geven_BTW = number
        
        export type Beginsaldo_winstreserve = number
        
        export namespace Informele_rekeningen {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export type Beginsaldo = number
                        
                        export namespace Grootboekrekening {
                            
                            export type location = i__location.Relative_Location
                            
                            export type _ = string
                            
                        }
                        
                        export type Grootboekrekening = {
                            readonly 'location': Grootboekrekening.location
                            readonly ' ': Grootboekrekening._
                        }
                        
                        export namespace Nieuw {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export type Ja = null
                                
                                export namespace Nee {
                                    
                                    export type Rekening = Verwijzing_naar_Informele_rekening_
                                    
                                }
                                
                                export type Nee = {
                                    readonly 'Rekening': Nee.Rekening
                                }
                                
                            }
                            
                            export type _ = 
                                | readonly ['Ja', _.Ja]
                                | readonly ['Nee', _.Nee]
                            
                        }
                        
                        export type Nieuw = {
                            readonly 'location': Nieuw.location
                            readonly ' ': Nieuw._
                        }
                        
                    }
                    
                    export type _ = {
                        readonly 'Beginsaldo': _.Beginsaldo
                        readonly 'Grootboekrekening': _.Grootboekrekening
                        readonly 'Nieuw': _.Nieuw
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Informele_rekeningen = {
            readonly 'location': Informele_rekeningen.location
            readonly ' ': Informele_rekeningen._
        }
        
        export namespace Bankrekeningen {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export type Beginsaldo = number
                        
                        export namespace Grootboekrekening {
                            
                            export type location = i__location.Relative_Location
                            
                            export type _ = string
                            
                        }
                        
                        export type Grootboekrekening = {
                            readonly 'location': Grootboekrekening.location
                            readonly ' ': Grootboekrekening._
                        }
                        
                        export namespace Nieuw {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export type Ja = null
                                
                                export namespace Nee {
                                    
                                    export type Rekening = Verwijzing_naar_Bankrekening_
                                    
                                }
                                
                                export type Nee = {
                                    readonly 'Rekening': Nee.Rekening
                                }
                                
                            }
                            
                            export type _ = 
                                | readonly ['Ja', _.Ja]
                                | readonly ['Nee', _.Nee]
                            
                        }
                        
                        export type Nieuw = {
                            readonly 'location': Nieuw.location
                            readonly ' ': Nieuw._
                        }
                        
                        export namespace Mutaties {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export namespace _ {
                                        
                                        export type Bedrag = number
                                        
                                        export type Datum = number
                                        
                                        export type Omschrijving = string
                                        
                                    }
                                    
                                    export type _ = {
                                        readonly 'Bedrag': _.Bedrag
                                        readonly 'Datum': _.Datum
                                        readonly 'Omschrijving': _.Omschrijving
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly ' ': D._
                                }
                                
                            }
                            
                            export type _ = _pi.Dictionary<_.D>
                            
                        }
                        
                        export type Mutaties = {
                            readonly 'location': Mutaties.location
                            readonly ' ': Mutaties._
                        }
                        
                    }
                    
                    export type _ = {
                        readonly 'Beginsaldo': _.Beginsaldo
                        readonly 'Grootboekrekening': _.Grootboekrekening
                        readonly 'Nieuw': _.Nieuw
                        readonly 'Mutaties': _.Mutaties
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Bankrekeningen = {
            readonly 'location': Bankrekeningen.location
            readonly ' ': Bankrekeningen._
        }
        
        export namespace Overige_balans_items {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export type _ = Overige_balans_item_
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Overige_balans_items = {
            readonly 'location': Overige_balans_items.location
            readonly ' ': Overige_balans_items._
        }
        
        export namespace Verrekenposten {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export type _ = null
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly ' ': D._
                }
                
            }
            
            export type _ = _pi.Dictionary<_.D>
            
        }
        
        export type Verrekenposten = {
            readonly 'location': Verrekenposten.location
            readonly ' ': Verrekenposten._
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
        
        export type location = i__location.Relative_Location
        
        export type _ = string
        
    }
    
    export type Grootboekrekening = {
        readonly 'location': Grootboekrekening.location
        readonly ' ': Grootboekrekening._
    }
    
    export namespace Nieuw {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export type Ja = null
            
            export namespace Nee {
                
                export namespace Balans_item {
                    
                    export type location = i__location.Relative_Location
                    
                    export type _ = string
                    
                }
                
                export type Balans_item = {
                    readonly 'location': Balans_item.location
                    readonly ' ': Balans_item._
                }
                
            }
            
            export type Nee = {
                readonly 'Balans item': Nee.Balans_item
            }
            
        }
        
        export type _ = 
            | readonly ['Ja', _.Ja]
            | readonly ['Nee', _.Nee]
        
    }
    
    export type Nieuw = {
        readonly 'location': Nieuw.location
        readonly ' ': Nieuw._
    }
    
}

export type Overige_balans_item_ = {
    readonly 'Beginsaldo': Overige_balans_item_.Beginsaldo
    readonly 'Grootboekrekening': Overige_balans_item_.Grootboekrekening
    readonly 'Nieuw': Overige_balans_item_.Nieuw
}

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type location = i__location.Relative_Location
    
    export type _ = string
    
}

export type Verwijzing_naar_Informele_rekening_ = {
    readonly 'location': Verwijzing_naar_Informele_rekening_.location
    readonly ' ': Verwijzing_naar_Informele_rekening_._
}

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type location = i__location.Relative_Location
    
    export type _ = string
    
}

export type Verwijzing_naar_Bankrekening_ = {
    readonly 'location': Verwijzing_naar_Bankrekening_.location
    readonly ' ': Verwijzing_naar_Bankrekening_._
}

export namespace Handelstransacties_ {
    
    export namespace Inkopen {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace Afhandeling {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                
                                export namespace Rekening_courant {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Rekening_courant = {
                                    readonly 'location': Rekening_courant.location
                                    readonly ' ': Rekening_courant._
                                }
                                
                            }
                            
                            export type Rekening_courant = {
                                readonly 'Rekening courant': Rekening_courant.Rekening_courant
                            }
                            
                        }
                        
                        export type _ = 
                            | readonly ['Mutaties', _.Mutaties]
                            | readonly ['Rekening courant', _.Rekening_courant]
                        
                    }
                    
                    export type Afhandeling = {
                        readonly 'location': Afhandeling.location
                        readonly ' ': Afhandeling._
                    }
                    
                    export namespace BTW$mi_regime {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Binnenland$cl__heffing_verlegd = null
                            
                            export type Geen_BTW_van_toepassing = null
                            
                            export type Import_van_buiten_de_EU = null
                            
                            export type Intracommunautair = null
                            
                            export namespace Standaard {
                                
                                export namespace BTW$mi_periode {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type BTW$mi_periode = {
                                    readonly 'location': BTW$mi_periode.location
                                    readonly ' ': BTW$mi_periode._
                                }
                                
                            }
                            
                            export type Standaard = {
                                readonly 'BTW-periode': Standaard.BTW$mi_periode
                            }
                            
                        }
                        
                        export type _ = 
                            | readonly ['Binnenland: heffing verlegd', _.Binnenland$cl__heffing_verlegd]
                            | readonly ['Geen BTW van toepassing', _.Geen_BTW_van_toepassing]
                            | readonly ['Import van buiten de EU', _.Import_van_buiten_de_EU]
                            | readonly ['Intracommunautair', _.Intracommunautair]
                            | readonly ['Standaard', _.Standaard]
                        
                    }
                    
                    export type BTW$mi_regime = {
                        readonly 'location': BTW$mi_regime.location
                        readonly ' ': BTW$mi_regime._
                    }
                    
                    export namespace Brondocument {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace Toegevoegd {
                                
                                export type Document = string
                                
                            }
                            
                            export type Toegevoegd = {
                                readonly 'Document': Toegevoegd.Document
                            }
                            
                            export type Niet_van_toepassing = null
                            
                            export type Ontbreekt = null
                            
                        }
                        
                        export type _ = 
                            | readonly ['Toegevoegd', _.Toegevoegd]
                            | readonly ['Niet van toepassing', _.Niet_van_toepassing]
                            | readonly ['Ontbreekt', _.Ontbreekt]
                        
                    }
                    
                    export type Brondocument = {
                        readonly 'location': Brondocument.location
                        readonly ' ': Brondocument._
                    }
                    
                    export type Datum = number
                    
                    export namespace Regels {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace _ {
                                    
                                    export namespace Bedrag {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export namespace Bekend {
                                                
                                                export type BTW$mi_bedrag = number
                                                
                                                export type Bedrag_inclusief_geheven_BTW = number
                                                
                                            }
                                            
                                            export type Bekend = {
                                                readonly 'BTW-bedrag': Bekend.BTW$mi_bedrag
                                                readonly 'Bedrag inclusief geheven BTW': Bekend.Bedrag_inclusief_geheven_BTW
                                            }
                                            
                                        }
                                        
                                        export type _ = 
                                            | readonly ['Bekend', _.Bekend]
                                        
                                    }
                                    
                                    export type Bedrag = {
                                        readonly 'location': Bedrag.location
                                        readonly ' ': Bedrag._
                                    }
                                    
                                    export type Omschrijving = string
                                    
                                    export namespace Type {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export namespace Balans {
                                                
                                                export namespace Balans_item {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Balans_item = {
                                                    readonly 'location': Balans_item.location
                                                    readonly ' ': Balans_item._
                                                }
                                                
                                            }
                                            
                                            export type Balans = {
                                                readonly 'Balans item': Balans.Balans_item
                                            }
                                            
                                            export namespace Kosten {
                                                
                                                export namespace Grootboekrekening {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Grootboekrekening = {
                                                    readonly 'location': Grootboekrekening.location
                                                    readonly ' ': Grootboekrekening._
                                                }
                                                
                                            }
                                            
                                            export type Kosten = {
                                                readonly 'Grootboekrekening': Kosten.Grootboekrekening
                                            }
                                            
                                        }
                                        
                                        export type _ = 
                                            | readonly ['Balans', _.Balans]
                                            | readonly ['Kosten', _.Kosten]
                                        
                                    }
                                    
                                    export type Type = {
                                        readonly 'location': Type.location
                                        readonly ' ': Type._
                                    }
                                    
                                }
                                
                                export type _ = {
                                    readonly 'Bedrag': _.Bedrag
                                    readonly 'Omschrijving': _.Omschrijving
                                    readonly 'Type': _.Type
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly ' ': D._
                            }
                            
                        }
                        
                        export type _ = _pi.Dictionary<_.D>
                        
                    }
                    
                    export type Regels = {
                        readonly 'location': Regels.location
                        readonly ' ': Regels._
                    }
                    
                    export namespace Type {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Bonnetje = null
                            
                            export namespace Inkoop_$po_met_crediteur$pc_ {
                                
                                export namespace Crediteur {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Crediteur = {
                                    readonly 'location': Crediteur.location
                                    readonly ' ': Crediteur._
                                }
                                
                                export type Factuurnummer = string
                                
                            }
                            
                            export type Inkoop_$po_met_crediteur$pc_ = {
                                readonly 'Crediteur': Inkoop_$po_met_crediteur$pc_.Crediteur
                                readonly 'Factuurnummer': Inkoop_$po_met_crediteur$pc_.Factuurnummer
                            }
                            
                            export namespace Loonheffing {
                                
                                export namespace Ronde {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Ronde = {
                                    readonly 'location': Ronde.location
                                    readonly ' ': Ronde._
                                }
                                
                            }
                            
                            export type Loonheffing = {
                                readonly 'Ronde': Loonheffing.Ronde
                            }
                            
                            export namespace Salaris {
                                
                                export namespace Ronde {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Ronde = {
                                    readonly 'location': Ronde.location
                                    readonly ' ': Ronde._
                                }
                                
                                export namespace Medewerker {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Medewerker = {
                                    readonly 'location': Medewerker.location
                                    readonly ' ': Medewerker._
                                }
                                
                            }
                            
                            export type Salaris = {
                                readonly 'Ronde': Salaris.Ronde
                                readonly 'Medewerker': Salaris.Medewerker
                            }
                            
                        }
                        
                        export type _ = 
                            | readonly ['Bonnetje', _.Bonnetje]
                            | readonly ['Inkoop (met crediteur)', _.Inkoop_$po_met_crediteur$pc_]
                            | readonly ['Loonheffing', _.Loonheffing]
                            | readonly ['Salaris', _.Salaris]
                        
                    }
                    
                    export type Type = {
                        readonly 'location': Type.location
                        readonly ' ': Type._
                    }
                    
                }
                
                export type _ = {
                    readonly 'Afhandeling': _.Afhandeling
                    readonly 'BTW-regime': _.BTW$mi_regime
                    readonly 'Brondocument': _.Brondocument
                    readonly 'Datum': _.Datum
                    readonly 'Regels': _.Regels
                    readonly 'Type': _.Type
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Inkopen = {
        readonly 'location': Inkopen.location
        readonly ' ': Inkopen._
    }
    
    export namespace Verkopen {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export namespace Afhandeling {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                
                                export namespace Rekening_courant {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Rekening_courant = {
                                    readonly 'location': Rekening_courant.location
                                    readonly ' ': Rekening_courant._
                                }
                                
                            }
                            
                            export type Rekening_courant = {
                                readonly 'Rekening courant': Rekening_courant.Rekening_courant
                            }
                            
                        }
                        
                        export type _ = 
                            | readonly ['Mutaties', _.Mutaties]
                            | readonly ['Rekening courant', _.Rekening_courant]
                        
                    }
                    
                    export type Afhandeling = {
                        readonly 'location': Afhandeling.location
                        readonly ' ': Afhandeling._
                    }
                    
                    export type Betalingstermijn = number
                    
                    export namespace BTW$mi_periode {
                        
                        export type location = i__location.Relative_Location
                        
                        export type _ = string
                        
                    }
                    
                    export type BTW$mi_periode = {
                        readonly 'location': BTW$mi_periode.location
                        readonly ' ': BTW$mi_periode._
                    }
                    
                    export namespace Brondocument {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace Toegevoegd {
                                
                                export type Document = string
                                
                            }
                            
                            export type Toegevoegd = {
                                readonly 'Document': Toegevoegd.Document
                            }
                            
                        }
                        
                        export type _ = 
                            | readonly ['Toegevoegd', _.Toegevoegd]
                        
                    }
                    
                    export type Brondocument = {
                        readonly 'location': Brondocument.location
                        readonly ' ': Brondocument._
                    }
                    
                    export namespace Debiteur {
                        
                        export type location = i__location.Relative_Location
                        
                        export type _ = string
                        
                    }
                    
                    export type Debiteur = {
                        readonly 'location': Debiteur.location
                        readonly ' ': Debiteur._
                    }
                    
                    export namespace Contracttype {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace Project {
                                
                                export namespace Project {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Project = {
                                    readonly 'location': Project.location
                                    readonly ' ': Project._
                                }
                                
                                export namespace Offerte {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Offerte = {
                                    readonly 'location': Offerte.location
                                    readonly ' ': Offerte._
                                }
                                
                            }
                            
                            export type Project = {
                                readonly 'Project': Project.Project
                                readonly 'Offerte': Project.Offerte
                            }
                            
                            export namespace Licentieovereenkomst {
                                
                                export namespace Overeenkomst {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Overeenkomst = {
                                    readonly 'location': Overeenkomst.location
                                    readonly ' ': Overeenkomst._
                                }
                                
                            }
                            
                            export type Licentieovereenkomst = {
                                readonly 'Overeenkomst': Licentieovereenkomst.Overeenkomst
                            }
                            
                        }
                        
                        export type _ = 
                            | readonly ['Project', _.Project]
                            | readonly ['Licentieovereenkomst', _.Licentieovereenkomst]
                        
                    }
                    
                    export type Contracttype = {
                        readonly 'location': Contracttype.location
                        readonly ' ': Contracttype._
                    }
                    
                    export type Datum = number
                    
                    export namespace Regels {
                        
                        export type location = i__location.Relative_Location
                        
                        export namespace _ {
                            
                            export namespace D {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace _ {
                                    
                                    export namespace BTW$mi_regime {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export type Intracommunautair = null
                                            
                                            export namespace Standaard {
                                                
                                                export namespace BTW$mi_categorie {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type BTW$mi_categorie = {
                                                    readonly 'location': BTW$mi_categorie.location
                                                    readonly ' ': BTW$mi_categorie._
                                                }
                                                
                                            }
                                            
                                            export type Standaard = {
                                                readonly 'BTW-categorie': Standaard.BTW$mi_categorie
                                            }
                                            
                                            export type Binnenland$cl__heffing_verlegd = null
                                            
                                        }
                                        
                                        export type _ = 
                                            | readonly ['Intracommunautair', _.Intracommunautair]
                                            | readonly ['Standaard', _.Standaard]
                                            | readonly ['Binnenland: heffing verlegd', _.Binnenland$cl__heffing_verlegd]
                                        
                                    }
                                    
                                    export type BTW$mi_regime = {
                                        readonly 'location': BTW$mi_regime.location
                                        readonly ' ': BTW$mi_regime._
                                    }
                                    
                                    export type Bedrag_exclusief_BTW = number
                                    
                                    export namespace Contracttype {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export namespace Project {
                                                
                                                export namespace Opbrengst {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Opbrengst = {
                                                    readonly 'location': Opbrengst.location
                                                    readonly ' ': Opbrengst._
                                                }
                                                
                                            }
                                            
                                            export type Project = {
                                                readonly 'Opbrengst': Project.Opbrengst
                                            }
                                            
                                            export type Los = null
                                            
                                            export namespace Licentieovereenkomst {
                                                
                                                export namespace Periode {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Periode = {
                                                    readonly 'location': Periode.location
                                                    readonly ' ': Periode._
                                                }
                                                
                                            }
                                            
                                            export type Licentieovereenkomst = {
                                                readonly 'Periode': Licentieovereenkomst.Periode
                                            }
                                            
                                        }
                                        
                                        export type _ = 
                                            | readonly ['Project', _.Project]
                                            | readonly ['Los', _.Los]
                                            | readonly ['Licentieovereenkomst', _.Licentieovereenkomst]
                                        
                                    }
                                    
                                    export type Contracttype = {
                                        readonly 'location': Contracttype.location
                                        readonly ' ': Contracttype._
                                    }
                                    
                                    export type Omschrijving = string
                                    
                                    export namespace Type {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export namespace Opbrengsten {
                                                
                                                export namespace Grootboekrekening {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Grootboekrekening = {
                                                    readonly 'location': Grootboekrekening.location
                                                    readonly ' ': Grootboekrekening._
                                                }
                                                
                                            }
                                            
                                            export type Opbrengsten = {
                                                readonly 'Grootboekrekening': Opbrengsten.Grootboekrekening
                                            }
                                            
                                            export namespace Balans {
                                                
                                                export namespace Balans_item {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Balans_item = {
                                                    readonly 'location': Balans_item.location
                                                    readonly ' ': Balans_item._
                                                }
                                                
                                            }
                                            
                                            export type Balans = {
                                                readonly 'Balans item': Balans.Balans_item
                                            }
                                            
                                        }
                                        
                                        export type _ = 
                                            | readonly ['Opbrengsten', _.Opbrengsten]
                                            | readonly ['Balans', _.Balans]
                                        
                                    }
                                    
                                    export type Type = {
                                        readonly 'location': Type.location
                                        readonly ' ': Type._
                                    }
                                    
                                }
                                
                                export type _ = {
                                    readonly 'BTW-regime': _.BTW$mi_regime
                                    readonly 'Bedrag exclusief BTW': _.Bedrag_exclusief_BTW
                                    readonly 'Contracttype': _.Contracttype
                                    readonly 'Omschrijving': _.Omschrijving
                                    readonly 'Type': _.Type
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'location': D.location
                                readonly ' ': D._
                            }
                            
                        }
                        
                        export type _ = _pi.Dictionary<_.D>
                        
                    }
                    
                    export type Regels = {
                        readonly 'location': Regels.location
                        readonly ' ': Regels._
                    }
                    
                }
                
                export type _ = {
                    readonly 'Afhandeling': _.Afhandeling
                    readonly 'Betalingstermijn': _.Betalingstermijn
                    readonly 'BTW-periode': _.BTW$mi_periode
                    readonly 'Brondocument': _.Brondocument
                    readonly 'Debiteur': _.Debiteur
                    readonly 'Contracttype': _.Contracttype
                    readonly 'Datum': _.Datum
                    readonly 'Regels': _.Regels
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Verkopen = {
        readonly 'location': Verkopen.location
        readonly ' ': Verkopen._
    }
    
}

export type Handelstransacties_ = {
    readonly 'Inkopen': Handelstransacties_.Inkopen
    readonly 'Verkopen': Handelstransacties_.Verkopen
}

export namespace Mutaties_ {
    
    export namespace Verrekenpost_mutaties {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export namespace D {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export type Bedrag = number
                                
                                export namespace Afhandeling {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export namespace _ {
                                        
                                        export type Resultaat = Balans_Resultaat_Mutatie_
                                        
                                        export namespace Balans {
                                            
                                            export type location = i__location.Relative_Location
                                            
                                            export namespace _ {
                                                
                                                export namespace Informele_rekening {
                                                    
                                                    export namespace Informele_rekening {
                                                        
                                                        export type location = i__location.Relative_Location
                                                        
                                                        export type _ = string
                                                        
                                                    }
                                                    
                                                    export type Informele_rekening = {
                                                        readonly 'location': Informele_rekening.location
                                                        readonly ' ': Informele_rekening._
                                                    }
                                                    
                                                }
                                                
                                                export type Informele_rekening = {
                                                    readonly 'Informele rekening': Informele_rekening.Informele_rekening
                                                }
                                                
                                            }
                                            
                                            export type _ = 
                                                | readonly ['Informele rekening', _.Informele_rekening]
                                            
                                        }
                                        
                                        export type Balans = {
                                            readonly 'location': Balans.location
                                            readonly ' ': Balans._
                                        }
                                        
                                    }
                                    
                                    export type _ = 
                                        | readonly ['Resultaat', _.Resultaat]
                                        | readonly ['Balans', _.Balans]
                                    
                                }
                                
                                export type Afhandeling = {
                                    readonly 'location': Afhandeling.location
                                    readonly ' ': Afhandeling._
                                }
                                
                            }
                            
                            export type _ = {
                                readonly 'Bedrag': _.Bedrag
                                readonly 'Afhandeling': _.Afhandeling
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'location': D.location
                            readonly ' ': D._
                        }
                        
                    }
                    
                    export type _ = _pi.Dictionary<_.D>
                    
                }
                
                export type _ = {
                    readonly 'location': _.location
                    readonly ' ': _._
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Verrekenpost_mutaties = {
        readonly 'location': Verrekenpost_mutaties.location
        readonly ' ': Verrekenpost_mutaties._
    }
    
    export namespace Bankrekening_Mutatie_Verwerkingen {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export namespace D {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export type location = i__location.Relative_Location
                                
                                export namespace _ {
                                    
                                    export type Resultaat = Balans_Resultaat_Mutatie_
                                    
                                    export namespace Balans {
                                        
                                        export type location = i__location.Relative_Location
                                        
                                        export namespace _ {
                                            
                                            export namespace Informele_rekening {
                                                
                                                export namespace Informele_rekening {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Informele_rekening = {
                                                    readonly 'location': Informele_rekening.location
                                                    readonly ' ': Informele_rekening._
                                                }
                                                
                                            }
                                            
                                            export type Informele_rekening = {
                                                readonly 'Informele rekening': Informele_rekening.Informele_rekening
                                            }
                                            
                                            export namespace Verrekenpost {
                                                
                                                export namespace Verrekenpost {
                                                    
                                                    export type location = i__location.Relative_Location
                                                    
                                                    export type _ = string
                                                    
                                                }
                                                
                                                export type Verrekenpost = {
                                                    readonly 'location': Verrekenpost.location
                                                    readonly ' ': Verrekenpost._
                                                }
                                                
                                            }
                                            
                                            export type Verrekenpost = {
                                                readonly 'Verrekenpost': Verrekenpost.Verrekenpost
                                            }
                                            
                                        }
                                        
                                        export type _ = 
                                            | readonly ['Informele rekening', _.Informele_rekening]
                                            | readonly ['Verrekenpost', _.Verrekenpost]
                                        
                                    }
                                    
                                    export type Balans = {
                                        readonly 'location': Balans.location
                                        readonly ' ': Balans._
                                    }
                                    
                                }
                                
                                export type _ = 
                                    | readonly ['Resultaat', _.Resultaat]
                                    | readonly ['Balans', _.Balans]
                                
                            }
                            
                            export type _ = {
                                readonly 'location': _.location
                                readonly ' ': _._
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'location': D.location
                            readonly ' ': D._
                        }
                        
                    }
                    
                    export type _ = _pi.Dictionary<_.D>
                    
                }
                
                export type _ = {
                    readonly 'location': _.location
                    readonly ' ': _._
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Bankrekening_Mutatie_Verwerkingen = {
        readonly 'location': Bankrekening_Mutatie_Verwerkingen.location
        readonly ' ': Bankrekening_Mutatie_Verwerkingen._
    }
    
    export namespace Memoriaal_boekingen {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export namespace _ {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export namespace D {
                            
                            export type location = i__location.Relative_Location
                            
                            export namespace _ {
                                
                                export type Bedrag = number
                                
                                export type Datum = number
                                
                                export type Omschrijving = string
                                
                                export namespace Grootboekrekening {
                                    
                                    export type location = i__location.Relative_Location
                                    
                                    export type _ = string
                                    
                                }
                                
                                export type Grootboekrekening = {
                                    readonly 'location': Grootboekrekening.location
                                    readonly ' ': Grootboekrekening._
                                }
                                
                            }
                            
                            export type _ = {
                                readonly 'Bedrag': _.Bedrag
                                readonly 'Datum': _.Datum
                                readonly 'Omschrijving': _.Omschrijving
                                readonly 'Grootboekrekening': _.Grootboekrekening
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'location': D.location
                            readonly ' ': D._
                        }
                        
                    }
                    
                    export type _ = _pi.Dictionary<_.D>
                    
                }
                
                export type _ = {
                    readonly 'location': _.location
                    readonly ' ': _._
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly ' ': D._
            }
            
        }
        
        export type _ = _pi.Dictionary<_.D>
        
    }
    
    export type Memoriaal_boekingen = {
        readonly 'location': Memoriaal_boekingen.location
        readonly ' ': Memoriaal_boekingen._
    }
    
}

export type Mutaties_ = {
    readonly 'Verrekenpost mutaties': Mutaties_.Verrekenpost_mutaties
    readonly 'Bankrekening Mutatie Verwerkingen': Mutaties_.Bankrekening_Mutatie_Verwerkingen
    readonly 'Memoriaal boekingen': Mutaties_.Memoriaal_boekingen
}

export namespace Jaren_ {
    
    export type location = i__location.Relative_Location
    
    export namespace _ {
        
        export namespace D {
            
            export type location = i__location.Relative_Location
            
            export namespace _ {
                
                export namespace Afgesloten {
                    
                    export type location = i__location.Relative_Location
                    
                    export namespace _ {
                        
                        export type Ja = null
                        
                        export type Nee = null
                        
                    }
                    
                    export type _ = 
                        | readonly ['Ja', _.Ja]
                        | readonly ['Nee', _.Nee]
                    
                }
                
                export type Afgesloten = {
                    readonly 'location': Afgesloten.location
                    readonly ' ': Afgesloten._
                }
                
                export type Startdatum_boekjaar = number
                
                export type Grootboekrekeningen = Grootboekrekeningen_
                
                export type Eerste_boekjaar = Eerste_boekjaar_
                
                export type Jaarbeheer = Jaarbeheer_
                
                export type Handelstransacties = Handelstransacties_
                
                export type Mutaties = Mutaties_
                
            }
            
            export type _ = {
                readonly 'Afgesloten': _.Afgesloten
                readonly 'Startdatum boekjaar': _.Startdatum_boekjaar
                readonly 'Grootboekrekeningen': _.Grootboekrekeningen
                readonly 'Eerste boekjaar': _.Eerste_boekjaar
                readonly 'Jaarbeheer': _.Jaarbeheer
                readonly 'Handelstransacties': _.Handelstransacties
                readonly 'Mutaties': _.Mutaties
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly ' ': D._
        }
        
    }
    
    export type _ = _pi.Dictionary<_.D>
    
}

export type Jaren_ = {
    readonly 'location': Jaren_.location
    readonly ' ': Jaren_._
}

export namespace Balans_Resultaat_Mutatie_ {
    
    export namespace Jaar {
        
        export namespace O {
            
            export type location = i__location.Relative_Location
            
            export type _ = string
            
        }
        
        export type O = {
            readonly 'location': O.location
            readonly ' ': O._
        }
        
    }
    
    export type Jaar = _pi.Optional_Value<Jaar.O>
    
    export namespace type_ {
        
        export type location = i__location.Relative_Location
        
        export namespace _ {
            
            export namespace Inkoop {
                
                export type location = i__location.Relative_Location
                
                export type _ = string
                
            }
            
            export type Inkoop = {
                readonly 'location': Inkoop.location
                readonly ' ': Inkoop._
            }
            
            export namespace Verkoop {
                
                export type location = i__location.Relative_Location
                
                export type _ = string
                
            }
            
            export type Verkoop = {
                readonly 'location': Verkoop.location
                readonly ' ': Verkoop._
            }
            
            export namespace BTW$mi_periode {
                
                export type location = i__location.Relative_Location
                
                export type _ = string
                
            }
            
            export type BTW$mi_periode = {
                readonly 'location': BTW$mi_periode.location
                readonly ' ': BTW$mi_periode._
            }
            
        }
        
        export type _ = 
            | readonly ['Inkoop', _.Inkoop]
            | readonly ['Verkoop', _.Verkoop]
            | readonly ['BTW-periode', _.BTW$mi_periode]
        
    }
    
    export type type_ = {
        readonly 'location': type_.location
        readonly ' ': type_._
    }
    
}

export type Balans_Resultaat_Mutatie_ = {
    readonly 'Jaar': Balans_Resultaat_Mutatie_.Jaar
    readonly 'type': Balans_Resultaat_Mutatie_.type_
}

export namespace Eerste_boekjaar_ {
    
    export type location = i__location.Relative_Location
    
    export namespace _ {
        
        export type Ja = null
        
        export namespace Nee {
            
            export namespace Vorig_boekjaar {
                
                export type location = i__location.Relative_Location
                
                export type _ = string
                
            }
            
            export type Vorig_boekjaar = {
                readonly 'location': Vorig_boekjaar.location
                readonly ' ': Vorig_boekjaar._
            }
            
        }
        
        export type Nee = {
            readonly 'Vorig boekjaar': Nee.Vorig_boekjaar
        }
        
    }
    
    export type _ = 
        | readonly ['Ja', _.Ja]
        | readonly ['Nee', _.Nee]
    
}

export type Eerste_boekjaar_ = {
    readonly 'location': Eerste_boekjaar_.location
    readonly ' ': Eerste_boekjaar_._
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
