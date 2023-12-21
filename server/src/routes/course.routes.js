const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");

// Define routes for courses
router.get("/", courseController.findAll);
router.post("/", courseController.create);
router.get("/:id", courseController.findById);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.delete);

module.exports = router;