const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  chat,
} = require("../controllers/aiChatController");

router.post("/", protect, chat);

module.exports = router;