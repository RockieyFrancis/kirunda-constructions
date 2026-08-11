'use client';

import { useState } from 'react';
import { CONTACT } from '@/lib/constants';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-navy-mid p-9 border border-line relative corner-frame">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wide text-steel dark:text-white/50 mb-1.5">
            Full Name
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-line px-3.5 py-3 text-sm bg-ivory dark:bg-navy focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wide text-steel dark:text-white/50 mb-1.5">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+256 7XX XXX XXX"
            className="w-full border border-line px-3.5 py-3 text-sm bg-ivory dark:bg-navy focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-mono text-[11px] uppercase tracking-wide text-steel dark:text-white/50 mb-1.5">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className="w-full border border-line px-3.5 py-3 text-sm bg-ivory dark:bg-navy focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div className="mb-5">
        <label className="block font-mono text-[11px] uppercase tracking-wide text-steel dark:text-white/50 mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="How can we help?"
          className="w-full border border-line px-3.5 py-3 text-sm bg-ivory dark:bg-navy focus:outline-none focus:ring-2 focus:ring-gold resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-navy dark:bg-gold text-white dark:text-navy-deep py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-xs text-green-600 dark:text-green-400 mt-3 text-center">
          ✓ Your message has been sent to {CONTACT.email}. We&#39;ll get back to you shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-xs text-red-600 dark:text-red-400 mt-3 text-center">
          Something went wrong. Please try again or email us directly at {CONTACT.email}.
        </p>
      )}
      {status === 'idle' && (
        <p className="text-xs text-steel dark:text-white/40 mt-3 text-center">
          We&#39;ll send your message straight to {CONTACT.email}.
        </p>
      )}
    </form>
  );
}