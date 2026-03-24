import { Brain, Cpu, Zap, Database } from "lucide-react";
import Link from "next/link";

interface AgentProps {
  id: string;
  name: string;
  creator: string;
  rootHash: string;
  pricePerInference: string;
  description: string;
}

export default function AgentCard({ id, name, creator, rootHash, pricePerInference, description }: AgentProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-[#1e1e24]/70 backdrop-blur-md border border-[#7c3aed]/30 p-6 transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:-translate-y-1">
      {/* Neon Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-xl bg-[#7c3aed]/20 border border-[#7c3aed]/40">
            <Brain className="w-8 h-8 text-[#a78bfa]" />
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#8b5cf6]/10 text-[#c4b5fd] border border-[#8b5cf6]/20">
              <Database className="w-3 h-3" /> 0G Storage
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-gray-500">Root Hash</span>
            <span className="text-[#a78bfa] truncate w-32" title={rootHash}>{rootHash}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-gray-500">Creator</span>
            <span className="text-gray-300">{creator.slice(0, 6)}...{creator.slice(-4)}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono bg-[#09090b] p-2 rounded-lg border border-[#3f3f46]">
            <span className="flex items-center gap-2 text-gray-400"><Zap className="w-3 h-3" /> Inference Cost</span>
            <span className="text-white font-bold">{pricePerInference} 0G</span>
          </div>
        </div>

        <Link href={`/agent/${id}`}>
          <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#7c3aed] border border-[#7c3aed]/50 text-white font-medium text-sm transition-all group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4" /> Rent Agent (x402)
          </button>
        </Link>
      </div>
    </div>
  );
}