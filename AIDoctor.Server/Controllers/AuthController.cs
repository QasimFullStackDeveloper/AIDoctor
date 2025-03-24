using AIDoctor.Application.DTOs;
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

            var token = await _authService.EnableTwoFactorAuthentication(dTO.userId, dTO.tokenProvider, dTO.oTP);

            return Ok(token);
        }
    }
}
