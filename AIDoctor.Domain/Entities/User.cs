using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AIDoctor.Domain.Enums;
using Microsoft.AspNetCore.Identity;

namespace AIDoctor.Domain.Entities
{
    public class User : IdentityUser
    {
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreatedDate { get; init; }
        public DateTime LastUpdatedDate { get; set; }
        public UserRoles Role { get; init; }

        public User()
        {
            IsActive = false;
            IsDeleted = false;
            CreatedDate = DateTime.UtcNow;
            LastUpdatedDate = DateTime.UtcNow;
        }

    }
}
