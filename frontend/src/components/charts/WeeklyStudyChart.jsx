import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function WeeklyStudyChart({ planner }) {

  if (!planner || !planner.schedule) {
    return (
      <div className="bg-slate-900 rounded-3xl p-6 text-white">
        Loading Chart...
      </div>
    );
  }

  const labels = planner.schedule.map((day) => day.day);

  const studyHours = planner.schedule.map((day) => {

    return day.tasks.reduce((sum, task) => {
      return sum + task.duration;
    }, 0);

  });

  const data = {
    labels,

    datasets: [
      {
        label: "Study Hours",

        data: studyHours,

        backgroundColor: "#3b82f6",

        borderRadius: 8,
      },
    ],
  };

  const options = {

    responsive: true,

    plugins: {

      legend: {
        display: false,
      },

    },

    scales: {

      y: {

        beginAtZero: true,

        ticks: {
          color: "white",
        },

        grid: {
          color: "#334155",
        },

      },

      x: {

        ticks: {
          color: "white",
        },

        grid: {
          display: false,
        },

      },

    },

  };

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800">

      <h2 className="text-2xl font-bold text-white mb-6">
        📊 Weekly Study Hours
      </h2>

      <Bar
        data={data}
        options={options}
      />

    </div>

  );

}

export default WeeklyStudyChart;