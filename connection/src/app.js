const express = require('express');
const app = express();

var bodyParser = require('body-parser')
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
const path = require('path');
var mongoose = require('mongoose');










  var dbUrl = 'mongodb://amkurian:amkurian1@ds257981.mlab.com:57981/simple-chat'
  
  
  
  io.on('connection', () =>{
    console.log('---- A USER IS CONNECTED ----')
  })
  
  mongoose.connect(dbUrl ,{useMongoClient : true} ,(err) => {
    console.log('---- MONGODB CONNECTED ---->',err);
  })
  
  var server = http.listen(3001, () => {
    console.log('SERVER IS RUNNING ON PORT', server.address().port);
  });




//middelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, "public")));

//rutas
app.use('/',require('./routes/routes'));
app.use('/messages',require('./routes/message'));
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port : ${app.get('port')}`);
});

module.exports = app;