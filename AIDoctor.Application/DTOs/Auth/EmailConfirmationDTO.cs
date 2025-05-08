using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.DTOs.Auth
{
    public record EmailConfirmationDTO : UserEmailDto
    {
        [Required]
        public required string ConfirmationToken { get; set; }
    }
}
