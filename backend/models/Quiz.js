const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

  question: {
    type: String,
    required: true,
  },

  options: [
    {
      type: String,
    },
  ],

  answer: {
    type: String,
    required: true,
  },

  explanation: {
    type: String,
    default: "",
  },

});

const quizSchema = new mongoose.Schema(
  {

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    topic: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      default: "Medium",
    },

    questions: [questionSchema],

    score: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      default: 10,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    completedAt: {
      type: Date,
      default: null,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quiz", quizSchema);