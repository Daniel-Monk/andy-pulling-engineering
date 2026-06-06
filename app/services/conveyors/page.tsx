import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Conveyors & Elevators',
  description: 'Custom stainless steel belt conveyors, wire belt conveyors, Intralox conveyors and elevators for the food processing industry. Designed and built in Lincolnshire.',
};

const types = [
  {
    name: 'Belt Conveyors',
    desc: 'Standard and custom-profile belt conveyors in food-grade stainless steel. Straight, incline, and decline configurations available.',
  },
  {
    name: 'Wire Belt Conveyors',
    desc: 'Open-mesh wire belt conveyors ideal for washing, drying, blanching and cooling applications where drainage is required.',
  },
  {
    name: 'Intralox Conveyors',
    desc: 'Modular plastic belt conveyors offering excellent hygiene, easy cleaning and precise product control.',
  },
  {
    name: 'Belt Elevators',
    desc: 'Gentle incline and vertical belt elevators for transferring product between heights without damage.',
  },
  {
    name: 'Bucket Elevators',
    desc: 'High-capacity bucket elevators for bulk product handling in the food and horticultural sectors.',
  },
  {
    name: 'Alterations & Repairs',
    desc: 'We extend, modify and repair existing conveyors — including machines not originally supplied by us.',
  },
];

export default function ConveyorsPage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-teal-400 text-sm font-medium mb-3">Services</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Conveyors & Elevators</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Custom-designed stainless steel conveying solutions for food production, horticulture and materials handling. Every conveyor is built to your specification.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t) => (
            <div key={t.name} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full mb-4" />
              <h2 className="text-white font-bold text-lg mb-2">{t.name}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8">Conveyor Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Belt conveyor', 'Wire belt', 'Intralox', 'Incline conveyor', 'Elevator', 'Control panel'].map((label) => (
              <PlaceholderImage key={label} label={label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Need a conveyor quote?</h2>
            <p className="text-gray-400 text-sm">Tell us your layout, product and throughput requirements and we&apos;ll design a solution.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
