import MainLayout from "../components/layout/MainLayout";

import ProgressCards from "../components/progress/ProgressCards";
import WeeklyHoursChart from "../components/progress/WeeklyHoursChart";
import CompletionChart from "../components/progress/CompletionChart";
import PerformanceChart from "../components/progress/PerformanceChart";
import WeakSubjectChart from "../components/progress/WeakSubjectChart";

import useDashboard from "../hooks/useDashboard";
import usePlanner from "../hooks/usePlanner";

function Progress() {
  const { dashboard, loading } = useDashboard();
  const { planner } = usePlanner();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <MainLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            📈 Progress Analytics
          </h1>

          <p className="text-gray-400 mt-2">
            Track your preparation and performance.
          </p>

        </div>

        <ProgressCards dashboard={dashboard} />

        <div className="grid xl:grid-cols-2 gap-8">

          <WeeklyHoursChart planner={planner} />

          <CompletionChart dashboard={dashboard} />

        </div>

        <PerformanceChart dashboard={dashboard} />

        <WeakSubjectChart
          weakSubjects={dashboard?.weakSubjects}
        />

      </div>

    </MainLayout>
  );
}

export default Progress;