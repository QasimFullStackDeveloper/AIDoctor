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
    public class GenericRepository<TClass, Tkey> : IGenricRepository<TClass, Tkey>
        where TClass : class
    {
        private readonly AIDoctorDBContext _context;

        protected DbSet<TClass> DbSet { get; init; }

        public GenericRepository(AIDoctorDBContext context)
        {
            _context = context;
            DbSet = _context.Set<TClass>();
        }
        public async Task AddAsync(TClass entity)
        {
            ArgumentNullException.ThrowIfNull(entity);

            await DbSet.AddAsync(entity);
        }

        public async Task DeleteAsync(Tkey key)
        {
            ArgumentNullException.ThrowIfNullOrEmpty(key?.ToString());

            var result = await DbSet.FindAsync(key);

            ArgumentNullException.ThrowIfNull(result);

            DbSet.Remove(result);
        }

        public async Task<IEnumerable<TClass>> GetAllAsync()
        {
            return await DbSet.ToListAsync();
        }

        public async Task<TClass> GetByIdAsync(Tkey key)
        {
            ArgumentNullException.ThrowIfNullOrEmpty(key?.ToString());

            var result = await DbSet.FindAsync(key);

            ArgumentNullException.ThrowIfNull(result);

            return result;
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public Task UpdateAsync(TClass entity)
        {
            ArgumentNullException.ThrowIfNull(entity);

            DbSet.Update(entity);
            return Task.CompletedTask;
        }
    }
}
