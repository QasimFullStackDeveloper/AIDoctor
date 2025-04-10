using System.ComponentModel.DataAnnotations;

namespace AIDoctor.Application.DTOs.Auth
{
    public record ForgetPasswordDTO
    {
        [Required(ErrorMessage = "Email Address is required")]
        [EmailAddress(ErrorMessage = "Email is not in Proper format")]
        public required string Email { get; set; }

        [Required]
        public required string Token { get; set; }
    }
}
