import Link from "next/link";
import Image from "next/image";

export default function PublishingAdministration() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#c9a84c] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest mb-3 font-semibold">Services</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">Publishing Administration</h1>
          <p className="text-[#f5f0e8]/80 text-lg font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl">
            You wrote the songs. Make sure you&apos;re collecting every royalty they generate — performances, streams, downloads, and more.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-6">What We Do</h2>
              <p className="text-[#1a2744]/75 font-[family-name:var(--font-inter)] text-sm leading-relaxed mb-6">
                Through our sister company <strong>We Rebel</strong>, we handle publishing administration — registering your songs with the right organizations so you collect performance royalties, mechanical royalties, and more.
              </p>
              <ul className="space-y-4">
                {[
                  "PRO registration (ASCAP, BMI, SESAC)",
                  "MLC (Mechanical Licensing Collective) registration",
                  "International collection society registration",
                  "Publishing metadata setup and management",
                  "Royalty tracking and reporting",
                  "Catalog audits for existing releases",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm text-[#1a2744]/80">
                    <span className="text-[#3d6b4f] font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a2744] text-[#f5f0e8] rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/rebel-logo.webp" alt="We Rebel" width={60} height={30} />
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#f5f0e8]/60 uppercase tracking-wider">In partnership with</p>
                  <p className="font-[family-name:var(--font-playfair)] font-bold text-lg">We Rebel</p>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-4 text-[#c9a84c]">Pricing</h3>
              <p className="text-[#f5f0e8]/80 font-[family-name:var(--font-inter)] text-sm leading-relaxed mb-6">
                A percentage of royalties collected — no upfront cost, no subscription fee. We only get paid when you get paid.
              </p>
              <Link href="/contact" className="block bg-[#c9a84c] text-[#1a2744] px-6 py-3 rounded font-[family-name:var(--font-inter)] font-bold text-center hover:bg-[#b8973b] transition-colors">
                Get Started
              </Link>
            </div>
          </div>

          <div className="bg-[#3d6b4f]/10 border border-[#3d6b4f]/20 rounded-xl p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-4">Are you leaving money on the table?</h2>
            <p className="text-[#1a2744]/75 font-[family-name:var(--font-inter)] text-sm leading-relaxed mb-6">
              Most independent artists are. If you haven&apos;t registered with a PRO or the MLC, you&apos;re missing royalties right now. Some of them have expiration dates. A free Artist Audit is the fastest way to find out what you&apos;re owed.
            </p>
            <Link href="/contact?type=audit" className="bg-[#1a2744] text-[#f5f0e8] px-6 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#0f1a30] transition-colors inline-block">
              Get My Free Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
