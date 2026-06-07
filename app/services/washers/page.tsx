import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Washers & Washing Systems',
  description: 'Stainless steel container washers, basket washers and produce washing systems for the food processing industry. Custom-built in Lincolnshire.',
};

export default function WashersPage() {
  return (
    <>
      <section className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-slate-400 text-sm font-medium mb-3">Services</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Washers & Washing Systems</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Custom-designed stainless steel washing systems for containers, baskets, produce and packaging — built to your specification and designed for food industry environments.
          </p>
        </div>
      </section>

      {/* Container / Tub Washers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Container & Tub Washers</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
              <p>
                Specially designed equipment for washing tubs, containers, boxes, plastic bags or any other type of outer packing unit — either prior to opening, or as part of a pre-filling or post-filling operation.
              </p>
              <p>
                Our machines are constructed from stainless steel and are designed to be efficient, reliable and easy to service during use.
              </p>
              <p>
                They can be fitted with a variety of belts depending on the application, and can be installed with cold water, hot water, or chlorinated water feeds for the food industry.
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[
                'Stainless steel construction throughout',
                'Cold, hot or chlorinated water feeds',
                'Variety of belt types available',
                'Pre-filling and post-filling configurations',
                'Designed for easy servicing',
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm">
                  <div className="flex-shrink-0 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center mt-0.5">
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
            <PlaceholderImage label="Container washer" aspect="aspect-square" />
            <PlaceholderImage label="Tub washer" aspect="aspect-square" />
            <PlaceholderImage label="Washer detail" aspect="aspect-square" />
            <PlaceholderImage label="Water feed system" aspect="aspect-square" />
          </div>
        </div>
      </section>

      {/* Basket Washers */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <PlaceholderImage label="Basket washer machine" aspect="aspect-[4/3]" />
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Basket Washers</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
                <p>
                  Basket washers can be designed and fabricated to suit a number of specific applications. Manufactured in stainless steel and with a variety of belts, our washers can be fitted with hot and cold water feeds.
                </p>
                <p>
                  We can complete every aspect from initial design through fabrication and installation. Please consult us for further advice regarding any equipment you may require.
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {[
                  'Designed for specific applications',
                  'Hot and cold water feeds',
                  'Full design, fabrication and installation service',
                  'Stainless steel throughout',
                  'Variety of belt configurations',
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Need a washing system?</h2>
            <p className="text-slate-300 text-sm">Tell us your application and we&apos;ll design a system to suit.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
