import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.jsx";
import LeftImage from "../../Components/LeftImage";

const generateRandomCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

const Login = () => {
  const [code, setCode] = useState(generateRandomCode());
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCode(generateRandomCode());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCode.toUpperCase() === code) {
      navigate("/login/two-factor");
    } else {
      setError("Incorrect code. Please try again.");
      setCode(generateRandomCode()); 
      setInputCode("");
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row w-full h-full lg:h-screen overflow-hidden">
        {/* Left Section - Fixed at 50% width */}
          <LeftImage />

        {/* Right Section - Form */}
        <div className="flex-1 flex justify-center items-center p-8 lg:p-12">
          <div className="w-full max-w-[500px] lg:max-w-[600px] p-8 mb-[45px] bg-white rounded-xl shadow-lg text-center opacity-0 animate-fadeIn">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 flex justify-center">
              <Logo />
            </h2>
            <h3 className="text-2xl font-bold mb-3">Welcome back</h3>
            <p className="text-gray-500 text-sm mb-6">Sign in to your account</p>

            <form className="text-left space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-4 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full p-4 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Enter the code shown</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    required
                    className="w-full p-4 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm"
                  />
                  <span className="bg-gray-200 p-2 rounded-md text-blue-600 font-bold text-sm">{code}</span>
                </div>
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
              </div>

              <div className="flex justify-between items-center text-xs text-gray-600">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-1 accent-blue-500 w-4 h-4" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/login/forgot-password" className="text-blue-500 hover:underline">Forgot password?</Link>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-4 mt-6 rounded-md text-lg font-semibold hover:bg-blue-700 transform transition duration-200 hover:scale-105 shadow-md"
              >
                Sign in
              </button>
            </form>

            <p className="text-sm mt-4">
              Don’t have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
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
