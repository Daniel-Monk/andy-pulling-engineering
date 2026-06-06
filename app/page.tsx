import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Flat Roofing & Mastic Asphalt Specialists | Wrights & Holbeach Asphalt',
  description:
    'Wrights & Holbeach Asphalt Ltd — flat roofing and mastic asphalt specialists since 1959. Serving Lincolnshire, Cambridgeshire and Norfolk. Domestic, commercial and industrial.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Established 1959 · Four Generations
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Flat Roofing &<br />
              <span className="text-amber-400">Mastic Asphalt</span><br />
              Specialists
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Family-run since 1959, we&apos;re the only mastic asphalt specialists within a 60-mile radius. From domestic flat roofs to large-scale commercial and industrial projects across Lincolnshire, Cambridgeshire and Norfolk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services/flat-roofing"
                className="border border-stone-500 hover:border-amber-400 text-stone-300 hover:text-amber-400 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['65+', 'Years in business'],
              ['4', 'Generations of expertise'],
              ['1959', 'Established'],
              ['60mi', 'Nearest mastic asphalt specialist'],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-amber-400 text-3xl font-black">{stat}</div>
                <div className="text-stone-400 text-xs mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">What We Do</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            High quality flat roofing solutions for every application — from a domestic extension to an architect-specified industrial roof.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              href: '/services/flat-roofing',
              title: 'Flat Roofing',
              desc: 'New flat roofs, replacements and repairs for domestic and commercial properties. Long-lasting, professionally installed.',
            },
            {
              href: '/services/mastic-asphalt',
              title: 'Mastic Asphalt',
              desc: 'Specialist mastic asphalt for roofs, balconies, damp proof flooring and tanking. The only specialists within 60 miles.',
            },
            {
              href: '/services/commercial',
              title: 'Commercial & Industrial',
              desc: 'Architect-specified schemes for housing associations, local authorities, schools, hospitals and industrial premises.',
            },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group border border-gray-200 rounded-xl p-6 hover:border-amber-400 transition-colors"
            >
              <div className="w-8 h-1 bg-amber-500 rounded mb-4 group-hover:w-12 transition-all" />
              <h3 className="font-black text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 text-amber-500 text-sm font-semibold">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-gray-50 border-y border-gray-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Recent Projects</h2>
              <p className="text-gray-500 mt-1">Work completed across Lincolnshire and beyond</p>
            </div>
            <Link href="/gallery" className="text-amber-500 hover:text-amber-400 font-semibold text-sm">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <PlaceholderImage label="Commercial flat roof" aspect="aspect-[4/3]" />
            <PlaceholderImage label="Mastic asphalt balcony" aspect="aspect-[4/3]" />
            <PlaceholderImage label="Industrial roofing" aspect="aspect-[4/3]" />
            <PlaceholderImage label="Domestic flat roof" aspect="aspect-[4/3]" />
            <PlaceholderImage label="School roofing project" aspect="aspect-[4/3]" />
            <PlaceholderImage label="Housing association roof" aspect="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              The Only Mastic Asphalt Specialists Within 60 Miles
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              When most contractors reach for felt or single-ply, we offer something better. Mastic asphalt is one of the most durable flat roofing materials available — and we&apos;re the regional specialists for it.
            </p>
            <ul className="space-y-3">
              {[
                'Family business — four generations since 1959',
                'Only mastic asphalt specialists within 60 miles',
                'Domestic through to architect-specified commercial',
                'Housing Associations, Local Authorities, NHS and schools',
                'Full roofing, balcony and tanking solutions',
                'Covering Lincolnshire, Cambridgeshire and Norfolk',
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
            <PlaceholderImage label="Asphalt work detail" aspect="aspect-square" />
            <PlaceholderImage label="Roofing team" aspect="aspect-square" />
            <PlaceholderImage label="Completed project" aspect="aspect-video" className="col-span-2" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-stone-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Need a flat roof quotation?</h2>
            <p className="text-stone-300 text-sm">
              Call us on <a href="tel:01406362585" className="text-amber-400 hover:text-amber-300">01406 362585</a> or drop us a message and we&apos;ll get back to you promptly.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-lg transition-colors text-sm"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
