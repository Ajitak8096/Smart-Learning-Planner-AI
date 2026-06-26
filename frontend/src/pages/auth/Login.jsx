import LoginForm from "../../components/auth/LoginForm";
import { FaBookOpen } from "react-icons/fa";

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 grid lg:grid-cols-2">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center px-20">

        <div className="flex items-center gap-4 mb-8">
          <FaBookOpen className="text-5xl text-blue-500" />
          <h1 className="text-5xl font-bold text-white">
            Smart Learning Planner
          </h1>
        </div>

        <h2 className="text-4xl font-bold text-white leading-tight">
          Study Smarter,
          <br />
          Not Harder.
        </h2>

        <p className="mt-6 text-lg text-gray-400 leading-8">
          AI creates your daily study schedule,
          tracks your confidence,
          predicts exam readiness,
          recommends YouTube resources,
          and adapts your plan every day.
        </p>

        <div className="mt-10 space-y-4">

          <div className="text-green-400">
            ✔ AI Daily Planner
          </div>

          <div className="text-green-400">
            ✔ Pomodoro Timer
          </div>

          <div className="text-green-400">
            ✔ Progress Analytics
          </div>

          <div className="text-green-400">
            ✔ Exam Readiness Prediction
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex justify-center items-center px-5">

        <LoginForm />

      </div>

    </div>
  );
}

export default Login;