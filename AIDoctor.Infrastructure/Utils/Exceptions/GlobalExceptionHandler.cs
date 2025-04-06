using AIDoctor.Domain.Utils.CustomExceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.ExceptionHandling;

namespace AIDoctor.Infrastructure.Utils.Exceptions
{
    public class GlobalExceptionHandler
    {
        private readonly RequestDelegate _next;

        public GlobalExceptionHandler(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var problemDetails = new ExtendedProblemDetails
            {
                Status = (int)HttpStatusCode.InternalServerError,
                Title = "An unexpected error occurred",
                Detail = exception.Message,
                Instance = context.Request.Path
            };

            // Handle specific exception types
            switch (exception)
            {
                case UnauthorizedAccessException _:
                    problemDetails.Status = (int)HttpStatusCode.Unauthorized;
                    problemDetails.Title = "Unauthorized Access";
                    break;
                case KeyNotFoundException _:
                    problemDetails.Status = (int)HttpStatusCode.NotFound;
                    problemDetails.Title = "Resource Not Found";
                    break;
                case ValidationException _:
                    problemDetails.Status = (int)HttpStatusCode.BadRequest;
                    problemDetails.Title = "Validation Error";
                    break;
                case InvalidOperationException _:
                    problemDetails.Status = (int)HttpStatusCode.Conflict;
                    problemDetails.Title = "Invalid Operation";
                    break;
                case TimeoutException _:
                    problemDetails.Status = (int)HttpStatusCode.RequestTimeout;
                    problemDetails.Title = "Request Timeout";
                    break;
                case ArgumentOutOfRangeException _:
                    problemDetails.Status = (int)HttpStatusCode.BadRequest;
                    problemDetails.Title = "Argument Out of Range";
                    break;
                case UserLockedOutException _:
                    problemDetails.Status = (int)HttpStatusCode.Forbidden;
                    problemDetails.Title = "User Locked Out";
                    break;
                case UserNotConfirmedException _:
                    problemDetails.Status = (int)HttpStatusCode.Forbidden;
                    problemDetails.Title = "User Not Confirmed";
                    break;
                case TwoFactorRequiredException twoFactorRequiredException:
                    problemDetails.Status = (int)HttpStatusCode.Unauthorized;
                    problemDetails.Title = "Two-Factor Authentication Required";
                    problemDetails.Detail = "Two-Factor Authentication is required.";
                    problemDetails.Extensions["ProviderList"] = twoFactorRequiredException.ProviderList;
                    break;
                default:
                    problemDetails.Status = (int)HttpStatusCode.InternalServerError;
                    problemDetails.Title = "An unexpected error occurred";
                    problemDetails.Detail = "An unexpected error occurred. Please try again later.";
                    break;
            }

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = problemDetails.Status.Value;
            return context.Response.WriteAsync(Newtonsoft.Json.JsonConvert.SerializeObject(problemDetails));
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

    public class ExtendedProblemDetails : ProblemDetails
    {
        [JsonPropertyOrder(100)]
        public IDictionary<string, object> Extensions { get; set; } = new Dictionary<string, object>();
    }
}
