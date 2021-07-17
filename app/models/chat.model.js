const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({

    idsender: String,
    idreciver : String ,
    namesender : String,
    namereciver:String ,
    image:String,
    msg:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Chat', ChatSchema);