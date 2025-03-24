using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    public class Message
    {
        public Guid MessageId { get; init; }
        public Guid ChatID { get; init; }
        public required string Prompt { get; set; }
        public required string Response { get; set; }

        public Message()
        {
            MessageId = Guid.NewGuid();
        }
    }
}
