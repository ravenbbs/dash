import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <Providers>
        <body
          className={cn(
            "min-h-screen font-sans antialiased bg-[radial-gradient(#d7d8fc_1px,transparent_1px)] [background-size:16px_16px]",
            inter.className
          )}
        >
          <Navbar/>
          {children}
        </body>
      </Providers>
    </html>
  );
}
