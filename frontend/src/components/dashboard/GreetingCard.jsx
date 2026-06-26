import { motion } from "framer-motion";

function GreetingCard({
  exam,
  goal,
}) {

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
      }}

      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      from-blue-700
      via-indigo-700
      to-purple-700
      p-10
      shadow-2xl
      "

    >

      {/* Glow */}

      <div className="
      absolute
      -top-20
      -right-20
      w-64
      h-64
      rounded-full
      bg-white/10
      blur-3xl
      " />

      <h2 className="text-xl text-blue-100">

        👋 {greeting},

      </h2>

      <h1 className="text-5xl font-bold mt-3">

        Welcome Back Ajit

      </h1>

      <p className="text-blue-100 mt-3 text-lg">

        Your AI is preparing you for

      </p>

      <h2 className="text-3xl font-semibold mt-2">

        {exam}

      </h2>

      <p className="mt-4 text-blue-100">

        🎯 Goal :
        {" "}
        <span className="font-semibold text-white">

          {goal}

        </span>

      </p>

      <div className="mt-8">

        <div className="bg-white/20 rounded-full h-3 overflow-hidden">

          <div
            className="bg-green-400 h-full rounded-full"
            style={{
              width: "65%",
            }}
          />

        </div>

        <div className="flex justify-between mt-2 text-sm">

          <span>

            Current Progress

          </span>

          <span>

            65%

          </span>

        </div>

      </div>

    </motion.div>

  );

}

export default GreetingCard;