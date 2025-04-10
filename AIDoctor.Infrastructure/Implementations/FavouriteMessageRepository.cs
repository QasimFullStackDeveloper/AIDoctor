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
    public class FavouriteMessageRepository(AIDoctorDBContext context) : GenericRepository<FavouriteMessages, Guid>(context), IFavouriteMessageRepository
    {
        public async Task<IEnumerable<FavouriteMessages>> GetAllByUserId(string userId)
        {
            var result = await DbSet.Where(x => x.UserID == userId).ToListAsync();
            return result;
        }

        public async Task<bool> GetByIdAsync(string userId, Guid messageId)
        {
            var result = await DbSet.FirstOrDefaultAsync(x => x.UserID == userId && x.FavouriteMessageID == messageId);
            return result is not null;
        }
    }
}
