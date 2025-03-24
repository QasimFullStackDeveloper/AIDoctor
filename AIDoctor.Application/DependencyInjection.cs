using AIDoctor.Application.Services.Implementations;
using AIDoctor.Application.Services.Interfaces;
using AIDoctor.Application.Services.SMTP;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddSingleton<EmailService>();
            services.AddTransient<IAuthService, AuthService>();
            return services;
        }

    }
}
