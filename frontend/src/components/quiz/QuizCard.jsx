import { useState } from "react";

function QuizCard({ question, index, onAnswer, submitted }) {
  const [selected, setSelected] = useState("");

  const choose = (option) => {
    if (submitted) return;

    setSelected(option);
    onAnswer(index, option);
  };

  // Convert A/B/C/D to the actual option text
  const letters = ["A", "B", "C", "D"];
  const correctOption =
    question.options[letters.indexOf(question.answer)];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 mb-6">

      <h2 className="text-2xl font-bold mb-6">
        Q{index + 1}. {question.question}
      </h2>

      <div className="space-y-4">

        {question.options.map((option) => {

          let color =
            "border-slate-700 hover:border-blue-500";

          // Selected before submit
          if (!submitted && selected === option) {
            color = "border-blue-500 bg-blue-900";
          }

          // After submit
          if (submitted) {

            // Correct option
            if (option === correctOption) {
              color = "border-green-500 bg-green-900";
            }

            // Wrong selected option
            else if (option === selected) {
              color = "border-red-500 bg-red-900";
            }
          }

          return (
            <button
              key={option}
              onClick={() => choose(option)}
              className={`w-full text-left border ${color} rounded-xl p-4 transition duration-200`}
            >
              {option}
            </button>
          );
        })}

      </div>

      {submitted && (
        <div className="mt-6 bg-slate-800 rounded-xl p-5">

          <p className="text-green-400 font-bold text-lg">
            ✅ Correct Answer
          </p>

          <p className="mt-2">
            {correctOption}
          </p>

          {question.explanation && (
            <>
              <p className="font-bold mt-5 text-blue-400">
                📘 Explanation
              </p>

              <p className="mt-2 text-gray-300 leading-7">
                {question.explanation}
              </p>
            </>
          )}

        </div>
      )}
    </div>
  );
}

export default QuizCard;