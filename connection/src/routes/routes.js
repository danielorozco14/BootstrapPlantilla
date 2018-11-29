const express = require('express'),
    router = express.Router();

var indexRouter = require('./index');
var adminsRouter = require('./admin');
var juegosRouter = require('./juegos');
var loginRouter = require('./login');
var registerRouter = require('./register');
var chatRouter = require('./message');

router.use('/', indexRouter);
router.use('/admin', adminsRouter);
router.use('/juegos', juegosRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/chat', chatRouter);

module.exports = router;