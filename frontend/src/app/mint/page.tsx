import Navbar from "@/components/Navbar";

export default function MintPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#d8b4fe]">
            The Forge (iNFT Minting)
          </h1>
          <p className="text-gray-400">Compile your Agent, upload its brain to 0G Storage, and mint as an ERC-7857 iNFT.</p>
        </header>

        <form className="bg-[#1e1e24]/70 backdrop-blur-md border border-[#7c3aed]/30 p-8 rounded-3xl shadow-[0_0_30px_rgba(124,58,237,0.1)] space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#a78bfa]">Agent Name</label>
            <input type="text" placeholder="e.g. DeFi Yield Optimizer" className="w-full bg-[#09090b] border border-[#3f3f46] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#a78bfa]">System Prompt (The Brain)</label>
            <textarea rows={4} placeholder="You are a DeFi expert that analyzes on-chain yield..." className="w-full bg-[#09090b] border border-[#3f3f46] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors resize-none"></textarea>
            <p className="text-xs text-gray-500 text-right">This text will be encrypted and stored natively on the 0G Storage Log layer.</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#a78bfa]">x402 Inference Fee (0G Tokens)</label>
            <input type="number" step="0.01" placeholder="0.05" className="w-full bg-[#09090b] border border-[#3f3f46] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors" />
          </div>

          <button type="button" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9333ea] hover:from-[#8b5cf6] hover:to-[#a855f7] text-white font-bold text-lg shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all">
            1. Upload to 0G Storage & 2. Mint iNFT
          </button>
        </form>
      </main>
    </div>
  );
}