import { motion } from "framer-motion";
import usePomodoro from "../../hooks/usePomodoro";

function PomodoroWidget() {

  const {

    minutes,
    seconds,

    sessions,

    isRunning,

    startTimer,

    pauseTimer,

    resetTimer,

  } = usePomodoro();

  return (

    <motion.div

      whileHover={{ y: -5 }}

      className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl"

    >

      <h2 className="text-2xl font-bold">

        🍅 Pomodoro Timer

      </h2>

      <h1 className="text-7xl font-bold text-center my-10">

        {minutes}:{seconds}

      </h1>

      <div className="flex justify-center gap-4">

        <button

          onClick={startTimer}

          className="bg-green-600 px-6 py-3 rounded-xl"

        >

          ▶ Start

        </button>

        <button

          onClick={pauseTimer}

          className="bg-yellow-500 px-6 py-3 rounded-xl"

        >

          ⏸ Pause

        </button>

        <button

          onClick={resetTimer}

          className="bg-red-600 px-6 py-3 rounded-xl"

        >

          🔄 Reset

        </button>

      </div>

      <div className="mt-8 text-center">

        <h3 className="text-xl">

          Completed Sessions

        </h3>

        <p className="text-5xl font-bold text-green-400">

          {sessions}

        </p>

      </div>

      <div className="mt-6 text-center text-gray-400">

        {isRunning ? "Focus Mode 🔥" : "Ready to Study"}

      </div>

    </motion.div>

  );

}

export default PomodoroWidget;