const express = require('express');
const router = express.Router();
const announcementsController = require('../controllers/announcement.controller');

router.get('/', announcementsController.findAll);
router.post('/', announcementsController.create);
router.get('/:id', announcementsController.findById);
router.put('/:id', announcementsController.update);
router.delete('/:id', announcementsController.delete);

module.exports = router;
