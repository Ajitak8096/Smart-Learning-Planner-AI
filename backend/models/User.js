const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default:
        "https://ui-avatars.com/api/?background=2563eb&color=fff&name=User",
    },

    targetExam: {
      type: String,
      default: "",
    },

    goal: {
      type: String,
      default: "",
    },

    dailyHours: {
      type: Number,
      default: 2,
    },

    xp: {
      type: Number,
      default: 0,
    },

    streak: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);