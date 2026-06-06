import type { Metadata } from 'next';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Wrights & Holbeach Asphalt Ltd — family-run flat roofing and mastic asphalt specialists since 1959. Four generations of expertise based in Long Sutton, Lincolnshire.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-stone-400 text-sm font-medium mb-3">About Us</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Four Generations Since 1959</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            We&apos;re a family business and proud of it. The same values that got us started in 1959 are the ones we work by today.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                Wrights & Holbeach Asphalt was established in 1959, based in the market town of Long Sutton in South Lincolnshire. What started as a single-generation family business has grown through four generations into a trusted regional specialist.
              </p>
              <p>
                Over the decades we&apos;ve built a reputation for doing the job properly — no shortcuts, honest advice, and work that lasts. Many of our clients have used us for thirty years or more, and some for even longer than that.
              </p>
              <p>
                We are the only mastic asphalt specialists within a 60-mile radius, a skill we&apos;ve maintained and developed since our earliest years. Alongside mastic asphalt, we carry out the full range of flat roofing work for domestic, commercial and public sector clients across Lincolnshire, Cambridgeshire and Norfolk.
              </p>
            </div>
          </div>
          <PlaceholderImage label="The team / premises" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-10">Who We Work For</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Domestic homeowners',
              'Builders and main contractors',
              'Housing Associations',
              'Local Authorities',
              'Health Authorities & NHS',
              'Schools and Colleges',
              'Drainage Boards',
              'Industrial and commercial clients',
              'Architects and specifiers',
            ].map((client) => (
              <div key={client} className="flex gap-3 items-center bg-white border border-gray-200 rounded-lg px-4 py-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                <span className="text-gray-700 text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-stone-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Want to work with us?</h2>
            <p className="text-stone-300 text-sm">We&apos;re always happy to discuss your requirements — no job too small or too large.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
