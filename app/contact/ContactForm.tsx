'use client';

import { useActionState } from 'react';
import { submitContactForm, type FormState } from '@/app/actions/contact';

const initialState: FormState = { status: 'idle', message: '' };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
        <p className="text-gray-500 text-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
      <form action={formAction} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1.5" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5" htmlFor="company">Company / Organisation</label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              placeholder="Company or organisation (optional)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5" htmlFor="subject">Type of work</label>
          <select
            id="subject"
            name="subject"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          >
            <option value="">Select a category</option>
            <option>New flat roof</option>
            <option>Flat roof replacement</option>
            <option>Flat roof repair</option>
            <option>Mastic asphalt roofing</option>
            <option>Mastic asphalt balcony</option>
            <option>Damp proof flooring / tanking</option>
            <option>Commercial / industrial roofing</option>
            <option>General enquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
            placeholder="Describe your project — property type, approximate roof area, current condition, any other details..."
          />
        </div>

        {state.status === 'error' && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-stone-900 font-bold py-3 rounded-lg transition-colors text-sm"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>
        <p className="text-gray-400 text-xs text-center">We aim to respond within one working day.</p>
      </form>
    </div>
  );
}
