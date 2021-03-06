const mongoose = require('mongoose'), Persona = require('./persona');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
    autor: { type: String, required: true },
    contenido: { type: String, required: true },
});

module.exports = mongoose.model('comentario', ComentarioSchema);