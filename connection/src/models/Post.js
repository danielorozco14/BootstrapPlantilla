const mongoose = require('mongoose'), Persona = require('./Persona');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    autor: { type: String, required: true },
    fechaPublicacion: { type: String, required: true },
    textoDescriptivo: { type: String, required: true },
    fotosAdjuntas: { type: [], required: false }, // arreglo de Fotografia, (imágenes sueltas).
    // fotosAdjuntas: { type: Album, required: false }, // El post puede tener un álbum de fotografias. En este caso, se descarta la colección Album
    comentarios: { type: [], required: false }, // arreglo de Comentario
});

module.exports = mongoose.model('post', PostSchema);