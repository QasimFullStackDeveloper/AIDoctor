using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;

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
            var body = $"<strong>Dear User,</strong>  \r\n\r\nTo enhance the security of your account, " +
                $"we require verification through Two-Factor Authentication (2FA). " +
                $"Please use the following One-Time Password (OTP) to enable 2FA on your account:  \r\n\r\n" +
                $"<strong>Your OTP Code: {token}</strong>  \r\n\r\n Do not share this code with anyone. " +
                $"If you did not request this, please ignore this email or contact our support team immediately.  \r\n\r\n" +
                $"<strong>Next Steps:</strong>  \r\n" +
                $"1. Enter the OTP code in the verification field.  \r\n2. Complete the setup process to enable 2FA for added security." +
                $"  \r\n\r\nFor any assistance, feel free to reach out to our support team at **[Support Email]**.  " +
                $"\r\n\r\n <strong>Best regards,</strong>  \r\n AIDoctor  \r\n[Your Company Website]  " +
                $"\r\n[Support Contact Information]";

            await SendEmailAsync(reciverEmail, subject, body);
        }

    }
}
