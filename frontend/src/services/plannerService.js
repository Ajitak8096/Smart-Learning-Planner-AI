import api from "./api";

// Get Planner
export const getPlanner = async () => {

  const response = await api.get("/planner");

  return response.data;

};

// Toggle Task
export const updateTask = async (
  plannerId,
  day,
  taskIndex
) => {

  const response = await api.patch(
    `/planner/task/${plannerId}/${day}/${taskIndex}`
  );

  return response.data;

};