var express = require('express'), postsRouter = require('./post'), gamesRouter = require('./juegos'), AlbumsRouter = require('./album');
var router = express.Router();

/* GET user. */
router.get('/', function (req, res, next) { /**Solo disponible desde módulo de admin: para ver todos los usuarios */
  res.render('profile', { title: 'Single User' });
});

router.get('/friends', function (req, res, next) {
  res.render('profile', { title: 'Users/this-user/friends' });
});

router.get('/info', function (req, res, next) {
  res.render('profile', { title: 'Users/this-user/info' });
});

router.use('/post', postsRouter);

router.use('/albums', AlbumsRouter);

router.use('/savedGames', gamesRouter);

module.exports = router;