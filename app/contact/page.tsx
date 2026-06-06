import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Wrights & Holbeach Asphalt for flat roofing and mastic asphalt quotations in Lincolnshire, Cambridgeshire and Norfolk. Call 01406 362585.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-stone-400 text-sm font-medium mb-3">Get in Touch</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            We offer free site visits and written quotations. Get in touch to discuss your project.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h2>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Address</div>
                    <div>Long Sutton, Lincolnshire</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Telephone</div>
                    <a href="tel:01406362585" className="hover:text-amber-600 transition-colors">01406 362585</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a href="mailto:enquiries@whal.co.uk" className="hover:text-amber-600 transition-colors">enquiries@whal.co.uk</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Coverage Area</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We cover Lincolnshire, Cambridgeshire and Norfolk — including Long Sutton, Holbeach, Spalding, Wisbech, Boston, Kings Lynn and Peterborough.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center text-gray-400 text-sm">
              Map placeholder — embed Google Maps here
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
