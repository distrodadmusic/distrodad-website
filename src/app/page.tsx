import Image from "next/image";
import Link from "next/link";

const steps = [
  { num: "01", title: "Tell us about your music.", desc: "Share your release details, goals, and where you are in your journey." },
  { num: "02", title: "We prepare your release.", desc: "We handle metadata, artwork specs, and everything needed for a clean delivery." },
  { num: "03", title: "We distribute your music.", desc: "Your music goes live on Spotify, Apple Music, Amazon, YouTube Music, and more." },
  { num: "04", title: "We register your rights.", desc: "PROs, MLC, publishing metadata — we make sure you're registered everywhere." },
  { num: "05", title: "You get paid.", desc: "Every royalty stream, tracked and collected. Transparent reporting, always." },
];

const whyUs = [
  { icon: "👥", title: "Real Humans", desc: "You talk to people who know your name and your music." },
  { icon: "🎯", title: "Metadata Experts", desc: "Correct metadata means more royalties. We get it right the first time." },
  { icon: "🎵", title: "Artist-First", desc: "We work for you, not the platform. Your rights stay yours." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees, no surprises. Revenue share with no annual subscription." },
  { icon: "🔒", title: "Rights-Focused", desc: "Registration is part of the package, not an afterthought." },
  { icon: "📚", title: "No Gatekeeping", desc: "We explain the business in plain language because you deserve to understand it." },
];

const faqs = [
  {
    q: "What DSPs do you distribute to?",
    a: "We distribute to all major platforms including Spotify, Apple Music, Amazon Music, YouTube Music, Tidal, Deezer, and more.",
  },
  {
    q: "What does publishing administration include?",
    a: "Through our sister company We Rebel, we register your songs with PROs, the MLC, and international collection societies so you collect every performance and mechanical royalty.",
  },
  {
    q: "How does the free Artist Audit work?",
    a: "We review your existing releases to identify missing registrations and unclaimed royalties. You get a full report — then you decide if you want to work with us to fix it. No pressure.",
  },
  {
    q: "Do I keep ownership of my music?",
    a: "Yes, always. You retain 100% ownership of your master recordings and compositions. We never take rights.",
  },
  {
    q: "How long does distribution take?",
    a: "Most stores go live within 3–5 business days after submission. We recommend submitting 2–3 weeks before your target release date.",
  },
  {
    q: "What does it cost?",
    a: "Distribution is revenue-share based (approximately 10%) with no annual subscription fee. Publishing administration is a percentage of royalties collected — no upfront cost.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/hero-banner.png"
          alt="DistroDad workspace with vinyl records, headphones, and notebook"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1a2744]/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <p className="text-[#c9a84c] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest mb-4 font-semibold">
            Built by musicians (and yes, a few dads)
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[#f5f0e8] leading-tight max-w-3xl mb-6">
            Release Music Professionally. Protect Your Rights. Get Paid.
          </h1>
          <p className="text-[#f5f0e8]/85 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-[family-name:var(--font-inter)]">
            DistroDad partners with independent artists to distribute their music, register their rights, and collect every royalty they&apos;ve earned — with real humans who speak plain English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-started"
              className="bg-[#c9a84c] text-[#1a2744] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold text-base hover:bg-[#b8973b] transition-colors text-center"
            >
              Release Your Music
            </Link>
            <Link
              href="/contact?type=audit"
              className="border border-[#f5f0e8] text-[#f5f0e8] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-semibold text-base hover:bg-[#f5f0e8]/10 transition-colors text-center"
            >
              Already Released Music? Free Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="bg-[#1a2744] text-[#f5f0e8] py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Distribution", href: "/services/distribution" },
            { label: "Publishing Administration", href: "/services/publishing-administration" },
            { label: "Copyright", href: "/services/copyright" },
            { label: "Artist Audit", href: "/contact?type=audit" },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="group flex flex-col items-center gap-2 p-4 rounded hover:bg-[#f5f0e8]/5 transition-colors">
              <span className="text-sm font-[family-name:var(--font-inter)] font-semibold group-hover:text-[#c9a84c] transition-colors">{s.label}</span>
              <span className="text-[#c9a84c] text-xs">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why DistroDad */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">Why DistroDad?</h2>
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] max-w-xl mx-auto">
              &ldquo;Music business explained by people you&apos;d actually enjoy having coffee with.&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white border border-[#1a2744]/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1a2744] mb-2">{item.title}</h3>
                <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#1a2744] text-[#f5f0e8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-[#f5f0e8]/70 font-[family-name:var(--font-inter)]">From recording to royalties, we&apos;ve got you covered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c] text-[#1a2744] flex items-center justify-center font-bold font-[family-name:var(--font-inter)] text-sm mb-3 flex-shrink-0">
                  {step.num}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-[#f5f0e8]/65 font-[family-name:var(--font-inter)] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="bg-[#c9a84c] text-[#1a2744] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#b8973b] transition-colors inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">Artist Spotlight</h2>
          <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] mb-10">Recent releases from our artists.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white border border-[#1a2744]/10 rounded-lg p-6 shadow-sm text-left">
                <div className="w-full h-40 bg-[#1a2744]/10 rounded mb-4 flex items-center justify-center text-4xl">🎵</div>
                <p className="font-[family-name:var(--font-playfair)] font-bold text-[#1a2744] mb-1">Artist Name</p>
                <p className="text-sm text-[#1a2744]/60 font-[family-name:var(--font-inter)]">&ldquo;Song Title&rdquo; · Release Year</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#1a2744]/50 font-[family-name:var(--font-inter)]">
            Artist spotlights coming soon.{" "}
            <Link href="/contact" className="text-[#3d6b9e] hover:underline">Want to be featured?</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#1a2744] text-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#f5f0e8]/10 pb-6">
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg mb-2 text-[#c9a84c]">{faq.q}</h3>
                <p className="text-[#f5f0e8]/80 font-[family-name:var(--font-inter)] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#c9a84c]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Ready to release your music the right way?
          </h2>
          <p className="text-[#1a2744]/80 font-[family-name:var(--font-inter)] mb-8">
            No managers. No gatekeepers. Just straightforward music distribution from people who get it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="bg-[#1a2744] text-[#f5f0e8] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#0f1a30] transition-colors">
              Release Your Music
            </Link>
            <Link href="/contact?type=audit" className="border-2 border-[#1a2744] text-[#1a2744] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#1a2744]/10 transition-colors">
              Free Artist Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
