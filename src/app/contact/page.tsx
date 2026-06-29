"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const [type, setType] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const t = searchParams.get("type");
    if (t === "audit") setType("audit");
  }, [searchParams]);

  const subjects = {
    general: "General inquiry",
    audit: "Free Artist Audit request",
    distribution: "Distribution inquiry",
    publishing: "Publishing Administration inquiry",
    copyright: "Copyright inquiry",
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-6">🎵</div>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a2744] mb-4">Got it — thanks!</h2>
        <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] max-w-md mx-auto">
          We&apos;ll be in touch within 1–2 business days. In the meantime, feel free to check out our blog or browse our services.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Name *</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Email *</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">What can we help with?</label>
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]"
        >
          <option value="general">General question</option>
          <option value="audit">Free Artist Audit</option>
          <option value="distribution">Distribution</option>
          <option value="publishing">Publishing Administration</option>
          <option value="copyright">Copyright</option>
        </select>
      </div>

      {type === "audit" && (
        <div className="bg-[#3d6b4f]/10 border border-[#3d6b4f]/20 rounded-lg p-4">
          <p className="text-sm font-[family-name:var(--font-inter)] text-[#1a2744]/80 leading-relaxed">
            <strong className="text-[#3d6b4f]">Free Artist Audit:</strong> Tell us about your existing releases below. We&apos;ll review your catalog for missing registrations and unclaimed royalties and get back to you with a full report. No cost, no obligation.
          </p>
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Message *</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder={
            type === "audit"
              ? "Tell us about your music: artist name, how many releases, which DSPs you're on, and any rights you've registered..."
              : "Tell us about your music and how we can help..."
          }
          className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744] resize-none"
        />
      </div>

      <input type="hidden" name="subject" value={subjects[type as keyof typeof subjects] ?? subjects.general} />

      <button
        type="submit"
        className="w-full bg-[#1a2744] text-[#f5f0e8] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#0f1a30] transition-colors"
      >
        Send Message
      </button>

      <p className="text-xs text-center text-[#1a2744]/50 font-[family-name:var(--font-inter)]">
        Or email us directly:{" "}
        <a href="mailto:distro.dad.music@gmail.com" className="text-[#3d6b9e] hover:underline">distro.dad.music@gmail.com</a>
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-[#f5f0e8]/80 text-lg font-[family-name:var(--font-inter)] leading-relaxed max-w-xl mx-auto">
            Real humans on the other end. We typically respond within 1–2 business days.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <Suspense fallback={<div className="text-center text-[#1a2744]/50">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
