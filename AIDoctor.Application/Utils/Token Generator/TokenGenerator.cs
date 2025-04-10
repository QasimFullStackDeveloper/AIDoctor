using AIDoctor.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AIDoctor.Application.Utils.Token_Generator
{
    public static class TokenGenerator
    {
        //              Generate JWT Token
        /// <summary>
        /// Generates a JWT token for the authenticated user.
        /// </summary>
        /// <param name="user">The authenticated user.</param>
        /// <returns>A JWT token as a string.</returns>
        /// <exception cref="ArgumentNullException">Thrown when JWT secret is missing in configuration.</exception>
        /// <exception cref="ArgumentException">Thrown When User Email is null or empty</exception>
        public static string GenerateJwtToken(User user, IConfiguration _configuration)
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
