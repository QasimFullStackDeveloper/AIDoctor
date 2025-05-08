using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace AIDoctor.Server.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticatedBaseController : ControllerBase
    {
        protected string UserId => HttpContext.Items["UserId"] as string ?? throw new UnauthorizedAccessException("UserId is not available.");
        protected string UserEmail => HttpContext.Items["UserEmail"] as string ?? throw new UnauthorizedAccessException("UserEmail is not available.");

        public AuthenticatedBaseController()
        {
            if (HttpContext?.User?.Identity?.IsAuthenticated != true)
            {
                throw new UnauthorizedAccessException("Authentication required.");
            }

            var userIdClaim = HttpContext.User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
            var userEmailClaim = HttpContext.User.FindFirst(JwtRegisteredClaimNames.Email)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || string.IsNullOrEmpty(userEmailClaim))
            {
                throw new UnauthorizedAccessException("Missing required claims (sub or UserEmail).");
            }

            HttpContext.Items["UserId"] = userIdClaim;
            HttpContext.Items["UserEmail"] = userEmailClaim;
        }
    }
}
