using AIDoctor.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Infrastructure.Data
{
    class AIDoctorDBContext (DbContextOptions<AIDoctorDBContext> options) : IdentityDbContext<User>(options)
    {

    }
}
