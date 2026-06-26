const express = require("express");

const router = express.Router();

const {
  createQuiz,
  getQuizzes,
} = require("../controllers/quizController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.post("/", protect, createQuiz);

router.get("/", protect, getQuizzes);

module.exports = router;