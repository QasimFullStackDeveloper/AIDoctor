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
