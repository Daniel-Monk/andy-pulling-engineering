import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: 'Photos of our custom stainless steel conveyors, fabrications and food processing equipment installations.',
};

const categories = ['All', 'Conveyors', 'Elevators', 'Tanks & Vessels', 'Washers', 'Platforms', 'Other'];

const placeholders = [
  'Belt conveyor installation',
  'Stainless steel tank',
  'Produce washer',
  'Bucket elevator',
  'Grading table',
  'Access platform',
  'Wire belt conveyor',
  'Dip tank',
  'Basket washer',
  'Incline conveyor',
  'Mezzanine platform',
  'Bespoke fabrication',
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Project Gallery</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A selection of conveyors, fabrications and installations we&apos;ve designed and built for clients across the food and horticultural industries.
          </p>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? 'bg-teal-500 text-gray-900'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholders.map((label) => (
            <PlaceholderImage key={label} label={label} aspect="aspect-square" />
          ))}
        </div>
        <p className="text-center text-gray-600 text-sm mt-10">
          More photos coming soon — check back or <Link href="/contact" className="text-teal-400 hover:text-teal-300">get in touch</Link> to discuss your project.
        </p>
      </section>
    </>
  );
}
