import React, { useEffect, useState } from 'react';
import Logo from '../../Components/Logo';
import tickmark from "../../assets/properTickmark.svg";
import shield from "../../assets/greenShield.svg";
import arrow from "../../assets/leftArrow.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';

export default function EmailSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      const queryParams = new URLSearchParams(location.search);
      const email = queryParams.get('email');
      const token = queryParams.get('token');

      if (!email || !token) {
        setError("Missing email or token in the URL.");
        setVerifying(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:7282/api/Auth/Account/enabled", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, token }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Verification failed.");
        }

        setVerifying(false);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong.");
        setVerifying(false);
      }
    };

    verifyEmail();
  }, [location.search]);

  if (verifying) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f9fafb]">
        <Loading className="w-8 h-8 text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f9fafb]">
        <div className="bg-white border-t-4 border-red-500 p-6 rounded-lg shadow-md text-center max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-2">Verification Failed</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9fafb] px-4">
      <div className="w-[330px] sm:max-w-[400px] lg:max-w-[446px] xl:max-w-[500px] bg-white py-8 px-6 rounded-lg shadow-lg text-center border-t-4 border-blue-500 transition duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <Logo className="w-16 h-16" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Email Verified!
        </h2>

        {/* Checkmark */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
            <img src={tickmark} alt="Verified" className="w-6 h-6" />
          </div>
        </div>

        {/* Messages */}
        <p className="text-gray-600 text-sm mb-1">
          Your email has been successfully verified
        </p>
        <p className="text-gray-600 text-sm mb-4">
          You can now access all features of your account
        </p>

        {/* Button */}
        <Link to="/signup/step-1" className="block">
          <button className="bg-blue-600 text-white text-sm font-semibold py-2.5 w-full rounded-md transition duration-300 hover:bg-blue-700 hover:scale-105 flex justify-center items-center gap-2 shadow-md">
            <img src={arrow} alt="Back" className="w-4 h-4" />
            Back to login
          </button>
        </Link>

        {/* Info Box */}
        <div className="bg-green-50 text-blue-700 text-xs p-3 mt-5 rounded-lg flex items-start gap-2 shadow-sm">
          <img src={shield} alt="Shield" className="w-4 h-4 mt-0.5 opacity-80" />
          <p>
            Your account is now secure and ready to use. You'll receive a confirmation email shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
