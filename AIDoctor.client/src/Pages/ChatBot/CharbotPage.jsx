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
import searchIcon from "../../assets/IConsearch.svg";
import darkEdit from "../../assets/Chatbot/darkEdit.svg";
import darkCopy from "../../assets/Chatbot/darkCopy.svg";
import darkNewchat from "../../assets/Chatbot/darkNewchat.svg";
import darkplane from "../../assets/Chatbot/darkplane.svg";
import darkSave from "../../assets/Chatbot/darkSave.svg";
import darksavefile from "../../assets/Chatbot/darksavefile.svg";
import darkShowhistory from "../../assets/Chatbot/darkShowhistory.svg";

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
      const updatedSession = {
        id: activeSessionId || Date.now(),
        title: sessionMessages[0]?.text.slice(0, 30) || "Untitled Chat",
        messages: messages
      };

      setOldChats(prev => {
        if (activeSessionId) {
          return prev.map(session =>
            session.id === activeSessionId ? updatedSession : session
          );
        } else {
          return [updatedSession, ...prev];
        }
      });
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
      <div className={`w-[250px] flex mt-[1rem] flex-col ${sidebarBg} p-4`}>
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className='w-9 h-9 mr-2 mb-1'>
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
              <img src={historyIcon} alt="History Icon" className="w-5 h-5 mr-3 flex" />
              History
              <div className="px-3 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center ml-14 text-sm">
                {oldChats.length}</div>
            </button>
            <button className="flex items-center w-full p-2 hover:bg-blue-500 rounded-lg">
              <img src={saves} alt="Saved Icon" className="w-5 h-5 mr-3 flex" />
              My Saves
              <div className="px-3 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center ml-10 text-sm">
                {oldChats.length}</div>

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
            <div className={`relative mb-3 h-10  w-[70px] rounded-full bg-[#455EA5]  ${isDarkMode ? "bg-gray-700" : ""} flex items-center justify-between px-1`}>
              {/* Sliding background indicator */}
              <div
                className={`absolute top-1 left-1 w-8 h-8 rounded-full transition-transform duration-300 ease-in-out ${isDarkMode ? "translate-x-[30px] bg-gray-600" : "translate-x-0 bg-yellow-400"
                  }`}
              ></div>

              {/* Sun (Light Mode) */}
              <div
                className="relative z-10 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer"
                onClick={() => setIsDarkMode(false)}
              >
                <img src={sun} alt="sun" className="w-5 h-5 rounded-lg object-contain" />
              </div>

              {/* Moon (Dark Mode) */}
              <div
                className="relative z-10 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer"
                onClick={() => setIsDarkMode(true)}
              >
                <img src={moon} alt="moon" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>

         <div className={`bg-[#455EA5]  ${isDarkMode ? "bg-gray-700" : ""} p-4 rounded-lg shadow-inner mb-[0.5rem]`}>
            <div className="flex items-center gap-3 mb-4">
              <img src={user1} alt="User" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <h2 className="text-xs font-semibold">Adam Williams</h2>
                <p className="text-xs text-gray-300">info@gmail.com</p>
              </div>
              <span className="bg-blue-800 mb-4 text-white text-[10px] px-2 py-1 rounded-full">Basic </span>
            </div>

            <button className={`w-full flex items-center justify-center bg-white  cursor-not-allowed text-black text-sm font-semibold p-2 rounded-lg transition duration-200`}>
              <img src={crown} alt="Crown" className="w-4 h-4 mr-2" />
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex p-6 overflow-hidden">
        {showHistory && (
          <div className={`w-[350px] ${contentBg}  rounded-2xl shadow-lg p-6 flex flex-col overflow-y-auto border border-gray-200`}>
            <div className="mb-4 pb-2 border-b w-full flex ">
              <h2 className="text-xl font-bold">Chat History </h2>
              <div className="px-3 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center ml-8 mt-1 text-sm">
                {oldChats.length}</div>
            </div>

            <div className={`mb-4 flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2    ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
              <img src={searchIcon} alt="Search" className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search chats..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`flex-1 bg-transparent focus:outline-none text-sm ${isDarkMode ? "text-white" : "text-black"
                  }`}
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
                    <p className={`text-sm text-gray-700 ${isDarkMode ? "text-red-100" : ""}`}>
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
            <h2 className="text-xl font-bold">New Chat</h2>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-16">
            {messages.map((msg, index) => {
              const isUser = msg.sender === 'user';
              const messageBg = isDarkMode
                ? (isUser ? 'bg-[#334155] opacity-100' : 'bg-[#1E293B]')
                : (isUser ? 'bg-[#D8D8D8]' : 'bg-[#F0BABE]');
              return (
                <div key={index} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                  <div className="relative md:min-w-[60%]  min-h-[30%] thousandh:max-w-[70%] max-w-[80%]">
                    <div className={`flex ${messageBg} rounded-xl p-3`}>
                      <div className="relative">
                        <img
                          src={isUser ? user1 : robot}
                          alt={msg.sender}
                          className="w-9 h-9 rounded-full object-cover ml-[10px] -mt-1"
                        />
                      </div>
                      <div className="pl-3 flex items-end">
                        <p className="text-sm thousandh:text-xl p-3 leading-relaxed">{msg.text}</p>
                      </div>
                    </div>

                    <div className="absolute ml-5 top-full left-4 mt-[-9px] flex gap-4 z-10 overflow-visible cursor-pointer">
                      <div className={`bg-[#F9FAFB] ${isDarkMode ? "bg-gray-700" : ""}  border  border-gray-300 shadow-md rounded-md px-3 py-1 text-sm flex items-center gap-1`}>
                        <img src={!isDarkMode ? savesIcon : darkSave} alt="Save" className="w-4 h-4" />
                        Save
                      </div>
                      <div className={`bg-[#F9FAFB] ${isDarkMode ? "bg-gray-700" : ""}  border  border-gray-300 shadow-md rounded-md px-3 py-1 text-sm flex items-center gap-1`}>
                        <img src={!isDarkMode ? copy : darkCopy} alt="Copy" className="w-4 h-4" />
                        Copy
                      </div>
                      <div className={`bg-[#F9FAFB] ${isDarkMode ? "bg-gray-700" : ""}  border  border-gray-300 shadow-md rounded-md px-3 py-1 text-sm flex items-center gap-1`}>
                        <img src={!isDarkMode ? edit : darkEdit} alt="Edit" className="w-4 h-4" />
                        Edit
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <div className={`bg-[#455EA5] ${isDarkMode ? "bg-gray-700" : ""} rounded-2xl overflow-visible mt-4 relative z-0`}>
            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer">
              {/* New Chat Button */}
              <div className="relative group">
                <div
                  className={`w-8 h-8 ${isDarkMode ? "bg-gray-800" : "bg-white"} flex items-center justify-center rounded hover:bg-gray-300 transition-colors duration-200`}
                  onClick={handleNewChat}
                >
                  <img src={!isDarkMode ? newChat : darkNewchat} alt="New Chat" className="w-4 h-4" />
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
                  className={`w-8 h-8  ${isDarkMode ? "bg-gray-800" : "bg-white"} flex items-center justify-center rounded hover:bg-gray-300 transition-colors duration-200"`}
                  onClick={handleHistoryClick}
                >
                  <img src={!isDarkMode ? reload : darkShowhistory} alt="History" className="w-4 h-4" />
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
                <div className={`w-8 h-8 ${isDarkMode ? "bg-gray-800" : "bg-white"}  flex items-center justify-center rounded hover:bg-gray-300 transition-colors duration-200 `}>
                  <img src={!isDarkMode ? savesIcon : darkSave} alt="Save" className="w-4 h-4" />
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

            <div className={`flex items-center ${isDarkMode ? "bg-gray-900" : ""}  bg-gray-100 px-4 py-3 rounded-b-2xl`}>
              <img src={microphoneIcon} alt="Mic" className="w-5 h-5 mr-3" />
              <input
                type="text"
                placeholder="Ask me anything ..."
                className={`flex-1 bg-transparent ${isDarkMode ? "text-white" : ""} focus:outline-none text-sm text-black`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className={`bg-gray-200 p-3 ml-2  ${isDarkMode ? "bg-gray-700 opacity-100" : ""} hover:bg-gray-300 transition-colors duration-200`}
              >
                <img src={!isDarkMode ? planeIcon : darkplane} alt="Send" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAI;
