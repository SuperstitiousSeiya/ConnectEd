const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user.controller');
const authenticateToken = require('../middleware/authMiddleware')

// get current user logged in 
router.get('/self', authenticateToken, (req, res) => {
    if(req.user){
        res.json({ status: 200, data: req.user, message: "Sucessfully logged in redirecting" }).status(200);
    }else{
        res.json({status: 404, message: "Session expired or authentication is valid"})
    }

  });
  
router.get('/', authenticateToken, usersController.findAll);
router.post('/', usersController.create);
router.get('/:id', authenticateToken, usersController.findById);
router.put('/', authenticateToken, usersController.update);
router.put('/:id', authenticateToken, usersController.update);
router.delete('/', authenticateToken, usersController.delete)
router.delete('/:id', authenticateToken, usersController.delete);

module.exports = router;
