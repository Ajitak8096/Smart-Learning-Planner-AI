const Chat = require("../models/Chat");
const askAI = require("../services/openrouterService");

// ==============================
// Create New Chat
// ==============================

exports.createChat = async (req, res) => {

  try {

    const chat = await Chat.create({

      user: req.user.id,

      title: "New Chat",

      messages: [],

    });

    res.json({

      success: true,

      chat,

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

    });

  }

};

// ==============================
// Get All Chats
// ==============================

exports.getChats = async (req, res) => {

  try {

    const chats = await Chat.find({

      user: req.user.id,

    }).sort({

      pinned: -1,

      updatedAt: -1,

    });

    res.json({

      success: true,

      chats,

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

    });

  }

};

// ==============================
// Get Single Chat
// ==============================

exports.getChat = async (req, res) => {

  try {

    const chat = await Chat.findById(req.params.id);

    res.json({

      success: true,

      chat,

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

    });

  }

};

// ==============================
// Send Message
// ==============================

exports.sendMessage = async (req, res) => {

  try {

    const { message } = req.body;

    const chat = await Chat.findById(req.params.id);

    if (!chat) {

      return res.status(404).json({

        success: false,

      });

    }

    chat.messages.push({

      role: "user",

      content: message,

    });

    const reply = await askAI(chat.messages);

    chat.messages.push({

      role: "assistant",

      content: reply,

    });

    chat.lastMessage = reply;

    if (chat.title === "New Chat") {

      chat.title = message.substring(0, 30);

    }

    await chat.save();

    res.json({

      success: true,

      chat,

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

    });

  }

};

// ==============================
// Delete Chat
// ==============================

exports.deleteChat = async (req, res) => {

  await Chat.findByIdAndDelete(req.params.id);

  res.json({

    success: true,

  });

};

// ==============================
// Pin Chat
// ==============================

exports.pinChat = async (req, res) => {

  const chat = await Chat.findById(req.params.id);

  chat.pinned = !chat.pinned;

  await chat.save();

  res.json({

    success: true,

    chat,

  });

};