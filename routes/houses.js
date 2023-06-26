const express = require('express');

const router = express.Router();

const housesController = require('../controller/houses');

router.get('/filteredHouses', housesController.getFilteredHouses);
router.get('/', housesController.getHouses);
router.post('/',housesController.postHouse);
router.put('/:id',housesController.updateHouse);
router.delete('/:id',housesController.deleteHouse);

module.exports = router;