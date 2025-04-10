using AIDoctor.Application.Services.Implementations;
using AIDoctor.Application.Services.Interfaces;
using AIDoctor.Application.Services.SMTP;
using Microsoft.Extensions.DependencyInjection;

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
