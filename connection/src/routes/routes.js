const express = require('express');
const router = express.Router();
var packsController = require("../controllers/packsController");

/** Modularizar controladores. */

var indexRouter = require('./routes/index');
var adminsRouter = require('./routes/admin');
var juegosRouter = require('./routes/juegos');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var chatRouter = require('./routes/chat');

router.get('/',packsController.saludo);
router.get('/login',packsController.login);
router.get('/register',packsController.register);
router.get('/chat',packsController.chat);

app.use('/', indexRouter);
app.use('/admin', adminsRouter);
app.use('/juegos', juegosRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/chat', chatRouter);

module.exports = router;