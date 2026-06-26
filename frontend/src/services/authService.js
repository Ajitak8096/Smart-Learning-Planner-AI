import axios from "axios";

const API = "http://localhost:5000/api/auth";

// ======================
// Login
// ======================

export const loginUser = async (userData) => {
  const response = await axios.post(`${API}/login`, userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

// ======================
// Register
// ======================

export const registerUser = async (userData) => {
  const response = await axios.post(`${API}/register`, userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

// ======================
// Logout
// ======================

export const logoutUser = () => {
  localStorage.removeItem("token");
};