const mongoose = require("mongoose");

const plannerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    examName: {
      type: String,
      required: true,
    },

    examDate: {
      type: Date,
      required: true,
    },

    goal: {
      type: String,
      required: true,
    },

    targetScore: {
      type: Number,
      required: true,
    },

    dailyHours: {
      type: Number,
      required: true,
    },

    weakSubjects: [
      {
        type: String,
      },
    ],

    schedule: [
      {
        day: String,

        tasks: [
          {
            subject: String,

            duration: Number,

            completed: {
              type: Boolean,
              default: false,
            },
          },
        ],
      },
    ],

    // =====================
    // Progress
    // =====================

    completedTasks: {
      type: Number,
      default: 0,
    },

    totalTasks: {
      type: Number,
      default: 0,
    },

    progress: {
      type: Number,
      default: 0,
    },

    readiness: {
      type: Number,
      default: 0,
    },

    streak: {
      type: Number,
      default: 1,
    },

    xp: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Planner", plannerSchema);