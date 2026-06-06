import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-teal-400 font-black text-lg uppercase tracking-tight">Andy Pulling</div>
            <div className="text-white font-light text-sm tracking-widest mb-3">Engineering</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialists to the food processing industry since 1982. Custom stainless steel equipment designed and built to your exact requirements.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/conveyors" className="text-gray-400 hover:text-teal-400 transition-colors">Conveyors & Elevators</Link></li>
              <li><Link href="/services/fabrications" className="text-gray-400 hover:text-teal-400 transition-colors">Custom Fabrications</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-teal-400 transition-colors">Project Gallery</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Sweetlands Way, Gosberton</li>
              <li>Lincolnshire, PE11 4HH</li>
              <li className="pt-1">
                <a href="tel:01775841070" className="hover:text-teal-400 transition-colors">Tel: 01775 841070</a>
              </li>
              <li>
                <a href="tel:07767226410" className="hover:text-teal-400 transition-colors">Mobile: 07767 226410</a>
              </li>
              <li>
                <a href="mailto:info@andypullingengineering.co.uk" className="hover:text-teal-400 transition-colors">
                  info@andypullingengineering.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Andy Pulling Engineering Ltd. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Engineers on call 7 days a week</p>
        </div>
      </div>
    </footer>
  );
}
