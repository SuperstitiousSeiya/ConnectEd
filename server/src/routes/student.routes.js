const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/student.controller');
const authenticateToken = require('../middleware/authMiddleware')

router.get('/', authenticateToken, studentsController.findAll);
router.get('/:id', authenticateToken, studentsController.findById);
router.post('/', authenticateToken, studentsController.create);
router.put('/:id', authenticateToken, studentsController.update);
router.delete('/:id', authenticateToken, studentsController.delete);


module.exports = router;
