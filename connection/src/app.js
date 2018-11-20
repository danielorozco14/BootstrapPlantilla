const express = require('express');
const app = express();

var bodyParser = require('body-parser')
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
const path = require('path');
var mongoose = require('mongoose');









var Message = mongoose.model('Message',{
    name : String,
    message : String
  })
  
  var dbUrl = 'mongodb://amkurian:amkurian1@ds257981.mlab.com:57981/simple-chat'
  
  app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
  
  
  app.get('/messages/:user', (req,res) => {
    var user = req.params.user
    Message.find({name: user},(err, messages)=> {
      res.send(messages);
    })
  })
  
  
  app.post('/messages', async (req, res) => {
    try{
      var message = new Message(req.body);
  
      var savedMessage = await message.save()
        console.log('---- SAVED ----');
  
      var censored = await Message.findOne({message:'badword'});
        if(censored)
          await Message.remove({_id: censored.id})
        else
          io.emit('---- MENSAJE:', req.body);
        res.sendStatus(200);
    }
    catch (error){
      res.sendStatus(500);
      return console.log('---- ERROR',error);
    }
    finally{
      console.log('---- MENSAJE POSTEADO ----')
    }
  
  })
  
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
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port : ${app.get('port')}`);
});