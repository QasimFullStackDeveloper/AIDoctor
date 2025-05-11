import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import LeftImage from "../../Components/LeftImage";
import emailIcon from "../../assets/SVG.svg";
import lockIcon from "../../assets/lock.svg";
import eyeIcon from "../../assets/eye.svg";
import eyeOffIcon from "../../assets/eye-off.svg";
import refreshIcon from "../../assets/reload.svg";
import Loading from "../../Components/Loading";
import shield from "../../assets/shield2.svg";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    code: "",
    termsAccepted: false,
  });

  const [errorField, setErrorField] = useState({});
  const [generatedCode, setGeneratedCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateCode = () => {
    const newCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    setGeneratedCode(newCode);
  };

  useEffect(() => {
    generateCode();
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrorField((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Invalid email format";
    if (formData.password.length < 6) errors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";
    if (formData.code.trim() !== generatedCode) errors.code = "Incorrect code";
    if (!formData.termsAccepted) errors.termsAccepted = "You must accept the terms";
    setErrorField(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("https://localhost:7282/api/Auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, termsAccepted: true }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Signup failed");
      navigate("/signup/two-factor");
    } catch (error) {
      alert(error.message || "Unexpected error occurred");
    } finally {
      setLoading(false);
    }
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
      <div className="hidden lg:flex IpadPro:hidden w-[54%] min-h-full">
        <LeftImage />
      </div>

      {/* Right Side Form */}
      <div className="flex flex-1 items-center justify-center px-4 py-6 overflow-y-auto min-h-screen bg-blue-100">
        <div
          className="w-full sm:max-w-[478px] overflow-y-auto p-4 sm:p-6 md:p-6 2xl:p-8 2xl:overflow-hidden bg-white rounded-md shadow-md md:shadow-lg IpadPro:mb-[220px] border-t-4 border-blue-500"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "12px",
            backdropFilter: "blur(4px)",
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            maxHeight: "90vh",
          }}
        >
          <div className="flex justify-center mb-6 Laptop:mb-2 tall-md:mb-4">
            <Logo />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">Create Your Account</h2>
          <p className="text-sm text-center text-gray-500 mb-6">Get personalized healthcare support</p>

          {loading ? (
            <Loading />
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="flex gap-3">
                {["firstName", "lastName"].map((field, i) => (
                  <div key={i} className="w-1/2">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      className={`w-full py-2 px-3 Laptop:py-1 Laptop:px-1 tall-md:py-1 tall-md:px-1 rounded-md text-sm ${
                        errorField[field] ? "border-red-500" : "border-gray-300"
                      } border`}
                    />
                    {errorField[field] && <p className="text-xs text-red-500 mt-1">{errorField[field]}</p>}
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                <div className="relative flex items-center">
                  <img src={emailIcon} alt="Email" className="absolute left-4 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-full py-3 Laptop:py-1 Laptop:px-1 tall-md:py-1 tall-md:px-1 pl-11 pr-4 rounded-md text-sm ${
                      errorField.email ? "border-red-500" : "border-gray-300"
                    } border`}
                  />
                </div>
                {errorField.email && <p className="text-xs text-red-500 mt-1">{errorField.email}</p>}
              </div>

              {/* Passwords */}
              {["password", "confirmPassword"].map((field, i) => (
                <div key={i}>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    {field === "password" ? "Password" : "Confirm Password"}
                  </label>
                  <div className="relative flex items-center">
                    <img src={lockIcon} alt="Lock" className="absolute left-4 w-5 h-5" />
                    <input
                      type={(field === "password" ? showPassword : showConfirmPassword) ? "text" : "password"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      className={`w-full py-3 pl-11 pr-10 Laptop:py-1 Laptop:px-1 tall-md:py-1 tall-md:px-1 rounded-md text-sm ${
                        errorField[field] ? "border-red-500" : "border-gray-300"
                      } border`}
                    />
                    <img
                      src={(field === "password" ? showPassword : showConfirmPassword) ? eyeOffIcon : eyeIcon}
                      alt="Toggle visibility"
                      className="absolute right-4 w-5 h-5 cursor-pointer"
                      onClick={() =>
                        field === "password"
                          ? setShowPassword(!showPassword)
                          : setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  </div>
                  {errorField[field] && <p className="text-xs text-red-500 mt-1">{errorField[field]}</p>}
                </div>
              ))}

              {/* Security Code */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Security Check</label>
                <div className="flex justify-between items-center px-3 py-2 Laptop:py-1 Laptop:px-1 tall-md:py-1 tall-md:px-1 bg-gray-100 rounded">
                  <span className="text-base font-semibold text-gray-800">{generatedCode}</span>
                  <button type="button" onClick={generateCode}>
                    <img src={refreshIcon} alt="Refresh Code" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Enter Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  className={`w-full py-2 px-3 Laptop:py-1 Laptop:px-1 tall-md:py-1 tall-md:px-1 border rounded-md ${
                    errorField.code ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errorField.code && <p className="text-xs text-red-500 mt-1">{errorField.code}</p>}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label className="text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms of Service and Privacy Policy
                  </a>
                </label>
              </div>
              {errorField.termsAccepted && <p className="text-xs text-red-500">{errorField.termsAccepted}</p>}

              <button
                type="submit"
                className="w-full text-white font-semibold py-2 rounded-md"
                style={{
                  background: "linear-gradient(90deg, #3B82F6 0%, #4F46E5 100%)",
                }}
              >
                Create Account
              </button>

              <p className="text-sm text-center mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 underline">
                  Sign in
                </Link>
              </p>
            </form>
          )}

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2 mb-1">
              <img src={shield} alt="Shield" className="w-4 h-4" />
              <span>Your data is encrypted and secure</span>
            </div>
            <p className="text-xs">
              Need help? Contact{" "}
              <a href="mailto:support@doctorchatbot.com" className="text-blue-600 underline">
                support@doctorchatbot.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
