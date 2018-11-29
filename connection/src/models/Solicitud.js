const mongoose = require('mongoose'), Persona = require('./persona');
const Schema = mongoose.Schema;

const SolicitudSchema = new Schema({
    remitente: { type: String, required: true },
    receptor: { type: String, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('solicitud', SolicitudSchema);