import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Andy Pulling Engineering has been designing and manufacturing food processing equipment since 1982. Based in Gosberton, Lincolnshire.',
};

const industries = [
  { name: 'Food Processing', desc: 'Vegetable packing, processing lines, produce handling and more.' },
  { name: 'Horticulture', desc: 'Bulb, flower and plant handling systems for growers and packers.' },
  { name: 'Materials Handling', desc: 'General bulk handling, storage and conveying across multiple sectors.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">About Us</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            Over 40 years of engineering experience, delivering custom equipment to the food and horticultural industries.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Andy Pulling Engineering Ltd has been designing and manufacturing food processing equipment since 1982. What began as a small fabrication business has grown into a trusted name across the food, horticultural and materials handling industries in Lincolnshire and beyond.
              </p>
              <p>
                We manufacture a wide range of conveyors, elevators, tables, washers, bins, tanks and other fabrications — most of which are specially designed and built for our customers&apos; specific requirements. No two projects are identical, and we prefer it that way.
              </p>
              <p>
                Using the latest CAD technology, we can design your individual piece of equipment or a full production area layout. A great many of our fabrications are in food-grade stainless steel, and we ensure that all materials and components used are suitable for the environment in which they will operate.
              </p>
              <p>
                We prefer to work in close collaboration with you as a customer and develop a good working relationship so that we can understand your exact requirements, and design equipment specially for you.
              </p>
            </div>
          </div>
          <PlaceholderImage label="Andy Pulling Engineering workshop" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-gray-900 font-bold text-lg mb-2">{ind.name}</h3>
                <p className="text-gray-500 text-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-8">Our Advantages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ['Rapid Response', 'Fast construction and delivery within short time scales.'],
            ['Excellent Reputation', 'A trusted name within the local food and horticultural industries.'],
            ['7-Day Engineers', 'Our engineers are on call seven days a week for breakdowns and emergencies.'],
            ['Alterations', 'We alter and repair existing machines, whether supplied by us or others.'],
            ['Quality Workmanship', 'We take pride in every piece we produce — quality and reliability are paramount.'],
            ['Competitive Prices', 'Direct manufacture means no middlemen and fair, competitive pricing.'],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex-shrink-0 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">{title}</div>
                <div className="text-gray-500 text-sm mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-600 py-14 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Ready to work together?</h2>
        <p className="text-teal-100 text-sm mb-6">Get in touch to discuss your requirements — we&apos;d love to help.</p>
        <Link href="/contact" className="inline-block bg-white hover:bg-gray-100 text-teal-700 font-bold px-8 py-3 rounded-lg transition-colors text-sm">
          Contact Us
        </Link>
      </section>
    </>
  );
}
