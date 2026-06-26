import MainLayout from "../components/layout/MainLayout";

import StatsCard from "../components/dashboard/StatsCard";
import WeeklyChart from "../components/dashboard/WeeklyChart";
import PlannerToday from "../components/dashboard/PlannerToday";
import RecentNotes from "../components/dashboard/RecentNotes";
import RecentQuiz from "../components/dashboard/RecentQuiz";
import StudyStreak from "../components/dashboard/StudyStreak";

import {
  FaBookOpen,
  FaBrain,
  FaFire,
  FaTrophy,
} from "react-icons/fa";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">
            👋 Welcome Back
          </h1>

          <p className="text-gray-400 mt-2">
            Continue your learning journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">

          <StatsCard
            title="Study Streak"
            value="12 Days"
            icon={<FaFire />}
            color="bg-orange-600"
          />

          <StatsCard
            title="Notes"
            value="24"
            icon={<FaBookOpen />}
            color="bg-blue-600"
          />

          <StatsCard
            title="Quizzes"
            value="18"
            icon={<FaBrain />}
            color="bg-green-600"
          />

          <StatsCard
            title="XP"
            value="850"
            icon={<FaTrophy />}
            color="bg-purple-600"
          />

        </div>

        {/* Chart + Planner */}
        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-8">
            <WeeklyChart />
          </div>

          <div className="col-span-4">
            <PlannerToday />
          </div>

        </div>

        {/* Notes + Quiz */}
        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-6">
            <RecentNotes />
          </div>

          <div className="col-span-6">
            <RecentQuiz />
          </div>

        </div>

        {/* Streak */}
        <StudyStreak />

      </div>
    </MainLayout>
  );
}

export default Dashboard;