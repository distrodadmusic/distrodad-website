import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Difference Between a Master Recording and a Composition | DistroDad",
  description: "Two types of copyright, two different owners, two different royalty streams. Understanding this distinction is fundamental to your music business.",
};

export default function MasterVsComposition() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#3d6b9e]/20 text-[#7aafd4]">
              Publishing
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">July 18, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            The Difference Between a Master Recording and a Composition
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            Two types of copyright, two different owners, two different royalty streams. This distinction is the
            foundation of the music business — and most independent artists don&apos;t fully understand it until
            money goes missing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none font-[family-name:var(--font-inter)] text-[#1a2744]
            prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-[#1a2744] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:mb-5 prose-p:text-[#1a2744]/85
            prose-strong:text-[#1a2744] prose-strong:font-semibold
            prose-a:text-[#3d6b9e] prose-a:no-underline hover:prose-a:underline">

            <h2>Two Songs in One</h2>
            <p>
              When you listen to a song, you&apos;re experiencing two separate copyrightable works at the same time.
              There&apos;s the <strong>composition</strong> — the underlying melody, lyrics, and chord structure — and
              there&apos;s the <strong>master recording</strong> — the specific recorded version of that composition.
              Both are protected by copyright. Both generate royalties. And they can be owned by completely different
              people.
            </p>
            <p>
              A simple example: when a contemporary artist covers a Beatles song, Paul McCartney (or his publisher)
              still owns the composition copyright and collects royalties from that cover. But the new artist owns the
              master recording of their version.
            </p>

            <br />

            <p>For independent artists who write and record their own music, you typically own both — which is one of the real advantages of being independent.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>The Composition Copyright</h2>
            <p>
              The composition is owned by the songwriter(s). If there are multiple writers, ownership is split
              according to whatever agreement they&apos;ve made — ideally documented in a split sheet before the song
              is released.
            </p>
            <p>
              Composition royalties are collected and distributed in two pieces: the <strong>writer&apos;s share</strong> (goes
              to the songwriter) and the <strong>publisher&apos;s share</strong> (goes to the publisher — which, for
              independent artists, is often themselves if they&apos;ve set up their own publishing entity).
            </p>

            <p><strong>Composition royalties include:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Performance royalties — collected by PROs (ASCAP, BMI, SESAC) when your song is played publicly</p>
              <p className="!mb-1">Mechanical royalties — paid by streaming services and collected by the MLC in the US</p>
              <p className="!mb-1">Sync licensing fees — paid when your song is licensed for use in film, TV, ads, or games</p>
              <p className="!mb-1">Print rights — if your sheet music is sold or published</p>
            </div>

            <br />

            <p>The composition copyright lasts for the life of the author plus 70 years.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>The Master Recording Copyright</h2>
            <p>
              The master recording is the specific fixed recording of a song. Whoever paid to produce and record that
              track owns the master — typically the artist, a label, or whoever funded the session.
            </p>
            <p>
              This is the copyright that has historically been the source of conflict between artists and labels.
              When a label signs an artist and funds the recording, the label often owns the masters. The artist wrote
              the songs (composition) but doesn&apos;t own the recordings (masters). As an independent artist,
              you own your masters by default — and that&apos;s worth protecting.
            </p>

            <p><strong>Master recording royalties include:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Master royalties from streaming — the majority of what streaming services pay out goes here</p>
              <p className="!mb-1">Neighboring rights — performance royalties for the recording itself (separate from the composition) collected internationally</p>
              <p className="!mb-1">Sync master fees — paid in addition to the composition sync fee when your recording is used in media</p>
              <p className="!mb-1">Digital performance royalties via SoundExchange — for non-interactive streaming like Pandora and satellite radio</p>
            </div>

            <br />

            <p>Master rights are typically more immediately valuable for streaming income. Composition rights build long-term value, especially as a catalog grows.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Why This Matters Practically</h2>
            <p>
              Understanding this distinction changes how you think about every part of your music business. A few
              concrete examples:
            </p>
            <p>
              When you distribute your music, your distributor collects master royalties and pays them to you.
              Composition royalties (mechanical and performance) flow through separate systems — your PRO and the MLC
              — and require separate registrations to collect.
            </p>
            <p>
              When a TV show wants to license your song, they need two licenses: a sync license for the composition
              and a master use license for the recording. If you own both, you negotiate both and keep both fees.
            </p>
            <p>
              When someone covers your song, they need a mechanical license for the composition — which means you
              collect royalties even though it&apos;s not your recording. Your master is untouched; the composition
              keeps earning.
            </p>

            <br />

            <p>
              As an independent artist, you are in an unusually strong position: you likely own both. The work is in
              making sure both are properly registered and that royalties from both streams actually reach you.
              That&apos;s exactly what DistroDad&apos;s publishing administration service is designed to handle.
            </p>

          </div>

          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Want to make sure both your masters and compositions are properly protected and registered?{" "}
              <Link href="/get-started" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Talk to DistroDad
              </Link>.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-inter)] font-semibold text-[#1a2744]/50 hover:text-[#1a2744] transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
