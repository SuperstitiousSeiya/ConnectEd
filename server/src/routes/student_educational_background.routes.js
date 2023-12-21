const express = require('express');
const router = express.Router();
const studentEducationalBackgroundController = require('../controllers/student_educational_background.controller');

router.get('/', studentEducationalBackgroundController.findAll);
router.post('/', studentEducationalBackgroundController.create);
router.get('/:id', studentEducationalBackgroundController.findById);
router.put('/:id', studentEducationalBackgroundController.update);
router.delete('/:id', studentEducationalBackgroundController.delete);

module.exports = router;
