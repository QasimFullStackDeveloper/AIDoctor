using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    public class Message
    {
        public Guid MessageID { get; init; }
        public Guid ChatID { get; init; }
        public required string Prompt { get; set; }
        public required string Response { get; set; }

        public Message()
        {
            MessageID = Guid.NewGuid();
        }
    }
}
