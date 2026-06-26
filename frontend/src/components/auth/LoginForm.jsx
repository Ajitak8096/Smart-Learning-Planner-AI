import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";

import { loginUser } from "../../services/authService";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/authSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      dispatch(loginStart());

      const data = await loginUser(formData);

      dispatch(loginSuccess(data));

      toast.success("Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      dispatch(loginFailure());

      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[420px] bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-white">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Sign in to continue your learning journey.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button
  type="submit"
  loading={loading}
>
  Login
</Button>

          <div className="text-center mt-5 text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-400 hover:underline"
            >
              Register
            </Link>
          </div>
        </form>

      </Card>
    </motion.div>
  );
}

export default LoginForm;