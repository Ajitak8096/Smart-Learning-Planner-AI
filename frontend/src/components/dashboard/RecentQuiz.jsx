function RecentQuiz() {

  const quizzes = [
    {
      name: "Java",
      score: "8/10",
    },
    {
      name: "DBMS",
      score: "9/10",
    },
    {
      name: "SQL",
      score: "10/10",
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Quizzes
      </h2>

      <div className="space-y-3">

        {quizzes.map((quiz, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4 flex justify-between"
          >
            <span>{quiz.name}</span>

            <span className="font-bold text-green-400">
              {quiz.score}
            </span>
          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentQuiz;