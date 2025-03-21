using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Interfaces
{
    public interface IGenricRepository<TClass, Tkey>
        where TClass : class
    {
        Task<TClass> GetByIdAsync(Tkey key);
        Task<IEnumerable<TClass>> GetAllAsync();
        Task AddAsync(TClass entity);
        Task UpdateAsync(TClass entity);
        Task DeleteAsync(Tkey key);
        Task SaveAsync();

    }
}
