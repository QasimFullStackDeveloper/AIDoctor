import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo";
import { HiOutlineMail, HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi"; // Updated icons
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
    const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    setGeneratedCode(randomCode);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setErrorField({ ...errorField, [name]: "" });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Invalid email format";
    if (formData.password.length < 6) errors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";
    if (formData.code.trim() !== generatedCode) errors.code = "Incorrect code";
    if (!formData.termsAccepted) errors.termsAccepted = "You must accept the terms";

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
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-100 overflow-hidden">
      {/* Left Image Section */}
      <div className="hidden md:flex w-[40%] lg:w-[50%] h-screen min-h-[768px]">
        <LeftImage />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-[60%] lg:w-[50%] flex justify-center items-center px-4 py-8 overflow-auto max-h-screen">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Create Your Account
          </h3>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full">
                <label className="block text-sm font-bold mb-1 text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${errorField.firstName ? "border-red-500" : ""}`}
                />
                {errorField.firstName && (
                  <span className="text-sm text-red-500">{errorField.firstName}</span>
                )}
              </div>
              <div className="w-full">
                <label className="block text-sm font-bold mb-1 text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${errorField.lastName ? "border-red-500" : ""}`}
                />
                {errorField.lastName && (
                  <span className="text-sm text-red-500">{errorField.lastName}</span>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-1 text-gray-700">Email Address</label>
              <div className="relative">
                <HiOutlineMail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-2xl mt-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 pl-12 border rounded-md ${errorField.email ? "border-red-500" : ""}`}
                />
              </div>
              {errorField.email && (
                <span className="text-sm text-red-500">{errorField.email}</span>
              )}
            </div>

            {/* Password & Confirm Password */}
            {["password", "confirmPassword"].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-bold mb-1 text-gray-700">
                  {field === "password" ? "Password" : "Confirm Password"}
                </label>
                <div className="relative">
                  <HiLockClosed className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-2xl mt-3" />
                  <input
                    type={(field === "password" && showPassword) || (field === "confirmPassword" && showConfirmPassword)
                      ? "text"
                      : "password"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full p-2 pl-12 pr-12 border rounded-md ${errorField[field] ? "border-red-500" : ""}`}
                  />
                  {(field === "password" || field === "confirmPassword") && (
                    <span
                      onClick={() =>
                        field === "password"
                          ? setShowPassword(!showPassword)
                          : setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    >
                      {field === "password" && showPassword || field === "confirmPassword" && showConfirmPassword ? (
                        <HiEye className=" absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 text-2xl mt-3" />
                      ) : (
                        <HiEyeOff className="text-gray-400 text-2xl mt-5 " />
                      )}
                    </span>
                  )}
                </div>
                {errorField[field] && (
                  <span className="text-sm text-red-500">{errorField[field]}</span>
                )}
              </div>
            ))}

            {/* Security Code */}
            <div>
              <label className="block text-sm font-bold mb-1 text-gray-700">Security Check</label>
              <p className="text-gray-600 text-sm mb-2">Enter the code shown: <strong>{generatedCode}</strong></p>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md ${errorField.code ? "border-red-500" : ""}`}
              />
              {errorField.code && (
                <span className="text-sm text-red-500">{errorField.code}</span>
              )}
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
                I agree to the <a href="#" className="text-blue-600 underline">Terms of Service and Privacy Policy</a>
              </label>
            </div>
            {errorField.termsAccepted && (
              <span className="text-sm text-red-500">{errorField.termsAccepted}</span>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Create Account
            </button>

            {/* Sign In Link */}
            <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">Sign in</a>
            </p>
          </form>
        </div>
      </div>
      <style jsx>{`
  @media (min-height: 700px) and (max-height 800) {
    .form-container {
      max-height: 92vh;
      padding: 1rem;
      overflow: hiden;
    }

    .form-container h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .form-container form {
      gap: 1rem;
    }

    .form-container input,
    .form-container button {
      padding: 0.5rem;
      font-size: 0.875rem;
    }

    .form-container label {
      font-size: 0.75rem;
    }

    .form-container .text-sm {
      font-size: 0.7rem;
    }
  }
`}</style>

    </div>
  );
}
