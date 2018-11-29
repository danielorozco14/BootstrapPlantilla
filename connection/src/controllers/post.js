const mongoose = require('mongoose'),
    postModel = require('../models/Post'),
    PostController = {};

PostController.create = function (req, res) {
    let data = {
        nombre: req.body.nombre,
        autor: req.body.autor
    };
    
    if (data.nombre && data.autor && data.nombre != '' && data.autor != '') {
        let nuevoPost = new postModel(data);
        nuevoPost.save(function (err, guardado) {
            if (err) {
                res.status(500);
                res.json({ code: 500, err });
            } else {
                res.json({ ok: true, message: 'Guardado con éxito', guardado });
            }
        });

    } else {
        res.status(400);
        res.json({ err: { code: 400, message: 'Datos insuficientes', data } });
    }
};

PostController.getAll = function (req, res) {
    postModel.find({}, function (err, posts) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, posts });
        }
    });
};

PostController.get = function (req, res) {
    postModel.findOne({ _id: req.params.id }, function (err, post) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post });
        }
    });
}

PostController.update = function (req, res) {
    let update = {
        nombre: req.body.nombre,
        autor: req.body.autor
    };

    postModel.findByIdAndUpdate(req.params.id, update, function (err, old) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, old, update });
        }
    });
};

PostController.delete = function (req, res) {
    postModel.findByIdAndRemove(req.params.id, function (err, eliminado) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, eliminado });
        }
    });
};

module.exports = PostController;