import { useEffect, useState } from "react";

import {
  createChat,
  getChats,
  getChat,
  sendMessage,
  deleteChat,
  pinChat,
} from "../services/chatService";

export default function useChat() {

  const [chats, setChats] = useState([]);

  const [selectedChat, setSelectedChat] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    loadChats();

  }, []);

  const loadChats = async () => {

    const res = await getChats();

    setChats(res.chats);

    if (res.chats.length > 0) {

      openChat(res.chats[0]._id);

    }

  };

  const openChat = async (id) => {

    const res = await getChat(id);

    setSelectedChat(res.chat);

  };

  const newChat = async () => {

    const res = await createChat();

    loadChats();

    setSelectedChat(res.chat);

  };

  const askAI = async (text) => {

    if (!selectedChat) return;

    setLoading(true);

    const res = await sendMessage(
      selectedChat._id,
      text
    );

    setSelectedChat(res.chat);

    loadChats();

    setLoading(false);

  };

  const removeChat = async (id) => {

    await deleteChat(id);

    loadChats();

  };

  const togglePin = async (id) => {

    await pinChat(id);

    loadChats();

  };

  return {

    chats,

    selectedChat,

    openChat,

    newChat,

    askAI,

    removeChat,

    togglePin,

    loading,

  };

}