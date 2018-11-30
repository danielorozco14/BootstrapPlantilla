const mongoose = require('mongoose');

let PostModel = new mongoose.Schema({
    name: String,
    //    name: mongoose.Schema.Types.Persona,
    message: String
});
module.exports = mongoose.model('messages', PostModel); 