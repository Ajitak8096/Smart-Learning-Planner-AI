import MainLayout from "../components/layout/MainLayout";

import GenerateQuiz from "../components/quiz/GenerateQuiz";
import QuizCard from "../components/quiz/QuizCard";

import useQuiz from "../hooks/useQuiz";

function Quiz() {
  const {
    quiz,
    loading,
    generateQuiz,

    submitted,
    score,

    selectAnswer,
    submitQuiz,
  } = useQuiz();

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-6">

        {/* Left Panel */}
        <div className="col-span-4">

          <GenerateQuiz
            generateQuiz={generateQuiz}
            loading={loading}
          />

          {submitted && quiz && (
            <div className="mt-6 bg-blue-600 rounded-2xl p-6 text-center">

              <h2 className="text-2xl font-bold text-white">
                🎉 Quiz Completed
              </h2>

              <p className="text-5xl font-bold mt-4 text-white">
                {score} / {quiz.questions.length}
              </p>

            </div>
          )}

        </div>

        {/* Right Panel */}
        <div className="col-span-8">

          {!quiz ? (

            <div className="bg-slate-900 rounded-2xl p-10 text-center">

              <h2 className="text-2xl font-bold mb-4">
                AI Quiz Generator
              </h2>

              <p className="text-gray-400">
                Enter a topic and click Generate Quiz to begin.
              </p>

            </div>

          ) : (

            <>
              {quiz.questions.map((question, index) => (

                <QuizCard
                  key={index}
                  question={question}
                  index={index}
                  submitted={submitted}
                  onAnswer={selectAnswer}
                />

              ))}

              {!submitted && (

                <div className="text-center mt-8">

                  <button
                    onClick={submitQuiz}
                    className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl font-bold text-lg"
                  >
                    Submit Quiz
                  </button>

                </div>

              )}

            </>

          )}

        </div>

      </div>
    </MainLayout>
  );
}

export default Quiz;