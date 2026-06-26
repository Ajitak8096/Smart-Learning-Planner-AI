import MainLayout from "../components/layout/MainLayout";
import PlannerForm from "../components/planner/PlannerForm";
import AISchedule from "../components/dashboard/AISchedule";
import SubjectProgress from "../components/dashboard/SubjectProgress";

import usePlanner from "../hooks/usePlanner";
import useDashboard from "../hooks/useDashboard";

function Planner() {

  const { planner, toggleTask } = usePlanner();

  const { dashboard } = useDashboard();

  return (

    <MainLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            📅 Study Planner
          </h1>

          <p className="text-gray-400 mt-2">
            Create and manage your personalized AI study schedule.
          </p>

        </div>

        <PlannerForm />

        <div className="grid xl:grid-cols-2 gap-8">

          <AISchedule
            planner={planner}
            toggleTask={toggleTask}
          />

          <SubjectProgress
            weakSubjects={dashboard?.weakSubjects || []}
          />

        </div>

      </div>

    </MainLayout>

  );
}

export default Planner;