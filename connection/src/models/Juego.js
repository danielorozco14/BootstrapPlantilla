const mongoose = require('mongoose'), Fotografia = require('./fotografia');

const Schema = mongoose.Schema;

const JuegoSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: mongoose.Schema.Types.Fotografia, required: true },
    calificacion: { type: Number, required: false },
});

module.exports = mongoose.model('juego', JuegoSchema);