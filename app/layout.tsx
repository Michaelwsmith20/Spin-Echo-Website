import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "../context/BookingContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Spin Echo | Evolution in Flow Measurement",
  description: "High fidelity wet gas and multi phase flow measurement using physics based NMR sensing. Delivering metrology integrity across the energy sector.",
  keywords: [
    "Multiphase flow meter", 
    "Wet gas measurement", 
    "NMR flow measurement", 
    "Non intrusive sensing", 
    "High GVF flow meter", 
    "Metrology platform", 
    "Hydrogen blending data",
    "Production optimization"
  ],
  openGraph: {
    title: "Spin Echo Metrology Systems",
    description: "First principles NMR measurement for high stakes energy environments.",
    url: "https://spin-echo-website.vercel.app",
    siteName: "Spin Echo",
    images: [{ url: "https://i.postimg.cc/pXLwv0TK/meter.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-[#050608] text-white selection:bg-spinecho-accent selection:text-black`}>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}