using AIDoctor.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Interfaces
{
    /// <summary>
    /// Defines the contract for repository operations related to favorite messages.
    /// </summary>
    public interface IFavouriteMessageRepository : IGenericRepository<FavouriteMessages, Guid>
    {
        /// <summary>
        /// Retrieves all favorite messages for a specific user.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A task representing the asynchronous operation, containing a collection of favorite messages.</returns>
        Task<IEnumerable<FavouriteMessages>> GetAllByUserId(string userId);

        /// <summary>
        /// Checks if a specific message is marked as favorite by a user.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <param name="messageId">The unique identifier of the message.</param>
        /// <returns>A task representing the asynchronous operation, containing a boolean indicating whether the message is a favorite.</returns>
        Task<bool> GetByIdAsync(string userId, Guid messageId);
    }
}
