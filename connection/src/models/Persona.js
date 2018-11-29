const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonaSchema = new Schema({

    email: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
        required: true,
    },

    username: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
        bcrypt: true,
    },

    nombre: {
        type: String,
        trim: true,
        required: true,
    },

    apellido: {
        type: String,
        trim: true,
        required: true,
    },

    edad: {
        type: Number,
        required: true
    },

    amigos: {
        type: [],
        required: false
    }, // arreglo de Persona

    posts: {
        type: [],
        required: false
    }, // arreglo de Post

    solicitudesAmistad: {
        type: [],
        required: false
    },

    albumes: {
        type: [],
        required: false
    }, // arreglo de Fotografia

    juegos: {
        type: [],
        required: false
    }, // arreglo de Juego

    mensajesRecibidos: {
        type: [],
        required: false
    }, // arreglo de Mensaje

    admin: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('persona', PersonaSchema);