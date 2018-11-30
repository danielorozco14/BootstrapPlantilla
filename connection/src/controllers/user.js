var mongoose = require('mongoose'),
    userModel = require('../models/Persona'),
    userController = {};

userController.create = function (req, res) {
    let userNew = new userModel({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        username: req.body.username
    });

    userNew.save(function (err, insertado) {
        if (err) {
            res.status(500);
            res.json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                insertado
            });
        }
    });
};

userController.getAll = function (req, res) {
    userModel.find({}, function (err, users) {
        if (err) {
            res.status(500);
            res.json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                users
            });
        }
    });
};

userController.getOne = function (req, res) {
    userModel.findOne({
        _id: req.params.id
    }, function (err, user) {
        if (err) {
            res.status(500);
            res.json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                user
            });
        }
    });
};

userController.update = function (req, res) {
    let update = {
        username: req.body.username,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    userModel.findByIdAndUpdate(req.params.id, update, function (err, old) {
        if (err) {
            res.status(500);
            res.json({
                ok: false,
                err
            })
        } else {
            res.json({
                ok: true,
                old,
                update
            });
        }
    });
};

userController.delete = function (req, res) {
    userModel.findByIdAndRemove(req.params.id, function (err, eliminado) {
        if (err) {
            res.status(500);
            res.json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                eliminado
            });
        }
    });
}

module.exports = userController;