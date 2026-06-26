import axios from "axios";

const API = "http://localhost:5000/api/notes";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getNotes = async () => {
  const res = await axios.get(API, authHeader());
  return res.data;
};

export const generateNote = async (data) => {
  const res = await axios.post(API, data, authHeader());
  return res.data;
};

export const deleteNote = async (id) => {
  const res = await axios.delete(`${API}/${id}`, authHeader());
  return res.data;
};

export const favoriteNote = async (id) => {
  const res = await axios.put(
    `${API}/favorite/${id}`,
    {},
    authHeader()
  );

  return res.data;
};