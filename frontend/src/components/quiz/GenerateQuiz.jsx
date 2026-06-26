import { useState } from "react";

function GenerateQuiz({ generateQuiz, loading }) {
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");

  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        🤖 Generate AI Quiz
      </h2>

      <input
        className="w-full p-3 mb-4 rounded-xl bg-slate-800"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <input
        className="w-full p-3 mb-4 rounded-xl bg-slate-800"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <select
        className="w-full p-3 mb-4 rounded-xl bg-slate-800"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <button
        onClick={() =>
          generateQuiz({
            topic,
            subject,
            difficulty,
          })
        }
        className="bg-blue-600 px-6 py-3 rounded-xl w-full"
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

    </div>
  );
}

export default GenerateQuiz;