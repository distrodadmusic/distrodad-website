import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a PRO and Why Does Every Songwriter Need One? | DistroDad",
  description: "If you've written a song and you're not registered with a Performing Rights Organization, you're leaving money on the table. Here's what you need to know.",
};

export default function WhatIsAPro() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#3d6b4f]/20 text-[#5a9e7a]">
              Royalties
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">July 14, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            What Is a PRO and Why Does Every Songwriter Need One?
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            If you&apos;ve written a song and you&apos;re not registered with a Performing Rights Organization,
            you&apos;re leaving money on the table. Here&apos;s the plain-English version of what PROs do and how to
            get set up.
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

            <h2>What a PRO Actually Does</h2>
            <p>
              A Performing Rights Organization collects royalties on your behalf any time your music is
              publicly performed. &ldquo;Performed&rdquo; in this context is broader than you might think — it
              includes radio airplay, live performances at venues, background music in restaurants and retail stores,
              music in TV shows and films, and streaming (the performance royalty portion, specifically).
            </p>
            <p>
              When a business plays your music, they pay a blanket license fee to PROs like ASCAP or BMI. The PRO then
              distributes those collected fees to songwriters and publishers based on tracked usage. Without a PRO
              registration, that money has nowhere to go — it doesn&apos;t disappear, but it sits uncollected and
              eventually gets redistributed to other writers.
            </p>

            <br />

            <p>Bottom line: PROs collect money that is legally yours. Registration is free. Not registering means leaving that money behind.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>ASCAP, BMI, SESAC, and GMR — What&apos;s the Difference?</h2>
            <p>There are four main PROs in the United States. You can only belong to one as a writer.</p>

            <p><strong>ASCAP (American Society of Composers, Authors and Publishers):</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Member-owned, non-profit structure</p>
              <p className="!mb-1">Free to join as a writer; $50 one-time fee to register a publishing entity</p>
              <p className="!mb-1">Strong in pop, country, and film/TV</p>
              <p className="!mb-1">ascap.com</p>
            </div>

            <p><strong>BMI (Broadcast Music, Inc.):</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Free to join as a writer and as a publisher</p>
              <p className="!mb-1">Historically strong in country, R&B, hip-hop, and rock</p>
              <p className="!mb-1">bmi.com</p>
            </div>

            <p><strong>SESAC:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Invitation-only — you must be referred or apply and be accepted</p>
              <p className="!mb-1">Smaller roster but known for faster and more transparent payments</p>
              <p className="!mb-1">sesac.com</p>
            </div>

            <p><strong>GMR (Global Music Rights):</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Invitation-only, boutique roster of high-profile songwriters</p>
              <p className="!mb-1">Not relevant for most independent artists at this stage</p>
            </div>

            <br />

            <p>For most independent artists starting out, the choice is between ASCAP and BMI. Both are reputable and collect from the same licensees. Pick one, join, and move on — the difference in payouts at an independent level is negligible.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>What Is an IPI Number?</h2>
            <p>
              When you register with a PRO as a writer, you&apos;re assigned an IPI (Interested Parties Information)
              number. This is a unique identifier — think of it as your social security number for the music industry.
              It&apos;s what links you, as a writer, to your registered songs across all global royalty collection
              systems.
            </p>
            <p>
              If you register a publishing entity (your own publishing company), that entity gets its own separate IPI
              number. Both the writer IPI and the publisher IPI matter when registering your works — more on that
              below.
            </p>

            <br />

            <p>Keep your IPI number somewhere you can easily find it. You&apos;ll use it repeatedly.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>How to Register Your Songs</h2>
            <p>
              Joining a PRO is step one. Step two — which many writers miss — is actually registering each individual
              song in the PRO&apos;s database. Just being a member doesn&apos;t automatically connect your name to
              your music.
            </p>

            <p><strong>For each song, you&apos;ll need:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Song title</p>
              <p className="!mb-1">All writer names and their IPI numbers</p>
              <p className="!mb-1">Writer splits (percentages that add up to 100%)</p>
              <p className="!mb-1">Publisher name and IPI (if applicable)</p>
              <p className="!mb-1">ISRC code (assigned by your distributor)</p>
            </div>

            <p>
              Register your songs before the release date. PROs track usage from the point of registration, and
              retro-collecting missed royalties from before you registered is much harder — sometimes impossible for
              certain licensing categories.
            </p>

            <br />

            <p>
              DistroDad&apos;s publishing administration service handles PRO registration as part of our publishing
              admin offering. If you&apos;re managing it yourself, set a calendar reminder to register each new
              release at least two weeks before it goes live.
            </p>

          </div>

          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Not sure if your songs are registered correctly?{" "}
              <Link href="/contact?type=audit" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Request a free catalog audit
              </Link>{" "}
              and we&apos;ll check for you.
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
