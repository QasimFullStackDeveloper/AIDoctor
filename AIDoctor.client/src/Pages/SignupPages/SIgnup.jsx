import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.jsx";
import { FaEye, FaShieldAlt, FaEnvelope } from "react-icons/fa";
import LeftImage from "../../Components/LeftImage";

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

  useEffect(() => {
    const generateCode = () => {
      const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
      setGeneratedCode(randomCode);
    };
    generateCode();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrorField({ ...errorField, [name]: "" });
  };

  const validate = () => {
    let errors = {};
    if (!formData.firstName.trim()) errors.firstName = true;
    if (!formData.lastName.trim()) errors.lastName = true;
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = true;
    if (formData.password.length < 6) errors.password = "Password must be at least 6 characters long";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = true;
    if (formData.code.trim() !== generatedCode) errors.code = true;
    if (!formData.termsAccepted) errors.termsAccepted = true;

    setErrorField(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/signup/two-factor");
    }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden relative bg-blue-100">
      {/* Left Side */}
      <LeftImage />

      {/* Right Side - Form */}
      <div className="w-[50%] h-full flex flex-col justify-center items-center bg-blue-100 p-6 gap-4">
        <div className="w-full max-w-[450px] h-auto bg-white flex flex-col gap-4 p-6 mt-[-40px]"> {/* Added mt-[-40px] */}
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo className="w-28 h-28" /> {/* Adjust logo size */}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 text-center">Create Your Account</h3>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="flex gap-5">
              <div className="w-1/2">
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-base"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-base"
                />
              </div>
            </div>

            {/* Email Field */}
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 pl-12 border rounded-md text-base"
              />
            </div>

            {/* Password Fields */}
            {["password", "confirmPassword"].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {field === "password" ? "Password" : "Confirm Password"}
                </label>
                <div className="relative">
                  <FaShieldAlt className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={field === "password" ? (showPassword ? "text" : "password") : showConfirmPassword ? "text" : "password"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-2 pl-12 pr-12 border rounded-md text-base"
                  />
                  <FaEye
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() =>
                      field === "password"
                        ? setShowPassword(!showPassword)
                        : setShowConfirmPassword(!showConfirmPassword)
                    }
                  />
                </div>
              </div>
            ))}

            {/* Security Check */}
            <label className="block text-sm font-bold text-gray-700 mb-2">Security Check</label>
            <p className="text-gray-500 text-sm mb-4">Enter the code shown: {generatedCode}</p>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-base"
            />

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3 mt-3">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-5 h-5 mt-1"
              />
              <label className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 underline">Terms of Service and Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6054ff] text-white  rounded-md text-base font-semibold hover:bg-[#4f43d8]"
            >
              Create Account
            </button>

            {/* Sign-in Link */}
            <p className="text-sm text-center">
              Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
