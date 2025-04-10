using System.ComponentModel.DataAnnotations;

namespace AIDoctor.Application.DTOs.Auth
{
    public record EnableTfaDTO
    {
        [Required]
        public string userId { get; set; }
        [Required]
        public string tokenProvider { get; set; }
        [Required]
        [MaxLength(6, ErrorMessage = "The OTP Length must be 6 characters")]
        [MinLength(6, ErrorMessage = "The OTP Length must be 6 characters")]
        public string oTP { get; set; }
    }
}
