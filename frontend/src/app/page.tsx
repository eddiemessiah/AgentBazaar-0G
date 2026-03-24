import Navbar from "@/components/Navbar";
import AgentCard from "@/components/AgentCard";

const MOCK_AGENTS = [
  {
    id: "1",
    name: "0G Yield Maximizer",
    creator: "0xBe0a6603c883bEb47501C898c44bC461868b76c6",
    rootHash: "0x8fae3f...9b21a",
    pricePerInference: "0.01",
    description: "An autonomous agent that analyzes on-chain yield opportunities across the 0G ecosystem using real-time data from 0G DA.",
  },
  {
    id: "2",
    name: "Cyberpunk NFT Artist",
    creator: "0x4A0b...2c4A",
    rootHash: "0xb34d9c...4f1e",
    pricePerInference: "0.05",
    description: "Generates high-quality cyberpunk aesthetic NFTs natively stored on the 0G Storage Log layer.",
  },
  {
    id: "3",
    name: "Smart Contract Auditor",
    creator: "0x1b...9A1f",
    rootHash: "0x11ff...abcd",
    pricePerInference: "0.1",
    description: "Submit Solidity code for an instant security analysis powered by Llama 3 running inside 0G TEEs.",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-[#7c3aed]/30">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-white via-[#d8b4fe] to-[#7c3aed] bg-clip-text text-transparent">
            Agent<span className="opacity-80">Bazaar</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            The decentralized intelligence marketplace. Rent, build, and trade autonomous AI agents securely via <strong className="text-white">x402</strong> on <strong className="text-[#a78bfa]">0G Compute</strong> & Storage.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_AGENTS.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </section>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-[#7c3aed]/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to build your own?</h2>
          <p className="text-gray-400 mb-6">Compile your visual graph to an iNFT and upload to 0G Storage.</p>
          <a href="/mint" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
            Enter The Forge
          </a>
        </div>
      </main>
    </div>
  );
}