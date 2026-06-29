import Link from "next/link";

export default function Copyright() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#c9a84c] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest mb-3 font-semibold">Services</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">Copyright Registration</h1>
          <p className="text-[#f5f0e8]/80 text-lg font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl">
            Your music is yours. Official registration with the U.S. Copyright Office makes that undeniable in court.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-6">Why Register Your Copyright?</h2>
              <p className="text-[#1a2744]/75 font-[family-name:var(--font-inter)] text-sm leading-relaxed mb-4">
                Your music is automatically copyrighted the moment you create it — but registration with the U.S. Copyright Office gives you legal tools you can actually use.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "Establish a public record of ownership",
                  "Ability to sue for infringement in federal court",
                  "Eligibility for statutory damages (up to $150,000 per infringement)",
                  "Attorney&apos;s fees in infringement cases",
                  "Protection against unauthorized sampling and covers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm text-[#1a2744]/80">
                    <span className="text-[#3d6b4f] font-bold mt-0.5">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a2744] text-[#f5f0e8] rounded-xl p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4 text-[#c9a84c]">What We Help With</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Understanding what to register (sound recording vs. composition)",
                  "Completing the Copyright Office application",
                  "Filing guidance and deposit copy preparation",
                  "Catalog registration for multiple works",
                  "Plain-English explanation of what you own and what you don&apos;t",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm text-[#f5f0e8]/80">
                    <span className="text-[#c9a84c] font-bold mt-0.5">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block bg-[#c9a84c] text-[#1a2744] px-6 py-3 rounded font-[family-name:var(--font-inter)] font-bold text-center hover:bg-[#b8973b] transition-colors">
                Talk to Us
              </Link>
            </div>
          </div>

          <div className="bg-[#b84040]/10 border border-[#b84040]/20 rounded-xl p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a2744] mb-3">Important Note</h2>
            <p className="text-[#1a2744]/75 font-[family-name:var(--font-inter)] text-sm leading-relaxed">
              DistroDad is not a law firm and does not provide legal advice. We help artists understand copyright basics and navigate the registration process — but for specific legal questions or disputes, we&apos;ll always recommend you consult a music attorney.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
