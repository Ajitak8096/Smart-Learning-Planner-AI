import { useEffect, useState } from "react";

import {
  getPlanner,
  updateTask,
} from "../services/plannerService";

export default function usePlanner(refreshDashboard) {

  const [planner, setPlanner] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlanner();
  }, []);

  const loadPlanner = async () => {

    try {

      const res = await getPlanner();

      setPlanner(res.planner);

    } catch (err) {

      console.log(err);

    }

    setLoading(false);

  };

  const toggleTask = async (
    plannerId,
    day,
    taskIndex
  ) => {

    try {

      await updateTask(
        plannerId,
        day,
        taskIndex
      );

      await loadPlanner();

      if (refreshDashboard) {
        await refreshDashboard();
      }

    } catch (err) {

      console.log(err);

    }

  };

  return {

    planner,

    loading,

    toggleTask,

  };

}