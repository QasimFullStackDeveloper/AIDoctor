import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/left-image.png";
import Logo from "../../assets/logo";
import shield from '../../../public/Shield.svg';
import eye from '../../../public/eye.svg';

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
    <div className="bg-blue-100">
      <div className="flex w-full h-screen overflow-hidden">
        <div className="hidden md:flex w-1/2 bg-gray-300 animate-slideIn">
          <img src={image} alt="Background" className="w-full h-screen object-cover" />
        </div>

        <div className="flex-1 flex justify-center items-center p-6">
          <div className="w-full max-w-[350px] max-h-[600px] p-4 bg-white rounded-xl shadow-lg text-center animate-fadeIn">
            <h2 className="text-2xl ml-[125px] font-bold text-blue-600 mb-2">
              <Logo />
            </h2>
            <h3 className="text-lg font-bold mb-1">Create Your Account</h3>

            <form className="text-left space-y-3" onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-gray-700 mb-1">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full p-2 border ${errorField.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md text-xs`} />
                </div>
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full p-2 border ${errorField.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md text-xs`} />
                </div>
              </div>
              
              <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full p-2 border ${errorField.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-xs`} />
              
              {['password', 'confirmPassword', 'code'].map((field, index) => (
                <div key={index} className="relative">
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {field === 'password' ? 'Password' : field === 'confirmPassword' ? 'Confirm Password' : 'Code'}
                  </label>
                  <div className={`flex items-center border ${errorField[field] ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}>
                    <img src={shield} alt="icon" className="w-5 h-5 mr-2" />
                    <input
                      type={field === "code" ? "text" : "password"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="flex-1 text-xs outline-none"
                    />
                    <img src={eye} alt="icon" className="w-5 h-5 ml-2" />
                  </div>
                  {field === "password" && errorField.password && <p className="text-red-500 text-xs mt-1">{errorField.password}</p>}
                </div>
              ))}

              <p className="text-gray-500 text-xs mb-2">Enter the code shown: {generatedCode}</p>

              <div className="flex items-center gap-2">
                <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="w-4 h-4" />
                <label className="text-xs text-gray-700">I accept the <a href="#" className="text-blue-500 underline">terms & conditions</a></label>
              </div>
              {errorField.termsAccepted && <p className="text-red-500 text-xs mt-1">You must accept the terms & conditions</p>}

              <button type="submit" className="w-full bg-blue-600 text-white p-2 mt-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                Create Account
              </button>
              <p className="text-xs mt-2">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
