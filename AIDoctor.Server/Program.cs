using AIDoctor.Application;
using AIDoctor.Application.Services.SMTP;
using AIDoctor.Infrastructure;
using AIDoctor.Infrastructure.Utils.Exceptions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Scalar.AspNetCore;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

//// Added Port to use on Azure
///

//builder.WebHost.ConfigureKestrel(serverOptions =>
//{
//    serverOptions.ListenAnyIP(5000); // Default for debugging
//    serverOptions.ListenAnyIP(8080); // Additional for production
//});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Configuration.AddEnvironmentVariables();
builder.Services.AddSingleton<GlobalExceptionHandler>();
builder.Services.AddProblemDetails(); // Enables standardized error responses




/*
 * adds the infrastructure services (Repos, DBContext, External Services, etc)
 */
builder.Services.AddInfrastructure(builder.Configuration);

/*
 * adds the application services (Services, DTOs, etc)
 */
builder.Services.AddApplication();
//builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
// Configure Authentication with JWT
var key = Encoding.UTF8.GetBytes(builder.Configuration["JwtSettings:Secret"] ?? throw new ArgumentNullException("Jwt:Secret is missing in appsettings.json"));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidIssuer = builder.Configuration["JwtSettings:Issuer"],
        ValidAudience = builder.Configuration["JwtSettings:Audience"]
    };
});


// Added to Deploy to Azure App Service with HTTPS enabled by default
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAll", policy =>
//    {
//        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
//    });
//});


// Added to Deploy on Own Hosting Server 
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowFrontend",
//        policy => policy
//            .WithOrigins("http://your-ip:5173")
//            .AllowAnyHeader()
//            .AllowAnyMethod());
//});



var app = builder.Build();

//if (app.Environment.IsProduction())
//{
//    builder.WebHost.ConfigureKestrel(serverOptions =>
//    {
//        serverOptions.ListenAnyIP(8080);
//    });
//}

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
app.MapOpenApi();
app.MapScalarApiReference(option =>
{
    option.Title = "AIDoctor API Reference";
    option.WithTheme(ScalarTheme.Mars);
    option.WithDefaultHttpClient(ScalarTarget.JavaScript, ScalarClient.Http);
});
//}

// Added to Deploy to Azure App Service with HTTPS enabled by default
app.UseStaticFiles();
app.UseRouting();
//app.UseCors("AllowAll");

// Added to Deploy on Own Hosting Server 
//app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
