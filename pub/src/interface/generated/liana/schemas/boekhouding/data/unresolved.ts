
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export namespace Fiscaal_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Balans_Hoofdcategorieen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Zijde {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Activa {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Activa = {
                                        readonly 'l location': Activa.l_location
                                        readonly 'l value': Activa.l_value
                                    }
                                    
                                    export namespace Passiva {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Passiva = {
                                        readonly 'l location': Passiva.l_location
                                        readonly 'l value': Passiva.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Activa', l_value.Activa]
                                    | readonly ['Passiva', l_value.Passiva]
                                
                            }
                            
                            export type Zijde = {
                                readonly 'l location': Zijde.l_location
                                readonly 'l value': Zijde.l_value
                            }
                            
                            export namespace Subcategorieen {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_entry {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_value = null
                                            
                                        }
                                        
                                        export type l_entry = {
                                            readonly 'l location': l_entry.l_location
                                            readonly 'l value': l_entry.l_value
                                        }
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_value = _pi.Dictionary<l_value.D>
                                
                            }
                            
                            export type Subcategorieen = {
                                readonly 'l location': Subcategorieen.l_location
                                readonly 'l value': Subcategorieen.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Zijde': l_value.Zijde
                            readonly 'Subcategorieen': l_value.Subcategorieen
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Balans_Hoofdcategorieen = {
            readonly 'l location': Balans_Hoofdcategorieen.l_location
            readonly 'l value': Balans_Hoofdcategorieen.l_value
        }
        
        export namespace Resultaat_Hoofdcategorieen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Zijde {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Kosten {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Kosten = {
                                        readonly 'l location': Kosten.l_location
                                        readonly 'l value': Kosten.l_value
                                    }
                                    
                                    export namespace Opbrengsten {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Opbrengsten = {
                                        readonly 'l location': Opbrengsten.l_location
                                        readonly 'l value': Opbrengsten.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Kosten', l_value.Kosten]
                                    | readonly ['Opbrengsten', l_value.Opbrengsten]
                                
                            }
                            
                            export type Zijde = {
                                readonly 'l location': Zijde.l_location
                                readonly 'l value': Zijde.l_value
                            }
                            
                            export namespace Subcategorieen {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_entry {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_value = null
                                            
                                        }
                                        
                                        export type l_entry = {
                                            readonly 'l location': l_entry.l_location
                                            readonly 'l value': l_entry.l_value
                                        }
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_value = _pi.Dictionary<l_value.D>
                                
                            }
                            
                            export type Subcategorieen = {
                                readonly 'l location': Subcategorieen.l_location
                                readonly 'l value': Subcategorieen.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Zijde': l_value.Zijde
                            readonly 'Subcategorieen': l_value.Subcategorieen
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Resultaat_Hoofdcategorieen = {
            readonly 'l location': Resultaat_Hoofdcategorieen.l_location
            readonly 'l value': Resultaat_Hoofdcategorieen.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Balans Hoofdcategorieen': l_value.Balans_Hoofdcategorieen
        readonly 'Resultaat Hoofdcategorieen': l_value.Resultaat_Hoofdcategorieen
    }
    
}

export type Fiscaal_ = {
    readonly 'l location': Fiscaal_.l_location
    readonly 'l value': Fiscaal_.l_value
}

export namespace Grootboek_Categorieen_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Correctietypes_vennootschapsbelasting {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Te_corrigeren_promillage {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = number
                                
                            }
                            
                            export type Te_corrigeren_promillage = {
                                readonly 'l location': Te_corrigeren_promillage.l_location
                                readonly 'l value': Te_corrigeren_promillage.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Te corrigeren promillage': l_value.Te_corrigeren_promillage
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Correctietypes_vennootschapsbelasting = {
            readonly 'l location': Correctietypes_vennootschapsbelasting.l_location
            readonly 'l value': Correctietypes_vennootschapsbelasting.l_value
        }
        
        export namespace Balans {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Zijde {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Activa {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Activa = {
                                        readonly 'l location': Activa.l_location
                                        readonly 'l value': Activa.l_value
                                    }
                                    
                                    export namespace Passiva {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Passiva = {
                                        readonly 'l location': Passiva.l_location
                                        readonly 'l value': Passiva.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Activa', l_value.Activa]
                                    | readonly ['Passiva', l_value.Passiva]
                                
                            }
                            
                            export type Zijde = {
                                readonly 'l location': Zijde.l_location
                                readonly 'l value': Zijde.l_value
                            }
                            
                            export namespace Subcategorieen {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_entry {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export namespace l_value {
                                                
                                                export namespace Hoofdcategorie_fiscus {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = string
                                                    
                                                }
                                                
                                                export type Hoofdcategorie_fiscus = {
                                                    readonly 'l location': Hoofdcategorie_fiscus.l_location
                                                    readonly 'l value': Hoofdcategorie_fiscus.l_value
                                                }
                                                
                                                export namespace Subcategorie_fiscus {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = string
                                                    
                                                }
                                                
                                                export type Subcategorie_fiscus = {
                                                    readonly 'l location': Subcategorie_fiscus.l_location
                                                    readonly 'l value': Subcategorie_fiscus.l_value
                                                }
                                                
                                            }
                                            
                                            export type l_value = {
                                                readonly 'Hoofdcategorie fiscus': l_value.Hoofdcategorie_fiscus
                                                readonly 'Subcategorie fiscus': l_value.Subcategorie_fiscus
                                            }
                                            
                                        }
                                        
                                        export type l_entry = {
                                            readonly 'l location': l_entry.l_location
                                            readonly 'l value': l_entry.l_value
                                        }
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_value = _pi.Dictionary<l_value.D>
                                
                            }
                            
                            export type Subcategorieen = {
                                readonly 'l location': Subcategorieen.l_location
                                readonly 'l value': Subcategorieen.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Zijde': l_value.Zijde
                            readonly 'Subcategorieen': l_value.Subcategorieen
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Balans = {
            readonly 'l location': Balans.l_location
            readonly 'l value': Balans.l_value
        }
        
        export namespace Resultaat {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Zijde {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Kosten {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Kosten = {
                                        readonly 'l location': Kosten.l_location
                                        readonly 'l value': Kosten.l_value
                                    }
                                    
                                    export namespace Opbrengsten {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Opbrengsten = {
                                        readonly 'l location': Opbrengsten.l_location
                                        readonly 'l value': Opbrengsten.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Kosten', l_value.Kosten]
                                    | readonly ['Opbrengsten', l_value.Opbrengsten]
                                
                            }
                            
                            export type Zijde = {
                                readonly 'l location': Zijde.l_location
                                readonly 'l value': Zijde.l_value
                            }
                            
                            export namespace Subcategorieen {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_entry {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export namespace l_value {
                                                
                                                export namespace Hoofdcategorie_fiscus {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = string
                                                    
                                                }
                                                
                                                export type Hoofdcategorie_fiscus = {
                                                    readonly 'l location': Hoofdcategorie_fiscus.l_location
                                                    readonly 'l value': Hoofdcategorie_fiscus.l_value
                                                }
                                                
                                                export namespace Subcategorie_fiscus {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = string
                                                    
                                                }
                                                
                                                export type Subcategorie_fiscus = {
                                                    readonly 'l location': Subcategorie_fiscus.l_location
                                                    readonly 'l value': Subcategorie_fiscus.l_value
                                                }
                                                
                                            }
                                            
                                            export type l_value = {
                                                readonly 'Hoofdcategorie fiscus': l_value.Hoofdcategorie_fiscus
                                                readonly 'Subcategorie fiscus': l_value.Subcategorie_fiscus
                                            }
                                            
                                        }
                                        
                                        export type l_entry = {
                                            readonly 'l location': l_entry.l_location
                                            readonly 'l value': l_entry.l_value
                                        }
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_value = _pi.Dictionary<l_value.D>
                                
                            }
                            
                            export type Subcategorieen = {
                                readonly 'l location': Subcategorieen.l_location
                                readonly 'l value': Subcategorieen.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Zijde': l_value.Zijde
                            readonly 'Subcategorieen': l_value.Subcategorieen
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Resultaat = {
            readonly 'l location': Resultaat.l_location
            readonly 'l value': Resultaat.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Correctietypes vennootschapsbelasting': l_value.Correctietypes_vennootschapsbelasting
        readonly 'Balans': l_value.Balans
        readonly 'Resultaat': l_value.Resultaat
    }
    
}

export type Grootboek_Categorieen_ = {
    readonly 'l location': Grootboek_Categorieen_.l_location
    readonly 'l value': Grootboek_Categorieen_.l_value
}

export namespace Beheer_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace BTW$mi_categorieen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace BTW$mi_heffing {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Ja {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace BTW$mi_promillage {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = number
                                                
                                            }
                                            
                                            export type BTW$mi_promillage = {
                                                readonly 'l location': BTW$mi_promillage.l_location
                                                readonly 'l value': BTW$mi_promillage.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'BTW-promillage': l_value.BTW$mi_promillage
                                        }
                                        
                                    }
                                    
                                    export type Ja = {
                                        readonly 'l location': Ja.l_location
                                        readonly 'l value': Ja.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Ja', l_value.Ja]
                                
                            }
                            
                            export type BTW$mi_heffing = {
                                readonly 'l location': BTW$mi_heffing.l_location
                                readonly 'l value': BTW$mi_heffing.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'BTW-heffing': l_value.BTW$mi_heffing
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type BTW$mi_categorieen = {
            readonly 'l location': BTW$mi_categorieen.l_location
            readonly 'l value': BTW$mi_categorieen.l_value
        }
        
        export namespace Grootboekrekeningen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace Balans {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Hoofdcategorie {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = string
                                        
                                    }
                                    
                                    export type Hoofdcategorie = {
                                        readonly 'l location': Hoofdcategorie.l_location
                                        readonly 'l value': Hoofdcategorie.l_value
                                    }
                                    
                                    export namespace Subcategorie {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = string
                                        
                                    }
                                    
                                    export type Subcategorie = {
                                        readonly 'l location': Subcategorie.l_location
                                        readonly 'l value': Subcategorie.l_value
                                    }
                                    
                                    export namespace Zijde {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Activa {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = null
                                                
                                            }
                                            
                                            export type Activa = {
                                                readonly 'l location': Activa.l_location
                                                readonly 'l value': Activa.l_value
                                            }
                                            
                                            export namespace Passiva {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = null
                                                
                                            }
                                            
                                            export type Passiva = {
                                                readonly 'l location': Passiva.l_location
                                                readonly 'l value': Passiva.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = 
                                            | readonly ['Activa', l_value.Activa]
                                            | readonly ['Passiva', l_value.Passiva]
                                        
                                    }
                                    
                                    export type Zijde = {
                                        readonly 'l location': Zijde.l_location
                                        readonly 'l value': Zijde.l_value
                                    }
                                    
                                }
                                
                                export type l_value = {
                                    readonly 'Hoofdcategorie': l_value.Hoofdcategorie
                                    readonly 'Subcategorie': l_value.Subcategorie
                                    readonly 'Zijde': l_value.Zijde
                                }
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Balans = {
                    readonly 'l location': Balans.l_location
                    readonly 'l value': Balans.l_value
                }
                
                export namespace Resultaat {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Hoofdcategorie {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = string
                                        
                                    }
                                    
                                    export type Hoofdcategorie = {
                                        readonly 'l location': Hoofdcategorie.l_location
                                        readonly 'l value': Hoofdcategorie.l_value
                                    }
                                    
                                    export namespace Subcategorie {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = string
                                        
                                    }
                                    
                                    export type Subcategorie = {
                                        readonly 'l location': Subcategorie.l_location
                                        readonly 'l value': Subcategorie.l_value
                                    }
                                    
                                    export namespace Zijde {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Kosten {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export namespace l_value {
                                                    
                                                    export namespace Correctie_op_vennootschapsbelasting {
                                                        
                                                        export type l_location = i__location.Relative_Location
                                                        
                                                        export namespace l_value {
                                                            
                                                            export namespace Ja {
                                                                
                                                                export type l_location = i__location.Relative_Location
                                                                
                                                                export namespace l_value {
                                                                    
                                                                    export namespace Correctietype {
                                                                        
                                                                        export type l_location = i__location.Relative_Location
                                                                        
                                                                        export type l_value = string
                                                                        
                                                                    }
                                                                    
                                                                    export type Correctietype = {
                                                                        readonly 'l location': Correctietype.l_location
                                                                        readonly 'l value': Correctietype.l_value
                                                                    }
                                                                    
                                                                }
                                                                
                                                                export type l_value = {
                                                                    readonly 'Correctietype': l_value.Correctietype
                                                                }
                                                                
                                                            }
                                                            
                                                            export type Ja = {
                                                                readonly 'l location': Ja.l_location
                                                                readonly 'l value': Ja.l_value
                                                            }
                                                            
                                                            export namespace Nee {
                                                                
                                                                export type l_location = i__location.Relative_Location
                                                                
                                                                export type l_value = null
                                                                
                                                            }
                                                            
                                                            export type Nee = {
                                                                readonly 'l location': Nee.l_location
                                                                readonly 'l value': Nee.l_value
                                                            }
                                                            
                                                        }
                                                        
                                                        export type l_value = 
                                                            | readonly ['Ja', l_value.Ja]
                                                            | readonly ['Nee', l_value.Nee]
                                                        
                                                    }
                                                    
                                                    export type Correctie_op_vennootschapsbelasting = {
                                                        readonly 'l location': Correctie_op_vennootschapsbelasting.l_location
                                                        readonly 'l value': Correctie_op_vennootschapsbelasting.l_value
                                                    }
                                                    
                                                }
                                                
                                                export type l_value = {
                                                    readonly 'Correctie op vennootschapsbelasting': l_value.Correctie_op_vennootschapsbelasting
                                                }
                                                
                                            }
                                            
                                            export type Kosten = {
                                                readonly 'l location': Kosten.l_location
                                                readonly 'l value': Kosten.l_value
                                            }
                                            
                                            export namespace Opbrengsten {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = null
                                                
                                            }
                                            
                                            export type Opbrengsten = {
                                                readonly 'l location': Opbrengsten.l_location
                                                readonly 'l value': Opbrengsten.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = 
                                            | readonly ['Kosten', l_value.Kosten]
                                            | readonly ['Opbrengsten', l_value.Opbrengsten]
                                        
                                    }
                                    
                                    export type Zijde = {
                                        readonly 'l location': Zijde.l_location
                                        readonly 'l value': Zijde.l_value
                                    }
                                    
                                }
                                
                                export type l_value = {
                                    readonly 'Hoofdcategorie': l_value.Hoofdcategorie
                                    readonly 'Subcategorie': l_value.Subcategorie
                                    readonly 'Zijde': l_value.Zijde
                                }
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Resultaat = {
                    readonly 'l location': Resultaat.l_location
                    readonly 'l value': Resultaat.l_value
                }
                
            }
            
            export type l_value = {
                readonly 'Balans': l_value.Balans
                readonly 'Resultaat': l_value.Resultaat
            }
            
        }
        
        export type Grootboekrekeningen = {
            readonly 'l location': Grootboekrekeningen.l_location
            readonly 'l value': Grootboekrekeningen.l_value
        }
        
        export namespace Rekeningen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace Bank {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = null
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Bank = {
                    readonly 'l location': Bank.l_location
                    readonly 'l value': Bank.l_value
                }
                
                export namespace Informeel {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = null
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Informeel = {
                    readonly 'l location': Informeel.l_location
                    readonly 'l value': Informeel.l_value
                }
                
            }
            
            export type l_value = {
                readonly 'Bank': l_value.Bank
                readonly 'Informeel': l_value.Informeel
            }
            
        }
        
        export type Rekeningen = {
            readonly 'l location': Rekeningen.l_location
            readonly 'l value': Rekeningen.l_value
        }
        
        export namespace Gebruikers {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Volledige_naam {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = string
                                
                            }
                            
                            export type Volledige_naam = {
                                readonly 'l location': Volledige_naam.l_location
                                readonly 'l value': Volledige_naam.l_value
                            }
                            
                            export namespace Wachtwoord {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = string
                                
                            }
                            
                            export type Wachtwoord = {
                                readonly 'l location': Wachtwoord.l_location
                                readonly 'l value': Wachtwoord.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Volledige naam': l_value.Volledige_naam
                            readonly 'Wachtwoord': l_value.Wachtwoord
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Gebruikers = {
            readonly 'l location': Gebruikers.l_location
            readonly 'l value': Gebruikers.l_value
        }
        
        export namespace Klanten {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Licentieovereenkomsten {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_entry {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export namespace l_value {
                                                
                                                export namespace Periodes {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace D {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_entry {
                                                                
                                                                export type l_location = i__location.Relative_Location
                                                                
                                                                export namespace l_value {
                                                                    
                                                                    export namespace Bedrag {
                                                                        
                                                                        export type l_location = i__location.Relative_Location
                                                                        
                                                                        export type l_value = number
                                                                        
                                                                    }
                                                                    
                                                                    export type Bedrag = {
                                                                        readonly 'l location': Bedrag.l_location
                                                                        readonly 'l value': Bedrag.l_value
                                                                    }
                                                                    
                                                                }
                                                                
                                                                export type l_value = {
                                                                    readonly 'Bedrag': l_value.Bedrag
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_entry = {
                                                                readonly 'l location': l_entry.l_location
                                                                readonly 'l value': l_entry.l_value
                                                            }
                                                            
                                                        }
                                                        
                                                        export type D = {
                                                            readonly 'l location': D.l_location
                                                            readonly 'l entry': D.l_entry
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = _pi.Dictionary<l_value.D>
                                                    
                                                }
                                                
                                                export type Periodes = {
                                                    readonly 'l location': Periodes.l_location
                                                    readonly 'l value': Periodes.l_value
                                                }
                                                
                                            }
                                            
                                            export type l_value = {
                                                readonly 'Periodes': l_value.Periodes
                                            }
                                            
                                        }
                                        
                                        export type l_entry = {
                                            readonly 'l location': l_entry.l_location
                                            readonly 'l value': l_entry.l_value
                                        }
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_value = _pi.Dictionary<l_value.D>
                                
                            }
                            
                            export type Licentieovereenkomsten = {
                                readonly 'l location': Licentieovereenkomsten.l_location
                                readonly 'l value': Licentieovereenkomsten.l_value
                            }
                            
                            export namespace Projecten {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_entry {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export namespace l_value {
                                                
                                                export namespace Offertes {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace D {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_entry {
                                                                
                                                                export type l_location = i__location.Relative_Location
                                                                
                                                                export namespace l_value {
                                                                    
                                                                    export namespace Opbrengsten {
                                                                        
                                                                        export type l_location = i__location.Relative_Location
                                                                        
                                                                        export namespace l_value {
                                                                            
                                                                            export namespace D {
                                                                                
                                                                                export type l_location = i__location.Relative_Location
                                                                                
                                                                                export namespace l_entry {
                                                                                    
                                                                                    export type l_location = i__location.Relative_Location
                                                                                    
                                                                                    export namespace l_value {
                                                                                        
                                                                                        export namespace Type {
                                                                                            
                                                                                            export type l_location = i__location.Relative_Location
                                                                                            
                                                                                            export namespace l_value {
                                                                                                
                                                                                                export namespace Project {
                                                                                                    
                                                                                                    export type l_location = i__location.Relative_Location
                                                                                                    
                                                                                                    export namespace l_value {
                                                                                                        
                                                                                                        export namespace Bedrag {
                                                                                                            
                                                                                                            export type l_location = i__location.Relative_Location
                                                                                                            
                                                                                                            export type l_value = number
                                                                                                            
                                                                                                        }
                                                                                                        
                                                                                                        export type Bedrag = {
                                                                                                            readonly 'l location': Bedrag.l_location
                                                                                                            readonly 'l value': Bedrag.l_value
                                                                                                        }
                                                                                                        
                                                                                                        export namespace Betaaldatum {
                                                                                                            
                                                                                                            export type l_location = i__location.Relative_Location
                                                                                                            
                                                                                                            export type l_value = number
                                                                                                            
                                                                                                        }
                                                                                                        
                                                                                                        export type Betaaldatum = {
                                                                                                            readonly 'l location': Betaaldatum.l_location
                                                                                                            readonly 'l value': Betaaldatum.l_value
                                                                                                        }
                                                                                                        
                                                                                                    }
                                                                                                    
                                                                                                    export type l_value = {
                                                                                                        readonly 'Bedrag': l_value.Bedrag
                                                                                                        readonly 'Betaaldatum': l_value.Betaaldatum
                                                                                                    }
                                                                                                    
                                                                                                }
                                                                                                
                                                                                                export type Project = {
                                                                                                    readonly 'l location': Project.l_location
                                                                                                    readonly 'l value': Project.l_value
                                                                                                }
                                                                                                
                                                                                            }
                                                                                            
                                                                                            export type l_value = 
                                                                                                | readonly ['Project', l_value.Project]
                                                                                            
                                                                                        }
                                                                                        
                                                                                        export type Type = {
                                                                                            readonly 'l location': Type.l_location
                                                                                            readonly 'l value': Type.l_value
                                                                                        }
                                                                                        
                                                                                    }
                                                                                    
                                                                                    export type l_value = {
                                                                                        readonly 'Type': l_value.Type
                                                                                    }
                                                                                    
                                                                                }
                                                                                
                                                                                export type l_entry = {
                                                                                    readonly 'l location': l_entry.l_location
                                                                                    readonly 'l value': l_entry.l_value
                                                                                }
                                                                                
                                                                            }
                                                                            
                                                                            export type D = {
                                                                                readonly 'l location': D.l_location
                                                                                readonly 'l entry': D.l_entry
                                                                            }
                                                                            
                                                                        }
                                                                        
                                                                        export type l_value = _pi.Dictionary<l_value.D>
                                                                        
                                                                    }
                                                                    
                                                                    export type Opbrengsten = {
                                                                        readonly 'l location': Opbrengsten.l_location
                                                                        readonly 'l value': Opbrengsten.l_value
                                                                    }
                                                                    
                                                                }
                                                                
                                                                export type l_value = {
                                                                    readonly 'Opbrengsten': l_value.Opbrengsten
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_entry = {
                                                                readonly 'l location': l_entry.l_location
                                                                readonly 'l value': l_entry.l_value
                                                            }
                                                            
                                                        }
                                                        
                                                        export type D = {
                                                            readonly 'l location': D.l_location
                                                            readonly 'l entry': D.l_entry
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = _pi.Dictionary<l_value.D>
                                                    
                                                }
                                                
                                                export type Offertes = {
                                                    readonly 'l location': Offertes.l_location
                                                    readonly 'l value': Offertes.l_value
                                                }
                                                
                                            }
                                            
                                            export type l_value = {
                                                readonly 'Offertes': l_value.Offertes
                                            }
                                            
                                        }
                                        
                                        export type l_entry = {
                                            readonly 'l location': l_entry.l_location
                                            readonly 'l value': l_entry.l_value
                                        }
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_value = _pi.Dictionary<l_value.D>
                                
                            }
                            
                            export type Projecten = {
                                readonly 'l location': Projecten.l_location
                                readonly 'l value': Projecten.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Licentieovereenkomsten': l_value.Licentieovereenkomsten
                            readonly 'Projecten': l_value.Projecten
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Klanten = {
            readonly 'l location': Klanten.l_location
            readonly 'l value': Klanten.l_value
        }
        
        export namespace Leveranciers {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = null
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Leveranciers = {
            readonly 'l location': Leveranciers.l_location
            readonly 'l value': Leveranciers.l_value
        }
        
        export namespace Medewerkers {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = null
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Medewerkers = {
            readonly 'l location': Medewerkers.l_location
            readonly 'l value': Medewerkers.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'BTW-categorieen': l_value.BTW$mi_categorieen
        readonly 'Grootboekrekeningen': l_value.Grootboekrekeningen
        readonly 'Rekeningen': l_value.Rekeningen
        readonly 'Gebruikers': l_value.Gebruikers
        readonly 'Klanten': l_value.Klanten
        readonly 'Leveranciers': l_value.Leveranciers
        readonly 'Medewerkers': l_value.Medewerkers
    }
    
}

export type Beheer_ = {
    readonly 'l location': Beheer_.l_location
    readonly 'l value': Beheer_.l_value
}

export namespace Grootboekrekeningen_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Balans {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Type {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Bankrekening {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Bankrekening = {
                                        readonly 'l location': Bankrekening.l_location
                                        readonly 'l value': Bankrekening.l_value
                                    }
                                    
                                    export namespace Overig {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Overig = {
                                        readonly 'l location': Overig.l_location
                                        readonly 'l value': Overig.l_value
                                    }
                                    
                                    export namespace Informele_rekening {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Informele_rekening = {
                                        readonly 'l location': Informele_rekening.l_location
                                        readonly 'l value': Informele_rekening.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Bankrekening', l_value.Bankrekening]
                                    | readonly ['Overig', l_value.Overig]
                                    | readonly ['Informele rekening', l_value.Informele_rekening]
                                
                            }
                            
                            export type Type = {
                                readonly 'l location': Type.l_location
                                readonly 'l value': Type.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Type': l_value.Type
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Balans = {
            readonly 'l location': Balans.l_location
            readonly 'l value': Balans.l_value
        }
        
        export namespace Resultaat {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = null
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Resultaat = {
            readonly 'l location': Resultaat.l_location
            readonly 'l value': Resultaat.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Balans': l_value.Balans
        readonly 'Resultaat': l_value.Resultaat
    }
    
}

export type Grootboekrekeningen_ = {
    readonly 'l location': Grootboekrekeningen_.l_location
    readonly 'l value': Grootboekrekeningen_.l_value
}

export namespace Jaarbeheer_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Resultaat {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace Grootboekrekening_voor_BTW_afrondingen {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Grootboekrekening_voor_BTW_afrondingen = {
                    readonly 'l location': Grootboekrekening_voor_BTW_afrondingen.l_location
                    readonly 'l value': Grootboekrekening_voor_BTW_afrondingen.l_value
                }
                
                export namespace Salarisrondes {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = null
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Salarisrondes = {
                    readonly 'l location': Salarisrondes.l_location
                    readonly 'l value': Salarisrondes.l_value
                }
                
                export namespace BTW_periodes {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace _11$pe__BTW$mi_categorieen {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export namespace l_entry {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = null
                                                    
                                                }
                                                
                                                export type l_entry = {
                                                    readonly 'l location': l_entry.l_location
                                                    readonly 'l value': l_entry.l_value
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_value = _pi.Dictionary<l_value.D>
                                        
                                    }
                                    
                                    export type _11$pe__BTW$mi_categorieen = {
                                        readonly 'l location': _11$pe__BTW$mi_categorieen.l_location
                                        readonly 'l value': _11$pe__BTW$mi_categorieen.l_value
                                    }
                                    
                                    export namespace Documenten {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export namespace l_entry {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Bestand {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = string
                                                            
                                                        }
                                                        
                                                        export type Bestand = {
                                                            readonly 'l location': Bestand.l_location
                                                            readonly 'l value': Bestand.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = {
                                                        readonly 'Bestand': l_value.Bestand
                                                    }
                                                    
                                                }
                                                
                                                export type l_entry = {
                                                    readonly 'l location': l_entry.l_location
                                                    readonly 'l value': l_entry.l_value
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_value = _pi.Dictionary<l_value.D>
                                        
                                    }
                                    
                                    export type Documenten = {
                                        readonly 'l location': Documenten.l_location
                                        readonly 'l value': Documenten.l_value
                                    }
                                    
                                    export namespace Omschrijving {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = string
                                        
                                    }
                                    
                                    export type Omschrijving = {
                                        readonly 'l location': Omschrijving.l_location
                                        readonly 'l value': Omschrijving.l_value
                                    }
                                    
                                    export namespace Status {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Aangegeven {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export namespace l_value {
                                                    
                                                    export namespace Afronding {
                                                        
                                                        export type l_location = i__location.Relative_Location
                                                        
                                                        export type l_value = number
                                                        
                                                    }
                                                    
                                                    export type Afronding = {
                                                        readonly 'l location': Afronding.l_location
                                                        readonly 'l value': Afronding.l_value
                                                    }
                                                    
                                                    export namespace Bedrag {
                                                        
                                                        export type l_location = i__location.Relative_Location
                                                        
                                                        export type l_value = number
                                                        
                                                    }
                                                    
                                                    export type Bedrag = {
                                                        readonly 'l location': Bedrag.l_location
                                                        readonly 'l value': Bedrag.l_value
                                                    }
                                                    
                                                    export namespace Datum {
                                                        
                                                        export type l_location = i__location.Relative_Location
                                                        
                                                        export type l_value = number
                                                        
                                                    }
                                                    
                                                    export type Datum = {
                                                        readonly 'l location': Datum.l_location
                                                        readonly 'l value': Datum.l_value
                                                    }
                                                    
                                                }
                                                
                                                export type l_value = {
                                                    readonly 'Afronding': l_value.Afronding
                                                    readonly 'Bedrag': l_value.Bedrag
                                                    readonly 'Datum': l_value.Datum
                                                }
                                                
                                            }
                                            
                                            export type Aangegeven = {
                                                readonly 'l location': Aangegeven.l_location
                                                readonly 'l value': Aangegeven.l_value
                                            }
                                            
                                            export namespace Openstaand {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = null
                                                
                                            }
                                            
                                            export type Openstaand = {
                                                readonly 'l location': Openstaand.l_location
                                                readonly 'l value': Openstaand.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = 
                                            | readonly ['Aangegeven', l_value.Aangegeven]
                                            | readonly ['Openstaand', l_value.Openstaand]
                                        
                                    }
                                    
                                    export type Status = {
                                        readonly 'l location': Status.l_location
                                        readonly 'l value': Status.l_value
                                    }
                                    
                                }
                                
                                export type l_value = {
                                    readonly '1. BTW-categorieen': l_value._11$pe__BTW$mi_categorieen
                                    readonly 'Documenten': l_value.Documenten
                                    readonly 'Omschrijving': l_value.Omschrijving
                                    readonly 'Status': l_value.Status
                                }
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type BTW_periodes = {
                    readonly 'l location': BTW_periodes.l_location
                    readonly 'l value': BTW_periodes.l_value
                }
                
            }
            
            export type l_value = {
                readonly 'Grootboekrekening voor BTW afrondingen': l_value.Grootboekrekening_voor_BTW_afrondingen
                readonly 'Salarisrondes': l_value.Salarisrondes
                readonly 'BTW periodes': l_value.BTW_periodes
            }
            
        }
        
        export type Resultaat = {
            readonly 'l location': Resultaat.l_location
            readonly 'l value': Resultaat.l_value
        }
        
        export namespace Balans {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace Grootboekrekening_voor_nog_aan_te_geven_BTW {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Grootboekrekening_voor_nog_aan_te_geven_BTW = {
                    readonly 'l location': Grootboekrekening_voor_nog_aan_te_geven_BTW.l_location
                    readonly 'l value': Grootboekrekening_voor_nog_aan_te_geven_BTW.l_value
                }
                
                export namespace Grootboekrekening_voor_resultaat_dit_jaar {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Grootboekrekening_voor_resultaat_dit_jaar = {
                    readonly 'l location': Grootboekrekening_voor_resultaat_dit_jaar.l_location
                    readonly 'l value': Grootboekrekening_voor_resultaat_dit_jaar.l_value
                }
                
                export namespace Grootboekrekening_voor_winstreserve {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Grootboekrekening_voor_winstreserve = {
                    readonly 'l location': Grootboekrekening_voor_winstreserve.l_location
                    readonly 'l value': Grootboekrekening_voor_winstreserve.l_value
                }
                
                export namespace Grootboekrekening_voor_Inkoop_saldo {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Grootboekrekening_voor_Inkoop_saldo = {
                    readonly 'l location': Grootboekrekening_voor_Inkoop_saldo.l_location
                    readonly 'l value': Grootboekrekening_voor_Inkoop_saldo.l_value
                }
                
                export namespace Grootboekrekening_voor_Verkoop_saldo {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Grootboekrekening_voor_Verkoop_saldo = {
                    readonly 'l location': Grootboekrekening_voor_Verkoop_saldo.l_location
                    readonly 'l value': Grootboekrekening_voor_Verkoop_saldo.l_value
                }
                
                export namespace Beginsaldo_nog_aan_te_geven_BTW {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = number
                    
                }
                
                export type Beginsaldo_nog_aan_te_geven_BTW = {
                    readonly 'l location': Beginsaldo_nog_aan_te_geven_BTW.l_location
                    readonly 'l value': Beginsaldo_nog_aan_te_geven_BTW.l_value
                }
                
                export namespace Beginsaldo_winstreserve {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = number
                    
                }
                
                export type Beginsaldo_winstreserve = {
                    readonly 'l location': Beginsaldo_winstreserve.l_location
                    readonly 'l value': Beginsaldo_winstreserve.l_value
                }
                
                export namespace Informele_rekeningen {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Beginsaldo {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = number
                                        
                                    }
                                    
                                    export type Beginsaldo = {
                                        readonly 'l location': Beginsaldo.l_location
                                        readonly 'l value': Beginsaldo.l_value
                                    }
                                    
                                    export namespace Grootboekrekening {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = string
                                        
                                    }
                                    
                                    export type Grootboekrekening = {
                                        readonly 'l location': Grootboekrekening.l_location
                                        readonly 'l value': Grootboekrekening.l_value
                                    }
                                    
                                    export namespace Nieuw {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Ja {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = null
                                                
                                            }
                                            
                                            export type Ja = {
                                                readonly 'l location': Ja.l_location
                                                readonly 'l value': Ja.l_value
                                            }
                                            
                                            export namespace Nee {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export namespace l_value {
                                                    
                                                    export namespace Rekening {
                                                        
                                                        export type l_location = i__location.Relative_Location
                                                        
                                                        export type l_value = Verwijzing_naar_Informele_rekening_
                                                        
                                                    }
                                                    
                                                    export type Rekening = {
                                                        readonly 'l location': Rekening.l_location
                                                        readonly 'l value': Rekening.l_value
                                                    }
                                                    
                                                }
                                                
                                                export type l_value = {
                                                    readonly 'Rekening': l_value.Rekening
                                                }
                                                
                                            }
                                            
                                            export type Nee = {
                                                readonly 'l location': Nee.l_location
                                                readonly 'l value': Nee.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = 
                                            | readonly ['Ja', l_value.Ja]
                                            | readonly ['Nee', l_value.Nee]
                                        
                                    }
                                    
                                    export type Nieuw = {
                                        readonly 'l location': Nieuw.l_location
                                        readonly 'l value': Nieuw.l_value
                                    }
                                    
                                }
                                
                                export type l_value = {
                                    readonly 'Beginsaldo': l_value.Beginsaldo
                                    readonly 'Grootboekrekening': l_value.Grootboekrekening
                                    readonly 'Nieuw': l_value.Nieuw
                                }
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Informele_rekeningen = {
                    readonly 'l location': Informele_rekeningen.l_location
                    readonly 'l value': Informele_rekeningen.l_value
                }
                
                export namespace Bankrekeningen {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Beginsaldo {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = number
                                        
                                    }
                                    
                                    export type Beginsaldo = {
                                        readonly 'l location': Beginsaldo.l_location
                                        readonly 'l value': Beginsaldo.l_value
                                    }
                                    
                                    export namespace Grootboekrekening {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = string
                                        
                                    }
                                    
                                    export type Grootboekrekening = {
                                        readonly 'l location': Grootboekrekening.l_location
                                        readonly 'l value': Grootboekrekening.l_value
                                    }
                                    
                                    export namespace Nieuw {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Ja {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = null
                                                
                                            }
                                            
                                            export type Ja = {
                                                readonly 'l location': Ja.l_location
                                                readonly 'l value': Ja.l_value
                                            }
                                            
                                            export namespace Nee {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export namespace l_value {
                                                    
                                                    export namespace Rekening {
                                                        
                                                        export type l_location = i__location.Relative_Location
                                                        
                                                        export type l_value = Verwijzing_naar_Bankrekening_
                                                        
                                                    }
                                                    
                                                    export type Rekening = {
                                                        readonly 'l location': Rekening.l_location
                                                        readonly 'l value': Rekening.l_value
                                                    }
                                                    
                                                }
                                                
                                                export type l_value = {
                                                    readonly 'Rekening': l_value.Rekening
                                                }
                                                
                                            }
                                            
                                            export type Nee = {
                                                readonly 'l location': Nee.l_location
                                                readonly 'l value': Nee.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = 
                                            | readonly ['Ja', l_value.Ja]
                                            | readonly ['Nee', l_value.Nee]
                                        
                                    }
                                    
                                    export type Nieuw = {
                                        readonly 'l location': Nieuw.l_location
                                        readonly 'l value': Nieuw.l_value
                                    }
                                    
                                    export namespace Mutaties {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace D {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export namespace l_entry {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Bedrag {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = number
                                                            
                                                        }
                                                        
                                                        export type Bedrag = {
                                                            readonly 'l location': Bedrag.l_location
                                                            readonly 'l value': Bedrag.l_value
                                                        }
                                                        
                                                        export namespace Datum {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = number
                                                            
                                                        }
                                                        
                                                        export type Datum = {
                                                            readonly 'l location': Datum.l_location
                                                            readonly 'l value': Datum.l_value
                                                        }
                                                        
                                                        export namespace Omschrijving {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = string
                                                            
                                                        }
                                                        
                                                        export type Omschrijving = {
                                                            readonly 'l location': Omschrijving.l_location
                                                            readonly 'l value': Omschrijving.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = {
                                                        readonly 'Bedrag': l_value.Bedrag
                                                        readonly 'Datum': l_value.Datum
                                                        readonly 'Omschrijving': l_value.Omschrijving
                                                    }
                                                    
                                                }
                                                
                                                export type l_entry = {
                                                    readonly 'l location': l_entry.l_location
                                                    readonly 'l value': l_entry.l_value
                                                }
                                                
                                            }
                                            
                                            export type D = {
                                                readonly 'l location': D.l_location
                                                readonly 'l entry': D.l_entry
                                            }
                                            
                                        }
                                        
                                        export type l_value = _pi.Dictionary<l_value.D>
                                        
                                    }
                                    
                                    export type Mutaties = {
                                        readonly 'l location': Mutaties.l_location
                                        readonly 'l value': Mutaties.l_value
                                    }
                                    
                                }
                                
                                export type l_value = {
                                    readonly 'Beginsaldo': l_value.Beginsaldo
                                    readonly 'Grootboekrekening': l_value.Grootboekrekening
                                    readonly 'Nieuw': l_value.Nieuw
                                    readonly 'Mutaties': l_value.Mutaties
                                }
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Bankrekeningen = {
                    readonly 'l location': Bankrekeningen.l_location
                    readonly 'l value': Bankrekeningen.l_value
                }
                
                export namespace Overige_balans_items {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = Overige_balans_item_
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Overige_balans_items = {
                    readonly 'l location': Overige_balans_items.l_location
                    readonly 'l value': Overige_balans_items.l_value
                }
                
                export namespace Verrekenposten {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace D {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_entry {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = null
                                
                            }
                            
                            export type l_entry = {
                                readonly 'l location': l_entry.l_location
                                readonly 'l value': l_entry.l_value
                            }
                            
                        }
                        
                        export type D = {
                            readonly 'l location': D.l_location
                            readonly 'l entry': D.l_entry
                        }
                        
                    }
                    
                    export type l_value = _pi.Dictionary<l_value.D>
                    
                }
                
                export type Verrekenposten = {
                    readonly 'l location': Verrekenposten.l_location
                    readonly 'l value': Verrekenposten.l_value
                }
                
            }
            
            export type l_value = {
                readonly 'Grootboekrekening voor nog aan te geven BTW': l_value.Grootboekrekening_voor_nog_aan_te_geven_BTW
                readonly 'Grootboekrekening voor resultaat dit jaar': l_value.Grootboekrekening_voor_resultaat_dit_jaar
                readonly 'Grootboekrekening voor winstreserve': l_value.Grootboekrekening_voor_winstreserve
                readonly 'Grootboekrekening voor Inkoop saldo': l_value.Grootboekrekening_voor_Inkoop_saldo
                readonly 'Grootboekrekening voor Verkoop saldo': l_value.Grootboekrekening_voor_Verkoop_saldo
                readonly 'Beginsaldo nog aan te geven BTW': l_value.Beginsaldo_nog_aan_te_geven_BTW
                readonly 'Beginsaldo winstreserve': l_value.Beginsaldo_winstreserve
                readonly 'Informele rekeningen': l_value.Informele_rekeningen
                readonly 'Bankrekeningen': l_value.Bankrekeningen
                readonly 'Overige balans items': l_value.Overige_balans_items
                readonly 'Verrekenposten': l_value.Verrekenposten
            }
            
        }
        
        export type Balans = {
            readonly 'l location': Balans.l_location
            readonly 'l value': Balans.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Resultaat': l_value.Resultaat
        readonly 'Balans': l_value.Balans
    }
    
}

export type Jaarbeheer_ = {
    readonly 'l location': Jaarbeheer_.l_location
    readonly 'l value': Jaarbeheer_.l_value
}

export namespace Overige_balans_item_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Beginsaldo {
            
            export type l_location = i__location.Relative_Location
            
            export type l_value = number
            
        }
        
        export type Beginsaldo = {
            readonly 'l location': Beginsaldo.l_location
            readonly 'l value': Beginsaldo.l_value
        }
        
        export namespace Grootboekrekening {
            
            export type l_location = i__location.Relative_Location
            
            export type l_value = string
            
        }
        
        export type Grootboekrekening = {
            readonly 'l location': Grootboekrekening.l_location
            readonly 'l value': Grootboekrekening.l_value
        }
        
        export namespace Nieuw {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace Ja {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = null
                    
                }
                
                export type Ja = {
                    readonly 'l location': Ja.l_location
                    readonly 'l value': Ja.l_value
                }
                
                export namespace Nee {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_value {
                        
                        export namespace Balans_item {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_value = string
                            
                        }
                        
                        export type Balans_item = {
                            readonly 'l location': Balans_item.l_location
                            readonly 'l value': Balans_item.l_value
                        }
                        
                    }
                    
                    export type l_value = {
                        readonly 'Balans item': l_value.Balans_item
                    }
                    
                }
                
                export type Nee = {
                    readonly 'l location': Nee.l_location
                    readonly 'l value': Nee.l_value
                }
                
            }
            
            export type l_value = 
                | readonly ['Ja', l_value.Ja]
                | readonly ['Nee', l_value.Nee]
            
        }
        
        export type Nieuw = {
            readonly 'l location': Nieuw.l_location
            readonly 'l value': Nieuw.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Beginsaldo': l_value.Beginsaldo
        readonly 'Grootboekrekening': l_value.Grootboekrekening
        readonly 'Nieuw': l_value.Nieuw
    }
    
}

export type Overige_balans_item_ = {
    readonly 'l location': Overige_balans_item_.l_location
    readonly 'l value': Overige_balans_item_.l_value
}

export namespace Verwijzing_naar_Informele_rekening_ {
    
    export type l_location = i__location.Relative_Location
    
    export type l_value = string
    
}

export type Verwijzing_naar_Informele_rekening_ = {
    readonly 'l location': Verwijzing_naar_Informele_rekening_.l_location
    readonly 'l value': Verwijzing_naar_Informele_rekening_.l_value
}

export namespace Verwijzing_naar_Bankrekening_ {
    
    export type l_location = i__location.Relative_Location
    
    export type l_value = string
    
}

export type Verwijzing_naar_Bankrekening_ = {
    readonly 'l location': Verwijzing_naar_Bankrekening_.l_location
    readonly 'l value': Verwijzing_naar_Bankrekening_.l_value
}

export namespace Handelstransacties_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Inkopen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Afhandeling {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Mutaties {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Mutaties = {
                                        readonly 'l location': Mutaties.l_location
                                        readonly 'l value': Mutaties.l_value
                                    }
                                    
                                    export namespace Rekening_courant {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Rekening_courant {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Rekening_courant = {
                                                readonly 'l location': Rekening_courant.l_location
                                                readonly 'l value': Rekening_courant.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Rekening courant': l_value.Rekening_courant
                                        }
                                        
                                    }
                                    
                                    export type Rekening_courant = {
                                        readonly 'l location': Rekening_courant.l_location
                                        readonly 'l value': Rekening_courant.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Mutaties', l_value.Mutaties]
                                    | readonly ['Rekening courant', l_value.Rekening_courant]
                                
                            }
                            
                            export type Afhandeling = {
                                readonly 'l location': Afhandeling.l_location
                                readonly 'l value': Afhandeling.l_value
                            }
                            
                            export namespace BTW$mi_regime {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Binnenland$cl__heffing_verlegd {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Binnenland$cl__heffing_verlegd = {
                                        readonly 'l location': Binnenland$cl__heffing_verlegd.l_location
                                        readonly 'l value': Binnenland$cl__heffing_verlegd.l_value
                                    }
                                    
                                    export namespace Geen_BTW_van_toepassing {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Geen_BTW_van_toepassing = {
                                        readonly 'l location': Geen_BTW_van_toepassing.l_location
                                        readonly 'l value': Geen_BTW_van_toepassing.l_value
                                    }
                                    
                                    export namespace Import_van_buiten_de_EU {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Import_van_buiten_de_EU = {
                                        readonly 'l location': Import_van_buiten_de_EU.l_location
                                        readonly 'l value': Import_van_buiten_de_EU.l_value
                                    }
                                    
                                    export namespace Intracommunautair {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Intracommunautair = {
                                        readonly 'l location': Intracommunautair.l_location
                                        readonly 'l value': Intracommunautair.l_value
                                    }
                                    
                                    export namespace Standaard {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace BTW$mi_periode {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type BTW$mi_periode = {
                                                readonly 'l location': BTW$mi_periode.l_location
                                                readonly 'l value': BTW$mi_periode.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'BTW-periode': l_value.BTW$mi_periode
                                        }
                                        
                                    }
                                    
                                    export type Standaard = {
                                        readonly 'l location': Standaard.l_location
                                        readonly 'l value': Standaard.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Binnenland: heffing verlegd', l_value.Binnenland$cl__heffing_verlegd]
                                    | readonly ['Geen BTW van toepassing', l_value.Geen_BTW_van_toepassing]
                                    | readonly ['Import van buiten de EU', l_value.Import_van_buiten_de_EU]
                                    | readonly ['Intracommunautair', l_value.Intracommunautair]
                                    | readonly ['Standaard', l_value.Standaard]
                                
                            }
                            
                            export type BTW$mi_regime = {
                                readonly 'l location': BTW$mi_regime.l_location
                                readonly 'l value': BTW$mi_regime.l_value
                            }
                            
                            export namespace Brondocument {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Toegevoegd {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Document {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Document = {
                                                readonly 'l location': Document.l_location
                                                readonly 'l value': Document.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Document': l_value.Document
                                        }
                                        
                                    }
                                    
                                    export type Toegevoegd = {
                                        readonly 'l location': Toegevoegd.l_location
                                        readonly 'l value': Toegevoegd.l_value
                                    }
                                    
                                    export namespace Niet_van_toepassing {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Niet_van_toepassing = {
                                        readonly 'l location': Niet_van_toepassing.l_location
                                        readonly 'l value': Niet_van_toepassing.l_value
                                    }
                                    
                                    export namespace Ontbreekt {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Ontbreekt = {
                                        readonly 'l location': Ontbreekt.l_location
                                        readonly 'l value': Ontbreekt.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Toegevoegd', l_value.Toegevoegd]
                                    | readonly ['Niet van toepassing', l_value.Niet_van_toepassing]
                                    | readonly ['Ontbreekt', l_value.Ontbreekt]
                                
                            }
                            
                            export type Brondocument = {
                                readonly 'l location': Brondocument.l_location
                                readonly 'l value': Brondocument.l_value
                            }
                            
                            export namespace Datum {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = number
                                
                            }
                            
                            export type Datum = {
                                readonly 'l location': Datum.l_location
                                readonly 'l value': Datum.l_value
                            }
                            
                            export namespace Regels {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_entry {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export namespace l_value {
                                                
                                                export namespace Bedrag {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Bekend {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace BTW$mi_bedrag {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = number
                                                                    
                                                                }
                                                                
                                                                export type BTW$mi_bedrag = {
                                                                    readonly 'l location': BTW$mi_bedrag.l_location
                                                                    readonly 'l value': BTW$mi_bedrag.l_value
                                                                }
                                                                
                                                                export namespace Bedrag_inclusief_geheven_BTW {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = number
                                                                    
                                                                }
                                                                
                                                                export type Bedrag_inclusief_geheven_BTW = {
                                                                    readonly 'l location': Bedrag_inclusief_geheven_BTW.l_location
                                                                    readonly 'l value': Bedrag_inclusief_geheven_BTW.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'BTW-bedrag': l_value.BTW$mi_bedrag
                                                                readonly 'Bedrag inclusief geheven BTW': l_value.Bedrag_inclusief_geheven_BTW
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Bekend = {
                                                            readonly 'l location': Bekend.l_location
                                                            readonly 'l value': Bekend.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = 
                                                        | readonly ['Bekend', l_value.Bekend]
                                                    
                                                }
                                                
                                                export type Bedrag = {
                                                    readonly 'l location': Bedrag.l_location
                                                    readonly 'l value': Bedrag.l_value
                                                }
                                                
                                                export namespace Omschrijving {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = string
                                                    
                                                }
                                                
                                                export type Omschrijving = {
                                                    readonly 'l location': Omschrijving.l_location
                                                    readonly 'l value': Omschrijving.l_value
                                                }
                                                
                                                export namespace Type {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Balans {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace Balans_item {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = string
                                                                    
                                                                }
                                                                
                                                                export type Balans_item = {
                                                                    readonly 'l location': Balans_item.l_location
                                                                    readonly 'l value': Balans_item.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'Balans item': l_value.Balans_item
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Balans = {
                                                            readonly 'l location': Balans.l_location
                                                            readonly 'l value': Balans.l_value
                                                        }
                                                        
                                                        export namespace Kosten {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace Grootboekrekening {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = string
                                                                    
                                                                }
                                                                
                                                                export type Grootboekrekening = {
                                                                    readonly 'l location': Grootboekrekening.l_location
                                                                    readonly 'l value': Grootboekrekening.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'Grootboekrekening': l_value.Grootboekrekening
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Kosten = {
                                                            readonly 'l location': Kosten.l_location
                                                            readonly 'l value': Kosten.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = 
                                                        | readonly ['Balans', l_value.Balans]
                                                        | readonly ['Kosten', l_value.Kosten]
                                                    
                                                }
                                                
                                                export type Type = {
                                                    readonly 'l location': Type.l_location
                                                    readonly 'l value': Type.l_value
                                                }
                                                
                                            }
                                            
                                            export type l_value = {
                                                readonly 'Bedrag': l_value.Bedrag
                                                readonly 'Omschrijving': l_value.Omschrijving
                                                readonly 'Type': l_value.Type
                                            }
                                            
                                        }
                                        
                                        export type l_entry = {
                                            readonly 'l location': l_entry.l_location
                                            readonly 'l value': l_entry.l_value
                                        }
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_value = _pi.Dictionary<l_value.D>
                                
                            }
                            
                            export type Regels = {
                                readonly 'l location': Regels.l_location
                                readonly 'l value': Regels.l_value
                            }
                            
                            export namespace Type {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Bonnetje {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Bonnetje = {
                                        readonly 'l location': Bonnetje.l_location
                                        readonly 'l value': Bonnetje.l_value
                                    }
                                    
                                    export namespace Inkoop_$po_met_crediteur$pc_ {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Crediteur {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Crediteur = {
                                                readonly 'l location': Crediteur.l_location
                                                readonly 'l value': Crediteur.l_value
                                            }
                                            
                                            export namespace Factuurnummer {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Factuurnummer = {
                                                readonly 'l location': Factuurnummer.l_location
                                                readonly 'l value': Factuurnummer.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Crediteur': l_value.Crediteur
                                            readonly 'Factuurnummer': l_value.Factuurnummer
                                        }
                                        
                                    }
                                    
                                    export type Inkoop_$po_met_crediteur$pc_ = {
                                        readonly 'l location': Inkoop_$po_met_crediteur$pc_.l_location
                                        readonly 'l value': Inkoop_$po_met_crediteur$pc_.l_value
                                    }
                                    
                                    export namespace Loonheffing {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Ronde {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Ronde = {
                                                readonly 'l location': Ronde.l_location
                                                readonly 'l value': Ronde.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Ronde': l_value.Ronde
                                        }
                                        
                                    }
                                    
                                    export type Loonheffing = {
                                        readonly 'l location': Loonheffing.l_location
                                        readonly 'l value': Loonheffing.l_value
                                    }
                                    
                                    export namespace Salaris {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Ronde {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Ronde = {
                                                readonly 'l location': Ronde.l_location
                                                readonly 'l value': Ronde.l_value
                                            }
                                            
                                            export namespace Medewerker {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Medewerker = {
                                                readonly 'l location': Medewerker.l_location
                                                readonly 'l value': Medewerker.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Ronde': l_value.Ronde
                                            readonly 'Medewerker': l_value.Medewerker
                                        }
                                        
                                    }
                                    
                                    export type Salaris = {
                                        readonly 'l location': Salaris.l_location
                                        readonly 'l value': Salaris.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Bonnetje', l_value.Bonnetje]
                                    | readonly ['Inkoop (met crediteur)', l_value.Inkoop_$po_met_crediteur$pc_]
                                    | readonly ['Loonheffing', l_value.Loonheffing]
                                    | readonly ['Salaris', l_value.Salaris]
                                
                            }
                            
                            export type Type = {
                                readonly 'l location': Type.l_location
                                readonly 'l value': Type.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Afhandeling': l_value.Afhandeling
                            readonly 'BTW-regime': l_value.BTW$mi_regime
                            readonly 'Brondocument': l_value.Brondocument
                            readonly 'Datum': l_value.Datum
                            readonly 'Regels': l_value.Regels
                            readonly 'Type': l_value.Type
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Inkopen = {
            readonly 'l location': Inkopen.l_location
            readonly 'l value': Inkopen.l_value
        }
        
        export namespace Verkopen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Afhandeling {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Mutaties {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export type l_value = null
                                        
                                    }
                                    
                                    export type Mutaties = {
                                        readonly 'l location': Mutaties.l_location
                                        readonly 'l value': Mutaties.l_value
                                    }
                                    
                                    export namespace Rekening_courant {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Rekening_courant {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Rekening_courant = {
                                                readonly 'l location': Rekening_courant.l_location
                                                readonly 'l value': Rekening_courant.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Rekening courant': l_value.Rekening_courant
                                        }
                                        
                                    }
                                    
                                    export type Rekening_courant = {
                                        readonly 'l location': Rekening_courant.l_location
                                        readonly 'l value': Rekening_courant.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Mutaties', l_value.Mutaties]
                                    | readonly ['Rekening courant', l_value.Rekening_courant]
                                
                            }
                            
                            export type Afhandeling = {
                                readonly 'l location': Afhandeling.l_location
                                readonly 'l value': Afhandeling.l_value
                            }
                            
                            export namespace Betalingstermijn {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = number
                                
                            }
                            
                            export type Betalingstermijn = {
                                readonly 'l location': Betalingstermijn.l_location
                                readonly 'l value': Betalingstermijn.l_value
                            }
                            
                            export namespace BTW$mi_periode {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = string
                                
                            }
                            
                            export type BTW$mi_periode = {
                                readonly 'l location': BTW$mi_periode.l_location
                                readonly 'l value': BTW$mi_periode.l_value
                            }
                            
                            export namespace Brondocument {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Toegevoegd {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Document {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Document = {
                                                readonly 'l location': Document.l_location
                                                readonly 'l value': Document.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Document': l_value.Document
                                        }
                                        
                                    }
                                    
                                    export type Toegevoegd = {
                                        readonly 'l location': Toegevoegd.l_location
                                        readonly 'l value': Toegevoegd.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Toegevoegd', l_value.Toegevoegd]
                                
                            }
                            
                            export type Brondocument = {
                                readonly 'l location': Brondocument.l_location
                                readonly 'l value': Brondocument.l_value
                            }
                            
                            export namespace Debiteur {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = string
                                
                            }
                            
                            export type Debiteur = {
                                readonly 'l location': Debiteur.l_location
                                readonly 'l value': Debiteur.l_value
                            }
                            
                            export namespace Contracttype {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace Project {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Project {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Project = {
                                                readonly 'l location': Project.l_location
                                                readonly 'l value': Project.l_value
                                            }
                                            
                                            export namespace Offerte {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Offerte = {
                                                readonly 'l location': Offerte.l_location
                                                readonly 'l value': Offerte.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Project': l_value.Project
                                            readonly 'Offerte': l_value.Offerte
                                        }
                                        
                                    }
                                    
                                    export type Project = {
                                        readonly 'l location': Project.l_location
                                        readonly 'l value': Project.l_value
                                    }
                                    
                                    export namespace Licentieovereenkomst {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_value {
                                            
                                            export namespace Overeenkomst {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_value = string
                                                
                                            }
                                            
                                            export type Overeenkomst = {
                                                readonly 'l location': Overeenkomst.l_location
                                                readonly 'l value': Overeenkomst.l_value
                                            }
                                            
                                        }
                                        
                                        export type l_value = {
                                            readonly 'Overeenkomst': l_value.Overeenkomst
                                        }
                                        
                                    }
                                    
                                    export type Licentieovereenkomst = {
                                        readonly 'l location': Licentieovereenkomst.l_location
                                        readonly 'l value': Licentieovereenkomst.l_value
                                    }
                                    
                                }
                                
                                export type l_value = 
                                    | readonly ['Project', l_value.Project]
                                    | readonly ['Licentieovereenkomst', l_value.Licentieovereenkomst]
                                
                            }
                            
                            export type Contracttype = {
                                readonly 'l location': Contracttype.l_location
                                readonly 'l value': Contracttype.l_value
                            }
                            
                            export namespace Datum {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = number
                                
                            }
                            
                            export type Datum = {
                                readonly 'l location': Datum.l_location
                                readonly 'l value': Datum.l_value
                            }
                            
                            export namespace Regels {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_value {
                                    
                                    export namespace D {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_entry {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export namespace l_value {
                                                
                                                export namespace BTW$mi_regime {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Intracommunautair {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = null
                                                            
                                                        }
                                                        
                                                        export type Intracommunautair = {
                                                            readonly 'l location': Intracommunautair.l_location
                                                            readonly 'l value': Intracommunautair.l_value
                                                        }
                                                        
                                                        export namespace Standaard {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace BTW$mi_categorie {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = string
                                                                    
                                                                }
                                                                
                                                                export type BTW$mi_categorie = {
                                                                    readonly 'l location': BTW$mi_categorie.l_location
                                                                    readonly 'l value': BTW$mi_categorie.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'BTW-categorie': l_value.BTW$mi_categorie
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Standaard = {
                                                            readonly 'l location': Standaard.l_location
                                                            readonly 'l value': Standaard.l_value
                                                        }
                                                        
                                                        export namespace Binnenland$cl__heffing_verlegd {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = null
                                                            
                                                        }
                                                        
                                                        export type Binnenland$cl__heffing_verlegd = {
                                                            readonly 'l location': Binnenland$cl__heffing_verlegd.l_location
                                                            readonly 'l value': Binnenland$cl__heffing_verlegd.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = 
                                                        | readonly ['Intracommunautair', l_value.Intracommunautair]
                                                        | readonly ['Standaard', l_value.Standaard]
                                                        | readonly ['Binnenland: heffing verlegd', l_value.Binnenland$cl__heffing_verlegd]
                                                    
                                                }
                                                
                                                export type BTW$mi_regime = {
                                                    readonly 'l location': BTW$mi_regime.l_location
                                                    readonly 'l value': BTW$mi_regime.l_value
                                                }
                                                
                                                export namespace Bedrag_exclusief_BTW {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = number
                                                    
                                                }
                                                
                                                export type Bedrag_exclusief_BTW = {
                                                    readonly 'l location': Bedrag_exclusief_BTW.l_location
                                                    readonly 'l value': Bedrag_exclusief_BTW.l_value
                                                }
                                                
                                                export namespace Contracttype {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Project {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace Opbrengst {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = string
                                                                    
                                                                }
                                                                
                                                                export type Opbrengst = {
                                                                    readonly 'l location': Opbrengst.l_location
                                                                    readonly 'l value': Opbrengst.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'Opbrengst': l_value.Opbrengst
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Project = {
                                                            readonly 'l location': Project.l_location
                                                            readonly 'l value': Project.l_value
                                                        }
                                                        
                                                        export namespace Los {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = null
                                                            
                                                        }
                                                        
                                                        export type Los = {
                                                            readonly 'l location': Los.l_location
                                                            readonly 'l value': Los.l_value
                                                        }
                                                        
                                                        export namespace Licentieovereenkomst {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace Periode {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = string
                                                                    
                                                                }
                                                                
                                                                export type Periode = {
                                                                    readonly 'l location': Periode.l_location
                                                                    readonly 'l value': Periode.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'Periode': l_value.Periode
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Licentieovereenkomst = {
                                                            readonly 'l location': Licentieovereenkomst.l_location
                                                            readonly 'l value': Licentieovereenkomst.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = 
                                                        | readonly ['Project', l_value.Project]
                                                        | readonly ['Los', l_value.Los]
                                                        | readonly ['Licentieovereenkomst', l_value.Licentieovereenkomst]
                                                    
                                                }
                                                
                                                export type Contracttype = {
                                                    readonly 'l location': Contracttype.l_location
                                                    readonly 'l value': Contracttype.l_value
                                                }
                                                
                                                export namespace Omschrijving {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = string
                                                    
                                                }
                                                
                                                export type Omschrijving = {
                                                    readonly 'l location': Omschrijving.l_location
                                                    readonly 'l value': Omschrijving.l_value
                                                }
                                                
                                                export namespace Type {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Opbrengsten {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace Grootboekrekening {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = string
                                                                    
                                                                }
                                                                
                                                                export type Grootboekrekening = {
                                                                    readonly 'l location': Grootboekrekening.l_location
                                                                    readonly 'l value': Grootboekrekening.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'Grootboekrekening': l_value.Grootboekrekening
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Opbrengsten = {
                                                            readonly 'l location': Opbrengsten.l_location
                                                            readonly 'l value': Opbrengsten.l_value
                                                        }
                                                        
                                                        export namespace Balans {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace Balans_item {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = string
                                                                    
                                                                }
                                                                
                                                                export type Balans_item = {
                                                                    readonly 'l location': Balans_item.l_location
                                                                    readonly 'l value': Balans_item.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'Balans item': l_value.Balans_item
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Balans = {
                                                            readonly 'l location': Balans.l_location
                                                            readonly 'l value': Balans.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = 
                                                        | readonly ['Opbrengsten', l_value.Opbrengsten]
                                                        | readonly ['Balans', l_value.Balans]
                                                    
                                                }
                                                
                                                export type Type = {
                                                    readonly 'l location': Type.l_location
                                                    readonly 'l value': Type.l_value
                                                }
                                                
                                            }
                                            
                                            export type l_value = {
                                                readonly 'BTW-regime': l_value.BTW$mi_regime
                                                readonly 'Bedrag exclusief BTW': l_value.Bedrag_exclusief_BTW
                                                readonly 'Contracttype': l_value.Contracttype
                                                readonly 'Omschrijving': l_value.Omschrijving
                                                readonly 'Type': l_value.Type
                                            }
                                            
                                        }
                                        
                                        export type l_entry = {
                                            readonly 'l location': l_entry.l_location
                                            readonly 'l value': l_entry.l_value
                                        }
                                        
                                    }
                                    
                                    export type D = {
                                        readonly 'l location': D.l_location
                                        readonly 'l entry': D.l_entry
                                    }
                                    
                                }
                                
                                export type l_value = _pi.Dictionary<l_value.D>
                                
                            }
                            
                            export type Regels = {
                                readonly 'l location': Regels.l_location
                                readonly 'l value': Regels.l_value
                            }
                            
                        }
                        
                        export type l_value = {
                            readonly 'Afhandeling': l_value.Afhandeling
                            readonly 'Betalingstermijn': l_value.Betalingstermijn
                            readonly 'BTW-periode': l_value.BTW$mi_periode
                            readonly 'Brondocument': l_value.Brondocument
                            readonly 'Debiteur': l_value.Debiteur
                            readonly 'Contracttype': l_value.Contracttype
                            readonly 'Datum': l_value.Datum
                            readonly 'Regels': l_value.Regels
                        }
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Verkopen = {
            readonly 'l location': Verkopen.l_location
            readonly 'l value': Verkopen.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Inkopen': l_value.Inkopen
        readonly 'Verkopen': l_value.Verkopen
    }
    
}

export type Handelstransacties_ = {
    readonly 'l location': Handelstransacties_.l_location
    readonly 'l value': Handelstransacties_.l_value
}

export namespace Mutaties_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Verrekenpost_mutaties {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace D {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_entry {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export namespace l_value {
                                        
                                        export namespace Bedrag {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_value = number
                                            
                                        }
                                        
                                        export type Bedrag = {
                                            readonly 'l location': Bedrag.l_location
                                            readonly 'l value': Bedrag.l_value
                                        }
                                        
                                        export namespace Afhandeling {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export namespace l_value {
                                                
                                                export namespace Resultaat {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export type l_value = Balans_Resultaat_Mutatie_
                                                    
                                                }
                                                
                                                export type Resultaat = {
                                                    readonly 'l location': Resultaat.l_location
                                                    readonly 'l value': Resultaat.l_value
                                                }
                                                
                                                export namespace Balans {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Informele_rekening {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export namespace l_value {
                                                                
                                                                export namespace Informele_rekening {
                                                                    
                                                                    export type l_location = i__location.Relative_Location
                                                                    
                                                                    export type l_value = string
                                                                    
                                                                }
                                                                
                                                                export type Informele_rekening = {
                                                                    readonly 'l location': Informele_rekening.l_location
                                                                    readonly 'l value': Informele_rekening.l_value
                                                                }
                                                                
                                                            }
                                                            
                                                            export type l_value = {
                                                                readonly 'Informele rekening': l_value.Informele_rekening
                                                            }
                                                            
                                                        }
                                                        
                                                        export type Informele_rekening = {
                                                            readonly 'l location': Informele_rekening.l_location
                                                            readonly 'l value': Informele_rekening.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = 
                                                        | readonly ['Informele rekening', l_value.Informele_rekening]
                                                    
                                                }
                                                
                                                export type Balans = {
                                                    readonly 'l location': Balans.l_location
                                                    readonly 'l value': Balans.l_value
                                                }
                                                
                                            }
                                            
                                            export type l_value = 
                                                | readonly ['Resultaat', l_value.Resultaat]
                                                | readonly ['Balans', l_value.Balans]
                                            
                                        }
                                        
                                        export type Afhandeling = {
                                            readonly 'l location': Afhandeling.l_location
                                            readonly 'l value': Afhandeling.l_value
                                        }
                                        
                                    }
                                    
                                    export type l_value = {
                                        readonly 'Bedrag': l_value.Bedrag
                                        readonly 'Afhandeling': l_value.Afhandeling
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'l location': l_entry.l_location
                                    readonly 'l value': l_entry.l_value
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_value = _pi.Dictionary<l_value.D>
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Verrekenpost_mutaties = {
            readonly 'l location': Verrekenpost_mutaties.l_location
            readonly 'l value': Verrekenpost_mutaties.l_value
        }
        
        export namespace Bankrekening_Mutatie_Verwerkingen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace D {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_entry {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export namespace l_value {
                                        
                                        export namespace Resultaat {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_value = Balans_Resultaat_Mutatie_
                                            
                                        }
                                        
                                        export type Resultaat = {
                                            readonly 'l location': Resultaat.l_location
                                            readonly 'l value': Resultaat.l_value
                                        }
                                        
                                        export namespace Balans {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export namespace l_value {
                                                
                                                export namespace Informele_rekening {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Informele_rekening {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = string
                                                            
                                                        }
                                                        
                                                        export type Informele_rekening = {
                                                            readonly 'l location': Informele_rekening.l_location
                                                            readonly 'l value': Informele_rekening.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = {
                                                        readonly 'Informele rekening': l_value.Informele_rekening
                                                    }
                                                    
                                                }
                                                
                                                export type Informele_rekening = {
                                                    readonly 'l location': Informele_rekening.l_location
                                                    readonly 'l value': Informele_rekening.l_value
                                                }
                                                
                                                export namespace Verrekenpost {
                                                    
                                                    export type l_location = i__location.Relative_Location
                                                    
                                                    export namespace l_value {
                                                        
                                                        export namespace Verrekenpost {
                                                            
                                                            export type l_location = i__location.Relative_Location
                                                            
                                                            export type l_value = string
                                                            
                                                        }
                                                        
                                                        export type Verrekenpost = {
                                                            readonly 'l location': Verrekenpost.l_location
                                                            readonly 'l value': Verrekenpost.l_value
                                                        }
                                                        
                                                    }
                                                    
                                                    export type l_value = {
                                                        readonly 'Verrekenpost': l_value.Verrekenpost
                                                    }
                                                    
                                                }
                                                
                                                export type Verrekenpost = {
                                                    readonly 'l location': Verrekenpost.l_location
                                                    readonly 'l value': Verrekenpost.l_value
                                                }
                                                
                                            }
                                            
                                            export type l_value = 
                                                | readonly ['Informele rekening', l_value.Informele_rekening]
                                                | readonly ['Verrekenpost', l_value.Verrekenpost]
                                            
                                        }
                                        
                                        export type Balans = {
                                            readonly 'l location': Balans.l_location
                                            readonly 'l value': Balans.l_value
                                        }
                                        
                                    }
                                    
                                    export type l_value = 
                                        | readonly ['Resultaat', l_value.Resultaat]
                                        | readonly ['Balans', l_value.Balans]
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'l location': l_entry.l_location
                                    readonly 'l value': l_entry.l_value
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_value = _pi.Dictionary<l_value.D>
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Bankrekening_Mutatie_Verwerkingen = {
            readonly 'l location': Bankrekening_Mutatie_Verwerkingen.l_location
            readonly 'l value': Bankrekening_Mutatie_Verwerkingen.l_value
        }
        
        export namespace Memoriaal_boekingen {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace D {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export namespace l_entry {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export namespace l_value {
                                        
                                        export namespace Bedrag {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_value = number
                                            
                                        }
                                        
                                        export type Bedrag = {
                                            readonly 'l location': Bedrag.l_location
                                            readonly 'l value': Bedrag.l_value
                                        }
                                        
                                        export namespace Datum {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_value = number
                                            
                                        }
                                        
                                        export type Datum = {
                                            readonly 'l location': Datum.l_location
                                            readonly 'l value': Datum.l_value
                                        }
                                        
                                        export namespace Omschrijving {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_value = string
                                            
                                        }
                                        
                                        export type Omschrijving = {
                                            readonly 'l location': Omschrijving.l_location
                                            readonly 'l value': Omschrijving.l_value
                                        }
                                        
                                        export namespace Grootboekrekening {
                                            
                                            export type l_location = i__location.Relative_Location
                                            
                                            export type l_value = string
                                            
                                        }
                                        
                                        export type Grootboekrekening = {
                                            readonly 'l location': Grootboekrekening.l_location
                                            readonly 'l value': Grootboekrekening.l_value
                                        }
                                        
                                    }
                                    
                                    export type l_value = {
                                        readonly 'Bedrag': l_value.Bedrag
                                        readonly 'Datum': l_value.Datum
                                        readonly 'Omschrijving': l_value.Omschrijving
                                        readonly 'Grootboekrekening': l_value.Grootboekrekening
                                    }
                                    
                                }
                                
                                export type l_entry = {
                                    readonly 'l location': l_entry.l_location
                                    readonly 'l value': l_entry.l_value
                                }
                                
                            }
                            
                            export type D = {
                                readonly 'l location': D.l_location
                                readonly 'l entry': D.l_entry
                            }
                            
                        }
                        
                        export type l_value = _pi.Dictionary<l_value.D>
                        
                    }
                    
                    export type l_entry = {
                        readonly 'l location': l_entry.l_location
                        readonly 'l value': l_entry.l_value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type Memoriaal_boekingen = {
            readonly 'l location': Memoriaal_boekingen.l_location
            readonly 'l value': Memoriaal_boekingen.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Verrekenpost mutaties': l_value.Verrekenpost_mutaties
        readonly 'Bankrekening Mutatie Verwerkingen': l_value.Bankrekening_Mutatie_Verwerkingen
        readonly 'Memoriaal boekingen': l_value.Memoriaal_boekingen
    }
    
}

export type Mutaties_ = {
    readonly 'l location': Mutaties_.l_location
    readonly 'l value': Mutaties_.l_value
}

export namespace Jaren_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_value {
                    
                    export namespace Afgesloten {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_value {
                            
                            export namespace Ja {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = null
                                
                            }
                            
                            export type Ja = {
                                readonly 'l location': Ja.l_location
                                readonly 'l value': Ja.l_value
                            }
                            
                            export namespace Nee {
                                
                                export type l_location = i__location.Relative_Location
                                
                                export type l_value = null
                                
                            }
                            
                            export type Nee = {
                                readonly 'l location': Nee.l_location
                                readonly 'l value': Nee.l_value
                            }
                            
                        }
                        
                        export type l_value = 
                            | readonly ['Ja', l_value.Ja]
                            | readonly ['Nee', l_value.Nee]
                        
                    }
                    
                    export type Afgesloten = {
                        readonly 'l location': Afgesloten.l_location
                        readonly 'l value': Afgesloten.l_value
                    }
                    
                    export namespace Startdatum_boekjaar {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = number
                        
                    }
                    
                    export type Startdatum_boekjaar = {
                        readonly 'l location': Startdatum_boekjaar.l_location
                        readonly 'l value': Startdatum_boekjaar.l_value
                    }
                    
                    export namespace Grootboekrekeningen {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = Grootboekrekeningen_
                        
                    }
                    
                    export type Grootboekrekeningen = {
                        readonly 'l location': Grootboekrekeningen.l_location
                        readonly 'l value': Grootboekrekeningen.l_value
                    }
                    
                    export namespace Eerste_boekjaar {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = Eerste_boekjaar_
                        
                    }
                    
                    export type Eerste_boekjaar = {
                        readonly 'l location': Eerste_boekjaar.l_location
                        readonly 'l value': Eerste_boekjaar.l_value
                    }
                    
                    export namespace Jaarbeheer {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = Jaarbeheer_
                        
                    }
                    
                    export type Jaarbeheer = {
                        readonly 'l location': Jaarbeheer.l_location
                        readonly 'l value': Jaarbeheer.l_value
                    }
                    
                    export namespace Handelstransacties {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = Handelstransacties_
                        
                    }
                    
                    export type Handelstransacties = {
                        readonly 'l location': Handelstransacties.l_location
                        readonly 'l value': Handelstransacties.l_value
                    }
                    
                    export namespace Mutaties {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = Mutaties_
                        
                    }
                    
                    export type Mutaties = {
                        readonly 'l location': Mutaties.l_location
                        readonly 'l value': Mutaties.l_value
                    }
                    
                }
                
                export type l_value = {
                    readonly 'Afgesloten': l_value.Afgesloten
                    readonly 'Startdatum boekjaar': l_value.Startdatum_boekjaar
                    readonly 'Grootboekrekeningen': l_value.Grootboekrekeningen
                    readonly 'Eerste boekjaar': l_value.Eerste_boekjaar
                    readonly 'Jaarbeheer': l_value.Jaarbeheer
                    readonly 'Handelstransacties': l_value.Handelstransacties
                    readonly 'Mutaties': l_value.Mutaties
                }
                
            }
            
            export type l_entry = {
                readonly 'l location': l_entry.l_location
                readonly 'l value': l_entry.l_value
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_value = _pi.Dictionary<l_value.D>
    
}

export type Jaren_ = {
    readonly 'l location': Jaren_.l_location
    readonly 'l value': Jaren_.l_value
}

export namespace Balans_Resultaat_Mutatie_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Jaar {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace O {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type O = {
                    readonly 'l location': O.l_location
                    readonly 'l value': O.l_value
                }
                
            }
            
            export type l_value = _pi.Optional_Value<l_value.O>
            
        }
        
        export type Jaar = {
            readonly 'l location': Jaar.l_location
            readonly 'l value': Jaar.l_value
        }
        
        export namespace type_ {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace Inkoop {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Inkoop = {
                    readonly 'l location': Inkoop.l_location
                    readonly 'l value': Inkoop.l_value
                }
                
                export namespace Verkoop {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Verkoop = {
                    readonly 'l location': Verkoop.l_location
                    readonly 'l value': Verkoop.l_value
                }
                
                export namespace BTW$mi_periode {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type BTW$mi_periode = {
                    readonly 'l location': BTW$mi_periode.l_location
                    readonly 'l value': BTW$mi_periode.l_value
                }
                
            }
            
            export type l_value = 
                | readonly ['Inkoop', l_value.Inkoop]
                | readonly ['Verkoop', l_value.Verkoop]
                | readonly ['BTW-periode', l_value.BTW$mi_periode]
            
        }
        
        export type type_ = {
            readonly 'l location': type_.l_location
            readonly 'l value': type_.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Jaar': l_value.Jaar
        readonly 'type': l_value.type_
    }
    
}

export type Balans_Resultaat_Mutatie_ = {
    readonly 'l location': Balans_Resultaat_Mutatie_.l_location
    readonly 'l value': Balans_Resultaat_Mutatie_.l_value
}

export namespace Eerste_boekjaar_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Ja {
            
            export type l_location = i__location.Relative_Location
            
            export type l_value = null
            
        }
        
        export type Ja = {
            readonly 'l location': Ja.l_location
            readonly 'l value': Ja.l_value
        }
        
        export namespace Nee {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace Vorig_boekjaar {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type Vorig_boekjaar = {
                    readonly 'l location': Vorig_boekjaar.l_location
                    readonly 'l value': Vorig_boekjaar.l_value
                }
                
            }
            
            export type l_value = {
                readonly 'Vorig boekjaar': l_value.Vorig_boekjaar
            }
            
        }
        
        export type Nee = {
            readonly 'l location': Nee.l_location
            readonly 'l value': Nee.l_value
        }
        
    }
    
    export type l_value = 
        | readonly ['Ja', l_value.Ja]
        | readonly ['Nee', l_value.Nee]
    
}

export type Eerste_boekjaar_ = {
    readonly 'l location': Eerste_boekjaar_.l_location
    readonly 'l value': Eerste_boekjaar_.l_value
}

export namespace Root_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace Fiscaal {
            
            export type l_location = i__location.Relative_Location
            
            export type l_value = Fiscaal_
            
        }
        
        export type Fiscaal = {
            readonly 'l location': Fiscaal.l_location
            readonly 'l value': Fiscaal.l_value
        }
        
        export namespace Categorieen {
            
            export type l_location = i__location.Relative_Location
            
            export type l_value = Grootboek_Categorieen_
            
        }
        
        export type Categorieen = {
            readonly 'l location': Categorieen.l_location
            readonly 'l value': Categorieen.l_value
        }
        
        export namespace Beheer {
            
            export type l_location = i__location.Relative_Location
            
            export type l_value = Beheer_
            
        }
        
        export type Beheer = {
            readonly 'l location': Beheer.l_location
            readonly 'l value': Beheer.l_value
        }
        
        export namespace Jaren {
            
            export type l_location = i__location.Relative_Location
            
            export type l_value = Jaren_
            
        }
        
        export type Jaren = {
            readonly 'l location': Jaren.l_location
            readonly 'l value': Jaren.l_value
        }
        
    }
    
    export type l_value = {
        readonly 'Fiscaal': l_value.Fiscaal
        readonly 'Categorieen': l_value.Categorieen
        readonly 'Beheer': l_value.Beheer
        readonly 'Jaren': l_value.Jaren
    }
    
}

export type Root_ = {
    readonly 'l location': Root_.l_location
    readonly 'l value': Root_.l_value
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
