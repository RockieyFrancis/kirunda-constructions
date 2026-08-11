'use client';

import { useState } from 'react';
import { CONTACT, DEFAULT_SERVICES } from '@/lib/constants';

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: DEFAULT_SERVICES[0].title,
    details: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Quote Request — ${form.service}`;
    const body =
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Location: ${form.location}\n` +
      `Service Needed: ${form.service}\n\n` +
      `Project Details:\n${form.details}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-9 relative corner-frame">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wide text-steel mb-1.5">Full Name</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-line px-3.5 py-3 text-sm bg-ivory focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
          />
        </div>
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wide text-steel mb-1.5">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+256 7XX XXX XXX"
            className="w-full border border-line px-3.5 py-3 text-sm bg-ivory focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wide text-steel mb-1.5">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@email.com"
            className="w-full border border-line px-3.5 py-3 text-sm bg-ivory focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
          />
        </div>
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wide text-steel mb-1.5">Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Kampala"
            className="w-full border border-line px-3.5 py-3 text-sm bg-ivory focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-mono text-[11px] uppercase tracking-wide text-steel mb-1.5">
          Service Needed
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border border-line px-3.5 py-3 text-sm bg-ivory focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
        >
          {DEFAULT_SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <label className="block font-mono text-[11px] uppercase tracking-wide text-steel mb-1.5">
          Project Details
        </label>
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project — scope, timeline, budget range..."
          className="w-full border border-line px-3.5 py-3 text-sm bg-ivory focus:outline-none focus:ring-2 focus:ring-gold text-charcoal resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-navy text-white py-3.5 text-sm font-semibold hover:bg-gold hover:text-navy-deep transition-colors"
      >
        Request a Quote
      </button>
      <p className="text-xs text-steel mt-3 text-center">
        Opens your email app with this request pre-filled to {CONTACT.email}.
      </p>
    </form>
  );
}
