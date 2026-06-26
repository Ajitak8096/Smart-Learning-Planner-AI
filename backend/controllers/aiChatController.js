const chatWithAI = require("../services/aiChatService");

exports.chat = async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await chatWithAI(message);

    res.status(200).json({
      success: true,
      reply,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "AI Error",
    });

  }
};