"use client";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const projectId = 'e8b725ef14e6669865d4bbddba851f50' // Public dummy project ID for hackathon demo

const metadata = {
  name: 'AgentBazaar',
  description: 'Decentralized AI Agent Marketplace on 0G',
  url: 'https://agentbazaar.netlify.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const mainnet0G = {
  id: 16661,
  name: '0G Mainnet',
  network: '0g-mainnet',
  nativeCurrency: {
    decimals: 18,
    name: '0G Token',
    symbol: 'A0GI',
  },
  rpcUrls: {
    public: { http: ['https://evmrpc.0g.ai'] },
    default: { http: ['https://evmrpc.0g.ai'] },
  },
  blockExplorers: {
    default: { name: '0G Scan', url: 'https://chainscan.0g.ai' },
  },
}

const chains = [mainnet0G]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#7c3aed',
    '--w3m-color-bg-1': '#09090b',
  }
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiConfig>
  )
}
