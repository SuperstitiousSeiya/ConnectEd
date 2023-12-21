const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/event.controller');

router.get('/', eventsController.findAll);
router.post('/', eventsController.create);
router.get('/:id', eventsController.findById);
router.put('/:id', eventsController.update);
router.delete('/:id', eventsController.delete);

module.exports = router;
