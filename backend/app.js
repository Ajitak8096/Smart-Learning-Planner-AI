const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const dashboardRoutes = require("./routes/dashboardRoutes");
const aiRoutes = require("./routes/aiRoutes");
const chatRoutes = require("./routes/chatRoutes");
const aiChatRoutes = require("./routes/aiChatRoutes");
const noteRoutes = require("./routes/notesRoutes");
const quizRoutes = require("./routes/quizRoutes");

// Load Environment Variables
dotenv.config();

// Create Express App
const app = express();

// =====================
// Import Routes
// =====================
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const plannerRoutes = require("./routes/plannerRoutes");

// =====================
// Middlewares
// =====================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/chat", aiChatRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/quiz", quizRoutes);

// =====================
// Home Route
// =====================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Smart Learning Planner API is Running!",
    version: "1.0.0",
  });
});

// =====================
// API Routes
// =====================
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/planner", plannerRoutes);

// =====================
// 404 Route
// =====================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

module.exports = app;