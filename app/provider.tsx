"use client";

import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { gnosis, polygonZkEvm } from "wagmi/chains";

// 1. Get projectId
const projectId = "62066586b5adc509f3304c9312077975";

// 2. Create wagmiConfig
const metadata = {
  name: "threelingo",
};

const chains = [polygonZkEvm, gnosis];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <WagmiConfig config={wagmiConfig}>
          <main className=" bg-background text-foreground">{children}</main>
        </WagmiConfig>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
