"use client";

import Navbar from "@/components/Navbar";
import { UploadCloud, Bot, Terminal, Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function MintPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#7c3aed]/30 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-24 max-w-5xl relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none" />

        <header className="mb-16 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-transparent border border-[#7c3aed]/30 mb-6 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
            <Bot className="w-8 h-8 text-[#d8b4fe]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
            Mint The Future.
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Compile your Agent's neural weights, upload its system prompt to <strong className="text-white/80 font-medium">0G Storage</strong>, and mint an immutable ERC-7857 iNFT.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Form Section */}
          <div className="lg:col-span-7">
            <form className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#7c3aed]/10 to-transparent blur-[80px] pointer-events-none rounded-full" />
              
              <div className="space-y-8 relative z-10">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/60 tracking-wide uppercase flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#a78bfa]" /> Agent Identity
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. DeFi Yield Optimizer" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-lg font-medium focus:outline-none focus:border-[#7c3aed]/50 focus:bg-black/60 transition-all placeholder:text-white/20" 
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-white/60 tracking-wide uppercase flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#a78bfa]" /> System Prompt (The Brain)
                    </label>
                    <span className="text-xs font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-md border border-[#10b981]/20">0G Storage Log</span>
                  </div>
                  <textarea 
                    rows={6} 
                    placeholder="You are an autonomous DeFi expert agent that analyzes on-chain yield opportunities across the 0G ecosystem..." 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-lg font-mono focus:outline-none focus:border-[#7c3aed]/50 focus:bg-black/60 transition-all resize-none placeholder:text-white/20"
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/60 tracking-wide uppercase flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#a78bfa]" /> x402 Inference Fee (A0GI)
                  </label>
                  <div className="relative">
                    <input 
                      type="number" 
                      step="0.01" 
                      placeholder="0.05" 
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-lg font-mono focus:outline-none focus:border-[#7c3aed]/50 focus:bg-black/60 transition-all placeholder:text-white/20" 
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 font-bold">A0GI</div>
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="w-full mt-4 py-5 rounded-2xl bg-white text-black font-black text-lg hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center gap-3"
                >
                  <UploadCloud className="w-6 h-6" /> Initialize Deployment
                </button>
              </div>
            </form>
          </div>

          {/* Status Tracker */}
          <div className="lg:col-span-5">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[2rem] h-full flex flex-col">
              <h3 className="text-xl font-bold mb-8">Deployment Pipeline</h3>
              
              <div className="space-y-8 flex-1">
                {[
                  { title: "Initialize Agent Config", status: step >= 1 ? "done" : "pending" },
                  { title: "Upload Brain to 0G Storage", status: step >= 2 ? "active" : "pending" },
                  { title: "Mint ERC-7857 iNFT", status: step >= 3 ? "active" : "pending" },
                  { title: "Provision x402 Token Account", status: step >= 4 ? "active" : "pending" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 ${item.status === 'pending' ? 'opacity-30' : 'opacity-100'} transition-opacity`}>
                    <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 
                      ${item.status === 'done' ? 'bg-[#10b981] border-[#10b981] text-black' : 
                        item.status === 'active' ? 'border-[#7c3aed] bg-transparent text-[#7c3aed]' : 
                        'border-white/20 bg-transparent text-transparent'}`}
                    >
                      {item.status === 'done' ? <CheckCircle2 className="w-4 h-4" /> : <div className={`w-2 h-2 rounded-full ${item.status === 'active' ? 'bg-[#7c3aed] animate-ping' : 'bg-transparent'}`} />}
                    </div>
                    <div>
                      <h4 className={`font-bold ${item.status === 'active' ? 'text-white' : 'text-white/80'}`}>{item.title}</h4>
                      {item.status === 'active' && (
                        <p className="text-sm text-[#a78bfa] mt-1 font-mono animate-pulse">Processing transaction...</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-sm text-[#d8b4fe] flex items-start gap-3">
                <Shield className="w-5 h-5 shrink-0" />
                <p>Your agent's neural weights are cryptographically verified and stored immutably on the 0G Network.</p>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
