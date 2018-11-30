const mongoose =  require('mongoose');
 let PostModel = new mongoose.Schema({
    nombre : String,
    apellido : String,
    email : String,
    password : String,
    username : String
});
 module.exports = mongoose.model('usuarios', PostModel); 