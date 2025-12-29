
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await geminiService.getChatRecommendation(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-red-600 flex justify-between items-center shrink-0">
            <span className="font-bold text-sm">IA Assistente</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-black">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-xs text-gray-500 text-center italic mt-10">Como posso ajudar em sua experiência Hotshorts?</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-lg text-xs ${
                  m.role === 'user' ? 'bg-red-600 text-white' : 'bg-white/10 text-gray-200'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-gray-200 px-3 py-2 rounded-lg text-xs animate-pulse">
                  Pensando...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte algo..."
              className="flex-1 bg-black/40 border border-white/10 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-red-600"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-red-600 p-2 rounded-md hover:bg-red-700 disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95"
        >
          <i className="fa-solid fa-robot text-2xl"></i>
        </button>
      )}
    </div>
  );
};

export default AIChat;
