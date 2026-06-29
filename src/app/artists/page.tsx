import Link from "next/link";

export default function Artists() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">Our Artists</h1>
          <p className="text-[#f5f0e8]/80 text-lg font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl mx-auto">
            Independent artists, singer-songwriters, indie bands, and DIY musicians who are serious about their music.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white border border-[#1a2744]/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full h-48 bg-[#1a2744]/10 flex items-center justify-center text-5xl">🎵</div>
                <div className="p-5">
                  <p className="font-[family-name:var(--font-playfair)] font-bold text-[#1a2744] text-lg mb-1">Artist Name</p>
                  <p className="text-sm text-[#1a2744]/60 font-[family-name:var(--font-inter)] mb-3">Genre · Location</p>
                  <p className="text-sm text-[#1a2744]/70 font-[family-name:var(--font-inter)] leading-relaxed">
                    A short description of this artist and what they do. Coming soon.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#1a2744]/50 font-[family-name:var(--font-inter)] text-sm mb-2">Artist profiles coming soon.</p>
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-sm">
              Are you a DistroDad artist?{" "}
              <Link href="/contact" className="text-[#3d6b9e] hover:underline">Get in touch to be featured.</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#c9a84c]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-4">
            Ready to join the roster?
          </h2>
          <p className="text-[#1a2744]/80 font-[family-name:var(--font-inter)] mb-8">
            We work with independent artists at every stage — from your first single to a full catalog release.
          </p>
          <Link href="/contact" className="bg-[#1a2744] text-[#f5f0e8] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#0f1a30] transition-colors inline-block">
            Work With Us
          </Link>
        </div>
      </section>
    </>
  );
}
