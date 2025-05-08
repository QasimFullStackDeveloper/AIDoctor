using AIDoctor.Application.DTOs.Auth;

namespace AIDoctor.Application.Services.Interfaces
{
    public interface IAuthService
    {
        /// <summary>
        /// Registers a new user with the provided SignUpDTO data transfer object.
        /// </summary>
        /// <param name="dto">The SignUpDTO containing user registration details, including full name, email, and password.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="InvalidOperationException">Thrown when user registration fails.</exception>
        Task ResgisterUserAsync(SignUpDTO dto);

        /// <summary>
        /// Generates a TOTP (Time-based One-Time Password) for two-factor authentication using an authenticator app.
        /// </summary>
        /// <param name="userEmail">The email address of the user.</param>
        /// <returns>A Task representing the asynchronous operation, containing an object with the manual setup key and OTP auth URL for the authenticator app.</returns>
        /// <exception cref="ArgumentNullException">Thrown when userEmail is null or the user is not found.</exception>
        Task<object> TwoFactorAuthenticationByAppAsync(string userEmail);

        /// <summary>
        /// Generates an OTP (One-Time Password) and sends it to the user's email for two-factor authentication.
        /// </summary>
        /// <param name="userEmail">The email address of the user.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="ArgumentNullException">Thrown when userEmail is null or the user is not found.</exception>
        Task TwoFactorAuthenticationByEmailAsync(string userEmail);

        /// <summary>
        /// Enables two-factor authentication for the user by verifying the provided OTP.
        /// </summary>
        /// <param name="userEmail">The email address of the user.</param>
        /// <param name="tokenProvider">The token provider used for verification (e.g., "Email", "Authenticator").</param>
        /// <param name="oTP">The one-time password to verify.</param>
        /// <returns>A Task representing the asynchronous operation, containing a JWT token upon successful verification.</returns>
        /// <exception cref="InvalidOperationException">Thrown when OTP verification fails.</exception>
        Task EnableTwoFactorAuthentication(string userEmail, string tokenProvider, string oTP);

        /// <summary>
        /// Logs in a user with the provided LoginDTO data transfer object.
        /// </summary>
        /// <param name="dTO">The LoginDTO containing user login details, including email, password, and optional "Remember Me" flag.</param>
        /// <returns>A Task representing the asynchronous operation, containing a JWT token upon successful login.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the user is not found.</exception>
        /// <exception cref="InvalidOperationException">Thrown for two-factor authentication or lockout scenarios.</exception>
        /// <exception cref="UnauthorizedAccessException">Thrown for invalid login attempts.</exception>
        Task<string> LoginUserAsync(LoginDTO dTO);

        /// <summary>
        /// Initiates the password reset process by generating a password reset token and sending a reset link to the user's email.
        /// </summary>
        /// <param name="_email">The email address of the user who wants to reset their password.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="ArgumentNullException">Thrown when _email is null or empty.</exception>
        /// <exception cref="InvalidOperationException">Thrown when token generation fails.</exception>
        Task ForgetPasswordAsync(string _email);

        /// <summary>
        /// Resets the user's password using the provided token and new password.
        /// </summary>
        /// <param name="dTO">A ResetPasswordDTO containing the user's email, reset token, new password, and confirmation of the new password.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="ArgumentNullException">Thrown when dTO is null or the user is not found.</exception>
        /// <exception cref="InvalidOperationException">Thrown when password reset fails.</exception>
        Task RestPasswordAsync(ResetPasswordDTO dTO);

        /// <summary>
        /// Sends a confirmation email to the specified user by their email address.
        /// </summary>
        /// <param name="userEmail">The email address of the user to whom the confirmation email will be sent.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when the user with the specified email is not found.</exception>
        /// <exception cref="ArgumentNullException">Thrown when userEmail is null.</exception>
        Task SendConfirmationEmailAsync(string userEmail);

        /// <summary>
        /// Confirms the user's email address using the provided confirmation token.
        /// </summary>
        /// <param name="dTO">An EmailConfirmationDTO containing the user's email and confirmation token.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="ArgumentNullException">Thrown when dTO is null or invalid.</exception>
        /// <exception cref="InvalidOperationException">Thrown when email confirmation fails.</exception>
        Task ConfirmUserAsync(EmailConfirmationDTO dTO);
    }
}
