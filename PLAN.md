# AgentBazaar - Technical Specification & Execution Plan (0G Hackfest Lagos)

**Deadline:** ~2 Hours
**Target Network:** 0G Newton Testnet (Chain ID: 16600)
**Theme:** Purple (0G Brand Colors), Cyberpunk Marketplace, High-Tech

## 1. System Architecture

### 1.1 The Smart Contract Layer (EVM)
*   **`AgentBazaar_iNFT.sol` (ERC-721 + ERC-7857 concept):** The core NFT contract. Each minted NFT represents an Agent.
*   **`ERC6551Registry` & `TBA Implementation`:** Every minted iNFT gets a Token Bound Account (TBA). The agent itself has a wallet to hold tokens, pay for compute, and receive inference fees.
*   **`x402Router.sol` (The Bazaar Economy):** The escrow and payment gateway. Users pay this contract to use an Agent. The contract splits the fee: 97% to the Agent's TBA, 3% to the AgentBazaar treasury.

### 1.2 The Data & Compute Layer (0G Network)
*   **0G Storage (Log Layer):** When an agent is minted, its core "Brain" (System Prompt, Tool definitions, Metadata) is uploaded to the 0G Storage network using `@0gfoundation/0g-ts-sdk`. The resulting 0G Data Root Hash is stored in the smart contract as the `tokenURI`.
*   **0G Compute (TEEs):** Agents run their inference inside 0G's Trusted Execution Environments (TEEs) using the OpenAI-compatible SDK, ensuring the agent's logic/weights cannot be stolen by the platform.

### 1.3 The Frontend Application (Next.js)
*   **Framework:** Next.js (App Router), TailwindCSS, Wagmi/Viem.
*   **Styling:** Deep purples (`#6B21A8`, `#9333EA`), neon accents, dark mode default. 
*   **Key Pages:**
    *   **`/` (The Bazaar):** Marketplace displaying all deployed agents with their 0G Storage Hash, creator, and cost per inference.
    *   **`/mint` (The Forge):** UI to define an agent's brain, upload it to 0G Storage, and mint the iNFT.
    *   **`/agent/[id]` (The Terminal):** The interface to chat with/use the agent, enforced by the x402 payment gateway.

## 2. The 2-Hour Execution Sprint

### Phase 1: Smart Contract Foundry (Minutes 0-45)
1. Initialize a Foundry project in `/workspace/AgentBazaar/contracts`.
2. Write `AgentBazaar_iNFT.sol` (ERC-721) and `x402Router.sol`.
3. Integrate an open-source ERC-6551 registry standard.
4. Deploy to 0G Newton Testnet (`https://rpc-testnet.0g.ai`).

### Phase 2: 0G Storage & Next.js Scaffold (Minutes 45-90)
1. Initialize Next.js project in `/workspace/AgentBazaar/frontend`.
2. Install `@0gfoundation/0g-ts-sdk` and `ethers`.
3. Build the `0GStorageService.ts` to handle file uploads to the 0G Storage Nodes.
4. Scaffold the purple-themed UI components (Navbar, AgentCard, MintForm).

### Phase 3: x402 Integration & Polish (Minutes 90-120)
1. Wire up Wagmi hooks to the deployed contracts.
2. Implement the "Pay to Chat" (x402) flow on the agent detail page.
3. Deploy frontend to Netlify/Vercel.
4. Record 2-minute pitch video and submit.

## 3. The "Wow" Factor for Judges
*   **Actually using 0G Storage:** We aren't using IPFS. We are using the 0G TS SDK to store the agent definitions natively.
*   **Economic Autonomy (ERC-6551):** Agents having their own wallets proves we understand the "Agentic Economy" better than teams just making API wrappers.
*   **x402 Protocol:** Implementing HTTP 402 (Payment Required) natively via smart contracts shows deep technical understanding of monetization.