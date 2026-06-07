import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Racking & Storage Systems',
  description: 'Custom stainless and mild steel racking, shelving and storage systems for food production and storage environments. Designed and installed in Lincolnshire.',
};

export default function RackingPage() {
  return (
    <>
      <section className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-slate-400 text-sm font-medium mb-3">Services</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Racking & Storage Systems</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            For large or small storage areas, we design, construct and install racking in stainless or mild steel — with a quick response time and minimum disruption to your production.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Custom Racking Solutions</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
              <p>
                For large or small storage areas, we can design, construct and install any type of racking in stainless or mild steel with a quick response time. Using our CAD technology we are able to design the optimum layout for your production or storage areas.
              </p>
              <p>
                All our work is carried out by experienced engineers with minimum disruption to your production or storage areas.
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[
                'Stainless or mild steel construction',
                'CAD-designed for optimum layout',
                'Any size — from single bays to full warehouses',
                'Installed with minimum production disruption',
                'Film roll, pallet and product racking',
                'Raised steel platforms and mezzanines',
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
            <PlaceholderImage label="Storage racking" aspect="aspect-square" />
            <PlaceholderImage label="Film roll racking" aspect="aspect-square" />
            <PlaceholderImage label="Raised platform" aspect="aspect-video" className="col-span-2" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            ['CAD Designed', 'Every installation is planned in CAD first to maximise your available space.'],
            ['Stainless or Mild Steel', 'Material chosen to suit your environment — food-grade stainless or painted mild steel.'],
            ['Minimum Disruption', 'Experienced engineers who work around your production schedule.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-2 h-2 bg-teal-500 rounded-full mx-auto mb-3" />
              <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Need racking designed and installed?</h2>
            <p className="text-slate-300 text-sm">Tell us your storage area dimensions and requirements — we&apos;ll CAD up a layout.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
