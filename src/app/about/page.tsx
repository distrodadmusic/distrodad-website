import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">About DistroDad</h1>
          <p className="text-[#f5f0e8]/80 text-lg font-[family-name:var(--font-inter)] leading-relaxed">
            Built by musicians. For musicians. Because the music business shouldn&apos;t be a mystery.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a2744] mb-6">Our Story</h2>
              <p className="text-[#1a2744]/80 font-[family-name:var(--font-inter)] leading-relaxed mb-4">
                DistroDad was born out of frustration. We watched talented independent artists lose royalties they never knew existed, sign deals they didn&apos;t understand, and navigate a music industry that seemed designed to confuse them.
              </p>
              <p className="text-[#1a2744]/80 font-[family-name:var(--font-inter)] leading-relaxed mb-4">
                So we built something different. A music distribution company run by people who actually make music — who know what it feels like to release a record and wonder if you set everything up correctly.
              </p>
              <p className="text-[#1a2744]/80 font-[family-name:var(--font-inter)] leading-relaxed">
                We&apos;re not a software platform. We&apos;re a team. And we treat every artist like they matter — because they do.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/logo.png" alt="DistroDad" width={280} height={280} className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>

          <div className="bg-[#1a2744] text-[#f5f0e8] rounded-xl p-10 mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6 text-center text-[#c9a84c]">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { title: "Transparency", desc: "We tell you exactly what we charge, what we do, and why. No fine print surprises." },
                { title: "Education", desc: "You should understand your rights, your royalties, and your options. We explain it all." },
                { title: "Artist First", desc: "Every decision we make starts with the question: is this good for the artist?" },
              ].map((v) => (
                <div key={v.title}>
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg mb-2 text-[#c9a84c]">{v.title}</h3>
                  <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a2744] mb-4">Our Sister Company</h2>
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] mb-6 max-w-2xl mx-auto">
              Publishing administration is handled through <strong>We Rebel</strong>, our sister company specializing in publishing administration, PRO registration, and royalty collection. Together, we cover every angle of your music business.
            </p>
            <Image src="/rebel-logo.webp" alt="We Rebel" width={120} height={60} className="mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#c9a84c]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a2744] mb-4">
            The ideal DistroDad client?
          </h2>
          <p className="text-[#1a2744]/80 font-[family-name:var(--font-inter)] text-lg italic mb-8">
            &ldquo;I&apos;m serious about my music, but I don&apos;t have a manager or label.&rdquo;
          </p>
          <Link href="/contact" className="bg-[#1a2744] text-[#f5f0e8] px-8 py-3 rounded font-[family-name:var(--font-inter)] font-bold hover:bg-[#0f1a30] transition-colors inline-block">
            That&apos;s me — let&apos;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
