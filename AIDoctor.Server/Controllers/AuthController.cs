using AIDoctor.Application.DTOs.Auth;
using AIDoctor.Application.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AIDoctor.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        //                                                  Registration
        /// <summary>
        /// Registers a new user with the provided SignUpDTO data transfer object.
        /// </summary>
        /// <param name="dTO">The SignUpDTO containing user registration details, including full name, email, and password.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("register")]
        public async Task<IActionResult> SignupUser([FromBody] SignUpDTO dTO)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());

            await _authService.ResgisterUserAsync(dTO);

            return Ok();
        }

        //                                                  Two Factor Authentication

        /// <summary>
        /// Generates a TOTP (Time-based One-Time Password) for two-factor authentication using an authenticator app.
        /// </summary>
        /// <param name="userEmail">The email address of the user.</param>
        /// <returns>A Task representing the asynchronous operation, containing an object with the manual setup key and OTP auth URL for the authenticator app.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("two-factor/setup-app")]
        public async Task<IActionResult> TwoFactorAuthenticationByApp([FromBody] UserEmailDto userEmail)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());

            var dTO = await _authService.TwoFactorAuthenticationByAppAsync(userEmail.Email);

            return Ok(dTO);
        }

        /// <summary>
        /// Sends a one-time password (OTP) to the user's email for two-factor authentication.
        /// </summary>
        /// <param name="userEmail">The UserEmailDto containing the user's email address.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("two-factor/setup-email")]
        public async Task<IActionResult> TwoFactorAuthenticationByEmail([FromBody] UserEmailDto userEmail)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());

            await _authService.TwoFactorAuthenticationByEmailAsync(userEmail.Email);
            return Ok();
        }

        /// <summary>
        /// Enables two-factor authentication for the user by verifying the provided OTP and token provider.
        /// </summary>
        /// <param name="dTO">The EnableTfaDTO containing user ID, token provider, and OTP.</param>
        /// <returns>A Task representing the asynchronous operation, containing a JWT token upon successful verification.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid or token provider is invalid.</exception>
        [HttpPost("two-factor/enable")]
        public async Task<IActionResult> EnableTwoFactorAuthention([FromBody] EnableTfaDTO dTO)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            if (dTO.tokenProvider.ToLower() != "email" && dTO.tokenProvider.ToLower() != "authenticator") throw new Exception("Invalid TokenProvider, " +
                "It must be either Email or Authentuicator");

            await _authService.EnableTwoFactorAuthentication(dTO.userId, dTO.tokenProvider, dTO.oTP);

            return Ok();
        }

        //                                  Login
        /// <summary>
        /// Logs in a user with the provided LoginDTO data transfer object.
        /// </summary>
        /// <param name="dTO">The LoginDTO containing user login details, including email, password, and optional "Remember Me" flag.</param>
        /// <returns>A Task representing the asynchronous operation, containing a JWT token upon successful login.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO dTO)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());

            var token = await _authService.LoginUserAsync(dTO);

            return Ok(token);
        }


        //                                  Forget/Reset Password
        /// <summary>
        /// Initiates the password reset process by generating a password reset token and sending a reset link to the user's email.
        /// </summary>
        /// <param name="email">The email address of the user who wants to reset their password.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("password/forgot")]
        public async Task<IActionResult> ForgetPassword([FromBody] string email)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());

            await _authService.ForgetPasswordAsync(email);

            return Ok();
        }

        /// <summary>
        /// Resets the user's password using the provided token and new password.
        /// </summary>
        /// <param name="dTO">A ResetPasswordDTO containing the user's email, reset token, new password, and confirmation of the new password.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("password/reset")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDTO dTO)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            await _authService.RestPasswordAsync(dTO);
            return Ok();
        }

        //                                  Email Confirmation
        /// <summary>
        /// Sends a confirmation email to the user to verify their email address.
        /// </summary>
        /// <param name="dTO">The UserEmailDto containing the user's email address.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        
        [HttpPost("/account/resend-confirmation-email")]
        public async Task<IActionResult> ConfirmEmail([FromBody] UserEmailDto dTO)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            await _authService.SendConfirmationEmailAsync(dTO.Email);
            
            return Ok();
        }


        [HttpPost("account/confirm-email")]
        public async Task<IActionResult> ConfirmUserAsync([FromBody] EmailConfirmationDTO dto)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            await _authService.ConfirmUserAsync(dto);
            return Ok();
        }
    }
}
