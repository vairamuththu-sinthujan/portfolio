'use client'
import { useEffect, useRef, useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { SiAwslambda } from "react-icons/si";
import { TbFidgetSpinner } from "react-icons/tb";
import {handleAIChat} from "../libs/gemini-helper";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null);


  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);



  const handleSend = async () => {
    if (loading) {
      return
    }
    if (message.trim()) {
      setLoading(true)
      setMessage('');
      setMessages((prev) => [...prev, { text: message, isUser: true }]);
      // Add AI response logic here
      const result = await handleAIChat(message,messages);
      if (result.success) {
        setMessages((prev) => [...prev, { text: result.response, isUser: false }]);
      }
      else {
        setLoading(false)
        console.error('Error:', result.error);
      }
      setLoading(false)
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      {/* Toggle Button */}
      <button
      title='Personal AI Assistant'
        onClick={toggleChat}
        className={`${isOpen ? 'invisible opacity-0' : 'visible opacity-100'} transition-all duration-300 bg-gradient-to-br from-gray-900 to-black p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 cursor-pointer`}
      >
        <FaRobot className="w-8 h-8 text-white" />
      </button>

      {/* Chat Panel */}
      <div
        className={`absolute bottom-0 right-0 w-[85vw] max-w-md h-[70vh] max-h-[600px] bg-gray-900 rounded-xl shadow-2xl transition-all duration-300 transform-gpu flex flex-col ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-t-xl border-b border-gray-700">
          <div className="flex items-center gap-3">
            <SiAwslambda className="w-6 h-6 cursor-pointer" />
            <h2 className="text-lg font-semibold text-white">Lambda AI</h2>
          </div>
          <button
            onClick={toggleChat}
            className="p-2 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto scroll-smooth p-4 space-y-4"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-xl ${
                  msg.isUser
                    ? 'bg-purple-600 text-white rounded-tr-none'
                    : 'bg-gray-800 text-gray-100 rounded-tl-none'
                } transition-transform duration-200`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gray-800 rounded-b-xl border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              disabled={loading}
              onChange={e => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 text-sm text-white bg-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              autoFocus
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled= {loading}
              className="p-3 text-white bg-black rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
            >
              {loading ? (<TbFidgetSpinner className='w-5 h-5 animate-spin' />): (<FaPaperPlane className="w-5 h-5" />)}
            </button>
          </div>
          <p className="mt-2 text-xs text-center text-gray-400">
            Responses powered by <strong>Gemini</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
