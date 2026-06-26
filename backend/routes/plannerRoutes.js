const express = require("express");

const router = express.Router();

const {
  createPlanner,
  getPlanner,
  updateTaskStatus,
} = require("../controllers/plannerController");

const { protect } = require("../middleware/authMiddleware");

// Create Planner
router.post("/", protect, createPlanner);

// Get Planner
router.get("/", protect, getPlanner);

// Toggle Task Completion
router.patch(
  "/task/:plannerId/:day/:taskIndex",
  protect,
  updateTaskStatus
);

module.exports = router;