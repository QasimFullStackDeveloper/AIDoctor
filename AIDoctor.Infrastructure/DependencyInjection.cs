using AIDoctor.Domain.Entities;
using AIDoctor.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AIDoctor.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            // Add DBContext with SQL Server
            services.AddDbContext<AIDoctorDBContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, IdentityRole>(Options =>
            {
                Options.Password.RequireDigit = false;
                Options.Password.RequireLowercase = false;
                Options.Password.RequireNonAlphanumeric = false;
                Options.Password.RequireUppercase = false;
                Options.Password.RequiredLength = 8;
                Options.SignIn.RequireConfirmedAccount = true;
                Options.User.RequireUniqueEmail = true;
                Options.Lockout.MaxFailedAccessAttempts = 5;
                Options.Lockout.DefaultLockoutTimeSpan = System.TimeSpan.FromMinutes(10);
            })
                .AddEntityFrameworkStores<AIDoctorDBContext>()
                .AddDefaultTokenProviders();

            return services;
        }

    }
}
