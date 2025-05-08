using AIDoctor.Application.DTOs;
using AIDoctor.Application.Services.Interfaces;
using AIDoctor.Domain.Entities;
using AIDoctor.Domain.Interfaces;

namespace AIDoctor.Application.Services.Implementations
{
    public class ChatService : IChatService
    {
        private readonly IChatRepository _chatRepository;

        public ChatService(IChatRepository chatRepository)
        {
            _chatRepository = chatRepository;
        }
        public async Task<Guid> CreateChatAsync(string userId)
        {
            var newChat = new Chat
            {
                ChatTitle = "New Chat",
                UserID = userId.ToString().ToLower(),
                LastUpdatedAt = DateTime.UtcNow,
                CreatedDate = DateTime.UtcNow,
            };

            await _chatRepository.AddAsync(newChat);
            await _chatRepository.SaveChangesAsync();

            return newChat.ChatID;
        }

        public async Task<IEnumerable<ChatHistoryDTO>> GetAllChatHistoriesAsync(string userId)
        {
            var chats = await _chatRepository.GetAllChatsByUserIdAsync(userId) ?? throw new Exception("No data found");

            var chatHistory = chats.Select(c => new ChatHistoryDTO(c.ChatID, c.ChatTitle, c.CreatedDate, c.LastUpdatedAt)).ToList();

            return chatHistory;
        }


    }
}
