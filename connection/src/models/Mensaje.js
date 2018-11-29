const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MensajeSchema = new Schema({
    autor: { type: String, required: true },
    mensaje: { type: String, required: true },
});

module.exports = mongoose.model('messages', MensajeSchema);