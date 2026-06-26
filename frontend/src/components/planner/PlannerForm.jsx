import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function PlannerForm() {
  const [formData, setFormData] = useState({
    examName: "",
    examDate: "",
    goal: "",
    targetScore: "",
    dailyHours: "",
    weakSubjects: [],
  });

  const subjects = [
    "Quant",
    "Reasoning",
    "English",
    "Computer",
    "General Awareness",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (subject) => {
    if (formData.weakSubjects.includes(subject)) {
      setFormData({
        ...formData,
        weakSubjects: formData.weakSubjects.filter(
          (item) => item !== subject
        ),
      });
    } else {
      setFormData({
        ...formData,
        weakSubjects: [...formData.weakSubjects, subject],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/planner",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);

      setFormData({
        examName: "",
        examDate: "",
        goal: "",
        targetScore: "",
        dailyHours: "",
        weakSubjects: [],
      });

      window.location.reload();

    } catch (err) {
      console.log(err);
      toast.error("Failed to create planner");
    }
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800">

      <h2 className="text-3xl font-bold mb-8">
        Create AI Study Planner
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <input
          className="w-full p-4 rounded-xl bg-slate-800"
          placeholder="Exam Name"
          name="examName"
          value={formData.examName}
          onChange={handleChange}
        />

        <input
          type="date"
          className="w-full p-4 rounded-xl bg-slate-800"
          name="examDate"
          value={formData.examDate}
          onChange={handleChange}
        />

        <input
          className="w-full p-4 rounded-xl bg-slate-800"
          placeholder="Goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
        />

        <input
          type="number"
          className="w-full p-4 rounded-xl bg-slate-800"
          placeholder="Target Score"
          name="targetScore"
          value={formData.targetScore}
          onChange={handleChange}
        />

        <input
          type="number"
          className="w-full p-4 rounded-xl bg-slate-800"
          placeholder="Daily Study Hours"
          name="dailyHours"
          value={formData.dailyHours}
          onChange={handleChange}
        />

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Weak Subjects
          </h3>

          <div className="grid md:grid-cols-2 gap-3">

            {subjects.map((subject) => (

              <label
                key={subject}
                className="flex items-center gap-3 bg-slate-800 p-3 rounded-xl cursor-pointer"
              >

                <input
                  type="checkbox"
                  checked={formData.weakSubjects.includes(subject)}
                  onChange={() => handleCheckbox(subject)}
                />

                {subject}

              </label>

            ))}

          </div>

        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-4 font-bold text-lg transition"
        >
          🚀 Generate AI Planner
        </button>

      </form>

    </div>
  );
}

export default PlannerForm;