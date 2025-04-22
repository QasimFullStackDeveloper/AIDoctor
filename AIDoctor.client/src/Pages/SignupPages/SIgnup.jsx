import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          termsAccepted: true,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      navigate("/index/signup/two-factor");
    } catch (error) {
      setLoading(false);
      alert(error.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="max-h-screen flex flex-col md:flex-row bg-blue-100 overflow-hidden" style={{
      background: "linear-gradient(134deg, #EFF6FF 0%, #EEF2FF 99%)",
    }}>
      <div className="hidden lg:flex w-[54%] thousand:hidden thousand:bg-black h-screen min-h-[768px] 2xl:w-[70%]">
        <LeftImage />
      </div>

      <div className="w-full lg:w-[56%] flex flex-col items-center justify-center px-4 py-6 Desktop1:-mt-0 overflow-y-auto max-h-screen bg-blue-100 thousand">
      <div className="w-full max-w-md flex md:mt-[150px] Laptop:mt-[230px] sm:mt-[0px]  Desktop:mt-[0px] bigScr:mt-0 flex-col items-center mb-4 m-0 ">
          <Logo />
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-1 mt-1.5 font-roboto">
            Create Your Account
          </h3>
          <p className="text-sm text-gray-600 mt-1">Get personalized healthcare support</p>
        </div>

        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
          {loading ? (
            <Loading />
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <label className="block text-sm font-bold mb-1 text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-full p-2 border rounded-md ${errorField.firstName ? "border-red-500" : ""}`}
                  />
                  {errorField.firstName && <span className="text-sm text-red-500">{errorField.firstName}</span>}
                </div>
                <div className="w-full">
                  <label className="block text-sm font-bold mb-1 text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-full p-2 border rounded-md ${errorField.lastName ? "border-red-500" : ""}`}
                  />
                  {errorField.lastName && <span className="text-sm text-red-500">{errorField.lastName}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1 text-gray-700">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center">
                    <img src={emailIcon} alt="Email" className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-full p-2 pl-12 border rounded-md ${errorField.email ? "border-red-500" : ""}`}
                  />
                </div>
                {errorField.email && <span className="text-sm text-red-500">{errorField.email}</span>}
              </div>

              {["password", "confirmPassword"].map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-bold mb-1 text-gray-700">
                    {field === "password" ? "Password" : "Confirm Password"}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center">
                      <img src={lockIcon} alt="Lock" className="w-5 h-5" />
                    </div>
                    <input
                      type={(field === "password" && showPassword) || (field === "confirmPassword" && showConfirmPassword) ? "text" : "password"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      className={`w-full p-2 pl-12 pr-12 border rounded-md ${errorField[field] ? "border-red-500" : ""}`}
                    />
                    <div
                      onClick={() =>
                        field === "password"
                          ? setShowPassword(!showPassword)
                          : setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                    >
                      <img
                        src={(field === "password" && showPassword) || (field === "confirmPassword" && showConfirmPassword) ? eyeIcon : eyeOffIcon}
                        alt="Toggle"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                  {errorField[field] && <span className="text-sm text-red-500">{errorField[field]}</span>}
                </div>
              ))}

              <div>
                <label className="block text-sm font-bold mb-1 text-gray-700">Security Check</label>
                <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
                  <span className="text-lg font-semibold text-gray-800">{generatedCode}</span>
                  <button type="button" onClick={generateCode} className="p-1">
                    <img src={refreshIcon} alt="Refresh Code" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1 text-gray-700">Enter Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  className={`w-full p-2 border rounded-md ${errorField.code ? "border-red-500" : ""}`}
                />
                {errorField.code && <span className="text-sm text-red-500">{errorField.code}</span>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  className="mt-1"
                />
                <label className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 underline">Terms of Service and Privacy Policy</a>
                </label>
              </div>
              {errorField.termsAccepted && <span className="text-sm text-red-500">{errorField.termsAccepted}</span>}

              <button
                type="submit"
                style={{
                  borderRadius: "4px",
                  opacity: 1,
                  background: "linear-gradient(90deg, #3B82F6 0%, #4F46E5 100%)",
                  color: "white",
                  padding: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                Create Account
              </button>

              <p className="text-sm text-center mt-2">
                Already have an account?{" "}
                <a href="/index/login" className="text-blue-600 hover:underline">Sign in</a>
              </p>
            </form>
          )}
        </div>

        <div className="w-full mt-6 text-center text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <img
              src={shield}
              alt="Shield Icon"
              className="w-4 h-4"
            />
            <span>Your data is encrypted and secure</span>
          </div>
          <p className="text-xs">
            Need help? Contact support at{' '}
            <a href="mailto:support@doctorchatbot.com" className="text-blue-600 underline">
              support@doctorchatbot.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
