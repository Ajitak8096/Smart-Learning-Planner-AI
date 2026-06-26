import { useState } from "react";
import { createQuiz } from "../services/quizService";

export default function useQuiz() {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const generateQuiz = async (topic, subject, difficulty) => {
    try {
      setLoading(true);

      const res = await createQuiz(topic, subject, difficulty);

      setQuiz(res.quiz);
      setAnswers({});
      setSubmitted(false);
      setScore(0);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const selectAnswer = (index, option) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: option,
    }));
  };

  const submitQuiz = () => {
    let marks = 0;

    quiz.questions.forEach((q, i) => {
      // Convert selected option into A/B/C/D
      const optionIndex = q.options.indexOf(answers[i]);

      const selectedLetter = ["A", "B", "C", "D"][optionIndex];

      if (selectedLetter === q.answer) {
        marks++;
      }
    });

    setScore(marks);
    setSubmitted(true);
  };

  return {
    quiz,
    loading,
    generateQuiz,
    answers,
    selectAnswer,
    submitQuiz,
    submitted,
    score,
  };
}