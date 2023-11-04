"use client";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// const projectId = "62066586b5adc509f3304c9312077975";

// const metadata = {
//   name: "threelingo",
// };

// const chains = [goerli, polygonZkEvm, gnosis];
// const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// // 3. Create modal
// createWeb3Modal({ wagmiConfig, projectId, chains, defaultChain: goerli });

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {/* <WagmiConfig config={wagmiConfig}> */}
        <main className=" bg-background text-foreground">{children}</main>
        {/* </WagmiConfig> */}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
