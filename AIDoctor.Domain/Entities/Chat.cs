using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    public class Chat
    {
        public Guid ChatID { get; init; }
        public required string ChatTitle { get; init; }
        public required string UserID { get; init; }
        public DateTime CreatedDate { get; init; }
        public DateTime LastUpdatedAt { get; set; }

        public Chat()
        {
            ChatID = Guid.NewGuid();
            CreatedDate = DateTime.UtcNow;
            LastUpdatedAt = DateTime.UtcNow;
        }
    }
}
