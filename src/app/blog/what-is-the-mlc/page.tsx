import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is the MLC and How Do I Register? | DistroDad",
  description: "The Mechanical Licensing Collective collects mechanical royalties from streaming. If you haven't registered, those royalties are sitting unclaimed.",
};

export default function WhatIsTheMlc() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#c9a84c]/20 text-[#c9a84c]">
              Distribution
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">July 21, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            What Is the MLC and How Do I Register?
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            The Mechanical Licensing Collective collects mechanical royalties from every stream on Spotify, Apple
            Music, and every other major DSP. If you haven&apos;t registered, that money is sitting in a pool
            waiting to be claimed — or quietly redistributed to other writers.
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

            <h2>What Are Mechanical Royalties?</h2>
            <p>
              Every time someone streams your song, two separate royalty payments are generated. The first goes to
              whoever owns the master recording — your distributor handles that one. The second is a
              <strong> mechanical royalty</strong>, which is owed to the songwriter for the reproduction of the
              underlying composition.
            </p>
            <p>
              Mechanical royalties predate streaming — they originally applied to physical reproductions like vinyl
              pressings and CDs. In the streaming era, they apply to interactive streams (where the listener chooses
              what to play) on services like Spotify and Apple Music. Every stream generates a tiny mechanical
              royalty. Across millions of streams, it adds up.
            </p>

            <br />

            <p>Your PRO does not collect mechanical royalties. That&apos;s a separate system entirely — and that system is the MLC.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>What the MLC Does</h2>
            <p>
              The Mechanical Licensing Collective was established by the Music Modernization Act of 2018 and became
              operational in 2021. It&apos;s the designated organization responsible for collecting mechanical
              royalties from digital service providers in the United States and distributing them to the correct
              songwriters and publishers.
            </p>
            <p>
              Before the MLC existed, streaming services often couldn&apos;t match songs to their correct owners,
              so mechanical royalties sat in a pool called &ldquo;black box&rdquo; money — unclaimed and eventually
              distributed to whoever had the best matching infrastructure. Independent artists almost never saw it.
              The MLC was built to fix that.
            </p>

            <br />

            <p>The MLC is free to register with. There is no fee to join and no percentage taken from your royalties.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>How to Register</h2>
            <p>Registration is done directly at themlc.com. The process is straightforward but requires accurate information — errors in song registration can cause matching failures that delay or prevent payment.</p>

            <p><strong>Step 1 — Create an account:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Go to themlc.com and click &ldquo;Register.&rdquo;</p>
              <p className="!mb-1">You can register as a songwriter/individual or as a publisher entity.</p>
              <p className="!mb-1">If you act as your own publisher, create both accounts — they are separate.</p>
            </div>

            <p><strong>Step 2 — Register your works:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">For each song, submit: title, all writers and their IPI numbers, writer splits, publisher info, and your ISRC code.</p>
              <p className="!mb-1">The ISRC is critical — it&apos;s the code that links your registration to actual streaming activity. Your distributor assigns ISRCs when you submit a release.</p>
              <p className="!mb-1">If a song has multiple versions (clean, explicit, remix), register each version with its own ISRC.</p>
            </div>

            <p><strong>Step 3 — Keep it updated:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Register new releases before they go live.</p>
              <p className="!mb-1">If you change publishers or update splits, update your MLC registrations.</p>
              <p className="!mb-1">Check your MLC account periodically — unmatched royalties appear there for you to claim.</p>
            </div>

            <br />

            <p>The MLC pays out quarterly. Royalties from a given quarter typically arrive 6–8 months later, so don&apos;t expect immediate income — but do expect it to accumulate over time.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>What About International Mechanical Royalties?</h2>
            <p>
              The MLC only covers the United States. International mechanical royalties are collected by mechanical
              rights organizations in each country — MCPS in the UK, GEMA in Germany, SOCAN in Canada, and so on.
              These organizations are generally connected through reciprocal agreements, but registration with your
              US PRO or publishing administrator can help ensure international royalties find their way back to you.
            </p>

            <br />

            <p>
              This is one of the areas where having a publishing administrator pays for itself. Tracking down
              international mechanical collection societies and ensuring your works are properly registered in each
              territory is time-consuming for an individual artist — it&apos;s the kind of ongoing work that
              DistroDad&apos;s publishing administration service handles on your behalf.
            </p>

          </div>

          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Want help making sure your songs are registered with the MLC and collecting everything they&apos;re owed?{" "}
              <Link href="/get-started" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Let&apos;s talk
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
