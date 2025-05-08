using AIDoctor.Domain.Interfaces;
using AIDoctor.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace AIDoctor.Infrastructure.Implementations
{
    public class GenericRepository<TClass, Tkey> : IGenericRepository<TClass, Tkey>
        where TClass : class
        where Tkey : notnull
    {
        private readonly AIDoctorDBContext _context;

        protected DbSet<TClass> DbSet { get; init; }

        public GenericRepository(AIDoctorDBContext context)
        {
            _context = context;
            DbSet = _context.Set<TClass>();
        }
        public virtual async Task AddAsync(TClass entity)
        {
            ArgumentNullException.ThrowIfNull(entity);

            await DbSet.AddAsync(entity);
        }

        public virtual async Task DeleteAsync(Tkey key)
        {
            ArgumentNullException.ThrowIfNullOrEmpty(key?.ToString());

            var result = await DbSet.FindAsync(key);

            ArgumentNullException.ThrowIfNull(result);

            DbSet.Remove(result);
        }

        public virtual async Task<IEnumerable<TClass>> GetAllAsync()
        {
            return await DbSet.ToListAsync();
        }

        public virtual async Task<TClass> GetByIdAsync(Tkey key)
        {
            ArgumentNullException.ThrowIfNullOrEmpty(key?.ToString());

            var result = await DbSet.FindAsync(key);

            ArgumentNullException.ThrowIfNull(result);

            return result;
        }


        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public virtual Task UpdateAsync(TClass entity)
        {
            ArgumentNullException.ThrowIfNull(entity);

            DbSet.Update(entity);
            return Task.CompletedTask;
        }
    }
}
