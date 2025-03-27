using AIDoctor.Application.DTOs.Auth;
using AIDoctor.Application.Services.Implementations;
using AIDoctor.Application.Services.Interfaces;
using AIDoctor.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Text;

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
        /// <param name="dTO">The SignUpDTO containing user registration details.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("Create")]
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
        /// <param name="userId">The ID of the user.</param>
        /// <returns>A Task representing the asynchronous operation, containing an object with the manual setup key and OTP auth URL.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("TFAByApp")]
        public async Task<IActionResult> TwoFactorAuthenticationByApp([FromBody] string userId)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());

            var dTO = await _authService.TwoFactorAuthenticationByAppAsync(userId);

            return Ok(dTO);
        }

        /// <summary>
        /// Generates an OTP (One-Time Password) and sends it to the user's email for two-factor authentication.
        /// </summary>
        /// <param name="userId">The ID of the user.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("TFAByEmail")]
        public async Task<IActionResult> TwoFactorAuthenticationByEmail([FromBody] string userId)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());

            await _authService.TwoFactorAuthenticationByEmailAsync(userId);
            return Ok();
        }

        /// <summary>
        /// Enables two-factor authentication for the user by verifying the provided OTP.
        /// </summary>
        /// <param name="dTO">The EnableTfaDTO containing user ID, token provider, and OTP.</param>
        /// <returns>A Task representing the asynchronous operation, containing a JWT token.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("SetupTFA")]
        public async Task<IActionResult> EnableTwoFactorAuthention([FromBody] EnableTfaDTO dTO)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            if (dTO.tokenProvider.ToLower() != "email" && dTO.tokenProvider.ToLower() != "authenticator") throw new Exception("Invalid TokenProvider, " +
                "It must be either Email or Authentuicator");
            
            var token = await _authService.EnableTwoFactorAuthentication(dTO.userId, dTO.tokenProvider, dTO.oTP);

            return Ok(token);
        }


        //                                  Login
        /// <summary>
        /// Logs in a user with the provided LoginDTO data transfer object.
        /// </summary>
        /// <param name="dTO">The LoginDTO containing user login details.</param>
        /// <returns>A Task representing the asynchronous operation, containing a JWT token.</returns>
        /// <exception cref="Exception">Thrown when model state is invalid.</exception>
        [HttpPost("Login")]
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
        [HttpPost("ForgetPassword")]
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
        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDTO dTO)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            await _authService.RestPasswordAsync(dTO);
            return Ok();
        }
    }
}
