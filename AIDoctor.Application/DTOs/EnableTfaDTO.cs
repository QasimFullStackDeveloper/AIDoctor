using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.DTOs
{
    public class EnableTfaDTO
    {
        [Required]
        public string userId;
        [Required]
        public string tokenProvider;
        [Required]
        public string oTP;
    }
}
