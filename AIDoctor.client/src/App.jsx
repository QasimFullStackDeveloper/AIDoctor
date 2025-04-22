import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPages/Login";
import LoginEmailSent from "./Pages/LoginPages/LoginEmailSent";
import LoginForgetpassword from "./Pages/LoginPages/LoginForgetpassword";
import LogintwoFactor from "./Pages/LoginPages/LogintwoFactor";
import PasswordReset from "./Pages/PasswordReset";
import Signup from "./Pages/SignupPages/SIgnup";
import Signup2factorSuccess from "./Pages/SignupPages/Signup2factorSuccess";
import SignupPage1 from "./Pages/SignupPages/SignupPage1";
import SignupPage2 from "./Pages/SignupPages/SignupPage2";
import SignupPage3 from "./Pages/SignupPages/SignupPage3";
import EmailSuccess from "./Pages/LoginPages/LoginSuccess";
import SignupTwoFactorAuth from "./Pages/SignupPages/SignuptwofactorAuth";
import PremiumPlans from "./Pages/HomePages/PremiumPlans";
import HomePage from "./Pages/HomePages/HomePage";
import EmailVerification from "./Pages/LoginPages/LoginEmailverification";
import LoadingSpinner from "./Components/Loading";
import Loading from "./Components/Loading";


const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/index" element={<HomePage />} />
        <Route path="/index/premium-plans" element={<PremiumPlans />} />
        <Route path="/index/signup" element={<Signup />} />
        <Route path="/index/signup/two-factor" element={<SignupTwoFactorAuth />} />
        <Route path="/index/signup/step-1" element={<SignupPage1 />} />
        <Route path="/index/signup/step-2" element={<SignupPage2 />} />
        <Route path="/index/signup/step-3" element={<SignupPage3 />} />
        <Route path="/index/signup/2fa-success" element={<Signup2factorSuccess />} />
        <Route path="/index/login" element={<Login />} />
        <Route path="/index/login/success" element={<EmailSuccess />} />
        <Route path="/index/login/forgot-password" element={<LoginForgetpassword />} />
        <Route path="/index/login/two-factor" element={<LogintwoFactor />} />
        <Route path="/index/login/email-success" element={<EmailVerification />}/>
        <Route path="/index/login/email-sent" element={<LoginEmailSent />} />
        <Route path="/index/password-reset" element={<PasswordReset />} />
        <Route path="/index/load" element={<Loading/>}/>
      </Routes>
    </Router>
  );
};

export default App;
