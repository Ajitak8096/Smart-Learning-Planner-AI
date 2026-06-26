import { motion } from "framer-motion";

function AISchedule({
  planner,
  toggleTask,
}) {
  if (!planner) {
    return (
      <div className="bg-slate-900 rounded-3xl p-6 text-white">
        Loading...
      </div>
    );
  }

  if (!planner.schedule || planner.schedule.length === 0) {
    return (
      <div className="bg-slate-900 rounded-3xl p-6 text-white">
        No Schedule Found
      </div>
    );
  }

  const today = planner.schedule[0];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6">
        📅 {today.day} Study Plan
      </h2>

      <div className="space-y-4">

        {today.tasks.map((task, index) => (

          <div
            key={index}
            className="flex items-center justify-between bg-slate-800 rounded-xl p-4"
          >

            <div className="flex items-center gap-4">

              <button
                onClick={() =>
                  toggleTask(
                    planner._id,
                    today.day,
                    index
                  )
                }
                className="text-2xl"
              >
                {task.completed ? "✅" : "⬜"}
              </button>

              <div>

                <h3
                  className={`font-semibold ${
                    task.completed
                      ? "line-through text-gray-500"
                      : ""
                  }`}
                >
                  {task.subject}
                </h3>

                <p className="text-gray-400 text-sm">
                  {task.duration} Hour(s)
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </motion.div>
  );
}

export default AISchedule;