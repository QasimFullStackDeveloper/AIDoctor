﻿using AIDoctor.Domain.Entities;

namespace AIDoctor.Domain.Interfaces
{
    public interface IChatRepository : IGenericRepository<Chat, Guid>
    {
        /// <summary>
        /// Asynchronously retrieves all chat records associated with a specific user ID.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains a collection of Chat entities.</returns>
        Task<IEnumerable<Chat>> GetAllChatsByUserIdAsync(string userId);
    }
}
