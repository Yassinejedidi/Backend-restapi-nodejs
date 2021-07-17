const mongoose = require('mongoose');

const AnnoncesSchema = mongoose.Schema({
   category: {
            type: String,
            
           
    },
    titre: {
            type: String,
          
           
    },
    description:{
        type:String,
    } ,

image: {
    type: String,
  
   
},
type: {
    type: String,
  
   
},
name: {
    type: String,
  
   
},
telephone: {
    type: String,
  
   
},

localisation: {
    type: String,
  
   
},
prix: {
    type: String,
  
   
},
etat: {
    type: String,
  
   
},
iduser: {
    type: String,
  
   
},
username: {
    type: String,
  
   
},


quantite:{
    type: String,
},
statut : String,
iduser : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Annonce', AnnoncesSchema);