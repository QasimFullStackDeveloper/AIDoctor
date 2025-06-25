import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftImage from "../../Components/LeftImage";
import Logo from "../../Components/Logo";

import emailIcon from "../../assets/SVG.svg";
import lockIcon from "../../assets/lock.svg";
import refreshIcon from "../../assets/reload.svg";
import eyeIcon from "../../assets/eye.svg";
import eyeOffIcon from "../../assets/eye-off.svg";
import Loading from "../../Components/Loading";

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
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [code, setCode] = useState(generateRandomCode());
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:7282/Auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          const { twoFactorEnabled, method } = result;

          if (twoFactorEnabled) {
            navigate("/login/two-factor", {
              state: { method, email: formData.email },
            });
          } else {
            navigate("/");
          }
        } else {
          alert(result.message || "Login failed.");
        }

      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setErrors((prev) => ({ ...prev, [e.target.name]: "/" }));
  };

  return (
    <div
      className="flex min-h-screen bg-blue-100"
      style={{
        background: "linear-gradient(134deg, #EFF6FF 0%, #EEF2FF 99%)",
        height: "calc(var(--vh, 1vh) * 100)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Left Image */}

      <div className="hidden lg:flex IpadPro:hidden w-[52%] midMd:w-[48%] h-[calc(var(--vh,1vh)*100)]">
        <LeftImage />
      </div>

      {/* Right Form */}
      <div className="flex flex-1 items-center justify-center px-4 py-6 overflow-y-auto min-h-screen bg-blue-50">
        <div
          className="w-full max-h-[85vh] Laptop:max-h-[90vh] tall-md:max-h-[90vh] Laptop:overflow-y-hidden overflow-y-auto sm:max-w-[478px] p-4 sm:p-6 md:p-6 2xl:p-8 bg-white rounded-md shadow-md md:shadow-lg border-t-4 border-blue-500"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "12px",
            backdropFilter: "blur(4px)",
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex justify-center midMd:mb-3 mb-6 ">
            <Logo />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
            Welcome back
          </h2>
          <p className="text-sm text-center  text-gray-500 midMd:mb-7 mb-8">
            Sign in to your account
          </p>

          {loading ? (
            <Loading />
          ) : (
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
                    className={`w-full py-3 pl-11 pr-4 midMd:py-2 rounded-md text-sm ${errors.email ? "border-red-500" : "border-gray-300"
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
                    className={`w-full py-3 pl-11 pr-10 midMd:py-2 rounded-md text-sm ${errors.password ? "border-red-500" : "border-gray-300"
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
                  <p className="text-xs text-red-500 mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Security Code */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Security Code
                </label>
                <div className="flex items-center justify-between bg-gray-200 px-4 py-3 midMd:py-2 rounded-md mb-2">
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

              {/* Code Input */}
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
                  className={`w-full py-3 px-4 rounded-md text-sm midMd:py-2 ${errors.inputCode ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  style={{
                    borderRadius: "8px",
                    background: "#FFFFFF",
                    border: "1px solid #D1D5DB",
                  }}
                />
                {errors.inputCode && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.inputCode}
                  </p>
                )}
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 accent-blue-600"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rememberMe: e.target.checked,
                      })
                    }
                  />
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
                className="w-full  hover:to-blue-600 text-white font-medium py-2 midMd:py-2 rounded-lg transition duration-150"
                            style={{
                background: "linear-gradient(90deg, #3B82F6 0%, #4F46E5 100%)",
              }}
              >
                Sign in
              </button>
            </form>
          )}

          {/* Sign Up Link */}
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
          <p className="text-[11px] text-center text-gray-400 mt-4 midMd:mt-1 leading-snug">
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
