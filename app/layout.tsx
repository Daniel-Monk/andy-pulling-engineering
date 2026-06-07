import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Andy Pulling Engineering | Food Processing Equipment Lincolnshire",
    template: "%s | Andy Pulling Engineering",
  },
  description:
    "Specialists in custom stainless steel conveyors, fabrications and food processing equipment. Based in Gosberton, Lincolnshire. Engineers on call 7 days a week.",
  keywords: [
    "food processing equipment Lincolnshire",
    "stainless steel conveyors",
    "custom fabrications Gosberton",
    "food grade conveyor manufacturer",
    "belt conveyors PE11",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
