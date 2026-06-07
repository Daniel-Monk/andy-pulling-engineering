import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

const services = [
  {
    title: 'Belt Conveyors',
    desc: 'Custom-built belt, wire belt and Intralox conveyors for food production lines.',
    href: '/services/conveyors',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Elevators',
    desc: 'Bucket and belt elevators designed for gentle product handling at height.',
    href: '/services/conveyors',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
  },
  {
    title: 'Tanks & Bins',
    desc: 'Food-grade stainless steel tanks, bins, troughs and dip tanks to specification.',
    href: '/services/fabrications',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Washers & Tables',
    desc: 'Produce washers, basket washers and static or rotary grading tables.',
    href: '/services/fabrications',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: 'Platforms & Stairs',
    desc: 'Access platforms, stairs, racking and fire escapes fabricated to order.',
    href: '/services/fabrications',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3m4-5v5m4-8v8" />
      </svg>
    ),
  },
  {
    title: 'CAD Design',
    desc: 'Full CAD design service — individual pieces or complete production area layouts.',
    href: '/about',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
];

const stats = [
  { value: '40+', label: 'Years experience' },
  { value: '7', label: 'Days a week on call' },
  { value: '1982', label: 'Trading since' },
  { value: '100%', label: 'Custom built' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-teal-600 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Specialists to the Food Processing Industry</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Custom Stainless Steel{' '}
              <span className="text-teal-200">Conveyors & Fabrications</span>
            </h1>
            <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Individually designed and constructed equipment for the food, horticultural and materials handling industries.
              Based in Lincolnshire. Engineers on call 7 days a week.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-teal-700 font-bold px-8 py-3 rounded-lg transition-colors text-sm"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/gallery"
                className="border border-white/40 hover:border-white text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-teal-400 mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">What We Build</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            All equipment is purpose-built to your exact requirements in food-grade stainless steel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-white border border-gray-200 hover:border-teal-400 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-teal-600 mb-4">{s.icon}</div>
              <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Recent Work</h2>
              <p className="text-gray-500 text-sm">A sample of our fabrications and installations</p>
            </div>
            <Link href="/gallery" className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <PlaceholderImage label="Stainless conveyor" className="md:col-span-2 md:row-span-2" aspect="aspect-square" />
            <PlaceholderImage label="Belt elevator" />
            <PlaceholderImage label="Product washer" />
            <PlaceholderImage label="Stainless tank" />
            <PlaceholderImage label="Grading table" />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Why Choose Andy Pulling Engineering?
            </h2>
            <ul className="space-y-4">
              {[
                ['Rapid response', "Short lead times and fast turnaround when you need it most."],
                ['Engineers on call 7 days', "We're available whenever your production line needs us."],
                ['Alterations & repairs', 'We work on existing machines, whether supplied by us or others.'],
                ['Food-grade materials', 'All fabrications use materials suitable for food environments.'],
                ['CAD-designed', 'Every piece is designed in CAD before fabrication begins.'],
                ['Competitive pricing', 'Direct from manufacturer — no middlemen.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold text-sm">{title} — </span>
                    <span className="text-gray-500 text-sm">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <PlaceholderImage label="Workshop / team photo" aspect="aspect-[4/3]" />
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            Ready to discuss your requirements?
          </h2>
          <p className="text-teal-100 mb-6 text-sm">
            We work closely with you to understand exactly what you need and design equipment specially for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-teal-700 font-bold px-8 py-3 rounded-lg transition-colors text-sm"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </>
  );
}
