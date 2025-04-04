using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    class BlockedUser
    {
        public Guid BlockID { get; init; }
        public Guid BlockedUserID { get; init; }
        public required string BlockedReason { get; init; }
        public required string BlockedBy { get; init; }
        public DateTime BlockedDate { get; init; }

        public BlockedUser()
        {
            BlockID = Guid.NewGuid();
            BlockedDate = DateTime.UtcNow;
        }
    }
}
