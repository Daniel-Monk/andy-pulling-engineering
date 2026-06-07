import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Andy Pulling Engineering for a quote on conveyors, fabrications or any food processing equipment. Call 01775 841070.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Tell us what you need and we&apos;ll get back to you promptly. Engineers on call 7 days a week.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5" htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Company name (optional)"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5" htmlFor="subject">What do you need?</label>
                <select
                  id="subject"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                >
                  <option value="">Select a category</option>
                  <option>Conveyor / Elevator</option>
                  <option>Tank / Vessel / Bin</option>
                  <option>Washer / Table</option>
                  <option>Platform / Stairs</option>
                  <option>Alteration / Repair</option>
                  <option>Other Fabrication</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="Describe your requirements — dimensions, materials, quantities, any special requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Send Message
              </button>
              <p className="text-gray-600 text-xs text-center">We aim to respond within one working day.</p>
            </form>
          </div>

          {/* Contact details */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-teal-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-1">Address</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    Sweetlands Way, Gosberton<br />
                    Lincolnshire, PE11 4HH
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-teal-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-1">Phone</div>
                  <div className="space-y-1">
                    <a href="tel:01775841070" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">Tel: 01775 841070</a>
                    <a href="tel:01775840167" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">Fax: 01775 840167</a>
                    <a href="tel:07767226410" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">Mobile: 07767 226410</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-teal-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-1">Email</div>
                  <a href="mailto:info@andypullingengineering.co.uk" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                    info@andypullingengineering.co.uk
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-teal-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-1">Availability</div>
                  <div className="text-gray-400 text-sm">Engineers on call 7 days a week</div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <div className="w-full h-48 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-gray-500 text-xs">Map — Gosberton, Lincolnshire PE11 4HH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
