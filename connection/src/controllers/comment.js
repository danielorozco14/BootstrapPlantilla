const mongoose = require('mongoose'),
    commentModel = require('../models/Comentario'),
    postModel = require('../models/Post');

var commentController = {};

commentController.create = function (req, res) {

    let comentario = {
        autor: req.body.urlUsuario,
        contenido: req.body.comment
    };

    if (req.body.comment != '') {
        let comment = new commentModel(comentario);

        // Buscar post por id y adjuntarlo.

    } else {
        res.status(400);
        res.json({ err: { code: 400, message: 'Faltan datos', comentario } });
    }

};

commentController.getAll = function (req, res) {
    // Obtener todos los post de la base datos
    commentModel.find({}, function (err, comentarios) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, comentarios });
        }
    });
};

commentController.getOne = function (req, res) {
    commentModel.findOne({ _id: req.params.id }, function (err, comentario) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, comentario });
        }
    });
}

commentController.delete = function (req, res) {
    commentModel.findByIdAndRemove(req.params.id, function (err, eliminado) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, eliminado });
        }
    });
};

module.exports = commentController;