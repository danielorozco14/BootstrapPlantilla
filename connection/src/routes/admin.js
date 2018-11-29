var express = require('express'),
    cuentasRouter = require('./users'),
    juegosRouter = require('./juegos'),
    settingsRouter = require('./settings');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Admin' });
});

router.use('/cuentas', cuentasRouter);

router.use('/juegos', juegosRouter);

router.use('/configuracion', settingsRouter);

module.exports = router;