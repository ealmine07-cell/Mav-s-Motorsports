
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Bot } from 'lucide-react';
import { getGearAdvice } from '../services/geminiService';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hey! I'm Mav's AI Assistant. Looking for specific parts or gear recommendations today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const aiResponse = await getGearAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || '' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl w-80 md:w-96 flex flex-col max-h-[500px] overflow-hidden">
          <div className="bg-zinc-800 p-4 flex justify-between items-center border-b border-zinc-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <span className="font-bold brand-font tracking-wide uppercase">Mav's Gear Guide</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  m.role === 'user' ? 'bg-orange-600 text-white rounded-br-none' : 'bg-zinc-800 text-zinc-100 rounded-bl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-lg text-sm animate-pulse flex items-center gap-2">
                  Mav is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-800/50 border-t border-zinc-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about parts or gear..."
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-orange-600 hover:bg-orange-500 p-2 rounded-md transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 hover:bg-orange-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default Assistant;
