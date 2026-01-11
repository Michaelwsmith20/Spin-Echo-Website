import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "../context/BookingContext"; // Import provider

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Spin Echo | Next Generation NMR Flow Measurement",
  description: "Physics based NMR flow metering for high GVF and multiphase environments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}