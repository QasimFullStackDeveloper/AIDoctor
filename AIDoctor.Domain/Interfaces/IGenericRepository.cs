﻿namespace AIDoctor.Domain.Interfaces
{
    public interface IGenericRepository<TClass, Tkey>
        where TClass : class
    {
        Task<TClass> GetByIdAsync(Tkey key);
        Task<IEnumerable<TClass>> GetAllAsync();
        Task AddAsync(TClass entity);
        Task UpdateAsync(TClass entity);
        Task DeleteAsync(Tkey key);
        Task SaveChangesAsync();

    }
}
