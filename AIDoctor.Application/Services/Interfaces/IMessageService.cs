using AIDoctor.Application.DTOs;
using AIDoctor.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.Services.Interfaces
{
    /// <summary>
    /// Defines the contract for message-related operations in the application.
    /// </summary>
    public interface IMessageService
    {
        /// <summary>
        /// Adds a message to the user's list of favorite messages.
        /// </summary>
        /// <param name="userId">The ID of the user.</param>
        /// <param name="messageId">The ID of the message to be added to favorites.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="userId"/> is null or empty.</exception>
        /// <exception cref="KeyNotFoundException">Thrown when the message with the specified <paramref name="messageId"/> is not found.</exception>
        Task AddMessageToFavourites(string userId, Guid messageId);

        /// <summary>
        /// Adds a new message to the system.
        /// </summary>
        /// <param name="userId">The ID of the user creating the message.</param>
        /// <param name="dTO">The data transfer object containing message details.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="userId"/> or <paramref name="dTO"/> is null.</exception>
        /// <exception cref="InvalidOperationException">Thrown when the message cannot be added due to invalid data.</exception>
        Task<string> AddMessage(string userId, MessageDTO dTO);

        /// <summary>
        /// Retrieves all favorite messages for a specific user.
        /// </summary>
        /// <param name="userId">The ID of the user.</param>
        /// <returns>A task that returns a collection of the user's favorite messages.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="userId"/> is null or empty.</exception>
        /// <exception cref="KeyNotFoundException">Thrown when no favorite messages are found for the specified user.</exception>
        Task<IEnumerable<FavouriteMessages>> GetAllFavouriteMessagesByUserId(string userId);

        /// <summary>
        /// Retrieves all messages associated with a specific chat.
        /// </summary>
        /// <param name="chatId">The ID of the chat.</param>
        /// <returns>A task that returns a collection of messages for the specified chat.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when no messages are found for the specified <paramref name="chatId"/>.</exception>
        Task<IEnumerable<Message>> GetMessagesByChatIdAsync(Guid chatId);
    }
}
