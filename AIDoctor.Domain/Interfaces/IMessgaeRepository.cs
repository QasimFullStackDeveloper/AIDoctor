using AIDoctor.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Interfaces
{
    public interface IMessgaeRepository : IGenericRepository<Message, Guid>
    {
        /// <summary>
        /// Retrieves all messages associated with a specific chat ID.
        /// </summary>
        /// <param name="chatId">The unique identifier of the chat.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains an enumerable collection of messages.</returns>
        Task<IEnumerable<Message>> GetMessgaesByChatIdAsync(Guid chatId);
    }
}
