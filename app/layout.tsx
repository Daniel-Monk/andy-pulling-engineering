import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Wrights & Holbeach Asphalt | Flat Roofing Specialists | Lincolnshire",
    template: "%s | Wrights & Holbeach Asphalt",
  },
  description:
    "Flat roofing and mastic asphalt specialists serving Lincolnshire, Cambridgeshire and Norfolk since 1959. Four generations of family expertise in domestic, commercial and industrial roofing.",
  keywords: [
    "flat roofing Lincolnshire",
    "mastic asphalt Spalding",
    "flat roof Long Sutton",
    "mastic asphalt specialists",
    "flat roofing contractor Holbeach",
    "flat roof Boston Lincolnshire",
    "asphalt roofing Peterborough",
    "flat roofing Kings Lynn",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
