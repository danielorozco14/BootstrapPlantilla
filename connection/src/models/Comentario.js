const mongoose = require('mongoose'), Persona = require('./persona');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
    autor: { type: mongoose.Schema.Types.Persona, required: true },
    contenido: { type: String, required: true },
});

module.exports = mongoose.model('comentario', ComentarioSchema);