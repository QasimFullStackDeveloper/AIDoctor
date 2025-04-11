using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Application.Services.ChatBot
{
    public class ChatBotSettings
    {
        public string APIkey { get; set; }
        public string APIBaseUrl { get; set; }
        public string Model { get; set; }
        public string SystemContent { get; set; }

    }
}
