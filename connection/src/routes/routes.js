const express = require('express'),
    router = express.Router();

var indexRouter = require('./routes/index');
var adminsRouter = require('./routes/admin');
var juegosRouter = require('./routes/juegos');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var chatRouter = require('./routes/message');

app.use('/', indexRouter);
app.use('/admin', adminsRouter);
app.use('/juegos', juegosRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/chat', chatRouter);

module.exports = router;