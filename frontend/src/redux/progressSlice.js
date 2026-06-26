import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({

  name: "progress",

  initialState: {
    weekly: [],
    streak: 0,
    confidence: [],
  },

  reducers: {

    setWeeklyProgress: (state, action) => {
      state.weekly = action.payload;
    },

    setStreak: (state, action) => {
      state.streak = action.payload;
    },

    setConfidence: (state, action) => {
      state.confidence = action.payload;
    },

  },

});

export const {
  setWeeklyProgress,
  setStreak,
  setConfidence,
} = progressSlice.actions;

export default progressSlice.reducer;