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
import moon from "../../assets/Chatbot/moon.svg";
import sun from "../../assets/Chatbot/sun.svg";

const DoctorAI = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Welcome Back! What would you like to chat about? Can you Ask any Question?",
    },
  ]);
  const [input, setInput] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [oldChats, setOldChats] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);

  const handleNewChat = () => {
    const sessionMessages = messages.slice(1);

    if (sessionMessages.length > 0) {
      const newSession = {
        id: Date.now(),
        title: sessionMessages[0]?.text.slice(0, 30) || "Untitled Chat",
        messages: messages
      };
      setOldChats(prev => [newSession, ...prev]);
    }

    setMessages([
      {
        sender: 'bot',
        text: "Welcome Back! What would you like to chat about? Can you Ask any Question?"
      }
    ]);
    setActiveSessionId(null);
    setShowHistory(false);
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages(prev => [...prev, { sender: 'user', text: input }]);
      setInput("");
    }
  };

  const handleHistoryClick = () => {
    setShowHistory(true);
  };

  const handleSessionClick = (session) => {
    setMessages(session.messages);
    setActiveSessionId(session.id);
    setShowHistory(false);
  };

  const handleMode = () => {
    setIsDarkMode(prev => !prev);
  };


  const mainBg = isDarkMode ? 'bg-gray-900 text-white ' : 'bg-[#08254C] text-white opacity-100';
  const contentBg = isDarkMode ? 'bg-[#1E293B] opacity-100 text-white' : 'bg-white text-black';
  const sidebarBg = isDarkMode ? 'bg-gray-900 text-white border-none' : 'bg-[#08254C] text-white';

  return (
    <div className={`flex h-screen ${mainBg}`}>
      {/* Sidebar */}
      <div className={`w-[300px] flex mt-[1rem] flex-col ${sidebarBg} p-4`}>
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className='w-9 h-9 mr-4 mb-1'>
              <Logo />
            </div>
            <h1 className="text-2xl font-bold">Doctor AI</h1>
          </div>

          <button className="flex justify-center items-center w-full mb-2 thousandh:mb-5 p-3 bg-[#2563EB] hover:bg-blue-400 rounded-lg">
            <img src={ChatIcon} alt="Chat Icon" className="w-5 h-5 mr-3" />
            Chat Generator
          </button>

          <div className="flex flex-col gap-3 thousandh:gap-6">
            <button className="flex items-center w-full p-2 hover:bg-blue-500 rounded-lg" onClick={handleHistoryClick}>
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

        <div className="flex flex-col justify-end mt-auto">
          <div className="flex items-center mb-[0rem]">
            <div className="bg-[#455EA5] mb-3 px-3 py-2 h-11 w-13 rounded-full flex items-center ">
              <div className="bg-yellow-400 p-1 h-8 w-8 flex justify-center items-center cursor-pointer rounded-full" onClick={handleMode}>
                <img src={sun} alt="sun" className="w-4 h-4 object-contain" />
              </div>
              <div className="p-1 rounded-full">
                <img src={moon} alt="moon" className="w-6 h-6 object-contain cursor-pointer" onClick={handleMode} />
              </div>
            </div>
          </div>

          <div className="bg-[#455EA5] p-4 rounded-lg shadow-inner mb-[0.5rem]">
            <div className="flex items-center gap-3 mb-4">
              <img src={user1} alt="User" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <h2 className="text-sm font-semibold">Adam Williams</h2>
                <p className="text-xs text-gray-300">info@gmail.com</p>
              </div>
              <span className="bg-blue-800 mb-4 text-white text-[10px] px-3 py-1 rounded-full">Basic mode</span>
            </div>

            <button className="w-full flex items-center justify-center bg-white cursor-not-allowed text-black text-sm font-semibold p-2 rounded-lg transition duration-200">
              <img src={crown} alt="Crown" className="w-4 h-4 mr-2" />
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex p-6 overflow-hidden">
        {showHistory && (
          <div className={`w-[350px] ${contentBg} rounded-2xl shadow-lg p-6 flex flex-col overflow-y-auto border border-gray-200`}>
            <div className="mb-4 pb-2 border-b w-full">
              <h2 className="text-lg font-semibold">Chat History</h2>
            </div>

            <div className={`mb-4 }`}>
              <input
                type="text"
                placeholder="Search chats..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${isDarkMode ? "bg-gray-900":""}  w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-black`}
              />
            </div>

            {oldChats.length > 0 ? (
              oldChats
                .filter(chat => chat.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((chat, index) => (
                  <div
                    key={chat.id}
                    className="pb-4 mb-4 border-b border-gray-200 cursor-pointer hover:bg-green-100"
                    onClick={() => handleSessionClick(chat)}
                  >
                    <h3 className="text-md font-semibold capitalize">{chat.title}</h3>
                    <p className="text-sm text-gray-700">
                      {chat.messages.find(m => m.sender === 'user')?.text || "No user input"}
                    </p>
                  </div>
                ))
            ) : (
              <p className="text-sm text-gray-500">No chat history available.</p>
            )}
          </div>
        )}

        <div className={`flex-1 flex flex-col ${contentBg} rounded-2xl shadow-lg p-6 h-full ml-6`}>
          <div className="border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold">New Chat</h2>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-16">
            {messages.map((msg, index) => {
              const isUser = msg.sender === 'user';
              const messageBg = isDarkMode
                ? (isUser ? 'bg-[#334155] opacity-100' : 'bg-[#1E293B]')
                : (isUser ? 'bg-[#D8D8D8]' : 'bg-[#F0BABE]');
              return (
                <div key={index} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                  <div className="relative Laptop:min-w-[50%] thousandh:min-w-[50%] tall-md:min-w-[50%] min-h-[30%] thousandh:max-w-[70%] max-w-[80%]">
                    <div className={`flex ${messageBg} rounded-xl p-3`}>
                      <div className="relative">
                        <img
                          src={isUser ? user1 : robot}
                          alt={msg.sender}
                          className="w-9 h-9 rounded-full object-cover -mt-1"
                        />
                      </div>
                      <div className="pl-3 flex items-end">
                        <p className="text-sm thousandh:text-xl p-3 leading-relaxed">{msg.text}</p>
                      </div>
                    </div>

                    <div className="absolute ml-5 top-full left-4 mt-[-9px] flex gap-4 z-10 overflow-visible cursor-pointer">
                      <div className={`bg-[#F9FAFB] ${isDarkMode ? "bg-gray-700":""}  border  border-gray-300 shadow-md rounded-md px-3 py-1 text-sm flex items-center gap-1`}>
                        <img src={savesIcon} alt="Save" className="w-4 h-4" />
                        Save
                      </div>
                      <div className={`bg-[#F9FAFB] ${isDarkMode ? "bg-gray-700":""}  border  border-gray-300 shadow-md rounded-md px-3 py-1 text-sm flex items-center gap-1`}>
                        <img src={copy} alt="Copy" className="w-4 h-4" />
                        Copy
                      </div>
                      <div className={`bg-[#F9FAFB] ${isDarkMode ? "bg-gray-700":""}  border  border-gray-300 shadow-md rounded-md px-3 py-1 text-sm flex items-center gap-1`}>
                        <img src={edit} alt="Edit" className="w-4 h-4" />
                        Edit
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <div className={`bg-[#455EA5] ${isDarkMode ? "bg-gray-700":""} rounded-2xl overflow-visible mt-4 relative z-0`}>
            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer">
              {/* New Chat Button */}
              <div className="relative group">
                <div
                  className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded hover:bg-gray-300 transition-colors duration-200"
                  onClick={handleNewChat}
                >
                  <img src={newChat} alt="New Chat" className="w-4 h-4" />
                </div>
                <div className="absolute hidden group-hover:flex flex-col items-center left-1/2 transform -translate-x-1/2 bottom-full mb-1 z-10">
                  <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-md">
                    New Chat
                  </div>
                  <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
              </div>

              {/* Reload/History */}
              <div className="relative group">
                <div
                  className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded hover:bg-gray-300 transition-colors duration-200"
                  onClick={handleHistoryClick}
                >
                  <img src={reload} alt="History" className="w-4 h-4" />
                </div>
                <div className="absolute hidden group-hover:flex flex-col items-center left-1/2 transform -translate-x-1/2 bottom-full mb-1 z-10">
                  <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-md">
                    History
                  </div>
                  <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
              </div>

              {/* Save Button */}
              <div className="relative group">
                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded hover:bg-gray-300 transition-colors duration-200">
                  <img src={savesIcon} alt="Save" className="w-4 h-4" />
                </div>
                <div className="absolute hidden group-hover:flex flex-col items-center left-1/2 transform -translate-x-1/2 bottom-full mb-1 z-10">
                  <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-md">
                    Save File
                  </div>
                  <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
              </div>
            </div>

            <div className="h-px bg-blue-300 opacity-30 mx-4" />

            <div className={`flex items-center ${isDarkMode ? "bg-gray-900":""}  bg-gray-100 px-4 py-3 rounded-b-2xl`}>
              <img src={microphoneIcon} alt="Mic" className="w-5 h-5 mr-3" />
              <input
                type="text"
                placeholder="Ask me anything ..."
                className="flex-1 bg-transparent focus:outline-none text-sm text-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-gray-200 p-2 ml-2  rounded-full hover:bg-gray-300 transition-colors duration-200"
              >
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
