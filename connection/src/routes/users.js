var express = require('express'), singleUserRouter = require('./user');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) { /**Solo disponible desde módulo de admin: para ver todos los usuarios */
  res.render('profile', { title: 'All accounts' });
});

// importado
router.get('/:id', singleUserRouter);

module.exports = router;