var express = require('express'),
//  postsRouter = require('./post'),
  gamesRouter = require('./juegos'),
  AlbumsRouter = require('./album'),
  router = express.Router(),
  userController = require('../controllers/user');

/* GET user. */
router.get('/', userController.getOne);

/** Update a user's properties */
router.patch('/:id', userController.update);

/** Delete a user by its ID */
router.delete('/:id', userController.delete);

router.get('/friends', function (req, res, next) {
  // show all users in array of friends
});

router.get('/info', function (req, res, next) {
  // show all personal info
});

//router.use('/post', postsRouter);

router.use('/albums', AlbumsRouter);

router.use('/savedGames', gamesRouter);

module.exports = router;