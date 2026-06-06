import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Mastic Asphalt Specialists Lincolnshire',
  description: 'Mastic asphalt roofing, balconies, damp proof flooring and tanking in Lincolnshire. The only mastic asphalt specialists within 60 miles. Wrights & Holbeach Asphalt since 1959.',
};

export default function MasticAsphaltPage() {
  return (
    <>
      <section className="bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-stone-400 text-sm font-medium mb-3">Services</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Mastic Asphalt</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            We are the only mastic asphalt specialists within a 60-mile radius — offering roofing, balconies, damp proof flooring and tanking solutions that outlast most alternatives.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">What Is Mastic Asphalt?</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
              <p>
                Mastic asphalt is a hot-applied waterproofing material that has been used in construction for over 150 years. When properly installed, it forms a seamless, monolithic membrane with no joints or seams — the primary failure point of most other flat roofing systems.
              </p>
              <p>
                It&apos;s used on roofs, balconies, car parks, damp proof floors and as a tanking solution for basements and below-ground structures. Many buildings installed in the 1960s and 70s still carry their original mastic asphalt today.
              </p>
              <p>
                It requires specialist skills and equipment to apply correctly — which is why so few contractors offer it. We&apos;ve been doing it since 1959.
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[
                'Mastic asphalt roofing — new and replacement',
                'Balcony and terrace waterproofing',
                'Damp proof flooring',
                'Tanking for basements and below-ground structures',
                'Seamless, joint-free installation',
                'Exceptionally long service life',
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm">
                  <div className="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderImage label="Mastic asphalt application" aspect="aspect-square" />
            <PlaceholderImage label="Asphalt balcony" aspect="aspect-square" />
            <PlaceholderImage label="Completed asphalt roof" aspect="aspect-video" className="col-span-2" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            ['Roofing & Balconies', 'Seamless waterproofing for flat roofs and external terraces of any size or shape.'],
            ['Damp Proof Flooring', 'Mastic asphalt as a DPM beneath screeds and finishes in commercial and industrial buildings.'],
            ['Tanking', 'Below-ground waterproofing for basements, lift pits, plant rooms and other underground structures.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-2 h-2 bg-amber-500 rounded-full mx-auto mb-3" />
              <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-stone-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Interested in mastic asphalt?</h2>
            <p className="text-stone-300 text-sm">We&apos;re happy to advise on whether it&apos;s the right solution for your project before you commit to anything.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
