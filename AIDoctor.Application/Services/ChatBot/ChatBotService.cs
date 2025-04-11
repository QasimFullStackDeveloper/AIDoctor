using AIDoctor.Application.Services.Interfaces;
using Microsoft.Extensions.Options;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace AIDoctor.Application.Services.ChatBot
{

    public class ChatBotService : IChatBotService
    {
        private readonly ChatBotSettings _options;

        public ChatBotService(IOptions<ChatBotSettings> options)
        {
            _options = options.Value;
        }

        public async Task<string> GetResponseAsync(string prompt)
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("Authorization", $"Bearer {_options.APIkey}");


                var requestBody = new
                {
                    model = "nvidia/llama-3.1-nemotron-70b-instruct",
                    messages = new[]
                    {
                    new { role = "system", content = _options.SystemContent},
                    new { role = "user", content = prompt }
                },
                    temperature = 0.5,
                    top_p = 0.7,
                    max_tokens = 1024,
                    stream = false
                };

                var json = JsonSerializer.Serialize(requestBody);
                var content = new StringContent(json, Encoding.UTF8, "application/json");
                var response = await client.PostAsync(_options.APIBaseUrl, content);
                response.EnsureSuccessStatusCode();
                var responseBody = await response.Content.ReadAsStringAsync();
                var jsonResponse = JsonDocument.Parse(responseBody);
                return jsonResponse.RootElement.GetProperty("choices")[0].GetProperty("message").GetProperty("content").GetString();
            }
        }
    }
}
