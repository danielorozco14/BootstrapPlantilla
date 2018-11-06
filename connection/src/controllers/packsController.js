'use strict'

var packsController = {};

packsController.saludo = function (req,res,next)
{
    res.render('index');
};

packsController.imprimir = function(req,res,next)
{
    console.log(req.body);
};

module.exports = packsController;