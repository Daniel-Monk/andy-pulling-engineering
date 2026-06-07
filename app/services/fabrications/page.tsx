import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Custom Fabrications',
  description: 'Stainless steel tanks, bins, washers, tables, platforms and bespoke fabrications for the food processing industry. Custom-made in Lincolnshire.',
};

const items = [
  { name: 'Tanks & Vessels', desc: 'Stainless steel tanks, pressure vessels and storage bins in any size or configuration.' },
  { name: 'Produce Washers', desc: 'Flume washers, spray washers and immersion tanks for vegetable and produce washing.' },
  { name: 'Basket Washers', desc: 'Crate and basket washing systems designed for high-throughput food production environments.' },
  { name: 'Grading Tables', desc: 'Static and rotary grading tables for sorting and inspection of food products.' },
  { name: 'Platforms & Stairs', desc: 'Access platforms, mezzanines, stairs and fire escapes to BS standards.' },
  { name: 'Racking & Frames', desc: 'Heavy-duty stainless steel racking, frames and support structures.' },
  { name: 'Dip Tanks & Troughs', desc: 'Chemical dip tanks and processing troughs designed to your specification.' },
  { name: 'Bespoke Fabrications', desc: "No matter how unusual the requirement — if it can be fabricated, we'll design and build it." },
];

export default function FabricationsPage() {
  return (
    <>
      <section className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-slate-400 text-sm font-medium mb-3">Services</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Custom Fabrications</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            From tanks and washers to platforms and bespoke one-offs — all fabricated in food-grade stainless steel to your exact requirements.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.name} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-teal-400 hover:shadow-sm transition-all">
              <div className="w-2 h-2 bg-teal-500 rounded-full mb-3" />
              <h2 className="text-gray-900 font-bold text-base mb-2">{item.name}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Fabrication Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Stainless tank', 'Produce washer', 'Grading table', 'Access platform', 'Basket washer', 'Bespoke frame'].map((label) => (
              <PlaceholderImage key={label} label={label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Got a fabrication requirement?</h2>
            <p className="text-slate-300 text-sm">Large or small — give Andy a call to discuss what you need.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-white hover:bg-gray-100 text-teal-700 font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
