﻿using AIDoctor.Application.DTOs;
using AIDoctor.Application.Services.ChatBot;
using AIDoctor.Application.Services.Interfaces;
using AIDoctor.Domain.Entities;
using AIDoctor.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.Services.Implementations
{
    public class MessageService : IMessageService
    {
        private readonly IMessgaeRepository _messgaeRepository;
        private readonly IFavouriteMessageRepository _favouriteMessageRepository;
        private readonly IChatBotService _botService;

        public MessageService(IMessgaeRepository messgaeRepository, IFavouriteMessageRepository favouriteMessageRepository, IChatBotService botService)
        {
            _messgaeRepository = messgaeRepository;
            _favouriteMessageRepository = favouriteMessageRepository;
            _botService = botService;
        }
        //                                  Get Functions
        public async Task<IEnumerable<Message>> GetMessagesByChatIdAsync(Guid chatId)
        {
            return await _messgaeRepository.GetMessgaesByChatIdAsync(chatId);
        }

        public async Task<IEnumerable<FavouriteMessage>> GetAllFavouriteMessagesByUserId(string userId)
        {
            return await _favouriteMessageRepository.GetAllByUserId(userId);
        }






        //                                 Add Functions                
        public async Task AddMessageToFavourites(string userId, Guid messageId)
        {
            var existingMessage = await _favouriteMessageRepository.GetByIdAsync(userId, messageId);
            if (existingMessage)
            {
                throw new Exception("This message is already in your favourites.");
            }
            var favouriteMessage = new FavouriteMessage
            {
                UserID = userId,
                CreatedDate = DateTime.UtcNow,
                MessegeID = messageId
            };
            await _favouriteMessageRepository.AddAsync(favouriteMessage);
            await _favouriteMessageRepository.SaveChangesAsync();
        }
        public async Task<string> AddMessage(string userId, MessageDTO dTO)
        {
            var newMessage = new Message
            {
                Prompt = dTO.Prompt,
                ChatID = Guid.Parse(dTO.ChatId),
                Response = await _botService.GetResponseAsync(dTO.Prompt),
            };
            await _messgaeRepository.AddAsync(newMessage);
            await _messgaeRepository.SaveChangesAsync();

            return newMessage.Response;
        }
    }
}