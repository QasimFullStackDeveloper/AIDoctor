using AIDoctor.Application.Services.Implementations;
using AIDoctor.Application.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AIDoctor.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]/")]
    [ApiController]
    public class ChatController : AuthenticatedBaseController
    {
        private readonly IChatService _chatService;
        private readonly IMessageService _messageService;

        public ChatController(IChatService chatService, IMessageService messageService)
        {
            _chatService = chatService;
            _messageService = messageService;
        }

        [HttpGet("new")]
        public async Task<IActionResult> NewChat()
        {
            var newChatId = await _chatService.CreateChatAsync(UserId);
            return CreatedAtAction(nameof(NewChat), newChatId);

        }

        [HttpGet("history")]
        public async Task<IActionResult> GetAllChatHistories()
        {
            var chatHistories = await _chatService.GetAllChatHistoriesAsync(UserId);
            return Ok(chatHistories);
        }

        [HttpGet("{chatId}")]
        public async Task<IActionResult> GetAllMessages(string chatId)
        {
            if (string.IsNullOrEmpty(chatId))
            {
                return BadRequest("Chat ID cannot be null or empty.");
            }
            var messages = await _messageService.GetMessagesByChatIdAsync(Guid.Parse(chatId));
            return Ok(messages);
        }


    }
}
