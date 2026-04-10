import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Posematic — Next-generation posing app for artists",
  description:
    "Sketch-to-pose AI and a modern posing workflow built for illustrators, animators, and every artist who needs reference fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
