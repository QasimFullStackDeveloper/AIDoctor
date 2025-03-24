using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    public class Chat
    {
        public Guid ChatId { get; init; }
        public required string ChatTitle { get; init; }
        public required string UserID { get; init; }
        public DateTime CreatedAt { get; init; }
        public DateTime LastUpdatedAt { get; set; }

        public Chat()
        {
            ChatId = Guid.NewGuid();
        }
    }
}
