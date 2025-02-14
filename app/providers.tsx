'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { config } from './providers/wagmi';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={lightTheme({
                    accentColor: "#3B82F6",
                    accentColorForeground: "white",
                    borderRadius: "medium",
                    overlayBlur: "small",
                })}
                >{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
