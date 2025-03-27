using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.DTOs.Auth
{
    public record ForgetPasswordDTO
    {
        [Required(ErrorMessage ="Email Address is required")]
        [EmailAddress(ErrorMessage = "Email is not in Proper format")]
        public required string Email {  get; set; }

        [Required]
        public required string Token { get; set; }
    }
}
