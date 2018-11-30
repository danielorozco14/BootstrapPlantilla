const mongoose = require('mongoose'), Persona = require('./persona');
const Schema = mongoose.Schema;

const SolicitudSchema = new Schema({
    remitente: { type: mongoose.Schema.Types.Persona, required: true },
    receptor: { type: mongoose.Schema.Types.Persona, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('solicitud', SolicitudSchema);