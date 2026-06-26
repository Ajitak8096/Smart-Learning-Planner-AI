import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import plannerReducer from "./plannerSlice";
import progressReducer from "./progressSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    planner: plannerReducer,
    progress: progressReducer,
  },
});