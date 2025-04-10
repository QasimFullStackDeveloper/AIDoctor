using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace AIDoctor.Server.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticatedBaseController : ControllerBase
    {
        protected int UserId => (int)HttpContext.Items["UserId"];
        protected string UserEmail => (string)HttpContext.Items["UserEmail"];

        public AuthenticatedBaseController()
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
            {
                throw new UnauthorizedAccessException("Authentication required.");
            }

            var userIdClaim = HttpContext.User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
            var UserEmailClaim = HttpContext.User.FindFirst(JwtRegisteredClaimNames.Email)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || string.IsNullOrEmpty(UserEmailClaim))
            {
                throw new UnauthorizedAccessException("Missing required claims (sub or UserEmail).");
            }

            HttpContext.Items["UserId"] = int.Parse(userIdClaim);
            HttpContext.Items["UserEmail"] = UserEmailClaim;
        }
    }
}
