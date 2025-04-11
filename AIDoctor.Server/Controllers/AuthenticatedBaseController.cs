using AIDoctor.Server.Utils.Filters;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IdentityModel.Tokens.Jwt;

namespace AIDoctor.Server.Controllers
{
    [AuthenticateUser]
    public class AuthenticatedBaseController : ControllerBase
    {
        protected string UserId => HttpContext.Items["UserId"] as string ?? throw new UnauthorizedAccessException("UserId is not available.");
        protected string UserEmail => HttpContext.Items["UserEmail"] as string ?? throw new UnauthorizedAccessException("UserEmail is not available.");

        public AuthenticatedBaseController()
        {
            
        }
    }
}
