import api from "./api";

export const getRecommendation = async () => {

  const response = await api.get("/ai/recommendation");

  return response.data;

};