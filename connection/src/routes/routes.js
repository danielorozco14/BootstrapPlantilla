const express = require('express');
const router = express.Router();
var packsController = require("../controllers/packsController");

router.get('/',packsController.saludo);

router.get('/mundo',(req, res, next)=>{
    res.send("Hola mundo fknlkgdsklgdndglf");
});

module.exports = router;