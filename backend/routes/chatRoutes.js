const express = require("express");

const router = express.Router();

const {

  createChat,

  getChats,

  getChat,

  sendMessage,

  deleteChat,

  pinChat,

} = require("../controllers/chatController");

const {

  protect,

} = require("../middleware/authMiddleware");

router.post("/new", protect, createChat);

router.get("/", protect, getChats);

router.get("/:id", protect, getChat);

router.post("/:id", protect, sendMessage);

router.delete("/:id", protect, deleteChat);

router.patch("/pin/:id", protect, pinChat);

module.exports = router;