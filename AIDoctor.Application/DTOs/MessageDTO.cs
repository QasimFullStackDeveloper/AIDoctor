using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.DTOs
{
    public record MessageDTO
    {
        [Required]
        public string ChatId { get; init; }
        [Required]
        public string Prompt { get; init; }
    }
}
