using AIDoctor.Application.DTOs;
using AIDoctor.Application.Services.Implementations;
using AIDoctor.Application.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AIDoctor.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : AuthenticatedBaseController
    {
        private readonly IMessageService _messageService;

        public MessageController(IMessageService messageService)
        {
            _messageService = messageService;
        }

        [HttpPost]
        public async Task<IActionResult> AddMessageAsync([FromBody] MessageDTO dTO)
        {
            if(!ModelState.IsValid) throw new Exception(ModelState.ToString());

            var result = await _messageService.AddMessage(UserId, dTO);

            return CreatedAtAction( nameof(AddMessageAsync),result);
        }
        [HttpPost("favourite")]
        public async Task<IActionResult> AddFavouriteMessage([FromBody] string messageId)
        {
            await _messageService.AddMessageToFavourites(UserId, Guid.Parse(messageId));
            return Ok("Message added to favourites");
        }

        [HttpGet("favourites")]
        public async Task<IActionResult> GetAllFavouriteMessages()
        {
            var result = await _messageService.GetAllFavouriteMessagesByUserId(UserId);
            return Ok(result);
        }

    }
}
