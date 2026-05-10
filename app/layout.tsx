import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Cerimonial Seletto",
  description: "Cerimonial Seletto o local correto para o seu evento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-zinc-200",
          inter.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
