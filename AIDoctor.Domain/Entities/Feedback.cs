using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    public class Feedback
    {
        public Guid FeedbackID { get; init; }
        public required string UserID { get; init; }
        public required string FeedbackText { get; set; }
        public DateTime CreatedDate { get; set; }
        public int Rating { get; set; }
    }
}
