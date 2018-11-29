var express = require('express');
var router = express.Router(),
    albumController = require('../controllers/album');

/* GET all albums. */
router.get('/', albumController.getAll);

/** Create a new album */
router.post('/', albumController.create);

/** Retrieve a album by its ID */
router.get('/:id', albumController.getOne);

/** Update an album's properties */
router.patch('/:id', albumController.update);

/** Delete an album by its ID */
router.delete('/:id', albumController.delete);


module.exports = router;