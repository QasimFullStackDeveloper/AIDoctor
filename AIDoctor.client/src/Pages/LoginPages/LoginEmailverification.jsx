import React, { useEffect, useState } from "react";
import Logo from "../../Components/Logo";
import emailIcon from "../../assets/document.svg";
import DocIcon from "../../assets/whiteDoc.svg";
import infoIcon from "../../assets/info.svg";

export default function EmailVerification() {
  const [emailLink, setEmailLink] = useState("#");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmailLink = async () => {
      try {
        const response = await fetch("http://localhost:7282/api/Auth/Account/confirm-email");
        const data = await response.json();
        if (data.link) {
          setEmailLink(data.link);
        } else {
          throw new Error("Link not found in response");
        }
      } catch (error) {
        console.error("Error fetching email link:", error);
        setEmailLink("#");
        setError("Failed to retrieve the email link. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmailLink();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9FAFB] px-4">
      <div className="w-[350px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[446px] xl:max-w-[500px] bg-white rounded-lg border-t-4 border-blue-600 shadow-md px-8 py-10 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-3">
          <div className="h-11 w-11">
            <Logo />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">Check Your Email</h2>

        {/* Email Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#DBEAFE] rounded-full p-4">
            <img src={emailIcon} alt="Email Icon" className="w-10 h-10" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">
          We've sent a verification link to your email. <br />
          Please check your inbox and click on the verification link to verify your email address.
        </p>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm mb-4">
            {error}
          </div>
        )}

        {/* Button */}
        <a
          href={emailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-6"
        >
          <button
            className="w-full min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition cursor-pointer flex items-center justify-center"
            disabled={loading || emailLink === "#"}
          >
            {loading ? (
              <div className="w-5 h-5">
                <div className="w-full h-full border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <img src={DocIcon} alt="Open Email App" className="w-5 h-5 mr-2" />
                <span>Open Email App</span>
              </>
            )}
          </button>
        </a>

        {/* Info Box */}
        <div className="bg-gray-100 p-3 rounded-lg flex items-start text-gray-600 text-sm">
          <img src={infoIcon} alt="Info" className="w-5 h-5 mr-2 mt-0.5" />
          <span className="sm:text-sm">
            The verification link will expire in 24 hours for security reasons. If you don’t see the email, please check your spam folder.
          </span>
        </div>
      </div>
    </div>
  );
}
