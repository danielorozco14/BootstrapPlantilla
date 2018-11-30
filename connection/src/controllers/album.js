const mongoose = require('mongoose'),
    albumModel = require('../models/Album'),
    AlbumController = {};

AlbumController.create = function (req, res) {

    let fecha = obtenerFecha();

    const newAlbum = new albumModel({
        autor: req.body.autor,
        fechaPublicacion: fecha,
        textoDescriptivo: req.body.textoDescriptivo
    });

    if (newAlbum.fechaPublicacion && newAlbum.autor && newAlbum.textoDescriptivo && newAlbum.fechaPublicacion != '' && newAlbum.autor != '') {

        newAlbum.save(function (err, saved) {
            if (err) {
                res.status(500);
                res.json({ code: 500, err });
            } else {
                res.json({ ok: true, message: 'Se ha guardado con éxito', saved });
            }
        });

    } else {
        res.status(400);
        res.json({ err: { code: 400, message: 'Ocurrió un error. Faltan datos.', newAlbum } });
    }
};

AlbumController.getAll = function (req, res) {

    albumModel.find({}, function (err, albums) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, albums });
        }
    });
};

AlbumController.getOne = function (req, res) {
    albumModel.findOne({ _id: req.params.id }, function (err, album) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, album });
        }
    });
}

AlbumController.update = function (req, res) {
    /** DEFINIR ACTUALIZACIÓN PARCIAL */
    let updated = {
        autor: req.body.autor,
        fechaPublicacion: req.body.fecha,
        textoDescriptivo: req.body.textoDescriptivo
    };

    albumModel.findByIdAndUpdate(req.params.id, updated, function (err, old) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, old, updated });
        }
    });
};

AlbumController.delete = function (req, res) {
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

module.exports = AlbumController;