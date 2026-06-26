import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 3 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 2.5 },
  { day: "Sat", hours: 5 },
  { day: "Sun", hours: 3 },
];

function WeeklyChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 h-[350px]">

      <h2 className="text-2xl font-bold mb-5">
        Weekly Study Progress
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

          <XAxis dataKey="day" stroke="#94A3B8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="hours"
            stroke="#3B82F6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default WeeklyChart;