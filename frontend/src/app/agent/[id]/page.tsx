"use client";

import Navbar from "@/components/Navbar";
import { Cpu, Terminal as TerminalIcon, ShieldAlert, Send } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function AgentTerminal() {
  const params = useParams();
  const id = params?.id as string;
  const [hasPaid, setHasPaid] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{role: "user" | "agent", text: string}[]>([]);

  const handlePay = () => {
    // Simulated payment delay
    setTimeout(() => {
      setHasPaid(true);
      setMessages([{ role: "agent", text: "x402 Payment Received. 0G Compute TEE Enclave initialized. How can I assist you?" }]);
    }, 1500);
  };

  const handleSend = () => {
    if(!query.trim()) return;
    setMessages(prev => [...prev, { role: "user", text: query }]);
    setQuery("");
    
    // Simulate agent typing
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "agent", text: `I am processing your request through the 0G DA layer. (Simulated Response for Agent #${id})` }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-1 flex flex-col max-w-5xl">
        <header className="mb-6 flex justify-between items-end border-b border-[#3f3f46] pb-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <TerminalIcon className="text-[#a78bfa] w-8 h-8" /> 
              Agent Terminal #{id}
            </h1>
            <p className="text-gray-400 font-mono text-sm mt-2">Connected to 0G Compute Broker</p>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#09090b] border border-[#a78bfa]/50 text-xs font-mono">
              <ShieldAlert className="w-3 h-3 text-green-400" /> TEE Verified
            </span>
          </div>
        </header>

        {!hasPaid ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-md w-full text-center bg-[#1e1e24]/70 backdrop-blur-md border border-[#7c3aed]/30 p-8 rounded-3xl shadow-[0_0_30px_rgba(124,58,237,0.1)]">
              <div className="w-20 h-20 mx-auto bg-[#7c3aed]/20 rounded-full flex items-center justify-center mb-6 border border-[#7c3aed]/50">
                <Cpu className="w-10 h-10 text-[#a78bfa]" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Access Restricted</h2>
              <p className="text-gray-400 mb-8">This agent requires an x402 micro-payment to unlock its inference engine.</p>
              
              <div className="bg-[#09090b] border border-[#3f3f46] rounded-xl p-4 mb-8 flex justify-between items-center">
                <span className="text-gray-400 text-sm">Inference Fee</span>
                <span className="text-2xl font-bold">0.05 <span className="text-sm text-[#a78bfa]">0G</span></span>
              </div>

              <button 
                onClick={handlePay}
                className="w-full py-4 rounded-xl bg-[#7c3aed] hover:bg-[#8b5cf6] text-white font-bold text-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all flex items-center justify-center gap-2"
              >
                Pay & Unlock Agent
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col bg-[#1e1e24]/40 border border-[#3f3f46] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    msg.role === 'user' 
                      ? 'bg-[#7c3aed] text-white' 
                      : 'bg-[#27272a] text-gray-200 border border-[#3f3f46]'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-[#09090b] border-t border-[#3f3f46]">
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Query the agent..." 
                  className="flex-1 bg-[#1e1e24] border border-[#3f3f46] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="p-4 rounded-xl bg-[#7c3aed] hover:bg-[#8b5cf6] text-white transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}