import { FaCheckCircle } from "react-icons/fa";

const tasks = [
  {
    time: "09:00 AM",
    subject: "Quantitative Aptitude",
  },
  {
    time: "10:00 AM",
    subject: "English Grammar",
  },
  {
    time: "11:30 AM",
    subject: "Reasoning",
  },
  {
    time: "02:00 PM",
    subject: "Computer Awareness",
  },
];

function TodaySchedule() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        📅 Today's Study Plan
      </h2>

      <div className="space-y-5">

        {tasks.map((task, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
          >

            <div>

              <p className="font-semibold">
                {task.subject}
              </p>

              <p className="text-gray-400 text-sm">
                {task.time}
              </p>

            </div>

            <FaCheckCircle className="text-green-400 text-xl" />

          </div>

        ))}

      </div>

    </div>
  );
}

export default TodaySchedule;