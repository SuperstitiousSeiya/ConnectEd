const express = require('express');
const router = express.Router();
const studentPersonalInfoController = require('../controllers/student_personal_info.controller');

router.get('/', studentPersonalInfoController.findAll);
router.post('/', studentPersonalInfoController.create);
router.get('/:id', studentPersonalInfoController.findById);
router.put('/:id', studentPersonalInfoController.update);
router.delete('/:id', studentPersonalInfoController.delete);

module.exports = router;
