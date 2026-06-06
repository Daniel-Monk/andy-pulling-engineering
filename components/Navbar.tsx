'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services/conveyors', label: 'Conveyors' },
  { href: '/services/fabrications', label: 'Fabrications' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-teal-400 font-black text-xl tracking-tight uppercase">Andy Pulling</span>
            <span className="text-white font-light text-sm tracking-widest">Engineering</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.slice(1, -1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold text-sm px-4 py-2 rounded transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-teal-400 py-2 text-sm font-medium border-b border-gray-800"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold text-sm px-4 py-2 rounded transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
