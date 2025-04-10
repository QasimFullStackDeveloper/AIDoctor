using AIDoctor.Application.DTOs;

namespace AIDoctor.Application.Services.Interfaces_BaseClasses
{
    public interface IChatService
    {
        /// <summary>
        /// Creates a new chat for the specified user.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the unique identifier of the created chat.</returns>
        Task<Guid> CreateChatAsync(string userId);

        /// <summary>
        /// Retrieves all chat histories for the specified user.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains a collection of chat history DTOs.</returns>
        Task<IEnumerable<ChatHistoryDTO>> GetAllChatHistoriesAsync(string userId);
    }
}
