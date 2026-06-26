import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/Dashboard";
import Planner from "../pages/Planner";
import Progress from "../pages/Progress";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Analytics from "../pages/Analytics";
import Pomodoro from "../pages/Pomodoro";
import Notes from "../pages/Notes";
import Quiz from "../pages/Quiz";
import Assistant from "../pages/Assistant";

function AppRoutes() {
  const token = localStorage.getItem("token");

  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={
          token
            ? <Navigate to="/dashboard" replace />
            : <Navigate to="/login" replace />
        }
      />

      {/* Auth */}
      <Route
        path="/login"
        element={
          token
            ? <Navigate to="/dashboard" replace />
            : <Login />
        }
      />

      <Route
        path="/register"
        element={
          token
            ? <Navigate to="/dashboard" replace />
            : <Register />
        }
      />

      {/* App */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/assistant" element={<Assistant />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />

      {/* Unknown Routes */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default AppRoutes;
