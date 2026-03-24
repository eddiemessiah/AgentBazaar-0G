"use client";

import Link from "next/link";
import { Terminal, Bot, Zap, Plus, Layers } from "lucide-react";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

export default function Navbar() {
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-[#7c3aed] to-[#d8b4fe] p-1.5 rounded-lg group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Agent<span className="text-white/60">Bazaar</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-white/70 hover:text-white flex items-center gap-2 transition-colors">
            <Layers className="w-4 h-4" /> The Bazaar
          </Link>
          <Link href="/mint" className="text-sm font-medium text-white/70 hover:text-[#d8b4fe] flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" /> Mint iNFT
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60">
            <Zap className="w-3 h-3 text-[#a78bfa]" />
            0G Mainnet
          </div>
        </div>

        <button 
          onClick={() => open()}
          className="px-5 py-2 rounded-xl bg-white text-black text-sm font-bold hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02]"
        >
          {isConnected 
            ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
            : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
}
