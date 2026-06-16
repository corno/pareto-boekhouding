
import * as p_i from 'pareto-core/dist/interface/__internal/Abort'
import * as p_di from 'pareto-core/dist/interface/data'

import * as i_location from "liana-core/dist/interface/data/document_and_location"

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

export namespace Fiscaal_ {
    
    export namespace Balans_Hoofdcategorieen {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export namespace Zijde {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export type Activa = null
                            
                            export type Passiva = null
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Activa', l_state.Activa]
                            | readonly ['Passiva', l_state.Passiva]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'l location': Zijde.l_location
                        readonly 'l state': Zijde.l_state
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export type l_entry = null
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'l location': Subcategorieen.l_location
                        readonly 'l dictionary': Subcategorieen.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Zijde': l_entry.Zijde
                    readonly 'Subcategorieen': l_entry.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Balans_Hoofdcategorieen = {
        readonly 'l location': Balans_Hoofdcategorieen.l_location
        readonly 'l dictionary': Balans_Hoofdcategorieen.l_dictionary
    }
    
    export namespace Resultaat_Hoofdcategorieen {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export namespace Zijde {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export type Kosten = null
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Kosten', l_state.Kosten]
                            | readonly ['Opbrengsten', l_state.Opbrengsten]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'l location': Zijde.l_location
                        readonly 'l state': Zijde.l_state
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export type l_entry = null
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'l location': Subcategorieen.l_location
                        readonly 'l dictionary': Subcategorieen.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Zijde': l_entry.Zijde
                    readonly 'Subcategorieen': l_entry.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Resultaat_Hoofdcategorieen = {
        readonly 'l location': Resultaat_Hoofdcategorieen.l_location
        readonly 'l dictionary': Resultaat_Hoofdcategorieen.l_dictionary
    }
    
}

export type Fiscaal_ = {
    readonly 'Balans Hoofdcategorieen': Fiscaal_.Balans_Hoofdcategorieen
    readonly 'Resultaat Hoofdcategorieen': Fiscaal_.Resultaat_Hoofdcategorieen
}

export namespace Grootboek_Categorieen_ {
    
    export namespace Correctietypes_vennootschapsbelasting {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export type Te_corrigeren_promillage = number
                    
                }
                
                export type l_entry = {
                    readonly 'Te corrigeren promillage': l_entry.Te_corrigeren_promillage
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Correctietypes_vennootschapsbelasting = {
        readonly 'l location': Correctietypes_vennootschapsbelasting.l_location
        readonly 'l dictionary': Correctietypes_vennootschapsbelasting.l_dictionary
    }
    
    export namespace Balans {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export namespace Zijde {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export type Activa = null
                            
                            export type Passiva = null
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Activa', l_state.Activa]
                            | readonly ['Passiva', l_state.Passiva]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'l location': Zijde.l_location
                        readonly 'l state': Zijde.l_state
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export namespace Hoofdcategorie_fiscus {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export type l_reference = string
                                        
                                    }
                                    
                                    export type Hoofdcategorie_fiscus = {
                                        readonly 'l location': Hoofdcategorie_fiscus.l_location
                                        readonly 'l reference': Hoofdcategorie_fiscus.l_reference
                                    }
                                    
                                    export namespace Subcategorie_fiscus {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export type l_reference = string
                                        
                                    }
                                    
                                    export type Subcategorie_fiscus = {
                                        readonly 'l location': Subcategorie_fiscus.l_location
                                        readonly 'l reference': Subcategorie_fiscus.l_reference
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'Hoofdcategorie fiscus': l_entry.Hoofdcategorie_fiscus
                                    readonly 'Subcategorie fiscus': l_entry.Subcategorie_fiscus
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'l location': Subcategorieen.l_location
                        readonly 'l dictionary': Subcategorieen.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Zijde': l_entry.Zijde
                    readonly 'Subcategorieen': l_entry.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Balans = {
        readonly 'l location': Balans.l_location
        readonly 'l dictionary': Balans.l_dictionary
    }
    
    export namespace Resultaat {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export namespace Zijde {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export type Kosten = null
                            
                            export type Opbrengsten = null
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Kosten', l_state.Kosten]
                            | readonly ['Opbrengsten', l_state.Opbrengsten]
                        
                    }
                    
                    export type Zijde = {
                        readonly 'l location': Zijde.l_location
                        readonly 'l state': Zijde.l_state
                    }
                    
                    export namespace Subcategorieen {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export namespace Hoofdcategorie_fiscus {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export type l_reference = string
                                        
                                    }
                                    
                                    export type Hoofdcategorie_fiscus = {
                                        readonly 'l location': Hoofdcategorie_fiscus.l_location
                                        readonly 'l reference': Hoofdcategorie_fiscus.l_reference
                                    }
                                    
                                    export namespace Subcategorie_fiscus {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export type l_reference = string
                                        
                                    }
                                    
                                    export type Subcategorie_fiscus = {
                                        readonly 'l location': Subcategorie_fiscus.l_location
                                        readonly 'l reference': Subcategorie_fiscus.l_reference
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'Hoofdcategorie fiscus': l_entry.Hoofdcategorie_fiscus
                                    readonly 'Subcategorie fiscus': l_entry.Subcategorie_fiscus
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Subcategorieen = {
                        readonly 'l location': Subcategorieen.l_location
                        readonly 'l dictionary': Subcategorieen.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Zijde': l_entry.Zijde
                    readonly 'Subcategorieen': l_entry.Subcategorieen
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Resultaat = {
        readonly 'l location': Resultaat.l_location
        readonly 'l dictionary': Resultaat.l_dictionary
    }
    
}

export type Grootboek_Categorieen_ = {
    readonly 'Correctietypes vennootschapsbelasting': Grootboek_Categorieen_.Correctietypes_vennootschapsbelasting
    readonly 'Balans': Grootboek_Categorieen_.Balans
    readonly 'Resultaat': Grootboek_Categorieen_.Resultaat
}

export namespace Beheer_ {
    
    export namespace BTW$mi_categorieen {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export namespace BTW$mi_heffing {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export namespace Ja {
                                
                                export type BTW$mi_promillage = number
                                
                            }
                            
                            export type Ja = {
                                readonly 'BTW-promillage': Ja.BTW$mi_promillage
                            }
                            
                            export type Nee = null
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Ja', l_state.Ja]
                            | readonly ['Nee', l_state.Nee]
                        
                    }
                    
                    export type BTW$mi_heffing = {
                        readonly 'l location': BTW$mi_heffing.l_location
                        readonly 'l state': BTW$mi_heffing.l_state
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'BTW-heffing': l_entry.BTW$mi_heffing
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type BTW$mi_categorieen = {
        readonly 'l location': BTW$mi_categorieen.l_location
        readonly 'l dictionary': BTW$mi_categorieen.l_dictionary
    }
    
    export namespace Grootboekrekeningen {
        
        export namespace Balans {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export namespace l_entry {
                        
                        export namespace Hoofdcategorie {
                            
                            export type l_location = i_location.Range
                            
                            export type l_reference = string
                            
                        }
                        
                        export type Hoofdcategorie = {
                            readonly 'l location': Hoofdcategorie.l_location
                            readonly 'l reference': Hoofdcategorie.l_reference
                        }
                        
                        export namespace Subcategorie {
                            
                            export type l_location = i_location.Range
                            
                            export type l_reference = string
                            
                        }
                        
                        export type Subcategorie = {
                            readonly 'l location': Subcategorie.l_location
                            readonly 'l reference': Subcategorie.l_reference
                        }
                        
                        export namespace Zijde {
                            
                            export type l_location = i_location.Range
                            
                            export namespace l_state {
                                
                                export type Activa = null
                                
                                export type Passiva = null
                                
                            }
                            
                            export type l_state = 
                                | readonly ['Activa', l_state.Activa]
                                | readonly ['Passiva', l_state.Passiva]
                            
                        }
                        
                        export type Zijde = {
                            readonly 'l location': Zijde.l_location
                            readonly 'l state': Zijde.l_state
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'Hoofdcategorie': l_entry.Hoofdcategorie
                        readonly 'Subcategorie': l_entry.Subcategorie
                        readonly 'Zijde': l_entry.Zijde
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Balans = {
            readonly 'l location': Balans.l_location
            readonly 'l dictionary': Balans.l_dictionary
        }
        
        export namespace Resultaat {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export namespace l_entry {
                        
                        export namespace Hoofdcategorie {
                            
                            export type l_location = i_location.Range
                            
                            export type l_reference = string
                            
                        }
                        
                        export type Hoofdcategorie = {
                            readonly 'l location': Hoofdcategorie.l_location
                            readonly 'l reference': Hoofdcategorie.l_reference
                        }
                        
                        export namespace Subcategorie {
                            
                            export type l_location = i_location.Range
                            
                            export type l_reference = string
                            
                        }
                        
                        export type Subcategorie = {
                            readonly 'l location': Subcategorie.l_location
                            readonly 'l reference': Subcategorie.l_reference
                        }
                        
                        export namespace Zijde {
                            
                            export type l_location = i_location.Range
                            
                            export namespace l_state {
                                
                                export namespace Kosten {
                                    
                                    export namespace Correctie_op_vennootschapsbelasting {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_state {
                                            
                                            export namespace Ja {
                                                
                                                export namespace Correctietype {
                                                    
                                                    export type l_location = i_location.Range
                                                    
                                                    export type l_reference = string
                                                    
                                                }
                                                
                                                export type Correctietype = {
                                                    readonly 'l location': Correctietype.l_location
                                                    readonly 'l reference': Correctietype.l_reference
                                                }
                                                
                                            }
                                            
                                            export type Ja = {
                                                readonly 'Correctietype': Ja.Correctietype
                                            }
                                            
                                            export type Nee = null
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['Ja', l_state.Ja]
                                            | readonly ['Nee', l_state.Nee]
                                        
                                    }
                                    
                                    export type Correctie_op_vennootschapsbelasting = {
                                        readonly 'l location': Correctie_op_vennootschapsbelasting.l_location
                                        readonly 'l state': Correctie_op_vennootschapsbelasting.l_state
                                    }
                                    
                                }
                                
                                export type Kosten = {
                                    readonly 'Correctie op vennootschapsbelasting': Kosten.Correctie_op_vennootschapsbelasting
                                }
                                
                                export type Opbrengsten = null
                                
                            }
                            
                            export type l_state = 
                                | readonly ['Kosten', l_state.Kosten]
                                | readonly ['Opbrengsten', l_state.Opbrengsten]
                            
                        }
                        
                        export type Zijde = {
                            readonly 'l location': Zijde.l_location
                            readonly 'l state': Zijde.l_state
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'Hoofdcategorie': l_entry.Hoofdcategorie
                        readonly 'Subcategorie': l_entry.Subcategorie
                        readonly 'Zijde': l_entry.Zijde
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Resultaat = {
            readonly 'l location': Resultaat.l_location
            readonly 'l dictionary': Resultaat.l_dictionary
        }
        
    }
    
    export type Grootboekrekeningen = {
        readonly 'Balans': Grootboekrekeningen.Balans
        readonly 'Resultaat': Grootboekrekeningen.Resultaat
    }
    
    export namespace Rekeningen {
        
        export namespace Bank {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export type l_entry = null
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Bank = {
            readonly 'l location': Bank.l_location
            readonly 'l dictionary': Bank.l_dictionary
        }
        
        export namespace Informeel {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export type l_entry = null
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Informeel = {
            readonly 'l location': Informeel.l_location
            readonly 'l dictionary': Informeel.l_dictionary
        }
        
    }
    
    export type Rekeningen = {
        readonly 'Bank': Rekeningen.Bank
        readonly 'Informeel': Rekeningen.Informeel
    }
    
    export namespace Gebruikers {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export type Volledige_naam = string
                    
                    export type Wachtwoord = string
                    
                }
                
                export type l_entry = {
                    readonly 'Volledige naam': l_entry.Volledige_naam
                    readonly 'Wachtwoord': l_entry.Wachtwoord
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Gebruikers = {
        readonly 'l location': Gebruikers.l_location
        readonly 'l dictionary': Gebruikers.l_dictionary
    }
    
    export namespace Klanten {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export namespace Licentieovereenkomsten {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export namespace Periodes {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_dictionary {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i_location.Range
                                                
                                                export namespace l_entry {
                                                    
                                                    export type Bedrag = number
                                                    
                                                }
                                                
                                                export type l_entry = {
                                                    readonly 'Bedrag': l_entry.Bedrag
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                                        
                                    }
                                    
                                    export type Periodes = {
                                        readonly 'l location': Periodes.l_location
                                        readonly 'l dictionary': Periodes.l_dictionary
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'Periodes': l_entry.Periodes
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Licentieovereenkomsten = {
                        readonly 'l location': Licentieovereenkomsten.l_location
                        readonly 'l dictionary': Licentieovereenkomsten.l_dictionary
                    }
                    
                    export namespace Projecten {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export namespace Offertes {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_dictionary {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i_location.Range
                                                
                                                export namespace l_entry {
                                                    
                                                    export namespace Opbrengsten {
                                                        
                                                        export type l_location = i_location.Range
                                                        
                                                        export namespace l_dictionary {
                                                            
                                                            export namespace D {
                                                                
                                                                export type l_location = i_location.Range
                                                                
                                                                export namespace l_entry {
                                                                    
                                                                    export namespace Type {
                                                                        
                                                                        export type l_location = i_location.Range
                                                                        
                                                                        export namespace l_state {
                                                                            
                                                                            export namespace Project {
                                                                                
                                                                                export type Bedrag = number
                                                                                
                                                                                export type Betaaldatum = number
                                                                                
                                                                            }
                                                                            
                                                                            export type Project = {
                                                                                readonly 'Bedrag': Project.Bedrag
                                                                                readonly 'Betaaldatum': Project.Betaaldatum
                                                                            }
                                                                            
                                                                        }
                                                                        
                                                                        export type l_state = 
                                                                            | readonly ['Project', l_state.Project]
                                                                        
                                                                    }
                                                                    
                                                                    export type Type = {
                                                                        readonly 'l location': Type.l_location
                                                                        readonly 'l state': Type.l_state
                                                                    }
                                                                    
                                                                }
                                                                
                                                                export type l_entry = {
                                                                    readonly 'Type': l_entry.Type
                                                                }
                                                                
                                                            }
                                                            
                                                            export type D = {
                                                                readonly 'l location': D.l_location
                                                                readonly 'l entry': D.l_entry
                                                            }
                                                            
                                                        }
                                                        
                                                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                                                        
                                                    }
                                                    
                                                    export type Opbrengsten = {
                                                        readonly 'l location': Opbrengsten.l_location
                                                        readonly 'l dictionary': Opbrengsten.l_dictionary
                                                    }
                                                    
                                                }
                                                
                                                export type l_entry = {
                                                    readonly 'Opbrengsten': l_entry.Opbrengsten
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                                        
                                    }
                                    
                                    export type Offertes = {
                                        readonly 'l location': Offertes.l_location
                                        readonly 'l dictionary': Offertes.l_dictionary
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'Offertes': l_entry.Offertes
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Projecten = {
                        readonly 'l location': Projecten.l_location
                        readonly 'l dictionary': Projecten.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Licentieovereenkomsten': l_entry.Licentieovereenkomsten
                    readonly 'Projecten': l_entry.Projecten
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Klanten = {
        readonly 'l location': Klanten.l_location
        readonly 'l dictionary': Klanten.l_dictionary
    }
    
    export namespace Leveranciers {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export type l_entry = null
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Leveranciers = {
        readonly 'l location': Leveranciers.l_location
        readonly 'l dictionary': Leveranciers.l_dictionary
    }
    
    export namespace Medewerkers {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export type l_entry = null
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Medewerkers = {
        readonly 'l location': Medewerkers.l_location
        readonly 'l dictionary': Medewerkers.l_dictionary
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
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export type Stam = null
                    
                }
                
                export type l_entry = {
                    readonly 'Stam': l_entry.Stam
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Balans = {
        readonly 'l location': Balans.l_location
        readonly 'l dictionary': Balans.l_dictionary
    }
    
    export namespace Resultaat {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export type Stam = null
                    
                }
                
                export type l_entry = {
                    readonly 'Stam': l_entry.Stam
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Resultaat = {
        readonly 'l location': Resultaat.l_location
        readonly 'l dictionary': Resultaat.l_dictionary
    }
    
}

export type Grootboekrekeningen_ = {
    readonly 'Balans': Grootboekrekeningen_.Balans
    readonly 'Resultaat': Grootboekrekeningen_.Resultaat
}

export namespace Jaarbeheer_ {
    
    export namespace Resultaat {
        
        export namespace Grootboekrekening_voor_BTW_afrondingen {
            
            export type l_location = i_location.Range
            
            export type l_reference = string
            
        }
        
        export type Grootboekrekening_voor_BTW_afrondingen = {
            readonly 'l location': Grootboekrekening_voor_BTW_afrondingen.l_location
            readonly 'l reference': Grootboekrekening_voor_BTW_afrondingen.l_reference
        }
        
        export namespace Salarisrondes {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export type l_entry = null
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Salarisrondes = {
            readonly 'l location': Salarisrondes.l_location
            readonly 'l dictionary': Salarisrondes.l_dictionary
        }
        
        export namespace BTW_periodes {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export namespace l_entry {
                        
                        export namespace _11$pe__BTW$mi_categorieen {
                            
                            export type l_location = i_location.Range
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_entry = null
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type _11$pe__BTW$mi_categorieen = {
                            readonly 'l location': _11$pe__BTW$mi_categorieen.l_location
                            readonly 'l dictionary': _11$pe__BTW$mi_categorieen.l_dictionary
                        }
                        
                        export namespace Documenten {
                            
                            export type l_location = i_location.Range
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export namespace l_entry {
                                        
                                        export type Bestand = string
                                        
                                    }
                                    
                                    export type l_entry = {
                                        readonly 'Bestand': l_entry.Bestand
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type Documenten = {
                            readonly 'l location': Documenten.l_location
                            readonly 'l dictionary': Documenten.l_dictionary
                        }
                        
                        export type Omschrijving = string
                        
                        export namespace Status {
                            
                            export type l_location = i_location.Range
                            
                            export namespace l_state {
                                
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
                            
                            export type l_state = 
                                | readonly ['Aangegeven', l_state.Aangegeven]
                                | readonly ['Openstaand', l_state.Openstaand]
                            
                        }
                        
                        export type Status = {
                            readonly 'l location': Status.l_location
                            readonly 'l state': Status.l_state
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly '1. BTW-categorieen': l_entry._11$pe__BTW$mi_categorieen
                        readonly 'Documenten': l_entry.Documenten
                        readonly 'Omschrijving': l_entry.Omschrijving
                        readonly 'Status': l_entry.Status
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type BTW_periodes = {
            readonly 'l location': BTW_periodes.l_location
            readonly 'l dictionary': BTW_periodes.l_dictionary
        }
        
    }
    
    export type Resultaat = {
        readonly 'Grootboekrekening voor BTW afrondingen': Resultaat.Grootboekrekening_voor_BTW_afrondingen
        readonly 'Salarisrondes': Resultaat.Salarisrondes
        readonly 'BTW periodes': Resultaat.BTW_periodes
    }
    
    export namespace Balans {
        
        export namespace Grootboekrekening_voor_nog_aan_te_geven_BTW {
            
            export type l_location = i_location.Range
            
            export type l_reference = string
            
        }
        
        export type Grootboekrekening_voor_nog_aan_te_geven_BTW = {
            readonly 'l location': Grootboekrekening_voor_nog_aan_te_geven_BTW.l_location
            readonly 'l reference': Grootboekrekening_voor_nog_aan_te_geven_BTW.l_reference
        }
        
        export namespace Grootboekrekening_voor_resultaat_dit_jaar {
            
            export type l_location = i_location.Range
            
            export type l_reference = string
            
        }
        
        export type Grootboekrekening_voor_resultaat_dit_jaar = {
            readonly 'l location': Grootboekrekening_voor_resultaat_dit_jaar.l_location
            readonly 'l reference': Grootboekrekening_voor_resultaat_dit_jaar.l_reference
        }
        
        export namespace Grootboekrekening_voor_winstreserve {
            
            export type l_location = i_location.Range
            
            export type l_reference = string
            
        }
        
        export type Grootboekrekening_voor_winstreserve = {
            readonly 'l location': Grootboekrekening_voor_winstreserve.l_location
            readonly 'l reference': Grootboekrekening_voor_winstreserve.l_reference
        }
        
        export namespace Grootboekrekening_voor_Inkoop_saldo {
            
            export type l_location = i_location.Range
            
            export type l_reference = string
            
        }
        
        export type Grootboekrekening_voor_Inkoop_saldo = {
            readonly 'l location': Grootboekrekening_voor_Inkoop_saldo.l_location
            readonly 'l reference': Grootboekrekening_voor_Inkoop_saldo.l_reference
        }
        
        export namespace Grootboekrekening_voor_Verkoop_saldo {
            
            export type l_location = i_location.Range
            
            export type l_reference = string
            
        }
        
        export type Grootboekrekening_voor_Verkoop_saldo = {
            readonly 'l location': Grootboekrekening_voor_Verkoop_saldo.l_location
            readonly 'l reference': Grootboekrekening_voor_Verkoop_saldo.l_reference
        }
        
        export type Beginsaldo_nog_aan_te_geven_BTW = number
        
        export type Beginsaldo_winstreserve = number
        
        export namespace Bankrekeningen {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export namespace l_entry {
                        
                        export type Beginsaldo = number
                        
                        export namespace Grootboekrekening {
                            
                            export type l_location = i_location.Range
                            
                            export type l_reference = string
                            
                        }
                        
                        export type Grootboekrekening = {
                            readonly 'l location': Grootboekrekening.l_location
                            readonly 'l reference': Grootboekrekening.l_reference
                        }
                        
                        export namespace Nieuw {
                            
                            export type l_location = i_location.Range
                            
                            export namespace l_state {
                                
                                export type Ja = null
                                
                                export namespace Nee {
                                    
                                    export type Rekening = Verwijzing_naar_Bankrekening_
                                    
                                }
                                
                                export type Nee = {
                                    readonly 'Rekening': Nee.Rekening
                                }
                                
                            }
                            
                            export type l_state = 
                                | readonly ['Ja', l_state.Ja]
                                | readonly ['Nee', l_state.Nee]
                            
                        }
                        
                        export type Nieuw = {
                            readonly 'l location': Nieuw.l_location
                            readonly 'l state': Nieuw.l_state
                        }
                        
                        export namespace Mutaties {
                            
                            export type l_location = i_location.Range
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export namespace l_entry {
                                        
                                        export type Bedrag = number
                                        
                                        export type Datum = number
                                        
                                        export type Omschrijving = string
                                        
                                    }
                                    
                                    export type l_entry = {
                                        readonly 'Bedrag': l_entry.Bedrag
                                        readonly 'Datum': l_entry.Datum
                                        readonly 'Omschrijving': l_entry.Omschrijving
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type Mutaties = {
                            readonly 'l location': Mutaties.l_location
                            readonly 'l dictionary': Mutaties.l_dictionary
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'Beginsaldo': l_entry.Beginsaldo
                        readonly 'Grootboekrekening': l_entry.Grootboekrekening
                        readonly 'Nieuw': l_entry.Nieuw
                        readonly 'Mutaties': l_entry.Mutaties
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Bankrekeningen = {
            readonly 'l location': Bankrekeningen.l_location
            readonly 'l dictionary': Bankrekeningen.l_dictionary
        }
        
        export namespace Informele_rekeningen {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export namespace l_entry {
                        
                        export type Beginsaldo = number
                        
                        export namespace Grootboekrekening {
                            
                            export type l_location = i_location.Range
                            
                            export type l_reference = string
                            
                        }
                        
                        export type Grootboekrekening = {
                            readonly 'l location': Grootboekrekening.l_location
                            readonly 'l reference': Grootboekrekening.l_reference
                        }
                        
                        export namespace Nieuw {
                            
                            export type l_location = i_location.Range
                            
                            export namespace l_state {
                                
                                export type Ja = null
                                
                                export namespace Nee {
                                    
                                    export type Rekening = Verwijzing_naar_Informele_rekening_
                                    
                                }
                                
                                export type Nee = {
                                    readonly 'Rekening': Nee.Rekening
                                }
                                
                            }
                            
                            export type l_state = 
                                | readonly ['Ja', l_state.Ja]
                                | readonly ['Nee', l_state.Nee]
                            
                        }
                        
                        export type Nieuw = {
                            readonly 'l location': Nieuw.l_location
                            readonly 'l state': Nieuw.l_state
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'Beginsaldo': l_entry.Beginsaldo
                        readonly 'Grootboekrekening': l_entry.Grootboekrekening
                        readonly 'Nieuw': l_entry.Nieuw
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Informele_rekeningen = {
            readonly 'l location': Informele_rekeningen.l_location
            readonly 'l dictionary': Informele_rekeningen.l_dictionary
        }
        
        export namespace Overige_balans_items {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export type l_entry = Overige_balans_item_
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Overige_balans_items = {
            readonly 'l location': Overige_balans_items.l_location
            readonly 'l dictionary': Overige_balans_items.l_dictionary
        }
        
        export namespace Verrekenposten {
            
            export type l_location = i_location.Range
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i_location.Range
                    
                    export type l_entry = null
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = p_di.Dictionary<l_dictionary.D>
            
        }
        
        export type Verrekenposten = {
            readonly 'l location': Verrekenposten.l_location
            readonly 'l dictionary': Verrekenposten.l_dictionary
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
        readonly 'Bankrekeningen': Balans.Bankrekeningen
        readonly 'Informele rekeningen': Balans.Informele_rekeningen
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
        
        export type l_location = i_location.Range
        
        export type l_reference = string
        
    }
    
    export type Grootboekrekening = {
        readonly 'l location': Grootboekrekening.l_location
        readonly 'l reference': Grootboekrekening.l_reference
    }
    
    export namespace Nieuw {
        
        export type l_location = i_location.Range
        
        export namespace l_state {
            
            export type Ja = null
            
            export namespace Nee {
                
                export namespace Balans_item {
                    
                    export type l_location = i_location.Range
                    
                    export type l_reference = string
                    
                }
                
                export type Balans_item = {
                    readonly 'l location': Balans_item.l_location
                    readonly 'l reference': Balans_item.l_reference
                }
                
            }
            
            export type Nee = {
                readonly 'Balans item': Nee.Balans_item
            }
            
        }
        
        export type l_state = 
            | readonly ['Ja', l_state.Ja]
            | readonly ['Nee', l_state.Nee]
        
    }
    
    export type Nieuw = {
        readonly 'l location': Nieuw.l_location
        readonly 'l state': Nieuw.l_state
    }
    
}

export type Overige_balans_item_ = {
    readonly 'Beginsaldo': Overige_balans_item_.Beginsaldo
    readonly 'Grootboekrekening': Overige_balans_item_.Grootboekrekening
    readonly 'Nieuw': Overige_balans_item_.Nieuw
}

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type l_location = i_location.Range
    
    export type l_reference = string
    
}

export type Verwijzing_naar_Informele_rekening_ = {
    readonly 'l location': Verwijzing_naar_Informele_rekening_.l_location
    readonly 'l reference': Verwijzing_naar_Informele_rekening_.l_reference
}

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type l_location = i_location.Range
    
    export type l_reference = string
    
}

export type Verwijzing_naar_Bankrekening_ = {
    readonly 'l location': Verwijzing_naar_Bankrekening_.l_location
    readonly 'l reference': Verwijzing_naar_Bankrekening_.l_reference
}

export namespace Handelstransacties_ {
    
    export namespace Inkopen {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export namespace Afhandeling {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export type Mutaties = null
                            
                            export namespace Nog_te_betalen {
                                
                                export type Betalingstermijn = number
                                
                            }
                            
                            export type Nog_te_betalen = {
                                readonly 'Betalingstermijn': Nog_te_betalen.Betalingstermijn
                            }
                            
                            export namespace Rekening_courant {
                                
                                export namespace Rekening_courant {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Rekening_courant = {
                                    readonly 'l location': Rekening_courant.l_location
                                    readonly 'l reference': Rekening_courant.l_reference
                                }
                                
                            }
                            
                            export type Rekening_courant = {
                                readonly 'Rekening courant': Rekening_courant.Rekening_courant
                            }
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Mutaties', l_state.Mutaties]
                            | readonly ['Nog te betalen', l_state.Nog_te_betalen]
                            | readonly ['Rekening courant', l_state.Rekening_courant]
                        
                    }
                    
                    export type Afhandeling = {
                        readonly 'l location': Afhandeling.l_location
                        readonly 'l state': Afhandeling.l_state
                    }
                    
                    export namespace BTW$mi_periode {
                        
                        export type l_location = i_location.Range
                        
                        export type l_reference = string
                        
                    }
                    
                    export type BTW$mi_periode = {
                        readonly 'l location': BTW$mi_periode.l_location
                        readonly 'l reference': BTW$mi_periode.l_reference
                    }
                    
                    export namespace Brondocument {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export namespace Toegevoegd {
                                
                                export type Document = string
                                
                            }
                            
                            export type Toegevoegd = {
                                readonly 'Document': Toegevoegd.Document
                            }
                            
                            export type Niet_van_toepassing = null
                            
                            export type Ontbreekt = null
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Toegevoegd', l_state.Toegevoegd]
                            | readonly ['Niet van toepassing', l_state.Niet_van_toepassing]
                            | readonly ['Ontbreekt', l_state.Ontbreekt]
                        
                    }
                    
                    export type Brondocument = {
                        readonly 'l location': Brondocument.l_location
                        readonly 'l state': Brondocument.l_state
                    }
                    
                    export type Datum = number
                    
                    export namespace Regels {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export namespace Bedrag {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_state {
                                            
                                            export namespace Bekend {
                                                
                                                export type BTW$mi_bedrag = number
                                                
                                                export type Bedrag_inclusief_geheven_BTW = number
                                                
                                            }
                                            
                                            export type Bekend = {
                                                readonly 'BTW-bedrag': Bekend.BTW$mi_bedrag
                                                readonly 'Bedrag inclusief geheven BTW': Bekend.Bedrag_inclusief_geheven_BTW
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['Bekend', l_state.Bekend]
                                        
                                    }
                                    
                                    export type Bedrag = {
                                        readonly 'l location': Bedrag.l_location
                                        readonly 'l state': Bedrag.l_state
                                    }
                                    
                                    export type Omschrijving = string
                                    
                                    export namespace Type {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_state {
                                            
                                            export namespace Balans {
                                                
                                                export namespace Balans_item {
                                                    
                                                    export type l_location = i_location.Range
                                                    
                                                    export type l_reference = string
                                                    
                                                }
                                                
                                                export type Balans_item = {
                                                    readonly 'l location': Balans_item.l_location
                                                    readonly 'l reference': Balans_item.l_reference
                                                }
                                                
                                            }
                                            
                                            export type Balans = {
                                                readonly 'Balans item': Balans.Balans_item
                                            }
                                            
                                            export namespace Kosten {
                                                
                                                export namespace Grootboekrekening {
                                                    
                                                    export type l_location = i_location.Range
                                                    
                                                    export type l_reference = string
                                                    
                                                }
                                                
                                                export type Grootboekrekening = {
                                                    readonly 'l location': Grootboekrekening.l_location
                                                    readonly 'l reference': Grootboekrekening.l_reference
                                                }
                                                
                                            }
                                            
                                            export type Kosten = {
                                                readonly 'Grootboekrekening': Kosten.Grootboekrekening
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['Balans', l_state.Balans]
                                            | readonly ['Kosten', l_state.Kosten]
                                        
                                    }
                                    
                                    export type Type = {
                                        readonly 'l location': Type.l_location
                                        readonly 'l state': Type.l_state
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'Bedrag': l_entry.Bedrag
                                    readonly 'Omschrijving': l_entry.Omschrijving
                                    readonly 'Type': l_entry.Type
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Regels = {
                        readonly 'l location': Regels.l_location
                        readonly 'l dictionary': Regels.l_dictionary
                    }
                    
                    export namespace Type {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export type Bonnetje = null
                            
                            export namespace Inkoop_$po_met_crediteur$pc_ {
                                
                                export namespace Crediteur {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Crediteur = {
                                    readonly 'l location': Crediteur.l_location
                                    readonly 'l reference': Crediteur.l_reference
                                }
                                
                                export type Factuurnummer = string
                                
                            }
                            
                            export type Inkoop_$po_met_crediteur$pc_ = {
                                readonly 'Crediteur': Inkoop_$po_met_crediteur$pc_.Crediteur
                                readonly 'Factuurnummer': Inkoop_$po_met_crediteur$pc_.Factuurnummer
                            }
                            
                            export namespace Loonheffing {
                                
                                export namespace Ronde {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Ronde = {
                                    readonly 'l location': Ronde.l_location
                                    readonly 'l reference': Ronde.l_reference
                                }
                                
                            }
                            
                            export type Loonheffing = {
                                readonly 'Ronde': Loonheffing.Ronde
                            }
                            
                            export namespace Salaris {
                                
                                export namespace Ronde {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Ronde = {
                                    readonly 'l location': Ronde.l_location
                                    readonly 'l reference': Ronde.l_reference
                                }
                                
                                export namespace Medewerker {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Medewerker = {
                                    readonly 'l location': Medewerker.l_location
                                    readonly 'l reference': Medewerker.l_reference
                                }
                                
                            }
                            
                            export type Salaris = {
                                readonly 'Ronde': Salaris.Ronde
                                readonly 'Medewerker': Salaris.Medewerker
                            }
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Bonnetje', l_state.Bonnetje]
                            | readonly ['Inkoop (met crediteur)', l_state.Inkoop_$po_met_crediteur$pc_]
                            | readonly ['Loonheffing', l_state.Loonheffing]
                            | readonly ['Salaris', l_state.Salaris]
                        
                    }
                    
                    export type Type = {
                        readonly 'l location': Type.l_location
                        readonly 'l state': Type.l_state
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Afhandeling': l_entry.Afhandeling
                    readonly 'BTW-periode': l_entry.BTW$mi_periode
                    readonly 'Brondocument': l_entry.Brondocument
                    readonly 'Datum': l_entry.Datum
                    readonly 'Regels': l_entry.Regels
                    readonly 'Type': l_entry.Type
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Inkopen = {
        readonly 'l location': Inkopen.l_location
        readonly 'l dictionary': Inkopen.l_dictionary
    }
    
    export namespace Verkopen {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export namespace Afhandeling {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export type Mutaties = null
                            
                            export namespace Rekening_courant {
                                
                                export namespace Rekening_courant {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Rekening_courant = {
                                    readonly 'l location': Rekening_courant.l_location
                                    readonly 'l reference': Rekening_courant.l_reference
                                }
                                
                            }
                            
                            export type Rekening_courant = {
                                readonly 'Rekening courant': Rekening_courant.Rekening_courant
                            }
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Mutaties', l_state.Mutaties]
                            | readonly ['Rekening courant', l_state.Rekening_courant]
                        
                    }
                    
                    export type Afhandeling = {
                        readonly 'l location': Afhandeling.l_location
                        readonly 'l state': Afhandeling.l_state
                    }
                    
                    export type Betalingstermijn = number
                    
                    export namespace BTW$mi_periode {
                        
                        export type l_location = i_location.Range
                        
                        export type l_reference = string
                        
                    }
                    
                    export type BTW$mi_periode = {
                        readonly 'l location': BTW$mi_periode.l_location
                        readonly 'l reference': BTW$mi_periode.l_reference
                    }
                    
                    export namespace Brondocument {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export namespace Toegevoegd {
                                
                                export type Document = string
                                
                            }
                            
                            export type Toegevoegd = {
                                readonly 'Document': Toegevoegd.Document
                            }
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Toegevoegd', l_state.Toegevoegd]
                        
                    }
                    
                    export type Brondocument = {
                        readonly 'l location': Brondocument.l_location
                        readonly 'l state': Brondocument.l_state
                    }
                    
                    export namespace Debiteur {
                        
                        export type l_location = i_location.Range
                        
                        export type l_reference = string
                        
                    }
                    
                    export type Debiteur = {
                        readonly 'l location': Debiteur.l_location
                        readonly 'l reference': Debiteur.l_reference
                    }
                    
                    export namespace Contracttype {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_state {
                            
                            export namespace Project {
                                
                                export namespace Project {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Project = {
                                    readonly 'l location': Project.l_location
                                    readonly 'l reference': Project.l_reference
                                }
                                
                                export namespace Offerte {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Offerte = {
                                    readonly 'l location': Offerte.l_location
                                    readonly 'l reference': Offerte.l_reference
                                }
                                
                            }
                            
                            export type Project = {
                                readonly 'Project': Project.Project
                                readonly 'Offerte': Project.Offerte
                            }
                            
                            export namespace Licentieovereenkomst {
                                
                                export namespace Overeenkomst {
                                    
                                    export type l_location = i_location.Range
                                    
                                    export type l_reference = string
                                    
                                }
                                
                                export type Overeenkomst = {
                                    readonly 'l location': Overeenkomst.l_location
                                    readonly 'l reference': Overeenkomst.l_reference
                                }
                                
                            }
                            
                            export type Licentieovereenkomst = {
                                readonly 'Overeenkomst': Licentieovereenkomst.Overeenkomst
                            }
                            
                        }
                        
                        export type l_state = 
                            | readonly ['Project', l_state.Project]
                            | readonly ['Licentieovereenkomst', l_state.Licentieovereenkomst]
                        
                    }
                    
                    export type Contracttype = {
                        readonly 'l location': Contracttype.l_location
                        readonly 'l state': Contracttype.l_state
                    }
                    
                    export type Datum = number
                    
                    export namespace Regels {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export namespace BTW$mi_regime {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_state {
                                            
                                            export type Intracommunautair = null
                                            
                                            export namespace Standaard {
                                                
                                                export namespace BTW$mi_categorie {
                                                    
                                                    export type l_location = i_location.Range
                                                    
                                                    export type l_reference = string
                                                    
                                                }
                                                
                                                export type BTW$mi_categorie = {
                                                    readonly 'l location': BTW$mi_categorie.l_location
                                                    readonly 'l reference': BTW$mi_categorie.l_reference
                                                }
                                                
                                            }
                                            
                                            export type Standaard = {
                                                readonly 'BTW-categorie': Standaard.BTW$mi_categorie
                                            }
                                            
                                            export type Binnenland$cl__heffing_verlegd = null
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['Intracommunautair', l_state.Intracommunautair]
                                            | readonly ['Standaard', l_state.Standaard]
                                            | readonly ['Binnenland: heffing verlegd', l_state.Binnenland$cl__heffing_verlegd]
                                        
                                    }
                                    
                                    export type BTW$mi_regime = {
                                        readonly 'l location': BTW$mi_regime.l_location
                                        readonly 'l state': BTW$mi_regime.l_state
                                    }
                                    
                                    export type Bedrag_exclusief_BTW = number
                                    
                                    export namespace Contracttype {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_state {
                                            
                                            export namespace Project {
                                                
                                                export namespace Opbrengst {
                                                    
                                                    export type l_location = i_location.Range
                                                    
                                                    export type l_reference = string
                                                    
                                                }
                                                
                                                export type Opbrengst = {
                                                    readonly 'l location': Opbrengst.l_location
                                                    readonly 'l reference': Opbrengst.l_reference
                                                }
                                                
                                            }
                                            
                                            export type Project = {
                                                readonly 'Opbrengst': Project.Opbrengst
                                            }
                                            
                                            export type Los = null
                                            
                                            export namespace Licentieovereenkomst {
                                                
                                                export namespace Periode {
                                                    
                                                    export type l_location = i_location.Range
                                                    
                                                    export type l_reference = string
                                                    
                                                }
                                                
                                                export type Periode = {
                                                    readonly 'l location': Periode.l_location
                                                    readonly 'l reference': Periode.l_reference
                                                }
                                                
                                            }
                                            
                                            export type Licentieovereenkomst = {
                                                readonly 'Periode': Licentieovereenkomst.Periode
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['Project', l_state.Project]
                                            | readonly ['Los', l_state.Los]
                                            | readonly ['Licentieovereenkomst', l_state.Licentieovereenkomst]
                                        
                                    }
                                    
                                    export type Contracttype = {
                                        readonly 'l location': Contracttype.l_location
                                        readonly 'l state': Contracttype.l_state
                                    }
                                    
                                    export type Omschrijving = string
                                    
                                    export namespace Type {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_state {
                                            
                                            export namespace Opbrengsten {
                                                
                                                export namespace Grootboekrekening {
                                                    
                                                    export type l_location = i_location.Range
                                                    
                                                    export type l_reference = string
                                                    
                                                }
                                                
                                                export type Grootboekrekening = {
                                                    readonly 'l location': Grootboekrekening.l_location
                                                    readonly 'l reference': Grootboekrekening.l_reference
                                                }
                                                
                                            }
                                            
                                            export type Opbrengsten = {
                                                readonly 'Grootboekrekening': Opbrengsten.Grootboekrekening
                                            }
                                            
                                            export namespace Balans {
                                                
                                                export namespace Balans_item {
                                                    
                                                    export type l_location = i_location.Range
                                                    
                                                    export type l_reference = string
                                                    
                                                }
                                                
                                                export type Balans_item = {
                                                    readonly 'l location': Balans_item.l_location
                                                    readonly 'l reference': Balans_item.l_reference
                                                }
                                                
                                            }
                                            
                                            export type Balans = {
                                                readonly 'Balans item': Balans.Balans_item
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['Opbrengsten', l_state.Opbrengsten]
                                            | readonly ['Balans', l_state.Balans]
                                        
                                    }
                                    
                                    export type Type = {
                                        readonly 'l location': Type.l_location
                                        readonly 'l state': Type.l_state
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'BTW-regime': l_entry.BTW$mi_regime
                                    readonly 'Bedrag exclusief BTW': l_entry.Bedrag_exclusief_BTW
                                    readonly 'Contracttype': l_entry.Contracttype
                                    readonly 'Omschrijving': l_entry.Omschrijving
                                    readonly 'Type': l_entry.Type
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Regels = {
                        readonly 'l location': Regels.l_location
                        readonly 'l dictionary': Regels.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Afhandeling': l_entry.Afhandeling
                    readonly 'Betalingstermijn': l_entry.Betalingstermijn
                    readonly 'BTW-periode': l_entry.BTW$mi_periode
                    readonly 'Brondocument': l_entry.Brondocument
                    readonly 'Debiteur': l_entry.Debiteur
                    readonly 'Contracttype': l_entry.Contracttype
                    readonly 'Datum': l_entry.Datum
                    readonly 'Regels': l_entry.Regels
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Verkopen = {
        readonly 'l location': Verkopen.l_location
        readonly 'l dictionary': Verkopen.l_dictionary
    }
    
}

export type Handelstransacties_ = {
    readonly 'Inkopen': Handelstransacties_.Inkopen
    readonly 'Verkopen': Handelstransacties_.Verkopen
}

export namespace Mutaties_ {
    
    export namespace Verrekenposten {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export type Stam = null
                    
                    export namespace Mutaties {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export type Bedrag = number
                                    
                                    export namespace Afhandeling {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_state {
                                            
                                            export type Resultaat = Rekening_Mutatie_
                                            
                                            export namespace Balans {
                                                
                                                export type l_location = i_location.Range
                                                
                                                export namespace l_state {
                                                    
                                                    export namespace Informele_rekening {
                                                        
                                                        export namespace Informele_rekening {
                                                            
                                                            export type l_location = i_location.Range
                                                            
                                                            export type l_reference = string
                                                            
                                                        }
                                                        
                                                        export type Informele_rekening = {
                                                            readonly 'l location': Informele_rekening.l_location
                                                            readonly 'l reference': Informele_rekening.l_reference
                                                        }
                                                        
                                                    }
                                                    
                                                    export type Informele_rekening = {
                                                        readonly 'Informele rekening': Informele_rekening.Informele_rekening
                                                    }
                                                    
                                                }
                                                
                                                export type l_state = 
                                                    | readonly ['Informele rekening', l_state.Informele_rekening]
                                                
                                            }
                                            
                                            export type Balans = {
                                                readonly 'l location': Balans.l_location
                                                readonly 'l state': Balans.l_state
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['Resultaat', l_state.Resultaat]
                                            | readonly ['Balans', l_state.Balans]
                                        
                                    }
                                    
                                    export type Afhandeling = {
                                        readonly 'l location': Afhandeling.l_location
                                        readonly 'l state': Afhandeling.l_state
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'Bedrag': l_entry.Bedrag
                                    readonly 'Afhandeling': l_entry.Afhandeling
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Mutaties = {
                        readonly 'l location': Mutaties.l_location
                        readonly 'l dictionary': Mutaties.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Stam': l_entry.Stam
                    readonly 'Mutaties': l_entry.Mutaties
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Verrekenposten = {
        readonly 'l location': Verrekenposten.l_location
        readonly 'l dictionary': Verrekenposten.l_dictionary
    }
    
    export namespace Bankrekeningen {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export type Stam = null
                    
                    export namespace Mutatie_Verwerkingen {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export type Stam = null
                                    
                                    export namespace type_ {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export namespace l_state {
                                            
                                            export type Resultaat = Rekening_Mutatie_
                                            
                                            export namespace Balans {
                                                
                                                export type l_location = i_location.Range
                                                
                                                export namespace l_state {
                                                    
                                                    export namespace Informele_rekening {
                                                        
                                                        export namespace Informele_rekening {
                                                            
                                                            export type l_location = i_location.Range
                                                            
                                                            export type l_reference = string
                                                            
                                                        }
                                                        
                                                        export type Informele_rekening = {
                                                            readonly 'l location': Informele_rekening.l_location
                                                            readonly 'l reference': Informele_rekening.l_reference
                                                        }
                                                        
                                                    }
                                                    
                                                    export type Informele_rekening = {
                                                        readonly 'Informele rekening': Informele_rekening.Informele_rekening
                                                    }
                                                    
                                                    export namespace Verrekenpost {
                                                        
                                                        export namespace Verrekenpost {
                                                            
                                                            export type l_location = i_location.Range
                                                            
                                                            export type l_reference = string
                                                            
                                                        }
                                                        
                                                        export type Verrekenpost = {
                                                            readonly 'l location': Verrekenpost.l_location
                                                            readonly 'l reference': Verrekenpost.l_reference
                                                        }
                                                        
                                                    }
                                                    
                                                    export type Verrekenpost = {
                                                        readonly 'Verrekenpost': Verrekenpost.Verrekenpost
                                                    }
                                                    
                                                }
                                                
                                                export type l_state = 
                                                    | readonly ['Informele rekening', l_state.Informele_rekening]
                                                    | readonly ['Verrekenpost', l_state.Verrekenpost]
                                                
                                            }
                                            
                                            export type Balans = {
                                                readonly 'l location': Balans.l_location
                                                readonly 'l state': Balans.l_state
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['Resultaat', l_state.Resultaat]
                                            | readonly ['Balans', l_state.Balans]
                                        
                                    }
                                    
                                    export type type_ = {
                                        readonly 'l location': type_.l_location
                                        readonly 'l state': type_.l_state
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'Stam': l_entry.Stam
                                    readonly 'type': l_entry.type_
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Mutatie_Verwerkingen = {
                        readonly 'l location': Mutatie_Verwerkingen.l_location
                        readonly 'l dictionary': Mutatie_Verwerkingen.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Stam': l_entry.Stam
                    readonly 'Mutatie Verwerkingen': l_entry.Mutatie_Verwerkingen
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Bankrekeningen = {
        readonly 'l location': Bankrekeningen.l_location
        readonly 'l dictionary': Bankrekeningen.l_dictionary
    }
    
    export namespace Overige_Balans_Items {
        
        export type l_location = i_location.Range
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i_location.Range
                
                export namespace l_entry {
                    
                    export type Stam = null
                    
                    export namespace Memoriaal_Boekingen {
                        
                        export type l_location = i_location.Range
                        
                        export namespace l_dictionary {
                            
                            export namespace D {
                                
                                export type l_location = i_location.Range
                                
                                export namespace l_entry {
                                    
                                    export type Bedrag = number
                                    
                                    export type Datum = number
                                    
                                    export type Omschrijving = string
                                    
                                    export namespace Grootboekrekening {
                                        
                                        export type l_location = i_location.Range
                                        
                                        export type l_reference = string
                                        
                                    }
                                    
                                    export type Grootboekrekening = {
                                        readonly 'l location': Grootboekrekening.l_location
                                        readonly 'l reference': Grootboekrekening.l_reference
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'Bedrag': l_entry.Bedrag
                                    readonly 'Datum': l_entry.Datum
                                    readonly 'Omschrijving': l_entry.Omschrijving
                                    readonly 'Grootboekrekening': l_entry.Grootboekrekening
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
                        
                    }
                    
                    export type Memoriaal_Boekingen = {
                        readonly 'l location': Memoriaal_Boekingen.l_location
                        readonly 'l dictionary': Memoriaal_Boekingen.l_dictionary
                    }
                    
                }
                
                export type l_entry = {
                    readonly 'Stam': l_entry.Stam
                    readonly 'Memoriaal Boekingen': l_entry.Memoriaal_Boekingen
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = p_di.Dictionary<l_dictionary.D>
        
    }
    
    export type Overige_Balans_Items = {
        readonly 'l location': Overige_Balans_Items.l_location
        readonly 'l dictionary': Overige_Balans_Items.l_dictionary
    }
    
}

export type Mutaties_ = {
    readonly 'Verrekenposten': Mutaties_.Verrekenposten
    readonly 'Bankrekeningen': Mutaties_.Bankrekeningen
    readonly 'Overige Balans Items': Mutaties_.Overige_Balans_Items
}

export namespace Jaren_ {
    
    export type l_location = i_location.Range
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i_location.Range
            
            export namespace l_entry {
                
                export namespace Afgesloten {
                    
                    export type l_location = i_location.Range
                    
                    export namespace l_state {
                        
                        export type Ja = null
                        
                        export type Nee = null
                        
                    }
                    
                    export type l_state = 
                        | readonly ['Ja', l_state.Ja]
                        | readonly ['Nee', l_state.Nee]
                    
                }
                
                export type Afgesloten = {
                    readonly 'l location': Afgesloten.l_location
                    readonly 'l state': Afgesloten.l_state
                }
                
                export type Startdatum_boekjaar = number
                
                export type Grootboekrekeningen = Grootboekrekeningen_
                
                export type Eerste_boekjaar = Eerste_boekjaar_
                
                export type Jaarbeheer = Jaarbeheer_
                
                export type Handelstransacties = Handelstransacties_
                
                export type Mutaties = Mutaties_
                
            }
            
            export type l_entry = {
                readonly 'Afgesloten': l_entry.Afgesloten
                readonly 'Startdatum boekjaar': l_entry.Startdatum_boekjaar
                readonly 'Grootboekrekeningen': l_entry.Grootboekrekeningen
                readonly 'Eerste boekjaar': l_entry.Eerste_boekjaar
                readonly 'Jaarbeheer': l_entry.Jaarbeheer
                readonly 'Handelstransacties': l_entry.Handelstransacties
                readonly 'Mutaties': l_entry.Mutaties
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = p_di.Dictionary<l_dictionary.D>
    
}

export type Jaren_ = {
    readonly 'l location': Jaren_.l_location
    readonly 'l dictionary': Jaren_.l_dictionary
}

export namespace Rekening_Mutatie_ {
    
    export namespace Jaar {
        
        export namespace O {
            
            export type l_location = i_location.Range
            
            export type l_reference = string
            
        }
        
        export type O = {
            readonly 'l location': O.l_location
            readonly 'l reference': O.l_reference
        }
        
    }
    
    export type Jaar = p_di.Optional_Value<Jaar.O>
    
    export namespace type_ {
        
        export type l_location = i_location.Range
        
        export namespace l_state {
            
            export namespace Inkoop {
                
                export type l_location = i_location.Range
                
                export type l_reference = string
                
            }
            
            export type Inkoop = {
                readonly 'l location': Inkoop.l_location
                readonly 'l reference': Inkoop.l_reference
            }
            
            export namespace Verkoop {
                
                export type l_location = i_location.Range
                
                export type l_reference = string
                
            }
            
            export type Verkoop = {
                readonly 'l location': Verkoop.l_location
                readonly 'l reference': Verkoop.l_reference
            }
            
            export namespace BTW$mi_periode {
                
                export type l_location = i_location.Range
                
                export type l_reference = string
                
            }
            
            export type BTW$mi_periode = {
                readonly 'l location': BTW$mi_periode.l_location
                readonly 'l reference': BTW$mi_periode.l_reference
            }
            
        }
        
        export type l_state = 
            | readonly ['Inkoop', l_state.Inkoop]
            | readonly ['Verkoop', l_state.Verkoop]
            | readonly ['BTW-periode', l_state.BTW$mi_periode]
        
    }
    
    export type type_ = {
        readonly 'l location': type_.l_location
        readonly 'l state': type_.l_state
    }
    
}

export type Rekening_Mutatie_ = {
    readonly 'Jaar': Rekening_Mutatie_.Jaar
    readonly 'type': Rekening_Mutatie_.type_
}

export namespace Eerste_boekjaar_ {
    
    export type l_location = i_location.Range
    
    export namespace l_state {
        
        export type Ja = null
        
        export namespace Nee {
            
            export namespace Vorig_boekjaar {
                
                export type l_location = i_location.Range
                
                export type l_reference = string
                
            }
            
            export type Vorig_boekjaar = {
                readonly 'l location': Vorig_boekjaar.l_location
                readonly 'l reference': Vorig_boekjaar.l_reference
            }
            
        }
        
        export type Nee = {
            readonly 'Vorig boekjaar': Nee.Vorig_boekjaar
        }
        
    }
    
    export type l_state = 
        | readonly ['Ja', l_state.Ja]
        | readonly ['Nee', l_state.Nee]
    
}

export type Eerste_boekjaar_ = {
    readonly 'l location': Eerste_boekjaar_.l_location
    readonly 'l state': Eerste_boekjaar_.l_state
}

export { 
    Root_ as Root, 
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
    Rekening_Mutatie_ as Rekening_Mutatie, 
    Eerste_boekjaar_ as Eerste_boekjaar, 
}
