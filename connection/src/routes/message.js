var express = require('express');
var router = express.Router();
var Message = require('../models/Mensaje')

 /* GET home page. */
router.get('/', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
  
  
  router.get('/:user', (req,res) => {
    var user = req.params.user
    Message.find({name: user},(err, messages)=> {
      res.send(messages);
    })
  })
  
  
  router.post('/', async (req, res) => {
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
module.exports = router; 