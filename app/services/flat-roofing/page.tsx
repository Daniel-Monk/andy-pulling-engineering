import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Flat Roofing Lincolnshire',
  description: 'Professional flat roofing installation, replacement and repair in Lincolnshire, Cambridgeshire and Norfolk. Domestic and commercial. Free quotes from Wrights & Holbeach Asphalt.',
};

export default function FlatRoofingPage() {
  return (
    <>
      <section className="bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-stone-400 text-sm font-medium mb-3">Services</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Flat Roofing</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            New flat roofs, full replacements and ongoing repairs for domestic properties, extensions, garages and commercial buildings — installed by experienced specialists.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Built to Last</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
              <p>
                A poorly installed flat roof is one of the most common sources of building problems. We&apos;ve been doing this since 1959 — four generations of our family have learned what works and what doesn&apos;t.
              </p>
              <p>
                Whether it&apos;s a domestic extension, a garage, a commercial unit or a large industrial building, we install flat roofs to the highest specification using materials chosen to suit your building and budget.
              </p>
              <p>
                We carry out new installations, full strip-and-replace jobs, and targeted repairs — and we&apos;ll always tell you honestly which one your roof needs.
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[
                'New flat roof installations',
                'Full replacement of failed or aged roofs',
                'Flat roof repairs and patch work',
                'Domestic extensions and garages',
                'Commercial and industrial flat roofs',
                'Free site visits and written quotations',
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
            <PlaceholderImage label="Flat roof installation" aspect="aspect-square" />
            <PlaceholderImage label="Roof membrane detail" aspect="aspect-square" />
            <PlaceholderImage label="Completed flat roof" aspect="aspect-video" className="col-span-2" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            ['Domestic', 'Extensions, garages, outbuildings and house flat roofs. We work directly with homeowners.'],
            ['Commercial', 'Shops, offices, warehouses and industrial units — any size, any specification.'],
            ['Public Sector', 'Schools, hospitals, housing associations and local authority buildings across the region.'],
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
            <h2 className="text-2xl font-black text-white mb-2">Ready to get a quote?</h2>
            <p className="text-stone-300 text-sm">We offer free site visits and written quotations with no obligation.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
