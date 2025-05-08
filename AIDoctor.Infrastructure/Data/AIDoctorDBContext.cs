using AIDoctor.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AIDoctor.Infrastructure.Data
{
    public class AIDoctorDBContext(DbContextOptions<AIDoctorDBContext> options) : IdentityDbContext<User>(options)
    {
        public DbSet<Chat> Chats { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<FavouriteMessage> FavouriteMessages { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Chat>().ToTable("Chats");
            modelBuilder.Entity<Message>().ToTable("Messages");
            modelBuilder.Entity<FavouriteMessage>().ToTable("FavouriteMessages");
            modelBuilder.Entity<Feedback>().ToTable("Feedbacks");
        }
    }
}
