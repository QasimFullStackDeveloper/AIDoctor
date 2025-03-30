import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import LoginEmailSent from "./Pages/LoginEmailSent";
import LoginForgetpassword from "./Pages/LoginForgetpassword";
import LogintwoFactor from "./Pages/LogintwoFactor";
import PasswordReset from "./Pages/PasswordReset";
import Signup from "./Pages/SignupPages/SIgnup";
import Signup2factorSuccess from "./Pages/SignupPages/Signup2factorSuccess";
import SignupPage1 from "./Pages/SignupPages/SignupPage1";
import SignupPage2 from "./Pages/SignupPages/SignupPage2";
import SignupPage3 from "./Pages/SignupPages/SignupPage3";
import SignupSuccess from "./Pages/SignupPages/SignupSuccess";
import SignupTwoFactorAuth from "./Pages/SignupPages/SignuptwofactorAuth";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PremiumPlans from "./Pages/HomePages/PremiumPlans";
import FeaturesSection from "./Components/homePart3";
import HeroSection from "./Components/homePart1";
import HomePage from "./Pages/HomePages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/premium-plans" element={<PremiumPlans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/two-factor" element={<SignupTwoFactorAuth />} />
        <Route path="/signup/step-1" element={<SignupPage1 />} />
        <Route path="/signup/step-2" element={<SignupPage2 />} />
        <Route path="/signup/step-3" element={<SignupPage3 />} />
        <Route path="/signup/success" element={<SignupSuccess />} />
        <Route path="/signup/2fa-success" element={<Signup2factorSuccess />} />
        <Route path="/login/forgot-password" element={<LoginForgetpassword />} />
        <Route path="/login/two-factor" element={<LogintwoFactor />} />
        <Route path="/login/email-sent" element={<LoginEmailSent />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
};

export default App;
