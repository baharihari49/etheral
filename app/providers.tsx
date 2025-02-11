'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config } from './providers/wagmi';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme({
                    accentColor: "#4F46E5",
                    accentColorForeground: "white",
                    borderRadius: "large",
                    overlayBlur: "small",
                })}
                >{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
