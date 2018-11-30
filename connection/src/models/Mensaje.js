const mongoose =  require('mongoose');
 let PostModel = new mongoose.Schema({
    name : String,
    message : String
});
 module.exports = mongoose.model('messages', PostModel); 