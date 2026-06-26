import { motion } from "framer-motion";

function ExamPrediction({ readiness }) {

  return (

    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-900 rounded-3xl border border-slate-800 p-6"
    >

      <h2 className="text-2xl font-bold mb-6">

        🎯 Exam Prediction

      </h2>

      <div className="w-full bg-slate-700 rounded-full h-4">

        <div
          className="bg-green-500 h-4 rounded-full"
          style={{
            width: `${readiness}%`,
          }}
        />

      </div>

      <h1 className="text-5xl font-bold mt-5">

        {readiness}%

      </h1>

      <p className="text-gray-400 mt-2">

        AI Exam Readiness

      </p>

    </motion.div>

  );

}

export default ExamPrediction;