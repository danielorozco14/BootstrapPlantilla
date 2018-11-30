const express = require('express');
const router = express.Router();
var packsController = require("../controllers/packsController");


router.get('/login',packsController.login);
router.get('/inicio',packsController.inicio);
router.get('/register',packsController.register);
router.get('/chat',packsController.chat);
router.get('/',packsController.saludo);
module.exports = router;