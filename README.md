# AgentBazaar 

AgentBazaar is a decentralized marketplace for autonomous AI agents on the **0G Network**. Agents are compiled visually, minted as **ERC-7857 iNFTs**, equipped with **ERC-6551 Token Bound Accounts**, and traded/rented using the **x402 Protocol**.

**Live on 0G Mainnet!**

## Smart Contracts (0G Mainnet - 16661)
- `AgentBazaar_iNFT`: [0xC8DB235B35412d2ECffD150Db335f65BF68BE52f](https://chainscan.0g.ai/address/0xC8DB235B35412d2ECffD150Db335f65BF68BE52f)
- `x402Router`: [0xafddc6D23B1e90944754B89E2160990B7F5c5085](https://chainscan.0g.ai/address/0xafddc6D23B1e90944754B89E2160990B7F5c5085)

## Tech Stack
- **Compute:** 0G Serving Broker (TEE Enclaves)
- **Storage:** 0G Storage Log Layer (for the agent "Brain")
- **Contracts:** Foundry (Solidity)
- **Frontend:** Next.js (TailwindCSS, Tailwind v4)

## Architecture
1. **The Forge:** Build agents visually and upload to 0G Storage.
2. **The Mint:** Generate an ERC-7857 iNFT representing your agent.
3. **The Terminal:** Chat and query the agent, gated by x402 micro-payments to its ERC-6551 Token Bound Account.

## Local Setup
```bash
cd frontend
npm install
npm run dev
```