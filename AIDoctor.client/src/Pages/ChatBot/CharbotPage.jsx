import React, { useState } from 'react';
import user1 from "../../assets/user1.png";
import Logo from "../../Components/Logo.jsx";
import planeIcon from "../../assets/Chatbot/airplane.svg";
import historyIcon from "../../assets/Chatbot/historyIcon.svg";
import logoutIcon from "../../assets/Chatbot/logout.svg";
import ChatIcon from "../../assets/Chatbot/ChatGenerator.svg";
import microphoneIcon from "../../assets/Chatbot/microphone.svg";
import saves from "../../assets/Chatbot/mySaves.svg";
import setting from "../../assets/Chatbot/Settings.svg";
import newChat from "../../assets/Chatbot/newChat.svg";
import savesIcon from "../../assets/Chatbot/blackSave.svg";
import reload from "../../assets/Chatbot/blackreload.svg";
import robot from "../../assets/Chatbot/robot.svg";
import crown from "../../assets/Chatbot/crown.svg";
import copy from "../../assets/Chatbot/copy.svg";
import edit from "../../assets/Chatbot/edit.svg";

const DoctorAI = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Welcome Back! What would you like to chat about? Can you Ask any Question?",
    },
  ]);
  const [input, setInput] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // <--- for search

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [...prev, { sender: 'user', text: input }]);
      setInput("");
    }
  };

  const handleHistoryClick = () => {
    setShowHistory(true);
  };

  const chatHistory = [
    { title: "signs of anemia", description: "Lately I get tired quickly, even after light activity..." },
    { title: "high blood pressure", description: "I often feel dizzy and get nosebleeds. Is it related..." },
    { title: "symptoms of diabetes", description: "Hi, I've been feeling very tired lately and I'm thirsty..." }
  ];

  const filteredChatHistory = chatHistory.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#08254C]">
      {/* Sidebar */}
      <div className="w-[300px] flex mt-[1rem] flex-col justify-between bg-[#08254C] text-white p-4">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className='w-10 h-10'>
              <Logo />
            </div>
            <h1 className="text-xl font-bold">Doctor AI</h1>
          </div>

          <button className="flex items-center w-full mb-6 p-3 bg-[#2563EB] hover:bg-blue-400 rounded-lg">
            <img src={ChatIcon} alt="Chat Icon" className="w-5 h-5 mr-3" />
            Chat Generator
          </button>

          <div className="flex flex-col gap-3">
            <button
              className="flex items-center w-full p-2 hover:bg-blue-500 rounded-lg"
              onClick={handleHistoryClick}
            >
              <img src={historyIcon} alt="History Icon" className="w-5 h-5 mr-3" />
              History
            </button>
            <button className="flex items-center w-full p-2 hover:bg-blue-500 rounded-lg">
              <img src={saves} alt="Saved Icon" className="w-5 h-5 mr-3" />
              My Saves
            </button>
            <button className="flex items-center w-full p-2 hover:bg-blue-500 rounded-lg">
              <img src={setting} alt="Settings Icon" className="w-5 h-5 mr-3" />
              Settings
            </button>
            <button className="flex items-center w-full p-2 hover:bg-blue-500 rounded-lg">
              <img src={logoutIcon} alt="Logout Icon" className="w-5 h-5 mr-3" />
              Log Out
            </button>
          </div>
        </div>

        {/* Bottom Profile Section */}
        <div className="border-t border-gray-600 pt-4">
          <div className="flex items-center mb-4">
            <img src={user1} alt="User" className="w-10 h-10 rounded-full mr-3 object-cover" />
            <div>
              <h2 className="text-sm font-semibold">Adam Williams</h2>
              <p className="text-xs opacity-70">info@gmail.com</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center bg-white text-black text-sm font-semibold p-2 rounded-lg hover:bg-yellow-300 mb-4">
            <img src={crown} alt="Crown" className="w-4 h-4 mr-2" />
            Upgrade to Pro
          </button>

          <div className="flex items-center justify-center p-2 rounded-lg border border-gray-500 text-xs opacity-80">
            Basic Mode
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex p-6 overflow-hidden">
        {showHistory && (
          <div className="w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col overflow-y-auto border border-gray-200">
            {/* Chat History Header */}
            <div className="mb-4 pb-2 border-b w-[100%]">
              <h2 className="text-lg font-semibold">Chat History</h2>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search chats..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Chat History Items */}
            {filteredChatHistory.map((item, index) => (
              <div key={index} className="pb-4 mb-4 border-b border-gray-200">
                <h3 className="text-md font-semibold capitalize">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-lg p-6 h-full ml-6">
          {/* Chat Header */}
          <div className="border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold">New Chat</h2>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-16">
            {messages.map((msg, index) => (
              <div key={index} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className="relative min-w-[30%] max-w-[50%]">
                  <div
                    className={`flex items-start gap-2 ${msg.sender === 'user' ? 'bg-[#D8D8D8]' : 'bg-[#F0BABE]'
                      } rounded-xl p-3`}
                  >
                    <img
                      src={msg.sender === 'user' ? user1 : robot}
                      alt={msg.sender}
                      className="w-7 h-7 rounded-full object-cover mt-0.5"
                    />
                    <p className="text-sm">{msg.text}</p>
                  </div>

                  <div className="absolute ml-5 top-full left-4 mt-[-9px] flex gap-4 z-10 overflow-visible">
                    <div className="bg-[#F9FAFB] border border-gray-300 shadow-md rounded-md px-3 py-1 text-xs flex items-center gap-1">
                      <img src={savesIcon} alt="Save" className="w-4 h-4" />
                      Save
                    </div>
                    <div className="bg-[#F9FAFB] border border-gray-300 shadow-md px-3 py-1 rounded-md text-xs flex items-center gap-1">
                      <img src={copy} alt="Copy" className="w-4 h-4" />
                      Copy
                    </div>
                    <div className="bg-[#F9FAFB] border border-gray-300 shadow-md rounded-md px-3 py-1 text-xs flex items-center gap-1">
                      <img src={edit} alt="Edit" className="w-4 h-4" />
                      Edit
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="bg-[#455EA5] rounded-2xl overflow-hidden mt-4">
            {/* Icons */}
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-6 h-6 bg-gray-200 flex items-center justify-center rounded">
                <img src={newChat} alt="New Chat" className="w-4 h-4" />
              </div>
              <div className="w-6 h-6 bg-gray-200 flex items-center justify-center rounded" onClick={handleHistoryClick}
              >
                <img src={reload} alt="Reload" className="w-4 h-4" />
              </div>
              <div className="w-6 h-6 bg-gray-200 flex items-center justify-center rounded">
                <img src={savesIcon} alt="Saves" className="w-4 h-4" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-blue-300 opacity-30 mx-4" />

            {/* Input */}
            <div className="flex items-center bg-gray-100 px-4 py-3">
              <img src={microphoneIcon} alt="Mic" className="w-5 h-5 mr-3" />
              <input
                type="text"
                placeholder="Ask me anything ..."
                className="flex-1 bg-transparent focus:outline-none text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend} className="bg-gray-200 p-2 ml-2 rounded-full">
                <img src={planeIcon} alt="Send" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAI;
