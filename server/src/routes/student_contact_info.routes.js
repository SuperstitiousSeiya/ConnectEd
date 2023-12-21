const express = require('express');
const router = express.Router();
const studentContactInfoController = require('../controllers/student_contact_info.controller');

router.get('/', studentContactInfoController.findAll);
router.post('/', studentContactInfoController.create);
router.get('/:id', studentContactInfoController.findById);
router.put('/:id', studentContactInfoController.update);
router.delete('/:id', studentContactInfoController.delete);

module.exports = router;
