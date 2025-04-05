using AIDoctor.Domain.Utils.CustomExceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.ExceptionHandling;

namespace AIDoctor.Infrastructure.Utils.Exceptions
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        public async Task HandleAsync(ExceptionHandlerContext context, CancellationToken cancellationToken)
        {
            var exception = context.Exception;

            var problemDetails = new ProblemDetails
            {
                Status = (int)HttpStatusCode.InternalServerError,
                Title = "An unexpected error occurred",
                Detail = exception.Message,
                Instance = context.Request.RequestUri.ToString()
            };

            // Handle specific exception types
            switch (exception)
            {
                // When: User tries to access a resource they are not authorized to access
                // Where: Authorization checks
                case UnauthorizedAccessException _:
                    problemDetails.Status = (int)HttpStatusCode.Unauthorized;
                    problemDetails.Title = "Unauthorized Access";
                    break;

                // When: A requested resource is not found
                // Where: Data retrieval operations
                case KeyNotFoundException _:
                    problemDetails.Status = (int)HttpStatusCode.NotFound;
                    problemDetails.Title = "Resource Not Found";
                    break;

                // When: Validation of input data fails
                // Where: Data validation logic
                case ValidationException _:
                    problemDetails.Status = (int)HttpStatusCode.BadRequest;
                    problemDetails.Title = "Validation Error";
                    //problemDetails.Extensions["errors"] = validationException.ValidationResult.MemberNames;
                    break;

                // When: A method receives a null argument that it does not accept
                // Where: Method argument checks
                case ArgumentNullException _:
                    problemDetails.Status = (int)HttpStatusCode.BadRequest;
                    problemDetails.Title = "Argument Null Error";
                    break;

                // When: An operation is not valid in the current state
                // Where: State-dependent operations
                case InvalidOperationException _:
                    problemDetails.Status = (int)HttpStatusCode.Conflict;
                    problemDetails.Title = "Invalid Operation";
                    break;

                // When: An operation times out
                // Where: Long-running operations
                case TimeoutException _:
                    problemDetails.Status = (int)HttpStatusCode.RequestTimeout;
                    problemDetails.Title = "Request Timeout";
                    break;

                // When: An argument is out of the allowable range of values
                // Where: Method argument checks
                case ArgumentOutOfRangeException _:
                    problemDetails.Status = (int)HttpStatusCode.BadRequest;
                    problemDetails.Title = "Argument Out of Range";
                    break;

                // When: User is locked out
                // Where: User authentication
                case UserLockedOutException _:
                    problemDetails.Status = (int)HttpStatusCode.Forbidden;
                    problemDetails.Title = "User Locked Out";
                    break;

                // When: User's email or account is not verified/confirmed
                // Where: User authentication
                case UserNotConfirmedException _:
                    problemDetails.Status = (int)HttpStatusCode.Forbidden;
                    problemDetails.Title = "User Not Confirmed";
                    break;

                // When: User sign-in requires two-factor authentication
                // Where: User authentication
                case TwoFactorRequiredException _:
                    problemDetails.Status = (int)HttpStatusCode.Unauthorized;
                    problemDetails.Title = "Two-Factor Authentication Required";
                    break;

                // Default case for unexpected errors
                default:
                    problemDetails.Status = (int)HttpStatusCode.InternalServerError;
                    problemDetails.Title = "An unexpected error occurred";
                    break;
            }

            var response = context.Request.CreateResponse((HttpStatusCode)problemDetails.Status, problemDetails);
            response.Content = new StringContent(Newtonsoft.Json.JsonConvert.SerializeObject(problemDetails), Encoding.UTF8, "application/json");

            context.Result = new ExceptionHandlerResult(response);
        }
    }

    public class ExceptionHandlerResult : IHttpActionResult
    {
        private readonly HttpResponseMessage _response;

        public ExceptionHandlerResult(HttpResponseMessage response)
        {
            _response = response;
        }

        public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
        {
            return Task.FromResult(_response);
        }
    }

    
}
