using AIDoctor.Application;
using AIDoctor.Application.Services.SMTP;
using AIDoctor.Infrastructure;
using AIDoctor.Infrastructure.Utils.Exceptions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Scalar.AspNetCore;
using Serilog;
using System.Text;


Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Error() // Log errors and above
    .WriteTo.File(
        path: "logs/error-.log", // Base name; Serilog appends date
        rollingInterval: RollingInterval.Day, // New file each day
        outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss} [{Level}] {Message}{NewLine}{Exception}",
        retainedFileCountLimit: 30 // Keep 30 days of logs
    )
    .CreateLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    // Add services to the container.

    builder.Services.AddControllers();
    // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
    builder.Services.AddOpenApi();
    builder.Configuration.AddEnvironmentVariables();
    builder.Services.AddProblemDetails(); // Enables standardized error responses
    builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
    builder.Services.AddHttpContextAccessor();



    /*
     *** adds the infrastructure services (Repos, DBContext, External Services, etc)
     */
    builder.Services.AddInfrastructure(builder.Configuration);

    /*
     * adds the application services (Services, DTOs, etc)
     */
    builder.Services.AddApplication();
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

    // Added to Deploy to Azure App Service with HTTPS enabled by default
    app.UseStaticFiles();
    app.UseRouting();
    //app.UseCors("AllowAll");

    // Added to Deploy on Own Hosting Server 
    //app.UseCors("AllowFrontend");

    app.UseMiddleware<GlobalExceptionHandler>();

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    app.MapFallbackToFile("index.html");

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Host terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush(); // Ensure all logs are written
}
