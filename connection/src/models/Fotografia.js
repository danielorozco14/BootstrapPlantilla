const mongoose = require('mongoose'), Persona = require('./persona');

const Schema = mongoose.Schema;

const FotografiaSchema = new Schema({
    autor: { type: String, required: true },
    fechaPublicacion: { type: String, required: true },
    filePath: { type: String, required: true },
    textoDescriptivo: { type: String, required: false }
});

module.exports = mongoose.model('fotografia', FotografiaSchema);