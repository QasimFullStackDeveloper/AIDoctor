using AIDoctor.Application.DTOs.Auth;
using AIDoctor.Application.Services.Interfaces;
using AIDoctor.Application.Services.SMTP;
using AIDoctor.Application.Utils.Token_Generator;
using AIDoctor.Domain.Entities;
using AIDoctor.Domain.Enums;
using AIDoctor.Domain.Utils.CustomExceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace AIDoctor.Application.Services.Implementations
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly EmailService _emailService;
        private readonly IConfiguration _configuration;

        public AuthService(UserManager<User> userManager, SignInManager<User> signInManager, EmailService emailService,
                            IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailService = emailService;
            _configuration = configuration;
        }


        // Find User by Email

        private async Task<User> GetUserAsync(string email)
        {
            ArgumentNullException.ThrowIfNullOrWhiteSpace(email);
            var user = await _userManager.FindByEmailAsync(email) ?? throw new KeyNotFoundException("User Not Found");
            return user;
        }


        //                                  Registeration/Signup
        public async Task ResgisterUserAsync(SignUpDTO dto)
        {
            ArgumentNullException.ThrowIfNull(dto);

            var user = new User()
            {
                Email = dto.Email,
                UserName = dto.FullName,
                Role = UserRoles.Default
            };
            var result = await _userManager.CreateAsync(user, dto.Password);
            if (!result.Succeeded) throw new InvalidOperationException("Something went wrong when creating User");
        }



        //                                  Two Factor Authentication


        //              Create TOTP via Authenticator App

        public async Task<object> TwoFactorAuthenticationByAppAsync(string userEmail)
        {
            ArgumentException.ThrowIfNullOrEmpty(userEmail);
            var user = await GetUserAsync(userEmail);


            await _userManager.ResetAuthenticatorKeyAsync(user);
            var app2FAToken = await _userManager.GetAuthenticatorKeyAsync(user);

            var manualSetupKey = app2FAToken?.Replace(" ", "").Replace("-", "");
            string otpAuthUrl = $"otpauth://totp/IdentityProject2:{user.Email}?secret={manualSetupKey}&issuer=IdentityProject2";
            return () =>
            {
                var ManualSetupKey = manualSetupKey;
                string OtpAuthUrl = otpAuthUrl;

            };
        }

        //              Create OTP via Email

        public async Task TwoFactorAuthenticationByEmailAsync(string userEmail)
        {
            ArgumentException.ThrowIfNullOrEmpty(userEmail);

            var user = await GetUserAsync(userEmail);

            ArgumentException.ThrowIfNullOrWhiteSpace(user.Email);

            var token = await _userManager.GenerateTwoFactorTokenAsync(user, "Email");

            await _emailService.TFAEmailAsync(user.Email, token);

        }




        //              Verify (T)OTP to Enable Two Factor Authentication

        public async Task<string> EnableTwoFactorAuthentication(string userEmail, string tokenProvider, string oTP)
        {
            ArgumentException.ThrowIfNullOrEmpty(userEmail);
            ArgumentException.ThrowIfNullOrEmpty(tokenProvider);
            ArgumentException.ThrowIfNullOrWhiteSpace(oTP);

            var user = await GetUserAsync(userEmail);
            ArgumentNullException.ThrowIfNull(user);

            var result = await _userManager.VerifyTwoFactorTokenAsync(user, tokenProvider, oTP);
            if (!result) throw new InvalidOperationException("Invalid OTP");

            await _userManager.SetTwoFactorEnabledAsync(user, result);
            await _signInManager.SignInAsync(user, isPersistent: false);
            return TokenGenerator.GenerateJwtToken(user, _configuration);
        }



        //              Login User

        public async Task<string> LoginUserAsync(LoginDTO dTO)
        {
            ArgumentNullException.ThrowIfNull(dTO);

            var user = await _userManager.FindByEmailAsync(dTO.Email) ?? throw new KeyNotFoundException("User Not Found");

            var isEmailConfirmed = await _userManager.IsEmailConfirmedAsync(user);
            if (!isEmailConfirmed)
            {
                await SendConfirmationEmailAsync(user);
                throw new UserNotConfirmedException("Email is not Confirmed");
            }

            var result = await _signInManager.PasswordSignInAsync(user, dTO.Password, dTO.RememberMe, true);


            if (result.RequiresTwoFactor)
            {
                var providerList = await _userManager.GetValidTwoFactorProvidersAsync(user);
                throw new TwoFactorRequiredException($"Two Factor Required", providerList);
            }
            else if (result.IsLockedOut)
            {
                throw new UserLockedOutException("User account is locked out.");
            }
            else if (!result.Succeeded)
            {
                await _userManager.AccessFailedAsync(user);
                throw new UnauthorizedAccessException("Invalid login attempt.");
            }

            var token = TokenGenerator.GenerateJwtToken(user, _configuration);

            return token;
        }






        //              Forget Passwords

        public async Task ForgetPasswordAsync(string _email)
        {
            ArgumentNullException.ThrowIfNullOrWhiteSpace(_email);

            var user = await _userManager.FindByEmailAsync(_email);

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);

            if (string.IsNullOrWhiteSpace(token)) throw new InvalidOperationException("Something went wrong");

            var values = new ForgetPasswordDTO
            {
                Email = _email,
                Token = token
            };
            var baseURL = _configuration["AppSettings:ClientUrl"];
            var resetLink = $"{baseURL}/Account/resetpassword?email={values.Email}&token={values.Token}";

            await _emailService.SendResetLinkAsync(_email, resetLink);

        }

        public async Task RestPasswordAsync(ResetPasswordDTO dTO)
        {
            ArgumentNullException.ThrowIfNull(dTO);

            var user = await _userManager.FindByEmailAsync(dTO.Email);
            ArgumentNullException.ThrowIfNull(user);

            var result = await _userManager.ResetPasswordAsync(user, dTO.Token, dTO.NewPassword);
            if (!result.Succeeded) throw new InvalidOperationException("Something went wrong");

            await _emailService.SendResetPasswordConfirmationAsync(dTO.Email);

            return;
        }


        // Confimation Email

        private async Task SendConfirmationEmailAsync(User user)
        {
            if (user is null || string.IsNullOrWhiteSpace(user.Email)) throw new ArgumentNullException(nameof(user));


            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            var confirmationLink = $"{_configuration["ClientSettings:Url"]}/Account/confirmemail?email={user.Email}&token={token}";
            await _emailService.SendConfirmationEmailLinkAsync(user.Email, confirmationLink);
        }


        /// <summary>
        /// Sends a confirmation email to the specified user by their email address.
        /// </summary>
        /// <param name="userEmail">The email address of the user to whom the confirmation email will be sent.</param>
        /// <returns>A Task representing the asynchronous operation.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when the user with the specified email is not found.</exception>
        /// <exception cref="ArgumentNullException">Thrown when the user or their email is null.</exception>
        public async Task SendConfirmationEmailAsync(string userEmail)
        {
            var user = await GetUserAsync(userEmail);
            await SendConfirmationEmailAsync(user);
        }
    }
}
