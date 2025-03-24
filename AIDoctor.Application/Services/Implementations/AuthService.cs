using AIDoctor.Application.DTOs;
using AIDoctor.Application.Services.Interfaces;
using AIDoctor.Application.Services.SMTP;
using AIDoctor.Domain.Entities;
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
            return GenerateJwtToken(user);
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

            var token = GenerateJwtToken(user);

            return token;
        }


        //              Generate JWT Token
        /// <summary>
        /// Generates a JWT token for the authenticated user.
        /// </summary>
        /// <param name="user">The authenticated user.</param>
        /// <returns>A JWT token as a string.</returns>
        /// <exception cref="ArgumentNullException">Thrown when JWT secret is missing in configuration.</exception>
        /// <exception cref="ArgumentException">Thrown When User Email is null or empty</exception>
        private string GenerateJwtToken(User user)
        {
            ArgumentException.ThrowIfNullOrWhiteSpace(user.Email);
            var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:Secret"] ?? throw new ArgumentNullException("Jwt:Secret is missing in appsettings.json")));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.UtcNow.AddHours(3);

            var token = new JwtSecurityToken(
                _configuration["JwtSettings:Issuer"],
                _configuration["JwtSettings:Audience"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
