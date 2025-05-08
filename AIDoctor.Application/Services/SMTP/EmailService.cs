using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;

namespace AIDoctor.Application.Services.SMTP
{
    public class EmailService
    {
        private readonly EmailSettings _emailSettings;

        public EmailService(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public async Task SendEmailAsync(string reciverEmail, string subject, string body)
        {
            var mailMessage = new MailMessage();
            mailMessage.From = new MailAddress(_emailSettings.FromEmail);
            mailMessage.To.Add(reciverEmail);
            mailMessage.Subject = subject;
            mailMessage.Body = body;
            mailMessage.IsBodyHtml = true;

            using var smtpClient = new SmtpClient(_emailSettings.SmtpServer, _emailSettings.Port)
            {
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(_emailSettings.FromEmail, _emailSettings.Password),
                EnableSsl = true
            };

            await smtpClient.SendMailAsync(mailMessage);

        }

        public async Task TFAEmailAsync(string reciverEmail, string token)
        {
            var subject = "Enable Two-Factor Authentication (2FA) – Your One-Time Password (OTP)";
            var body = $"<strong>Hello Dear User</strong>,<br>" +
                $"Thank you for taking steps to secure your AiDoctor account! To enable Two-Factor Authentication (2FA), please use the following One-Time Password (OTP):<br>" +
                $"<strong>Your OTP Code: {token}</strong><br>" +
                $"This code will expire in 15 minutes for your security. Do not share it with anyone.<br>" +
                $"<strong>Next Steps:</strong><br>" +
                $"1. Enter the OTP in the verification field on our site.<br>" +
                $"2. Complete the setup to activate 2FA and keep your account safe.<br>" +
                $"If you didn’t request this, no action is needed—feel free to ignore this email or contact us at <a href=\"mailto:[Support Email]\">[Support Email]</a>.<br>" +
                $"Best regards,<br>" +
                $"The AiDoctor Team<br>" +
                $"<a href=\"[Your Company Website]\">[Your Company Website]</a>";

            await SendEmailAsync(reciverEmail, subject, body);
        }

        public async Task SendResetLinkAsync(string recieverEmail, string resetLink)
        {
            var subject = "Reset Your Password";
            var body = $"<strong>Hello Dear User</strong>,<br>" +
                $"We received a request to reset your password for your AiDoctor account. Click the link below to set a new password:<br>" +
                $"<a href=\"{resetLink}\">Reset Your Password</a><br>" +
                $"This link will expire in 24 hours for security. If you didn’t request a password reset, feel free to ignore this email—no action is needed.<br>" +
                $"Best regards,<br>" +
                $"The AiDoctor Team";

            await SendEmailAsync(recieverEmail, subject, body);
        }

        public async Task SendResetPasswordConfirmationAsync(string recieverEmail)
        {
            var subject = "Password Reset Confirmation";
            var body = $"<strong>Hello Dear User</strong>,<br>" +
                $"Great news! Your AiDoctor account password has been successfully reset.<br>" +
                $"If you didn’t make this change, please contact our support team immediately at <a href=\"mailto:[Support Email]\">[Support Email]</a>.<br>" +
                $"Best regards,<br>" +
                $"The AiDoctor Team";

            await SendEmailAsync(recieverEmail, subject, body);
        }

        public async Task SendConfirmationEmailLinkAsync(string recieverEmail, string confirmationLink)
        {
            var subject = "Confirm Your Email";
            var body = $"<strong>Hello Dear User</strong>,<br>" +
                $"Thank you for joining AiDoctor! Please click the link below to confirm your email address and get started:<br>" +
                $"<a href=\"{confirmationLink}\">Confirm Your Email</a><br>" +
                $"This link will expire in 24 hours. If you didn’t sign up, feel free to ignore this email—no action is needed.<br>" +
                $"Best regards,<br>" +
                $"The AiDoctor Team";
            await SendEmailAsync(recieverEmail, subject, body);
        }
    }
}
