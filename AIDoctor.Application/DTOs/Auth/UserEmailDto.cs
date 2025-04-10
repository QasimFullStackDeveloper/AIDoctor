using System.ComponentModel.DataAnnotations;

namespace AIDoctor.Application.DTOs.Auth
{
    public record UserEmailDto
    {
        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [StringLength(256, ErrorMessage = "Email cannot be longer than 256 characters.")]
        [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "Invalid Email Format")]
        public required string Email { get; set; }
    }
}
