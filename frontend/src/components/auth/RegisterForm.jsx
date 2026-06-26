import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

import { registerUser } from "../../services/authService";

function RegisterForm() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password
    ) {

      toast.error("Please fill all fields");

      return;

    }

    try {

      setLoading(true);

      await registerUser(formData);

      toast.success("Registration Successful 🎉");

      navigate("/login");

    } catch (error) {

      toast.error(

        error.response?.data?.message ||

          "Registration Failed"

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

      <Card className="w-[430px] bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-white">

          Create Account 🚀

        </h1>

        <p className="text-center text-gray-400 mt-2">

          Join Smart Learning Planner AI

        </p>

        <form

          onSubmit={handleSubmit}

          className="mt-8 space-y-5"

        >

          <Input

            label="Full Name"

            name="fullName"

            placeholder="Enter your full name"

            value={formData.fullName}

            onChange={handleChange}

          />

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

            placeholder="Create a password"

            value={formData.password}

            onChange={handleChange}

          />

          <Button

            type="submit"

            loading={loading}

          >

            Register

          </Button>

          <div className="text-center mt-5 text-gray-400">

            Already have an account?{" "}

            <Link

              to="/login"

              className="text-blue-500 hover:text-blue-400 hover:underline"

            >

              Login

            </Link>

          </div>

        </form>

      </Card>

    </motion.div>

  );

}

export default RegisterForm;