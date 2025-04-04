using AIDoctor.Application.DTOs.Auth;
using AIDoctor.Application.Services.Interfaces;
using AIDoctor.Application.Services.SMTP;
using AIDoctor.Application.Utils.Token_Generator;
using AIDoctor.Domain.Entities;
using AIDoctor.Domain.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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

        public async Task<object> TwoFactorAuthenticationByAppAsync(string userId)
        {
            ArgumentException.ThrowIfNullOrEmpty(userId);
            var user = await _userManager.FindByIdAsync(userId);

            ArgumentNullException.ThrowIfNull(user);


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

        public async Task TwoFactorAuthenticationByEmailAsync(string userId)
        {
            ArgumentException.ThrowIfNullOrEmpty(userId);

            var user = await _userManager.FindByIdAsync(userId);
            ArgumentNullException.ThrowIfNull(user);
            ArgumentException.ThrowIfNullOrWhiteSpace(user.Email);

            var token = await _userManager.GenerateTwoFactorTokenAsync(user, "Email");

            await _emailService.TFAEmailAsync(user.Email, token);

        }


        //              Verify (T)OTP to Enable Two Factor Authentication

        public async Task<string> EnableTwoFactorAuthentication(string userId, string tokenProvider, string oTP)
        {
            ArgumentException.ThrowIfNullOrEmpty(userId);
            ArgumentException.ThrowIfNullOrEmpty(tokenProvider);
            ArgumentException.ThrowIfNullOrWhiteSpace(oTP);

            var user = await _userManager.FindByIdAsync(userId);
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

            var user = await _userManager.FindByEmailAsync(dTO.Email);

            if (user == null) throw new ArgumentNullException(nameof(dTO), "User Not Found");

            var isEmailConfirmed = await _userManager.IsEmailConfirmedAsync(user);
            if (!isEmailConfirmed) throw new InvalidOperationException("Email is not Confirmed");

            var result = await _signInManager.PasswordSignInAsync(user, dTO.Password, dTO.RememberMe, true);


            if (result.RequiresTwoFactor)
            {
                var providers = await _userManager.GetValidTwoFactorProvidersAsync(user);
                throw new InvalidOperationException($"2 Factor Enabled with provider(s) {providers}");
            }
            else if (result.IsLockedOut)
            {
                throw new InvalidOperationException("User account is locked out.");
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

            ArgumentNullException.ThrowIfNull(user);

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
    }
}
