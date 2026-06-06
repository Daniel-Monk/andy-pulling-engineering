import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Commercial & Industrial Flat Roofing Lincolnshire',
  description: 'Commercial and industrial flat roofing across Lincolnshire, Cambridgeshire and Norfolk. Housing associations, local authorities, schools and industrial premises. Wrights & Holbeach Asphalt.',
};

export default function CommercialPage() {
  return (
    <>
      <section className="bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-stone-400 text-sm font-medium mb-3">Services</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Commercial & Industrial</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            Architect-specified flat roofing schemes for housing associations, health authorities, local authorities, schools, colleges and industrial premises across the region.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Large-Scale Roofing You Can Rely On</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
              <p>
                We work alongside builders, main contractors and directly with organisations to deliver flat roofing schemes from a single building to multi-unit housing developments.
              </p>
              <p>
                Our experience working with housing associations, NHS trusts, local councils and school estates means we understand the requirements around programme management, health and safety documentation and working in occupied buildings.
              </p>
              <p>
                From a small workshop roof to a large commercial scheme, you get the same four-generation family commitment to quality that has sustained us since 1959.
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[
                'Housing association and local authority roofing',
                'School, college and NHS estate work',
                'Industrial and warehouse flat roofing',
                'New-build and refurbishment schemes',
                'Working with architects and main contractors',
                'Health & safety documentation provided',
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
            <PlaceholderImage label="Commercial roof project" aspect="aspect-square" />
            <PlaceholderImage label="Industrial roofing" aspect="aspect-square" />
            <PlaceholderImage label="Housing scheme" aspect="aspect-video" className="col-span-2" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-8">Clients We Work With</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              ['Housing Associations', 'Multi-unit residential schemes, planned maintenance programmes and emergency repairs.'],
              ['Local Authorities', 'Council buildings, community centres, depots and public facilities.'],
              ['Health & Education', 'NHS facilities, GP surgeries, schools, colleges and university buildings.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-2 h-2 bg-amber-500 rounded-full mx-auto mb-3" />
                <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-stone-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Have a commercial roofing project?</h2>
            <p className="text-stone-300 text-sm">Get in touch to discuss your requirements. We work at any scale.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
