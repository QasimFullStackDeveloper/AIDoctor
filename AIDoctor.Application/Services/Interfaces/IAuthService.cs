using AIDoctor.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.Services.Interfaces
{
    public interface IAuthService
    {
        /// <summary>
        /// Registers a new user with the provided SignUpDTO data transfer object.
        /// </summary>
        /// <param name="dto">The SignUpDTO containing user registration details.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="InvalidOperationException">Thrown when user creation fails.</exception>
        Task ResgisterUserAsync(SignUpDTO dto);

        /// <summary>
        /// Generates a TOTP (Time-based One-Time Password) for two-factor authentication using an authenticator app.
        /// </summary>
        /// <param name="userId">The ID of the user.</param>
        /// <returns>A Task representing the asynchronous operation, containing an object with the manual setup key and OTP auth URL.</returns>
        /// <exception cref="ArgumentNullException">Thrown when userId or user is null.</exception>
        Task<object> TwoFactorAuthenticationByAppAsync(string userId);

        /// <summary>
        /// Generates an OTP (One-Time Password) and sends it to the user's email for two-factor authentication.
        /// </summary>
        /// <param name="userId">The ID of the user.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="ArgumentNullException">Thrown when userId, user, or user.Email is null.</exception>
        Task TwoFactorAuthenticationByEmailAsync(string userId);

        /// <summary>
        /// Enables two-factor authentication for the user by verifying the provided OTP.
        /// </summary>
        /// <param name="userId">The ID of the user.</param>
        /// <param name="tokenProvider">The token provider (e.g., "Email", "Authenticator").</param>
        /// <param name="oTP">The one-time password to verify.</param>
        /// <returns>A Task representing the asynchronous operation, containing a JWT token.</returns>
        /// <exception cref="InvalidOperationException">Thrown when OTP verification fails.</exception>
        Task<string> EnableTwoFactorAuthentication(string userId, string tokenProvider, string oTP);

        /// <summary>
        /// Logs in a user with the provided LoginDTO data transfer object.
        /// </summary>
        /// <param name="dTO">The LoginDTO containing user login details.</param>
        /// <returns>A Task representing the asynchronous operation, containing a JWT token.</returns>
        /// <exception cref="ArgumentNullException">Thrown when user is not found.</exception>
        /// <exception cref="InvalidOperationException">Thrown for 2FA or lockout scenarios.</exception>
        /// <exception cref="UnauthorizedAccessException">Thrown for invalid login attempts.</exception>
        Task<string> LoginUserAsync(LoginDTO dTO);
    }
}
