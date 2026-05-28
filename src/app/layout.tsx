import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rimble · 3D websites from a prompt",
  description: "3D websites from a prompt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} dark h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden font-[family-name:var(--font-inter)] bg-[#050510] text-white [color-scheme:dark]">
        {children}
      </body>
    </html>
  );
}
