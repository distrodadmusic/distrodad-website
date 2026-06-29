import Link from "next/link";

const dsps = ["Spotify", "Apple Music", "Amazon Music", "YouTube Music", "Tidal", "Deezer", "Pandora", "iHeart Radio", "and more"];

export default function Distribution() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#c9a84c] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest mb-3 font-semibold">Services</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">Music Distribution</h1>
          <p className="text-[#f5f0e8]/80 text-lg font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl">
            Get your music on every major platform worldwide — with correct metadata, professional delivery, and a team that actually checks the work.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-6">What&apos;s Included</h2>
              <ul className="space-y-4">
                {[
                  "Distribution to all major DSPs",
                  "Metadata review and quality assurance",
                  "Artwork specs check",
                  "Release scheduling",
                  "ISRC code assignment",
                  "Royalty collection and reporting",
                  "Ongoing catalog management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm text-[#1a2744]/80">
                    <span className="text-[#3d6b4f] font-bold text-base mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a2744] text-[#f5f0e8] rounded-xl p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6 text-[#c9a84c]">Pricing</h2>
              <div className="mb-6">
                <p className="font-[family-name:var(--font-inter)] text-3xl font-bold mb-1">~10%</p>
                <p className="text-[#f5f0e8]/70 font-[family-name:var(--font-inter)] text-sm">revenue share on collected royalties</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "No annual subscription fee",
                  "No upfront cost per release",
                  "Artist-friendly terms",
                  "Transparent reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm text-[#f5f0e8]/80">
                    <span className="text-[#c9a84c] font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/get-started" className="block bg-[#c9a84c] text-[#1a2744] px-6 py-3 rounded font-[family-name:var(--font-inter)] font-bold text-center hover:bg-[#b8973b] transition-colors">
                Get Started
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-6">Where We Distribute</h2>
            <div className="flex flex-wrap gap-3">
              {dsps.map((dsp) => (
                <span key={dsp} className="bg-[#1a2744] text-[#f5f0e8] px-4 py-2 rounded-full font-[family-name:var(--font-inter)] text-sm font-medium">
                  {dsp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a2744] text-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">Why metadata matters</h2>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] leading-relaxed mb-6">
            Bad metadata means lost royalties. Misspelled names, missing ISRCs, wrong publisher info — these are small errors with big financial consequences. We catch them before your music goes live.
          </p>
          <Link href="/contact" className="bg-[#c9a84c] text-[#1a2744] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#b8973b] transition-colors inline-block">
            Release Your Music Right
          </Link>
        </div>
      </section>
    </>
  );
}
