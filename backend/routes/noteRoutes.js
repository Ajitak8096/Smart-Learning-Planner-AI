const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  generateNote,
  getNotes,
  deleteNote,
  favoriteNote,
} = require("../controllers/notesController");

router.post("/", protect, generateNote);

router.get("/", protect, getNotes);

router.delete("/:id", protect, deleteNote);

router.put("/favorite/:id", protect, favoriteNote);

module.exports = router;