using AIDoctor.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    class Account
    {
        public Guid UserID { get; init; }
        public required string UserName { get; init; }
        public required string Password { get; init; }
        public required string Email { get; init; }
        public DateTime CreatedDate { get; init; }
        public DateTime LastUpdatedDate { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public int UserRoleID { get; set; }
        public Account()
        {
            UserID = Guid.NewGuid();
            IsActive = true;
            IsDeleted = false;
            CreatedDate = DateTime.UtcNow;
            LastUpdatedDate = DateTime.UtcNow;
            UserRoleID = (int)UserRoles.Default;
        }
    }
}
