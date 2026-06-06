import type { Metadata } from 'next';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: 'Gallery of flat roofing and mastic asphalt projects completed by Wrights & Holbeach Asphalt across Lincolnshire, Cambridgeshire and Norfolk.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-stone-400 text-sm font-medium mb-3">Our Work</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Project Gallery</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            A selection of completed projects across Lincolnshire, Cambridgeshire and Norfolk — domestic, commercial and public sector.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Commercial flat roof — Spalding',
            'Mastic asphalt balcony — Long Sutton',
            'Industrial roofing — Boston',
            'Domestic flat roof — Holbeach',
            'School roofing project',
            'Housing association scheme',
            'Asphalt tanking — basement project',
            'Damp proof flooring — warehouse',
            'Roof replacement — council building',
            'Extension flat roof — domestic',
            'NHS facility roofing',
            'Multi-unit development',
          ].map((label) => (
            <PlaceholderImage key={label} label={label} aspect="aspect-[4/3]" />
          ))}
        </div>
      </section>
    </>
  );
}
