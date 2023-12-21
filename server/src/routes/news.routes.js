const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');

router.get('/', newsController.findAll);
router.post('/', newsController.create);
router.get('/:id', newsController.findById);
router.put('/:id', newsController.update);
router.delete('/:id', newsController.delete);

module.exports = router;
