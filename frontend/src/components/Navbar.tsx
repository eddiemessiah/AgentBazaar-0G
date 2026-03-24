import Link from "next/link";
import { Sparkles, BrainCircuit, Activity } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zg-purple/30 bg-zg-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <BrainCircuit className="w-8 h-8 text-zg-purple" />
          <span className="text-xl font-bold tracking-tight">Agent<span className="text-zg-purple">Bazaar</span></span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/mint" className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> The Forge (Mint)
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
            <Activity className="w-3 h-3" />
            0G Mainnet
          </div>
          <button className="px-4 py-2 rounded-lg bg-zg-purple hover:bg-zg-purple-light text-white font-medium text-sm transition-all shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}