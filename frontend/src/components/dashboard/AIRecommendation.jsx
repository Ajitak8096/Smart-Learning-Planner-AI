import { motion } from "framer-motion";

function AIRecommendation({ weakSubjects = [] }) {

  return (

    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-6"
    >

      <h2 className="text-2xl font-bold mb-5">

        🤖 AI Coach

      </h2>

      <p className="mb-4">

        Based on your planner, focus on:

      </p>

      <ul className="space-y-3">

        {weakSubjects.map((subject, index) => (

          <li key={index}>

            ✅ Spend more time on <b>{subject}</b>

          </li>

        ))}

      </ul>

      <div className="mt-6 bg-white/10 rounded-xl p-4">

        💡 Stay consistent.
        Completing today's schedule increases your readiness.

      </div>

    </motion.div>

  );

}

export default AIRecommendation;