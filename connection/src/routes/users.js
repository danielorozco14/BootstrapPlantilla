var express = require('express'),
  singleUserRouter = require('./user'),
  router = express.Router(),
  userController = require('../controllers/user');

/* GET users listing.
  Solo disponible desde módulo de admin: para ver todos los usuarios.
*/
router.get('/', userController.getAll);

/** Create a new user */
router.post('/', userController.create);

// importado
router.get('/:id', singleUserRouter);

module.exports = router;