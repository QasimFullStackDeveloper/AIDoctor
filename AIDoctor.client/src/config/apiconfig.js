// src/config/apiConfig.js
const BASE_URL = "http://139.185.55.205:8080";

const apiEndpoints = {
  register: `${BASE_URL}/api/Auth/register`,
  emailVerify: `${BASE_URL}/api/Auth/Account/confirm-email`,
  twofactorEnabled: `${BASE_URL}/api/Auth/Account/enabled`,
  forgotPassword: `${BASE_URL}/Auth/ForgotPassword`,
  login: `${BASE_URL}/Auth/Login`,
  userProfile: `${BASE_URL}/User/Profile`,
};

export default apiEndpoints;
