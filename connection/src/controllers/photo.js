const mongoose = require('mongoose'),
    photoModel = require('../models/Fotografia'),
    PhotoController = {};

PhotoController.create = function (req, res) {

    let fecha = obtenerFecha();

    const newPhoto = new photoModel({
        autor: req.body.autor,
        fechaPublicacion: fecha,
        textoDescriptivo: req.body.textoDescriptivo
    });

    if (newPhoto.fechaPublicacion && newPhoto.autor && newPhoto.textoDescriptivo && newPhoto.fechaPublicacion != '' && newPhoto.autor != '') {

        newPhoto.save(function (err, saved) {
            if (err) {
                res.status(500);
                res.json({ code: 500, err });
            } else {
                res.json({ ok: true, message: 'Se ha guardado con éxito', saved });
            }
        });

    } else {
        res.status(400);
        res.json({ err: { code: 400, message: 'Ocurrió un error. Faltan datos.', newPhoto } });
    }
};

PhotoController.getAll = function (req, res) {

    photoModel.find({}, function (err, posts) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, posts });
        }
    });
};

PhotoController.getOne = function (req, res) {
    photoModel.findOne({ _id: req.params.id }, function (err, photo) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, photo });
        }
    });
}

PhotoController.update = function (req, res) {
    /** DEFINIR ACTUALIZACIÓN PARCIAL */
    let updated = {
        autor: req.body.autor,
        fechaPublicacion: req.body.fecha,
        textoDescriptivo: req.body.textoDescriptivo
    };

    photoModel.findByIdAndUpdate(req.params.id, updated, function (err, old) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, old, updated });
        }
    });
};

PhotoController.delete = function (req, res) {
    postModel.findByIdAndRemove(req.params.id, function (err, deleted) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, deleted });
        }
    });
};

var obtenerFecha = function () {
    var fecha = new Date(), dia, mes, annio, date;

    dia = fecha.getDate();
    if (dia < 10) {
        dia = '0' + dia;
    }

    mes = fecha.getMonth() + 1;
    if (mes < 10) {
        mes = '0' + mes;
    }

    annio = fecha.getFullYear();

    date = dia + '/' + mes + '/' + annio;
    return date;
}

module.exports = PhotoController;