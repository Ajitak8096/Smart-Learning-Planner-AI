import axios from "axios";

const API = "http://localhost:5000/api/quiz";

const getToken = () => localStorage.getItem("token");

export const createQuiz = async (data) => {
  const res = await axios.post(API, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.data;
};

export const getQuizzes = async () => {
  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.data;
};