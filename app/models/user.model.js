const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: {
            type: String,
            
           
    },
    username: {
            type: String,
            unique: [true, 'The login is unique']
          
           
    },
    about:{
        type:String,
    } ,

image: {
    type: String,
  
   
},
telephone: {
    type: String,
  
   
},

  
   

email: {
    type: String,
    unique: [true, 'The email is unique']
  
   
},
password : String,



adresse:{
    type: String,
}}, {
    timestamps: true
});

module.exports = mongoose.model('User', UsersSchema);