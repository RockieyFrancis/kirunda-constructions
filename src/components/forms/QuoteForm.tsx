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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setForm({
        name: '',
        phone: '',
        email: '',
        location: '',
        service: DEFAULT_SERVICES[0].title,
        details: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
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
        disabled={status === 'sending'}
        className="w-full bg-navy text-white py-3.5 text-sm font-semibold hover:bg-gold hover:text-navy-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Request a Quote'}
      </button>
      {status === 'success' && (
        <p className="text-xs text-green-600 mt-3 text-center">
          ✓ Your quote request has been sent to {CONTACT.email}. We&#39;ll get back to you shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-xs text-red-600 mt-3 text-center">
          Something went wrong. Please try again or email us directly at {CONTACT.email}.
        </p>
      )}
      {status === 'idle' && (
        <p className="text-xs text-steel mt-3 text-center">
          We&#39;ll send your request straight to {CONTACT.email}.
        </p>
      )}
    </form>
  );
}