using AIDoctor.Application.Services.Interfaces_BaseClasses;
using AIDoctor.Application.Services.SMTP;
using AIDoctor.Domain.Entities;
using AIDoctor.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.Services.Implementations
{
    public class ChatService :  IChatService
    {
        private readonly IChatRepository _chatRepository;

        public ChatService(IChatRepository chatRepository)
        {
            _chatRepository = chatRepository;
        }
        public Task CreateChat()
        {
            var newChat = new Chat
            {
                ChatTitle = "New Chat",
                UserID = "",
                LastUpdatedAt = DateTime.UtcNow,
                CreatedDate = DateTime.UtcNow,
            };

            _chatRepository.AddAsync(newChat);
            _chatRepository.SaveAsync();

            return Task.CompletedTask;
        }
    }
}
