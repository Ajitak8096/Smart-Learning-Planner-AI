import { createSlice } from "@reduxjs/toolkit";

const plannerSlice = createSlice({
  name: "planner",

  initialState: {
    goals: [],
    schedule: [],
    loading: false,
  },

  reducers: {

    setGoals: (state, action) => {
      state.goals = action.payload;
    },

    setSchedule: (state, action) => {
      state.schedule = action.payload;
    },

  },

});

export const {
  setGoals,
  setSchedule,
} = plannerSlice.actions;

export default plannerSlice.reducer;