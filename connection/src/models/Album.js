const mongoose = require('mongoose'), Persona = require('./Persona');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    autor: { type: String, required: true },
    fechaPublicacion: { type: String, required: true },
    textoDescriptivo: { type: String, required: true },
    fotosAdjuntas: { type: [], required: false }, // arreglo de Fotografia
    comentarios: { type: [], required: false }, // arreglo de Comentario
});

module.exports = mongoose.model('album', AlbumSchema);