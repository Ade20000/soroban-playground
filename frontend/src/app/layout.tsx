import type { Metadata } from "next";
import "./globals.css";
import { GraphQLProvider } from "../components/providers/GraphQLProvider";
import { WalletProvider } from "../components/providers/WalletProvider";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import { THEME_BOOTSTRAP_SCRIPT } from "../lib/theme/engine";
import SidebarShell from "../components/Sidebar";
import RenderWarningModal from "../components/RenderWarningModal";

export const metadata: Metadata = {
  title: "Stellar Soroban Playground",
  description:
    "Interactive command desk suite and Monaco editor playground for compiling, deploying, and invoking smart contracts on Stellar Testnet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Resolve the stored / OS theme before first paint so a returning visitor
          never sees a flash of the default palette.
        */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
      </head>
      <body
        className="min-h-screen bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <WalletProvider>
            <GraphQLProvider>
              <SidebarShell>
                <RenderWarningModal />
                {children}
              </SidebarShell>
            </GraphQLProvider>
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
