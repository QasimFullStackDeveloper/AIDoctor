using System.ComponentModel.DataAnnotations;

namespace AIDoctor.Application.DTOs.Auth
{
    public record SignUpDTO
    {
        [Required]
        [RegularExpression(@"^[A-Za-z\s]+$", ErrorMessage = "Full name must contain alphabets and spaces only.")]
        public required string FullName { get; set; }


        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        [MaxLength(255, ErrorMessage = "Email cannot exceed 255 characters.")]
        [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "Invalid email format.")]

        public required string Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [DataType(DataType.Password)]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters long.")]
        [MaxLength(64, ErrorMessage = "Password cannot exceed 64 characters.")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,64}$",
        ErrorMessage = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.")]
        public required string Password { get; set; }

        [Required(ErrorMessage = "Confirm Password is required.")]
        [DataType(DataType.Password)]
        [Compare(nameof(Password), ErrorMessage = "Passwords do not match.")]
        public required string ConfirmPassword { get; set; }
    }
}
