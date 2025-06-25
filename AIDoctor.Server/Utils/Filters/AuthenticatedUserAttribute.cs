using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IdentityModel.Tokens.Jwt;

namespace AIDoctor.Server.Utils.Filters
{
    public class AuthenticateUserAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (context.HttpContext.User == null)
            {
                throw new InvalidOperationException("HttpContext is not available.");
            }

            Console.WriteLine(JwtRegisteredClaimNames.Sub);

            if (context.HttpContext?.User?.Identity?.IsAuthenticated != true)
            {
                throw new UnauthorizedAccessException("Authentication required.");
            }

            var userIdClaim = context.HttpContext.User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
            var userEmailClaim = context.HttpContext.User.FindFirst(JwtRegisteredClaimNames.Email)?.Value;
            Console.WriteLine($"id :{userIdClaim}");

            if (string.IsNullOrEmpty(userIdClaim) || string.IsNullOrEmpty(userEmailClaim))
            {
                throw new UnauthorizedAccessException("Missing required claims (sub or UserEmail).");
            }

            context.HttpContext.Items["UserId"] = userIdClaim;
            context.HttpContext.Items["UserEmail"] = userEmailClaim;
        } 
    }
}