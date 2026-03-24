"use client";

import Navbar from "@/components/Navbar";
import { ArrowRight, Bot, Zap, Shield, Database } from "lucide-react";

const MOCK_AGENTS = [
  {
    id: "1",
    name: "0G Yield Maximizer",
    creator: "0xBe...76c6",
    price: "0.01",
    tag: "DeFi",
    description: "Autonomous agent analyzing on-chain yield across the 0G ecosystem via real-time DA.",
    glow: "shadow-[0_0_40px_rgba(124,58,237,0.1)]"
  },
  {
    id: "2",
    name: "Cyberpunk NFT Artist",
    creator: "0x4A...2c4A",
    price: "0.05",
    tag: "Generative",
    description: "Generates high-quality aesthetic NFTs natively stored on the 0G Storage Log layer.",
    glow: "shadow-[0_0_40px_rgba(236,72,153,0.1)]"
  },
  {
    id: "3",
    name: "Smart Contract Auditor",
    creator: "0x1b...9A1f",
    price: "0.10",
    tag: "Security",
    description: "Submit Solidity code for instant security analysis powered by Llama 3 in 0G TEEs.",
    glow: "shadow-[0_0_40px_rgba(56,189,248,0.1)]"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#7c3aed]/30 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-24 max-w-7xl relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7c3aed]/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none" />

        <header className="mb-24 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live on 0G Mainnet Aristotle
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            <span className="bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent block">Autonomous Agents.</span>
            <span className="bg-gradient-to-r from-[#d8b4fe] via-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">Decentralized Scale.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            The decentralized intelligence marketplace. Rent, build, and trade autonomous AI agents securely via <strong className="text-white/80 font-medium">x402</strong> on <strong className="text-[#a78bfa] font-medium">0G Compute & Storage</strong>.
          </p>

          <div className="flex items-center gap-4">
            <a href="/mint" className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all">
              Launch Agent <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://0g.ai" target="_blank" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-md">
              Read Docs
            </a>
          </div>
        </header>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 relative z-10">
          {[
            { icon: Database, title: "0G Storage Log", desc: "Agent neural weights and system prompts stored natively on the fastest DA layer." },
            { icon: Zap, title: "x402 Economics", desc: "Agents own Token Bound Accounts (ERC-6551) to earn yield directly per inference." },
            { icon: Shield, title: "TEE Enclaves", desc: "Verifiable, tamper-proof AI execution guaranteeing prompt and state security." }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl hover:bg-white/[0.04] transition-colors">
              <feature.icon className="w-8 h-8 text-[#a78bfa] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bazaar Grid */}
        <section className="relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">The Bazaar</h2>
              <p className="text-white/40">Trending autonomous agents running on 0G Mainnet.</p>
            </div>
            <button className="text-sm font-medium text-[#a78bfa] hover:text-white transition-colors">View All →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_AGENTS.map((agent) => (
              <div key={agent.id} className={`group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/0 hover:from-[#7c3aed]/50 transition-all duration-500 ${agent.glow}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative h-full bg-[#0a0a0a] rounded-[23px] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#7c3aed]/10 text-[#a78bfa] border border-[#7c3aed]/20 text-xs font-bold tracking-wide">
                        {agent.tag}
                      </span>
                      <Bot className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#d8b4fe] transition-colors">{agent.name}</h3>
                    <p className="text-sm text-white/40 leading-relaxed mb-6 line-clamp-2">{agent.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider font-mono mb-1">Creator</p>
                      <p className="text-sm font-mono text-white/60">{agent.creator}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/30 uppercase tracking-wider font-mono mb-1">Inference</p>
                      <p className="text-sm font-bold text-white flex items-center gap-1 justify-end">
                        {agent.price} <span className="text-[#a78bfa]">A0GI</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
