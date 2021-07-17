const mongoose = require('mongoose');

const CommentairesSchema = mongoose.Schema({
 
userid:{
    type:String,

},
idposte : String ,
username:{
    type:String,

},

coment:{
    type: String,
}
}, {
    timestamps: true
});

module.exports = mongoose.model('Commentaire', CommentairesSchema);