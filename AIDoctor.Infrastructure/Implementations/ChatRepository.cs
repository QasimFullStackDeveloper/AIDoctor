using AIDoctor.Domain.Entities;
using AIDoctor.Domain.Interfaces;
using AIDoctor.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Infrastructure.Implementations
{
    public class ChatRepository (AIDoctorDBContext context) : GenericRepository<Chat, Guid>(context) , IChatRepository
    {
        public async Task<IEnumerable<Chat>> GetAllChatsByUserIdAsync(Guid userId)
        {
            var chats = await DbSet.Where(c => string.Equals(c.UserID, userId.ToString())).ToListAsync();

            return chats;
        }
    }
}
