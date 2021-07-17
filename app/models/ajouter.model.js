const mongoose = require('mongoose');

const AjoutersSchema = mongoose.Schema({
   category: {
            type: String,
            
           
    },
    username: {
        type: String,
        
       
},
    titre: {
            type: String,
          
           
    },
    statut: {
        type: String,
      
       
},
iduser: {
    type: String,
  
   
},
    description:{
        type:String,
    } ,

image: {
    type: String,
  
   
},
name: {
    type: String,
  
   
},
saison: {
    type: String,
  
   
},

poids: {
    type: String,
  
   
},
prix: {
    type: String,
  
   
},



taille:{
    type: String,
}}, {
    timestamps: true
});

module.exports = mongoose.model('Ajouter', AjoutersSchema);