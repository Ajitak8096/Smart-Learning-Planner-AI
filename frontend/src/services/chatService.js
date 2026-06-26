import axios from "axios";

const API = "http://localhost:5000/api/chat";

const headers = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Create New Chat
export const createChat = async () => {
  const res = await axios.post(`${API}/new`, {}, headers());
  return res.data;
};

// Get All Chats
export const getChats = async () => {
  const res = await axios.get(API, headers());
  return res.data;
};

// Get Single Chat
export const getChat = async (id) => {
  const res = await axios.get(`${API}/${id}`, headers());
  return res.data;
};

// Send Message
export const sendMessage = async (id, message) => {
  const res = await axios.post(
    `${API}/${id}`,
    { message },
    headers()
  );

  return res.data;
};

// Delete Chat
export const deleteChat = async (id) => {
  const res = await axios.delete(`${API}/${id}`, headers());
  return res.data;
};

// Pin Chat
export const pinChat = async (id) => {
  const res = await axios.patch(
    `${API}/pin/${id}`,
    {},
    headers()
  );

  return res.data;
};