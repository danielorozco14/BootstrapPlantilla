var express = require('express');
var router = express.Router(),
    photoController = require('../controllers/photo');

/* GET all photos. */
router.get('/', photoController.getAll);

/** Create a new photo */
router.post('/', photoController.create);

/** Retrieve a photo by its ID */
router.get('/:id', photoController.getOne);

/** Update a photo's properties */
router.patch('/:id', photoController.update);

/** Delete a photo by its ID */
router.delete('/:id', photoController.delete);


module.exports = router;