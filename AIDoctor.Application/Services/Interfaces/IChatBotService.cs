using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.Services.Interfaces
{
    /// <summary>
    /// Defines the contract for a chatbot service that processes user prompts
    /// and returns AI-generated responses.
    /// </summary>
    public interface IChatBotService
    {
        /// <summary>
        /// Asynchronously retrieves a response from the chatbot based on the provided prompt.
        /// </summary>
        /// <param name="prompt">The input string provided by the user.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the chatbot's response as a string.</returns>
        Task<string> GetResponseAsync(string prompt);
    }
}
