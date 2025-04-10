import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftImage from "../../Components/LeftImage";
import Logo from "../../Components/Logo";
import { HiOutlineMail, HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi"; 

const generateRandomCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    inputCode: "",
  });
  const [errors, setErrors] = useState({});
  const [code, setCode] = useState(generateRandomCode());
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    setCode(generateRandomCode());
  }, []);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    if (!formData.inputCode.trim()) {
      newErrors.inputCode = "Code is required.";
    } else if (formData.inputCode.toUpperCase() !== code) {
      newErrors.inputCode = "Incorrect code. Please try again.";
      setCode(generateRandomCode());
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      navigate("/login/two-factor");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev); 
  };

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row h-full">
        <div className="hidden md:block md:w-[45%] lg:w-[50%] h-screen relative">
          <div className="absolute inset-0">
            <LeftImage />
          </div>
        </div>

        <div className="w-full md:w-[55%] lg:w-[50%] flex justify-center items-center p-6">
          <div className="w-full max-w-[500px] p-8 bg-white rounded-xl shadow-lg text-center ">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 flex justify-center">
              <Logo />
            </h2>
            <h3 className="text-2xl font-bold mb-3">Welcome back</h3>
            <p className="text-gray-500 text-sm mb-6">Sign in to your account</p>

            <form onSubmit={handleSubmit} className="text-left space-y-6">
              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 pl-12 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none`}
                />
                <HiOutlineMail className="absolute mt-5 left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-4 pl-12 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none`}
                />
                <HiLockClosed className="absolute mt-5 left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
                {passwordVisible ? (
                  <HiEyeOff
                    onClick={togglePasswordVisibility}
                    className="absolute mt-5 right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl cursor-pointer"
                  />
                ) : (
                  <HiEye
                    onClick={togglePasswordVisibility}
                    className="absolute mt-5 right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl cursor-pointer"
                  />
                )}
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* Input Code */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-1">Enter the code shown</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    name="inputCode"
                    value={formData.inputCode}
                    onChange={handleChange}
                    className={`w-full p-4 border ${
                      errors.inputCode ? "border-red-500" : "border-gray-300"
                    } rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none`}
                  />
                  <span className="bg-gray-200 px-4 py-2 rounded-md text-blue-600 font-bold text-sm">{code}</span>
                </div>
                {errors.inputCode && <p className="text-red-500 text-xs mt-1">{errors.inputCode}</p>}
              </div>

              <div className="flex justify-between items-center text-xs text-gray-600">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-blue-500" /> Remember me
                </label>
                <Link to="/login/forgot-password" className="text-blue-500 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-4 mt-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition-transform duration-200 hover:scale-105 shadow-md"
              >
                Sign in
              </button>
            </form>

            <p className="text-sm mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Protected by reCAPTCHA and subject to Privacy Policy and Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
