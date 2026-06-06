import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-amber-400 font-black text-lg uppercase tracking-tight">Wrights & Holbeach</div>
            <div className="text-white font-light text-sm tracking-widest mb-3">Asphalt Ltd</div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Flat roofing and mastic asphalt specialists since 1959. Four generations of family expertise serving Lincolnshire, Cambridgeshire and Norfolk.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/flat-roofing" className="text-stone-400 hover:text-amber-400 transition-colors">Flat Roofing</Link></li>
              <li><Link href="/services/mastic-asphalt" className="text-stone-400 hover:text-amber-400 transition-colors">Mastic Asphalt</Link></li>
              <li><Link href="/services/commercial" className="text-stone-400 hover:text-amber-400 transition-colors">Commercial & Industrial</Link></li>
              <li><Link href="/gallery" className="text-stone-400 hover:text-amber-400 transition-colors">Project Gallery</Link></li>
              <li><Link href="/about" className="text-stone-400 hover:text-amber-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Long Sutton</li>
              <li>Lincolnshire</li>
              <li className="pt-1">
                <a href="tel:01406362585" className="hover:text-amber-400 transition-colors">Tel: 01406 362585</a>
              </li>
              <li>
                <a href="mailto:enquiries@whal.co.uk" className="hover:text-amber-400 transition-colors">
                  enquiries@whal.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-stone-500 text-xs">© {new Date().getFullYear()} Wrights & Holbeach Asphalt Ltd. All rights reserved.</p>
          <p className="text-stone-600 text-xs">Covering Lincolnshire, Cambridgeshire & Norfolk</p>
        </div>
      </div>
    </footer>
  );
}
