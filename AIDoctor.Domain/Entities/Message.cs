﻿namespace AIDoctor.Domain.Entities
{
    public class Message
    {
        public Guid MessageID { get; init; }
        public Guid ChatID { get; init; }
        public required string Prompt { get; set; }
        public required string Response { get; set; }
        public DateTime CreatedDate { get; init; }

        public Message()
        {
            MessageID = Guid.NewGuid();
            CreatedDate = DateTime.UtcNow;
        }
    }
}
