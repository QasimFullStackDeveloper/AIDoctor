import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftImage from "../../Components/LeftImage";
import Logo from "../../Components/Logo";

import emailIcon from "../../assets/SVG.svg";
import lockIcon from "../../assets/lock.svg";
import refreshIcon from "../../assets/reload.svg";
import eyeIcon from "../../assets/eye.svg";
import eyeOffIcon from "../../assets/eye-off.svg";

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

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    if (!formData.inputCode.trim()) {
      newErrors.inputCode = "Code is required.";
    } else if (formData.inputCode.toUpperCase() !== code) {
      newErrors.inputCode = "Incorrect code.";
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
  };

  const handleFocus = (e) => {
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  return (
    <div className="max-h-screen flex flex-col md:flex-row bg-blue-100 overflow-hidden" style={{
      background: "linear-gradient(134deg, #EFF6FF 0%, #EEF2FF 99%)",
    }}>
      {/* Left Image (hidden on smaller screens) */}
      <div className="hidden lg:block md:w-1/2 2xl:w-[70%] h-screen">
        <LeftImage />
      </div>

      {/* Right Form Side */}
      <div className="w-full md:w-1/2 h-screen flex flex-col items-center justify-center px-6 sm:px-6 overflow-auto">
        <div className="w-full  sm:max-w-[478px] md:mt-[200px] 2xl:mt-0 p-4 sm:p-6 md:p-6 2xl:p-8 bg-white rounded-md md:rounded-[12px] shadow-md md:shadow-lg border-t-4 border-blue-500 " 
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(255, 255, 255, 0.9)",
            borderRadius: "12px",
            backdropFilter: "blur(4px)",
            boxShadow:
              "0px 4px 6px -4px ) 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
            Welcome back
          </h2>
          <p className="text-sm text-center text-gray-500 mb-8">
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email address
              </label>
              <div className="relative flex items-center">
                <img
                  src={emailIcon}
                  alt="Email"
                  className="absolute left-4 w-5 h-5"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="Enter your email"
                  className={`w-full py-3 pl-11 pr-4 rounded-md text-sm ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  style={{
                    borderRadius: "8px",
                    background: "#FFFFFF",
                    border: "1px solid #D1D5DB",
                  }}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <div className="relative flex items-center">
                <img
                  src={lockIcon}
                  alt="Password"
                  className="absolute left-4 w-5 h-5"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                />
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="Enter your password"
                  className={`w-full py-3 pl-11 pr-10 rounded-md text-sm ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  style={{
                    borderRadius: "8px",
                    background: "#FFFFFF",
                    border: "1px solid #D1D5DB",
                  }}
                />
                <img
                  src={passwordVisible ? eyeOffIcon : eyeIcon}
                  alt="Toggle Visibility"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-4 w-5 h-5 cursor-pointer"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Security Code */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Security Code
              </label>
              <div className="flex items-center justify-between bg-gray-200 px-4 py-3 rounded-md mb-2">
                <span className="text-sm font-semibold tracking-widest text-gray-800">
                  {code}
                </span>
                <img
                  src={refreshIcon}
                  alt="Refresh"
                  onClick={() => setCode(generateRandomCode())}
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>

            {/* Code Input Field */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Enter Code
              </label>
              <input
                type="text"
                name="inputCode"
                value={formData.inputCode}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Enter the code shown above"
                className={`w-full py-3 px-4 rounded-md text-sm ${
                  errors.inputCode ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                style={{
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                }}
              />
              {errors.inputCode && (
                <p className="text-xs text-red-500 mt-1">{errors.inputCode}</p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-600" />
                Remember me
              </label>
              <Link
                to="/login/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r bg-blue-500 hover:to-blue-600 text-white font-medium py-3 rounded-lg transition duration-150"
            >
              Sign in
            </button>
          </form>

          {/* Sign up Link */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>

          {/* Footer */}
          <p className="text-[11px] text-center text-gray-400 mt-4 leading-snug">
            Protected by reCAPTCHA and subject to the <br />
            <span className="underline">Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
