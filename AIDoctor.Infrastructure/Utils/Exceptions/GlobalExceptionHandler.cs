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
            if (exception is UnauthorizedAccessException)
            {
                problemDetails.Status = (int)HttpStatusCode.Unauthorized;
                problemDetails.Title = "Unauthorized Access";
            }
            else if (exception is KeyNotFoundException)
            {
                problemDetails.Status = (int)HttpStatusCode.NotFound;
                problemDetails.Title = "Resource Not Found";
            }
            else if (exception is ValidationException validationException)
            {
                problemDetails.Status = (int)HttpStatusCode.BadRequest;
                problemDetails.Title = "Validation Error";
                //problemDetails.Extensions["errors"] = validationException.ValidationResult.MemberNames;
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
