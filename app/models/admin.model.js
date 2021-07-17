const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    username: {
            type: String,
            unique: [true, 'The login is unique']
           
    },
    email: {
            type: String,
            unique: [true, 'The email is unique']
           
    },
    information: {
        type: String,
       
       
},
image: {
    type: String,
   
   
},
adresse: {
    type: String,
   
   
},
telephone: {
    type: String,
   
   
},
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Admin', AdminSchema);