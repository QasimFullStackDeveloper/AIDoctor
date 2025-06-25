using AIDoctor.Domain.Utils.CustomExceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Text.Json.Serialization;
using System.Web.Http;

namespace AIDoctor.Infrastructure.Utils.Exceptions
{
    public class GlobalExceptionHandler
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<GlobalExceptionHandler> _logger;

        public GlobalExceptionHandler(RequestDelegate next, ILogger<GlobalExceptionHandler> logger)
        {
            _next = next;
            _logger = logger;
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

        private void LogException(HttpContext context, Exception exception)
        {
            var logDetails = new
            {
                Timestamp = DateTime.UtcNow,
                RequestPath = context.Request.Path,
                RequestMethod = context.Request.Method,
                StatusCode = context.Response.StatusCode,
                ExceptionType = exception.GetType().FullName,
                ExceptionMessage = exception.Message,
                StackTrace = exception.StackTrace,
                InnerException = exception.InnerException?.Message,
                ClientIp = context.Connection.RemoteIpAddress?.ToString(),
                UserAgent = context.Request.Headers["User-Agent"].ToString()
            };

            _logger.LogError(exception,
                "Exception occurred: {ExceptionType} | Path: {RequestPath} | Method: {RequestMethod} | Details: {@LogDetails}",
                logDetails.ExceptionType,
                logDetails.RequestPath,
                logDetails.RequestMethod,
                logDetails);
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
                    problemDetails.Status = (int)HttpStatusCode.Locked;
                    problemDetails.Title = "User Locked Out";
                    break;
                case UserNotConfirmedException _:
                    problemDetails.Status = (int)HttpStatusCode.Forbidden;
                    problemDetails.Title = "User Not Confirmed";
                    break;
                case UserAlreadyRegistered _:
                    problemDetails.Status = (int)HttpStatusCode.Conflict;
                    problemDetails.Title = "User Already Registered";
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
