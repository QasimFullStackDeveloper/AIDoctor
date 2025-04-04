using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    class SavedQuestion
    {
        public Guid SavedQuestionID { get; init; }
        public Guid MessegeID { get; init; }
        public DateTime CreatedDate { get; init; }

        public SavedQuestion()
        {
            SavedQuestionID = Guid.NewGuid();
        }
    }
}
