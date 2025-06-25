using System.ComponentModel.DataAnnotations;

namespace AIDoctor.Application.DTOs.Auth
{
    public record EnableTfaDTO
    {
        [Required]
        [EmailAddress( ErrorMessage = "Email is not valid")]
        public string UserEmail { get; set; }
        [Required]
        public string tokenProvider { get; set; }
        [Required]
        [MaxLength(6, ErrorMessage = "The OTP Length must be 6 characters")]
        [MinLength(6, ErrorMessage = "The OTP Length must be 6 characters")]
        public string oTP { get; set; }
    }
}
