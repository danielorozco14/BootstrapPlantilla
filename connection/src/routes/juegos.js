var express = require('express'), juegoRouter = require('./juego');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Juegos' });
}); /**Configurar raíz para que muestre los likes de un usuario o todos los juegos registrados. */

router.get('/:id', juegoRouter);

module.exports = router;