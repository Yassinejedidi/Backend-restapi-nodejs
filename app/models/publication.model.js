const mongoose = require('mongoose');

const PublicationSchema = mongoose.Schema({
  
            
   
    description:{
        type:String,
    } ,
    
      
       

image: {
    type: String,
  
   
},

username: {
    type: String,
  
   
},
iduser: {
    type: String,
  
   
},

time: {
    type: String,
}}, {
    timestamps: true
});
module.exports = mongoose.model('Publication', PublicationSchema);