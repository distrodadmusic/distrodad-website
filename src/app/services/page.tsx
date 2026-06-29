import Link from "next/link";

const services = [
  {
    title: "Music Distribution",
    href: "/services/distribution",
    desc: "Get your music on Spotify, Apple Music, Amazon Music, YouTube Music, and every major DSP worldwide.",
    detail: "Revenue share pricing. No annual subscription. Artist-friendly terms.",
  },
  {
    title: "Publishing Administration",
    href: "/services/publishing-administration",
    desc: "Through our sister company We Rebel, we register your songs and collect every performance and mechanical royalty you've earned.",
    detail: "Percentage of royalties collected. No upfront cost.",
  },
  {
    title: "Copyright Registration",
    href: "/services/copyright",
    desc: "We help you officially register your works with the U.S. Copyright Office to protect your music and establish legal ownership.",
    detail: "Essential for enforcement. We walk you through the process.",
  },
];

const otherServices = [
  "Royalty Registration (PROs, MLC, publishing metadata)",
  "Metadata Management & Quality Assurance",
  "Artist Catalog Audit (identify missing registrations and unclaimed royalties)",
  "Release Support & Education",
];

const comingSoon = [
  "Mastering referrals",
  "Cover song licensing",
  "Sync licensing",
  "Artist websites",
  "YouTube optimization",
  "Label services",
];

export default function Services() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-[#f5f0e8]/80 text-lg font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl mx-auto">
            Everything an independent artist needs to release music professionally, protect their rights, and collect every dollar they&apos;ve earned.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-8">Primary Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white border border-[#1a2744]/10 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-[#c9a84c]/40">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a2744] mb-3 group-hover:text-[#c9a84c] transition-colors">{s.title}</h3>
                <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-[#3d6b4f] font-[family-name:var(--font-inter)] text-xs font-semibold mb-4">{s.detail}</p>
                <span className="text-[#c9a84c] text-sm font-semibold font-[family-name:var(--font-inter)]">Learn more →</span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-6">Also Included</h2>
              <ul className="space-y-3">
                {otherServices.map((s) => (
                  <li key={s} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm text-[#1a2744]/80">
                    <span className="text-[#3d6b4f] font-bold mt-0.5">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a2744]/5 rounded-xl p-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a2744] mb-4">Coming Soon</h2>
              <ul className="space-y-2">
                {comingSoon.map((s) => (
                  <li key={s} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm text-[#1a2744]/60">
                    <span className="text-[#c9a84c] mt-0.5">◦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#c9a84c]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-4">Not sure where to start?</h2>
          <p className="text-[#1a2744]/80 font-[family-name:var(--font-inter)] mb-8">
            Get a free Artist Audit. We&apos;ll review your existing releases and tell you exactly what&apos;s missing — no obligation.
          </p>
          <Link href="/contact?type=audit" className="bg-[#1a2744] text-[#f5f0e8] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#0f1a30] transition-colors inline-block">
            Get My Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
