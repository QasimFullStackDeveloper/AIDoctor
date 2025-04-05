using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.DTOs
{
    public record ChatHistoryDTO
        (
            Guid ChatID,
            string ChatTitle,
            DateTime CreatedAt,
            DateTime LastUpdatedAt
        )
    {
    }
}
