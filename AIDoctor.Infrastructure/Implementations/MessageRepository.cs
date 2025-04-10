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
    public class MessageRepository(AIDoctorDBContext context) : GenericRepository<Message, Guid>(context) , IMessgaeRepository
    {
        public async Task<IEnumerable<Message>> GetMessgaesByChatIdAsync(Guid chatId)
        {
            ArgumentNullException.ThrowIfNullOrEmpty(chatId.ToString());

            var result = await DbSet.Where(m => m.ChatID == chatId).ToListAsync(); 
            return result;
        }
    }
}
