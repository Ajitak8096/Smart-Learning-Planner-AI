function PlannerToday() {

  const tasks = [
    "Java OOP",
    "DBMS Revision",
    "SQL Practice",
    "SSC Maths",
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Today's Planner
      </h2>

      <div className="space-y-4">

        {tasks.map((task, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4"
          >
            ✅ {task}
          </div>

        ))}

      </div>

    </div>
  );
}

export default PlannerToday;