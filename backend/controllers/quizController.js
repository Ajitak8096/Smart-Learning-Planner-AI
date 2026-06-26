const Quiz = require("../models/Quiz");
const generateQuiz = require("../services/quizAIService");

exports.createQuiz = async (req, res) => {

  try {

    const {
      topic,
      subject,
      difficulty,
    } = req.body;

    const aiResponse =
      await generateQuiz(
        topic,
        difficulty
      );

    const questions =
      JSON.parse(aiResponse);

    const quiz =
      await Quiz.create({

        user: req.user.id,

        topic,

        subject,

        difficulty,

        questions,

        total: questions.length,

      });

    res.status(201).json({

      success: true,

      quiz,

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

      message: "Quiz Generation Failed",

    });

  }

};

exports.getQuizzes = async (req, res) => {

  const quizzes =
    await Quiz.find({

      user: req.user.id,

    }).sort({

      createdAt: -1,

    });

  res.json(quizzes);

};